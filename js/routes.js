/* =========================================================
   routes.js - Route data, shared route maths (also used by the
   trip planner) and the Darshan Routes page controller.
   Distances are straight-line x 1.35 road factor, so they are
   estimates; the UI says so.
   ========================================================= */

const Routes = (function () {
  "use strict";

  const CITIES = [
    { id: "pune", key: "cityPune", lat: 18.5204, lng: 73.8567 },
    { id: "mumbai", key: "cityMumbai", lat: 19.076, lng: 72.8777 },
    { id: "ahilyanagar", key: "cityAhilyanagar", lat: 19.0952, lng: 74.7496 },
    { id: "nashik", key: "cityNashik", lat: 19.9975, lng: 73.7898 }
  ];

  const ROUTES = [
    { id: "traditional", key: "routeTraditional", desc: "routeTraditionalDesc", ids: ["morgaon", "siddhatek", "pali", "mahad", "theur", "lenyadri", "ozar", "ranjangaon"], returnToMorgaon: true },
    { id: "pune", key: "routePune", desc: "routePuneDesc", ids: ["theur", "ranjangaon", "morgaon"] },
    { id: "junnar", key: "routeJunnar", desc: "routeJunnarDesc", ids: ["ozar", "lenyadri"] },
    { id: "raigad", key: "routeRaigad", desc: "routeRaigadDesc", ids: ["pali", "mahad"] }
  ];

  const city = id => CITIES.find(c => c.id === id) || CITIES[0];
  const label = p => (p.key ? App.t(p.key) : App.L(p.name));

  /* Build legs for: start -> stops... -> (optional extra stops) -> start */
  function compute(start, stops, mode, travellers) {
    const pts = [start].concat(stops).concat([start]);
    const legs = [];
    let totalKm = 0, totalMin = 0, visitMin = 0;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], b = pts[i];
      const km = App.roadKm(a, b), min = App.driveMin(km, mode);
      legs.push({ from: a, to: b, km, min, isReturn: i === pts.length - 1 });
      totalKm += km; totalMin += min;
    }
    stops.forEach(s => { visitMin += s.visitMin || 0; });
    const cost = App.costFor(totalKm, mode, travellers);
    return { pts, legs, totalKm, totalMin, visitMin, cost };
  }

  function stopsFor(route) {
    const list = route.ids.map(id => TEMPLES.find(t => t.id === id));
    if (route.returnToMorgaon) list.push(Object.assign({}, TEMPLES.find(t => t.id === "morgaon"), { _repeat: true, visitMin: 0 }));
    return list;
  }

  /* ---------- Darshan Routes page ---------- */
  const sel = { start: "pune", route: "traditional", mode: "car" };
  const KEY = "av_routes";
  const saved = App.store.getJSON(KEY, null);
  if (saved && typeof saved === "object") Object.assign(sel, saved);

  const $ = s => document.querySelector(s);

  function fillSelect(el, options, value) {
    el.innerHTML = options.map(o => '<option value="' + App.esc(o[0]) + '">' + App.esc(o[1]) + "</option>").join("");
    el.value = value;
  }

  function renderResult() {
    const route = ROUTES.find(r => r.id === sel.route) || ROUTES[0];
    const start = city(sel.start);
    const stops = stopsFor(route);
    const r = compute(start, stops, sel.mode, 1);
    const days = Math.max(1, Math.ceil((r.totalMin + r.visitMin) / (9 * 60)));
    const t = App.t, esc = App.esc;

    const costText = sel.mode === "bus"
      ? App.fmtMoney(r.cost.perPerson) + " " + t("perPerson")
      : App.fmtMoney(r.cost.total);

    let items = '<li><strong>' + esc(t("startPoint")) + ": " + esc(label(start)) + "</strong></li>";
    r.legs.forEach((leg, i) => {
      const dest = leg.to;
      const destName = leg.isReturn ? t("returnTo", { name: label(start) }) : (stops[i]._repeat ? t("returnTo", { name: App.L(stops[i].name) }) : App.L(stops[i].name));
      items += '<li class="drive">' + esc(t("legDistance")) + ": " + esc(t("approx")) + " " + esc(App.fmtKm(leg.km)) +
        " · " + esc(t("legDuration")) + ": " + esc(App.fmtDur(leg.min)) + "</li>";
      items += "<li><strong>" + (leg.isReturn || stops[i]._repeat ? "" : (i + 1) + ". ") + esc(destName) + "</strong>" +
        (!leg.isReturn && !stops[i]._repeat ? '<div class="card-meta">' + esc(App.L(stops[i].village)) + " · " + esc(App.L(stops[i].districtName)) + "</div>" : "") +
        '<div class="card-actions"><a class="btn btn-outline btn-small" target="_blank" rel="noopener" href="' +
        esc(App.mapsUrl(dest, { origin: leg.from })) + '">' + esc(t("directionsToStop")) + "</a></div></li>";
    });

    const waypoints = stops;
    const fullUrl = App.mapsUrl(start, { origin: start, waypoints });

    $("#routeResult").innerHTML =
      '<p class="lead">' + esc(t(route.desc)) + "</p>" +
      '<div class="stats">' +
      '<div class="stat"><span>' + esc(t("totalDistance")) + "</span><b>" + esc(t("approx")) + " " + esc(App.fmtKm(r.totalKm)) + "</b></div>" +
      '<div class="stat"><span>' + esc(t("totalDriving")) + "</span><b>" + esc(App.fmtDur(r.totalMin)) + "</b></div>" +
      '<div class="stat"><span>' + esc(t("estimatedCost")) + "</span><b>" + esc(t("approx")) + " " + esc(costText) + "</b></div>" +
      '<div class="stat"><span>' + esc(t("suggestedDays")) + "</span><b>" + esc(t(days === 1 ? "dayValue" : "daysValue", { n: days })) + "</b></div>" +
      "</div>" +
      '<p class="card-meta">' + esc(t("costNote")) + (sel.mode === "bus" ? " " + esc(t("busNote")) : "") + "</p>" +
      "<h2>" + esc(t("routeSequence")) + "</h2>" +
      '<ol class="timeline" style="list-style:none">' + items + "</ol>" +
      '<p><a class="btn" target="_blank" rel="noopener" href="' + esc(fullUrl) + '">' + esc(t("directionsFullRoute")) + "</a></p>" +
      "<h2>" + esc(t("routeTipsTitle")) + "</h2><ul>" +
      [1, 2, 3, 4].map(i => "<li>" + esc(t("routeTip" + i)) + "</li>").join("") + "</ul>";
  }

  App.register("routes", {
    init() {
      ["start", "route", "mode"].forEach(k => {
        const el = document.getElementById({ start: "startCity", route: "routeType", mode: "travelMode" }[k]);
        el.addEventListener("change", () => { sel[k] = el.value; App.store.setJSON(KEY, sel); renderResult(); });
      });
    },
    render() {
      fillSelect($("#startCity"), CITIES.map(c => [c.id, App.t(c.key)]), sel.start);
      fillSelect($("#routeType"), ROUTES.map(r => [r.id, App.t(r.key)]), sel.route);
      fillSelect($("#travelMode"), [["car", App.t("modeCar")], ["taxi", App.t("modeTaxi")], ["bus", App.t("modeBus")]], sel.mode);
      renderResult();
    }
  });

  return { CITIES, ROUTES, city, label, compute, stopsFor };
})();
