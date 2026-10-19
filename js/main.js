/* =========================================================
   main.js - Core: language engine, shared header/footer,
   theme, accessibility, favourites, search and helpers.
   Page scripts register themselves with App.register().
   ========================================================= */

const App = (function () {
  "use strict";

  const LANGS = [
    { code: "en", label: "English" },
    { code: "mr", label: "मराठी" },
    { code: "hi", label: "हिंदी" }
  ];
  const LANG_KEY = "av_lang";
  const THEME_KEY = "av_theme";
  const FS_KEY = "av_fs";
  const CONTRAST_KEY = "av_contrast";
  const FAV_KEY = "av_favs";

  /* ---------- safe storage (private mode / blocked storage) ---------- */
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } },
    getJSON(k, fallback) {
      try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
    },
    setJSON(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* ignore */ } }
  };

  const app = {
    LANGS, store, lang: "en", pages: {}, _langListeners: [],
    pageName: document.body ? document.body.dataset.page : ""
  };

  /* ---------- translation helpers ---------- */
  app.t = function (key, vars) {
    const dict = (typeof translations !== "undefined" && translations[app.lang]) || {};
    const en = (typeof translations !== "undefined" && translations.en) || {};
    let s = dict[key] != null ? dict[key] : (en[key] != null ? en[key] : key);
    if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] != null ? vars[k] : m));
    return s;
  };
  /* pick the current-language value from a { en, mr, hi } object */
  app.L = function (obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[app.lang] || obj.en || "";
  };
  app.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  };
  app.fmtDur = function (mins) {
    mins = Math.max(0, Math.round(mins));
    const h = Math.floor(mins / 60), m = mins % 60, out = [];
    if (h) out.push(h + " " + app.t("hourUnit"));
    if (m || !h) out.push(m + " " + app.t("minUnit"));
    return out.join(" ");
  };
  app.fmtKm = n => Math.round(n) + " " + app.t("kmUnit");
  app.fmtMoney = n => "₹" + Math.round(n / 10) * 10;
  app.fmtClock = function (mins) {
    const h = Math.floor(mins / 60) % 24, m = mins % 60;
    return String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0");
  };
  app.districtLabel = code => app.t({ pune: "districtPune", raigad: "districtRaigad", ahilyanagar: "districtAhilyanagar" }[code] || "all");
  app.catLabel = cat => app.t({ temple: "catTemple", fort: "catFort", heritage: "catHeritage", nature: "catNature" }[cat] || "all");

  /* ---------- apply translations to static markup ----------
     data-i18n="key"                      -> textContent
     data-i18n-attr="aria-label:key;..."  -> attributes                       */
  app.applyStatic = function (root) {
    (root || document).querySelectorAll("[data-i18n]").forEach(el => { el.textContent = app.t(el.dataset.i18n); });
    (root || document).querySelectorAll("[data-i18n-attr]").forEach(el => {
      el.dataset.i18nAttr.split(";").forEach(pair => {
        const i = pair.indexOf(":");
        if (i > 0) el.setAttribute(pair.slice(0, i).trim(), app.t(pair.slice(i + 1).trim()));
      });
    });
  };

  function detectLanguage() {
    const saved = store.get(LANG_KEY);
    if (saved && LANGS.some(l => l.code === saved)) return saved;
    const prefs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"]);
    for (const p of prefs) {
      const c = String(p).toLowerCase().slice(0, 2);
      if (c === "mr" || c === "hi" || c === "en") return c;
    }
    return "en"; // sensible default for first-time visitors
  }

  app.onLang = fn => app._langListeners.push(fn);

  app.setLang = function (code, persist) {
    if (!LANGS.some(l => l.code === code)) code = "en";
    app.lang = code;
    if (persist !== false) store.set(LANG_KEY, code);
    document.documentElement.lang = code;
    const titleKey = "title." + (app.pageName || "home");
    document.title = app.t(titleKey);
    app.applyStatic();
    refreshTools();
    const page = app.pages[app.pageName];
    if (page && page.render) { try { page.render(); } catch (e) { console.error(e); } }
    app._langListeners.forEach(fn => { try { fn(code); } catch (e) { console.error(e); } });
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: code } }));
  };

  /* ---------- toast / live status ---------- */
  let toastTimer;
  app.toast = function (msg) {
    const el = document.getElementById("toast");
    if (!el) return;
    el.textContent = msg; el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 3200);
  };

  /* ---------- theme / text size / contrast ---------- */
  function applyDisplayPrefs() {
    const root = document.documentElement;
    let theme = store.get(THEME_KEY);
    if (!theme) theme = (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
    root.dataset.theme = theme;
    const fs = parseInt(store.get(FS_KEY) || "100", 10);
    root.style.setProperty("--fs", fs + "%");
    if (store.get(CONTRAST_KEY) === "1") root.dataset.contrast = "high"; else delete root.dataset.contrast;
  }
  function bumpFont(delta) {
    let fs = parseInt(store.get(FS_KEY) || "100", 10) + delta;
    fs = Math.min(140, Math.max(85, fs));
    store.set(FS_KEY, String(fs));
    applyDisplayPrefs();
  }

  /* ---------- favourites ---------- */
  app.favs = {
    list() { const v = store.getJSON(FAV_KEY, []); return Array.isArray(v) ? v : []; },
    has(id) { return app.favs.list().includes(id); },
    toggle(id) {
      let l = app.favs.list();
      const on = !l.includes(id);
      l = on ? l.concat(id) : l.filter(x => x !== id);
      store.setJSON(FAV_KEY, l);
      document.dispatchEvent(new CustomEvent("favschange", { detail: { id, on } }));
      return on;
    }
  };
  function favButton(id, name) {
    const on = app.favs.has(id);
    return '<button type="button" class="icon-btn fav-btn" data-fav="' + app.esc(id) + '" data-fav-name="' + app.esc(name) +
      '" aria-pressed="' + on + '" aria-label="' + app.esc(app.t(on ? "removeFavourite" : "addFavourite") + ": " + name) +
      '" title="' + app.esc(app.t(on ? "removeFavourite" : "addFavourite")) + '">' + (on ? "♥" : "♡") + "</button>";
  }
  app.favButton = favButton;

  /* ---------- multilingual search ---------- */
  app.norm = function (s) {
    return String(s || "").normalize("NFC").toLowerCase()
      .replace(/[‌‍]/g, "")
      .replace(/[ँं़]/g, "")   // chandrabindu, anusvara, nukta
      .replace(/ी/g, "ि").replace(/ू/g, "ु")  // tolerate long/short vowel variants
      .replace(/ॉ/g, "ा").replace(/\s+/g, " ").trim();
  };
  function collectStrings(item) {
    const out = [item.id];
    ["name", "deity", "village", "districtName", "desc"].forEach(k => {
      const v = item[k];
      if (v && typeof v === "object") { out.push(v.en, v.mr, v.hi); }
    });
    if (Array.isArray(item.aliases)) out.push(...item.aliases);
    else if (item.aliases && typeof item.aliases === "object") Object.values(item.aliases).forEach(a => out.push(...[].concat(a)));
    return out.filter(Boolean);
  }
  const indexCache = new Map();
  app.searchIndex = function (item) {
    if (!indexCache.has(item.id)) indexCache.set(item.id, collectStrings(item).map(app.norm).join(" | "));
    return indexCache.get(item.id);
  };
  app.matchesQuery = function (item, query) {
    const q = app.norm(query);
    if (!q) return true;
    const idx = app.searchIndex(item);
    return q.split(" ").every(tok => idx.includes(tok));
  };
  /* find temple / attraction record for any gallery id */
  app.findItem = id => TEMPLES.find(t => t.id === id) || ATTRACTIONS.find(a => a.id === id);

  /* ---------- maps ---------- */
  app.mapsUrl = function (dest, opts) {
    opts = opts || {};
    let u = "https://www.google.com/maps/dir/?api=1&destination=" + dest.lat + "," + dest.lng + "&travelmode=driving";
    if (opts.origin) u += "&origin=" + opts.origin.lat + "," + opts.origin.lng;
    if (opts.waypoints && opts.waypoints.length) u += "&waypoints=" + opts.waypoints.map(w => w.lat + "," + w.lng).join("%7C");
    return u;
  };
  const toRad = d => d * Math.PI / 180;
  app.roadKm = function (a, b) {
    // Where the data file has a researched road distance from Pune, use it so
    // the planner agrees with the temple pages.
    if (a.id === "pune" && b.fromPune) return b.fromPune;
    if (b.id === "pune" && a.fromPune) return a.fromPune;
    const R = 6371, dLat = toRad(b.lat - a.lat), dLng = toRad(b.lng - a.lng);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
    const straight = 2 * R * Math.asin(Math.sqrt(h));
    return Math.max(2, Math.round(straight * 1.35)); // winding-road factor
  };
  app.driveMin = function (km, mode) {
    const base = km / 45 * 60;               // ~45 km/h average on mixed roads
    return Math.round((mode === "bus" ? base * 1.4 + 20 : base) / 5) * 5 || 5;
  };
  app.costFor = function (km, mode, travellers) {
    const n = Math.max(1, travellers || 1);
    if (mode === "bus") return { total: km * 2.5 * n, perPerson: km * 2.5 };
    const perKm = mode === "taxi" ? 15 : 10;
    return { total: km * perKm, perPerson: km * perKm / n };
  };

  /* ---------- shared cards ---------- */
  app.templeCard = function (t) {
    const name = app.L(t.name), href = "temple.html?id=" + t.id;
    return '<article class="card">' +
      '<a class="card-img" href="' + href + '" tabindex="-1"><img src="images/' + t.id + '.svg" alt="" loading="lazy"></a>' +
      '<div class="card-body">' +
      '<span class="badge">' + app.esc(app.t("templeOf", { n: t.order })) + "</span>" +
      '<h3><a href="' + href + '">' + app.esc(name) + "</a></h3>" +
      '<div class="card-meta">' + app.esc(app.L(t.village)) + " · " + app.esc(app.L(t.districtName)) + "</div>" +
      "<p>" + app.esc(app.L(t.short)) + "</p>" +
      '<div class="card-meta">' + app.esc(app.t("suggestedVisit", { t: app.fmtDur(t.visitMin) })) + "</div>" +
      '<div class="card-actions">' +
      '<a class="btn btn-small" href="' + href + '">' + app.esc(app.t("viewDetails")) + "</a>" +
      '<a class="btn btn-outline btn-small" target="_blank" rel="noopener" href="' + app.esc(app.mapsUrl(t)) + '">' + app.esc(app.t("getDirections")) + "</a>" +
      favButton(t.id, name) + "</div></div></article>";
  };
  app.attractionCard = function (a) {
    const name = app.L(a.name);
    const near = (a.near || []).map(id => { const t = TEMPLES.find(x => x.id === id); return t ? app.L(t.village) : ""; }).filter(Boolean).join(", ");
    return '<article class="card" id="' + a.id + '">' +
      '<div class="card-img"><img src="images/' + a.id + '.svg" alt="' + app.esc(app.t("galleryAlt", { name })) + '" loading="lazy"></div>' +
      '<div class="card-body"><span class="badge">' + app.esc(app.catLabel(a.cat)) + "</span>" +
      "<h3>" + app.esc(name) + "</h3>" +
      "<p>" + app.esc(app.L(a.desc)) + "</p>" +
      '<p class="card-meta"><strong>' + app.esc(app.t("historicalSignificance")) + ":</strong> " + app.esc(app.L(a.significance)) + "</p>" +
      (near ? '<div class="card-meta">' + app.esc(app.t("nearTemples")) + ": " + app.esc(near) + "</div>" : "") +
      '<div class="card-meta">' + app.esc(app.t("visitTime", { t: app.fmtDur(a.visitMin) })) + "</div>" +
      '<div class="card-actions"><a class="btn btn-outline btn-small" target="_blank" rel="noopener" href="' + app.esc(app.mapsUrl(a)) + '">' + app.esc(app.t("getDirections")) + "</a></div>" +
      "</div></article>";
  };

  /* ---------- shared header / footer ---------- */
  const NAV = [
    ["index.html", "home", "home"], ["temples.html", "temples", "temples"], ["routes.html", "routes", "routes"],
    ["nearby.html", "nearby", "nearbyPlaces"], ["planner.html", "planner", "tripPlanner"],
    ["gallery.html", "gallery", "gallery"], ["about.html", "about", "about"]
  ];
  function currentPageKey() { return app.pageName === "temple" ? "temples" : app.pageName; }

  function renderChrome() {
    const hdr = document.getElementById("site-header");
    if (hdr) {
      const langBtns = LANGS.map(l =>
        '<button type="button" lang="' + l.code + '" data-lang="' + l.code + '" aria-pressed="false">' + l.label + "</button>").join("");
      hdr.className = "site-header";
      hdr.innerHTML =
        '<a class="skip-link" href="#main" data-i18n="skip"></a>' +
        '<div class="container header-row">' +
        '<a class="brand" href="index.html"><span class="brand-mark" aria-hidden="true">ॐ</span><span data-i18n="siteName"></span></a>' +
        '<div class="tools">' +
        '<div class="lang-switch" role="group" data-i18n-attr="aria-label:chooseLanguage" id="langSwitch">' + langBtns + "</div>" +
        '<button type="button" class="icon-btn" id="themeBtn" aria-pressed="false"></button>' +
        '<button type="button" class="icon-btn" id="fsDown">A−</button>' +
        '<button type="button" class="icon-btn" id="fsUp">A+</button>' +
        '<button type="button" class="icon-btn" id="contrastBtn" aria-pressed="false"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/></svg></button>' +
        "</div>" +
        '<button type="button" class="icon-btn nav-toggle" id="navToggle" aria-expanded="false" aria-controls="mainNav" data-i18n="menu"></button>' +
        '<nav id="mainNav" class="main-nav" data-i18n-attr="aria-label:mainNav"><ul>' +
        NAV.map(n => '<li><a href="' + n[0] + '" data-i18n="' + n[2] + '"' + (n[1] === currentPageKey() ? ' aria-current="page"' : "") + "></a></li>").join("") +
        "</ul></nav></div>";

      hdr.addEventListener("click", e => {
        const b = e.target.closest("button");
        if (!b) return;
        if (b.dataset.lang) app.setLang(b.dataset.lang);
        else if (b.id === "themeBtn") { store.set(THEME_KEY, document.documentElement.dataset.theme === "dark" ? "light" : "dark"); applyDisplayPrefs(); refreshTools(); }
        else if (b.id === "fsUp") bumpFont(+10);
        else if (b.id === "fsDown") bumpFont(-10);
        else if (b.id === "contrastBtn") { store.set(CONTRAST_KEY, store.get(CONTRAST_KEY) === "1" ? "0" : "1"); applyDisplayPrefs(); refreshTools(); }
        else if (b.id === "navToggle") {
          const nav = document.getElementById("mainNav"), open = nav.classList.toggle("open");
          b.setAttribute("aria-expanded", String(open));
        }
      });
    }

    const ftr = document.getElementById("site-footer");
    if (ftr) {
      ftr.className = "site-footer";
      ftr.innerHTML =
        '<div class="container"><div class="footer-grid">' +
        '<div><h2 data-i18n="siteName"></h2><p data-i18n="footerAbout"></p><p class="muted-foot" data-i18n="siteTagline"></p></div>' +
        '<div><h2 data-i18n="footerLinks"></h2><ul>' +
        NAV.map(n => '<li><a href="' + n[0] + '" data-i18n="' + n[2] + '"></a></li>').join("") + "</ul></div>" +
        '<div><h2 data-i18n="accessibility"></h2><p data-i18n="footerNote"></p><p data-i18n="mapNote"></p></div>' +
        '</div><div class="footer-bottom"><span data-i18n="footerCopy"></span> · <a href="#top" data-i18n="backToTop"></a></div></div>';
    }
    if (!document.getElementById("toast")) {
      const t = document.createElement("div");
      t.id = "toast"; t.className = "toast"; t.setAttribute("role", "status"); t.setAttribute("aria-live", "polite"); t.hidden = true;
      document.body.appendChild(t);
    }
  }

  function refreshTools() {
    document.querySelectorAll("#langSwitch button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === app.lang)));
    const dark = document.documentElement.dataset.theme === "dark";
    const tb = document.getElementById("themeBtn");
    if (tb) {
      tb.textContent = dark ? "☀" : "☾";
      tb.setAttribute("aria-pressed", String(dark));
      tb.setAttribute("aria-label", app.t(dark ? "lightMode" : "darkMode"));
      tb.title = app.t(dark ? "lightMode" : "darkMode");
    }
    const set = (id, key) => { const el = document.getElementById(id); if (el) { el.setAttribute("aria-label", app.t(key)); el.title = app.t(key); } };
    set("fsDown", "textSmaller"); set("fsUp", "textLarger"); set("contrastBtn", "highContrast");
    const cb = document.getElementById("contrastBtn");
    if (cb) cb.setAttribute("aria-pressed", String(store.get(CONTRAST_KEY) === "1"));
  }

  /* ---------- share helpers (used on temple + about pages) ---------- */
  app.shareButtons = function (title) {
    const url = location.href;
    const wa = "https://wa.me/?text=" + encodeURIComponent(title + " " + url);
    let html = '<a class="btn btn-outline btn-small" target="_blank" rel="noopener" href="' + app.esc(wa) + '">' + app.esc(app.t("shareWhatsApp")) + "</a>" +
      '<button type="button" class="btn btn-outline btn-small" data-copy-link>' + app.esc(app.t("copyLink")) + "</button>";
    if (navigator.share) html += '<button type="button" class="btn btn-outline btn-small" data-native-share data-title="' + app.esc(title) + '">' + app.esc(app.t("nativeShare")) + "</button>";
    return html;
  };

  document.addEventListener("click", e => {
    const fav = e.target.closest("[data-fav]");
    if (fav) {
      const on = app.favs.toggle(fav.dataset.fav);
      const name = fav.dataset.favName || "";
      fav.setAttribute("aria-pressed", String(on));
      fav.textContent = on ? "♥" : "♡";
      fav.setAttribute("aria-label", app.t(on ? "removeFavourite" : "addFavourite") + ": " + name);
      fav.title = app.t(on ? "removeFavourite" : "addFavourite");
      app.toast(app.t(on ? "favAdded" : "favRemoved", { name }));
      return;
    }
    if (e.target.closest("[data-copy-link]")) {
      const done = () => app.toast(app.t("linkCopied")), fail = () => app.toast(app.t("shareFailed"));
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(location.href).then(done, fail); else fail();
      return;
    }
    const ns = e.target.closest("[data-native-share]");
    if (ns && navigator.share) navigator.share({ title: ns.dataset.title, url: location.href }).catch(() => {});
  });

  window.addEventListener("storage", e => {
    if (e.key === LANG_KEY && e.newValue && e.newValue !== app.lang) app.setLang(e.newValue, false);
  });

  /* ---------- page registry + boot ---------- */
  app.register = function (name, controller) { app.pages[name] = controller; };

  function boot() {
    applyDisplayPrefs();
    renderChrome();
    const page = app.pages[app.pageName];
    if (page && page.init) { try { page.init(); } catch (e) { console.error(e); } }
    app.setLang(detectLanguage(), false); // renders the page in the right language
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();

  return app;
})();
