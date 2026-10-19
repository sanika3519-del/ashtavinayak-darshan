/* =========================================================
   trip-planner.js - Interactive trip planner.
   All choices live in `state` (saved in localStorage) and the
   generated plan is rebuilt from a saved snapshot, so changing
   language never loses the visitor's selections or itinerary.
   ========================================================= */

(function () {
  "use strict";
  const t = (k, v) => App.t(k, v);
  const esc = App.esc;
  const $ = s => document.querySelector(s);

  const KEY = "av_planner", CHECK_KEY = "av_checklist";
  const PACE_CAP = { relaxed: 240, balanced: 360, fast: 480 };   // driving minutes per day
  const DAY_END = 19 * 60;        // aim to finish sightseeing by 19:00
  const LATE_RETURN = 21 * 60;    // latest comfortable arrival for the final drive home
  const DEFAULTS = { start: "pune", days: 3, mode: "car", pace: "balanced", travellers: 2, startTime: "07:00", nearby: true, selected: [], plan: null };

  let state = Object.assign({}, DEFAULTS, App.store.getJSON(KEY, {}) || {});
  if (!Array.isArray(state.selected)) state.selected = [];
  let lastError = null;   // { key, vars } so the message follows language changes

  const save = () => App.store.setJSON(KEY, state);
  const toMin = hhmm => { const [h, m] = String(hhmm || "07:00").split(":").map(Number); return (h || 0) * 60 + (m || 0); };

  /* ---------------- itinerary builder (pure: returns data, no text) ---------------- */
  function buildPlan(input) {
    const start = Routes.city(input.start);
    const mode = input.mode;
    const cap = PACE_CAP[input.pace] || PACE_CAP.balanced;
    const startMin = toMin(input.startTime);

    const temples = TEMPLES.filter(x => input.selected.includes(x.id)).sort((a, b) => a.order - b.order);
    // Temples keep the traditional yatra order. Nearby attractions are then slotted into the
    // position that adds the least extra driving (cheapest insertion), so the route does not zig-zag.
    const stops = temples.map(tp => ({ type: "temple", ref: tp, lat: tp.lat, lng: tp.lng, visit: tp.visitMin }));
    if (input.nearby) {
      const extras = [];
      temples.forEach(tp => ATTRACTIONS.forEach(a => {
        if ((a.near || []).includes(tp.id) && !extras.includes(a)) extras.push(a);
      }));
      extras.forEach(a => {
        const s = { type: "attraction", ref: a, lat: a.lat, lng: a.lng, visit: Math.min(a.visitMin, 120) };
        const path = [start].concat(stops, [start]);
        let best = 1, bestCost = Infinity;
        for (let i = 1; i < path.length; i++) {
          const c = App.roadKm(path[i - 1], s) + App.roadKm(s, path[i]) - App.roadKm(path[i - 1], path[i]);
          if (c < bestCost) { bestCost = c; best = i; }
        }
        stops.splice(best - 1, 0, s);
      });
    }

    const days = [];
    let day, cursor, pos, lunch;
    const newDay = () => { day = { items: [], drive: 0, km: 0, count: 0 }; days.push(day); cursor = startMin; lunch = false; };
    newDay(); pos = start;
    let totalKm = 0, totalDrive = 0;

    const drive = (to, isReturn) => {
      const km = App.roadKm(pos, to), min = App.driveMin(km, mode);
      day.items.push({ kind: "drive", from: pos, to, km, min, time: cursor, isReturn: !!isReturn });
      cursor += min; day.drive += min; day.km += km; totalKm += km; totalDrive += min;
      pos = to;
    };

    stops.forEach((s, idx) => {
      const km = App.roadKm(pos, s), mn = App.driveMin(km, mode);
      const isLast = idx === stops.length - 1;
      let end = cursor + mn + s.visit;
      if (isLast) end += App.driveMin(App.roadKm(s, start), mode);
      const tooMuchDriving = day.drive + mn > cap;
      const tooLate = isLast ? end > LATE_RETURN : cursor + mn + s.visit > DAY_END;
      if (day.count > 0 && (tooMuchDriving || tooLate)) {
        day.items.push({ kind: "overnight", at: pos });
        newDay();
      }
      if (!lunch && cursor >= 12 * 60 + 30 && day.count > 0) {
        day.items.push({ kind: "lunch", time: cursor, min: 45 }); cursor += 45; lunch = true;
      }
      drive(s);
      day.items.push({ kind: s.type === "temple" ? "darshan" : "visit", ref: s.ref, time: cursor, min: s.visit, point: s });
      cursor += s.visit; day.count++;
    });
    drive(start, true);

    return { start, mode, days, stops, totalKm, totalDrive, travellers: input.travellers,
      cost: App.costFor(totalKm, mode, input.travellers), requestedDays: input.days };
  }

  /* ---------------- rendering ---------------- */
  function itemHtml(it, mode) {
    switch (it.kind) {
      case "drive":
        return '<li class="drive"><span class="time">' + App.fmtClock(it.time) + "</span>" +
          esc(t("driveFrom", { a: pointName(it.from), b: pointName(it.to) })) +
          " · " + esc(t("approx")) + " " + esc(App.fmtKm(it.km)) + " · " + esc(App.fmtDur(it.min)) + "</li>";
      case "darshan": case "visit": {
        const name = App.L(it.ref.name);
        const label = it.kind === "darshan" ? t("darshanAt", { name }) : t("visitAt", { name });
        return '<li><span class="time">' + App.fmtClock(it.time) + "</span><strong>" + esc(label) + "</strong> · " + esc(App.fmtDur(it.min)) +
          '<div class="card-actions no-print"><a class="btn btn-outline btn-small" target="_blank" rel="noopener" href="' + esc(App.mapsUrl(it.ref)) + '">' + esc(t("getDirections")) + "</a></div></li>";
      }
      case "lunch":
        return '<li class="drive"><span class="time">' + App.fmtClock(it.time) + "</span>" + esc(t("lunchBreak")) + " · " + esc(App.fmtDur(it.min)) + "</li>";
      case "overnight":
        return "<li><strong>" + esc(t("overnightNear", { place: pointName(it.at) })) + "</strong></li>";
      default: return "";
    }
  }
  function pointName(p) {
    if (p.ref) return App.L(p.ref.village || p.ref.name);
    return p.key ? t(p.key) : "";
  }

  function renderItinerary(plan) {
    const n = plan.days.length;
    const costTxt = App.fmtMoney(plan.cost.total) + " (" + App.fmtMoney(plan.cost.perPerson) + " " + t("perPerson") + ")";
    const waypoints = plan.stops.map(s => ({ lat: s.lat, lng: s.lng }));
    let html =
      '<div class="no-print" style="display:flex;gap:.6rem;flex-wrap:wrap;margin:.5rem 0">' +
      '<button type="button" class="btn" id="printBtn">' + esc(t("printItinerary")) + "</button>" +
      '<a class="btn btn-outline" target="_blank" rel="noopener" href="' + esc(App.mapsUrl(plan.start, { origin: plan.start, waypoints })) + '">' + esc(t("directionsFullRoute")) + "</a></div>" +
      "<h2>" + esc(t("planSummary")) + "</h2>" +
      '<div class="stats">' +
      '<div class="stat"><span>' + esc(t("suggestedDays")) + "</span><b>" + esc(t(n === 1 ? "dayValue" : "daysValue", { n })) + "</b></div>" +
      '<div class="stat"><span>' + esc(t("totalDistance")) + "</span><b>" + esc(t("approx")) + " " + esc(App.fmtKm(plan.totalKm)) + "</b></div>" +
      '<div class="stat"><span>' + esc(t("totalDriving")) + "</span><b>" + esc(App.fmtDur(plan.totalDrive)) + "</b></div>" +
      '<div class="stat"><span>' + esc(t("estimatedCost")) + "</span><b>" + esc(t("approx")) + " " + esc(costTxt) + "</b></div></div>" +
      '<p class="card-meta">' + esc(t("costNote")) + "</p>";
    if (n < plan.requestedDays) html += '<p class="msg msg-ok">' + esc(t("planFits", { n })) + "</p>";
    if (plan.mode === "bus") html += '<p class="msg msg-error">' + esc(t("busNote")) + "</p>";
    plan.days.forEach((d, i) => {
      html += '<section class="day-block"><h3>' + esc(t("dayHeading", { n: i + 1 })) + "</h3>" +
        '<ol class="timeline" style="list-style:none">' + d.items.map(it => itemHtml(it, plan.mode)).join("") + "</ol></section>";
    });
    $("#itinerary").innerHTML = '<h2 id="itineraryTitle" tabindex="-1">' + esc(t("itineraryTitle")) + "</h2>" + html;
    $("#itinerary").hidden = false;
  }

  function showError() {
    const box = $("#plannerError");
    if (!lastError) { box.hidden = true; box.textContent = ""; return; }
    box.hidden = false; box.textContent = t(lastError.key, lastError.vars);
  }

  /* ---------------- form <-> state ---------------- */
  function readForm() {
    state.start = $("#pStart").value;
    state.days = parseInt($("#pDays").value, 10) || 1;
    state.mode = $("#pMode").value;
    state.pace = $("#pPace").value;
    state.travellers = Math.min(20, Math.max(1, parseInt($("#pTravellers").value, 10) || 1));
    state.startTime = $("#pStartTime").value || "07:00";
    state.nearby = $("#pNearby").checked;
    state.selected = Array.from(document.querySelectorAll("#templePick input:checked")).map(i => i.value);
    save();
  }

  function fillSelect(el, options, value) {
    el.innerHTML = options.map(o => '<option value="' + esc(o[0]) + '">' + esc(o[1]) + "</option>").join("");
    el.value = String(value);
  }

  function renderForm() {
    fillSelect($("#pStart"), Routes.CITIES.map(c => [c.id, t(c.key)]), state.start);
    fillSelect($("#pDays"), [1, 2, 3, 4, 5].map(n => [n, t(n === 1 ? "dayOption" : "daysOption", { n })]), state.days);
    fillSelect($("#pMode"), [["car", t("modeCar")], ["taxi", t("modeTaxi")], ["bus", t("modeBus")]], state.mode);
    fillSelect($("#pPace"), [["relaxed", t("paceRelaxed")], ["balanced", t("paceBalanced")], ["fast", t("paceFast")]], state.pace);
    $("#pTravellers").value = state.travellers;
    $("#pStartTime").value = state.startTime;
    $("#pNearby").checked = state.nearby;
    $("#templePick").innerHTML = TEMPLES.map(tp =>
      '<label class="check"><input type="checkbox" name="temple" value="' + tp.id + '"' + (state.selected.includes(tp.id) ? " checked" : "") + ">" +
      "<span>" + esc(tp.order + ". " + App.L(tp.name)) + '<br><small class="muted">' + esc(App.L(tp.village)) + " · " + esc(App.fmtDur(tp.visitMin)) + "</small></span></label>").join("");
    updateCount();
  }

  function updateCount() {
    $("#pCount").textContent = t("selectedCount", { n: state.selected.length });
  }

  function renderChecklist() {
    const done = App.store.getJSON(CHECK_KEY, []);
    $("#checklist").innerHTML = [1, 2, 3, 4, 5, 6, 7, 8].map(i =>
      '<label class="check"><input type="checkbox" data-check="' + i + '"' + (done.includes(i) ? " checked" : "") + "><span>" + esc(t("check" + i)) + "</span></label>").join("");
  }

  function generate(userAction) {
    try {
      readForm();
      lastError = null;
      if (!state.selected.length) { lastError = { key: "errNoTemples" }; state.plan = null; $("#itinerary").hidden = true; showError(); return; }
      const input = JSON.parse(JSON.stringify(state)); delete input.plan;
      const plan = buildPlan(input);
      if (plan.days.length > input.days) {
        lastError = { key: "errNeedMoreDays", vars: { n: plan.days.length } };
        state.plan = null; $("#itinerary").hidden = true; showError(); save(); return;
      }
      state.plan = input; save();
      showError(); renderItinerary(plan);
      if (userAction) {
        $("#plannerStatus").textContent = t("planReady");
        const h = $("#itineraryTitle"); if (h) { h.scrollIntoView({ behavior: "smooth", block: "start" }); h.focus({ preventScroll: true }); }
      }
    } catch (e) {
      console.error(e);
      lastError = { key: "errGeneric" }; showError();
    }
  }

  App.register("planner", {
    init() {
      const form = $("#plannerForm");
      form.addEventListener("submit", e => { e.preventDefault(); generate(true); });
      form.addEventListener("change", e => { if (e.target.closest("#checklist")) return; readForm(); updateCount(); });
      $("#pTravellers").addEventListener("input", () => { readForm(); });
      $("#pAll").addEventListener("click", () => { document.querySelectorAll("#templePick input").forEach(i => { i.checked = true; }); readForm(); updateCount(); });
      $("#pClear").addEventListener("click", () => { document.querySelectorAll("#templePick input").forEach(i => { i.checked = false; }); readForm(); updateCount(); });
      $("#pReset").addEventListener("click", () => {
        state = Object.assign({}, DEFAULTS, { selected: [] }); save(); lastError = null;
        renderForm(); showError(); $("#itinerary").hidden = true; $("#itinerary").innerHTML = "";
        $("#plannerStatus").textContent = t("planReset");
      });
      $("#itinerary").addEventListener("click", e => { if (e.target.closest("#printBtn")) window.print(); });
      $("#checklist").addEventListener("change", e => {
        const done = Array.from(document.querySelectorAll("#checklist input:checked")).map(i => parseInt(i.dataset.check, 10));
        App.store.setJSON(CHECK_KEY, done);
      });
    },
    render() {
      renderForm();
      renderChecklist();
      $("#plannerStatus").textContent = "";
      showError();
      if (state.plan && state.plan.selected && state.plan.selected.length) {
        try { renderItinerary(buildPlan(state.plan)); } catch (e) { console.error(e); lastError = { key: "errGeneric" }; showError(); }
      } else { $("#itinerary").hidden = true; }
    }
  });
})();
