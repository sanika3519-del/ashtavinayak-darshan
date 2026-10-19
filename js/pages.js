/* =========================================================
   pages.js - Page controllers: home, temples, temple,
   nearby, gallery, about. Each render() is re-run when the
   language changes, so dynamic content follows the language
   while search text, filters and favourites are preserved.
   ========================================================= */

(function () {
  "use strict";
  const $ = (s, r) => (r || document).querySelector(s);
  const t = (k, v) => App.t(k, v);
  const esc = App.esc;

  /* ------------------------------ HOME ------------------------------ */
  App.register("home", {
    render() {
      $("#templeGrid").innerHTML = TEMPLES.map(App.templeCard).join("");
    }
  });

  /* --------------------------- TEMPLES LIST -------------------------- */
  App.register("temples", {
    init() {
      const redo = () => App.pages.temples.render();
      $("#templeSearch").addEventListener("input", redo);
      $("#districtFilter").addEventListener("change", redo);
      $("#favOnly").addEventListener("change", redo);
      $("#clearSearch").addEventListener("click", () => { $("#templeSearch").value = ""; redo(); $("#templeSearch").focus(); });
      document.addEventListener("favschange", () => { if ($("#favOnly").checked) redo(); });
    },
    render() {
      const q = $("#templeSearch").value, d = $("#districtFilter").value, favOnly = $("#favOnly").checked;
      const list = TEMPLES.filter(x =>
        (d === "all" || x.district === d) && (!favOnly || App.favs.has(x.id)) && App.matchesQuery(x, q));
      $("#templeGrid").innerHTML = list.map(App.templeCard).join("");
      $("#templeEmpty").hidden = list.length > 0;
      $("#templeCount").textContent = list.length ? t("resultsCount", { n: list.length }) : t("noResults");
    }
  });

  /* ---------------------------- TEMPLE DETAIL ------------------------ */
  function detailPanel(titleKey, body) {
    return '<section class="panel"><h2>' + esc(t(titleKey)) + "</h2>" + body + "</section>";
  }
  App.register("temple", {
    render() {
      const id = new URLSearchParams(location.search).get("id");
      const tp = TEMPLES.find(x => x.id === id);
      const root = $("#templeRoot");
      if (!tp) {
        root.innerHTML = '<div class="empty"><p>' + esc(t("templeNotFound")) + '</p><a class="btn" href="temples.html">' + esc(t("backToTemples")) + "</a></div>";
        return;
      }
      const name = App.L(tp.name);
      document.title = name + " – " + t("siteName");
      const prev = TEMPLES.find(x => x.order === tp.order - 1);
      const next = TEMPLES.find(x => x.order === tp.order + 1);
      const nearby = ATTRACTIONS.filter(a => (a.near || []).includes(tp.id));

      root.innerHTML =
        '<p><a href="temples.html">← ' + esc(t("backToTemples")) + "</a></p>" +
        '<div class="detail-hero"><div>' +
        '<span class="badge">' + esc(t("templeOf", { n: tp.order })) + "</span>" +
        "<h1>" + esc(name) + "</h1>" +
        '<p class="lead">' + esc(App.L(tp.short)) + "</p>" +
        '<div class="facts-row">' +
        '<span class="chip">' + esc(App.L(tp.deity)) + "</span>" +
        '<span class="chip">' + esc(App.L(tp.village)) + ", " + esc(App.L(tp.districtName)) + "</span>" +
        '<span class="chip">' + esc(t("distanceFromPune", { n: tp.fromPune })) + "</span>" +
        '<span class="chip">' + esc(t("suggestedVisit", { t: App.fmtDur(tp.visitMin) })) + "</span></div>" +
        '<div class="card-actions">' +
        '<a class="btn" target="_blank" rel="noopener" href="' + esc(App.mapsUrl(tp)) + '">' + esc(t("getDirections")) + "</a>" +
        App.favButton(tp.id, name) + "</div>" +
        '<div class="share-row no-print">' + App.shareButtons(name) + "</div>" +
        "</div>" +
        '<img src="images/' + tp.id + '.svg" alt="' + esc(t("galleryAlt", { name })) + '"></div>' +

        '<div class="detail-sections">' +
        detailPanel("secLocation", "<p>" + esc(App.L(tp.location)) + "</p>") +
        detailPanel("secSignificance", "<p>" + esc(App.L(tp.significance)) + "</p>") +
        detailPanel("secHistory", "<p>" + esc(App.L(tp.history)) + "</p>") +
        detailPanel("secLegend", "<p>" + esc(App.L(tp.legend)) + "</p>") +
        detailPanel("secArchitecture", "<p>" + esc(App.L(tp.architecture)) + "</p>") +
        detailPanel("secFestival", "<p>" + esc(App.L(tp.festival)) + "</p>") +
        detailPanel("secReach", "<p>" + esc(App.L(tp.reach)) + "</p>") +
        detailPanel("secTip", "<p>" + esc(App.L(tp.tip)) + "</p>") +
        detailPanel("secGuidelines", "<ul>" + [1, 2, 3, 4, 5, 6].map(i => "<li>" + esc(t("guide" + i)) + "</li>").join("") + "</ul>") +
        "</div>" +

        '<section class="section"><h2 class="section-title">' + esc(t("secNearby")) + "</h2>" +
        (nearby.length ? '<div class="grid">' + nearby.map(App.attractionCard).join("") + "</div>"
          : '<p class="muted">' + esc(t("noNearby")) + "</p>") + "</section>" +

        '<nav class="pager no-print" aria-label="' + esc(t("temples")) + '">' +
        (prev ? '<a class="btn btn-outline" href="temple.html?id=' + prev.id + '">← ' + esc(t("prevTemple")) + ": " + esc(App.L(prev.village)) + "</a>"
          : '<span class="muted">' + esc(t("firstTemple")) + "</span>") +
        (next ? '<a class="btn" href="temple.html?id=' + next.id + '">' + esc(t("nextTemple")) + ": " + esc(App.L(next.village)) + " →</a>"
          : '<span class="muted">' + esc(t("lastTemple")) + "</span>") +
        "</nav>";
    }
  });

  /* ------------------------------ NEARBY ----------------------------- */
  let nearbyCat = "all";
  App.register("nearby", {
    init() {
      $("#nearbySearch").addEventListener("input", () => App.pages.nearby.render());
      $("#clearSearch").addEventListener("click", () => { $("#nearbySearch").value = ""; App.pages.nearby.render(); $("#nearbySearch").focus(); });
      $("#catChips").addEventListener("click", e => {
        const b = e.target.closest("button[data-cat]");
        if (b) { nearbyCat = b.dataset.cat; App.pages.nearby.render(); }
      });
    },
    render() {
      const cats = ["all", "temple", "fort", "heritage", "nature"];
      $("#catChips").innerHTML = cats.map(c =>
        '<button type="button" class="chip" data-cat="' + c + '" aria-pressed="' + (c === nearbyCat) + '">' +
        esc(c === "all" ? t("all") : App.catLabel(c)) + "</button>").join("");
      const q = $("#nearbySearch").value;
      const list = ATTRACTIONS.filter(a => (nearbyCat === "all" || a.cat === nearbyCat) && App.matchesQuery(a, q));
      $("#nearbyGrid").innerHTML = list.map(App.attractionCard).join("");
      $("#nearbyEmpty").hidden = list.length > 0;
      $("#nearbyCount").textContent = list.length ? t("resultsCount", { n: list.length }) : t("noResults");
      if (location.hash && !App._hashDone) {
        const el = document.getElementById(location.hash.slice(1));
        if (el) { el.scrollIntoView(); App._hashDone = true; }
      }
    }
  });

  /* ------------------------------ GALLERY ---------------------------- */
  let galCat = "all", lbList = [], lbIndex = -1, lastFocus = null;

  function galName(g) { return App.L(g.name); }
  function galCaption(g) {
    const place = App.L(g.place);
    return place && place !== galName(g) ? t("galleryCaption", { name: galName(g), place }) : galName(g);
  }
  function galleryList() {
    const q = $("#gallerySearch").value;
    return GALLERY.filter(g => {
      const item = App.findItem(g.id) || g;
      return (galCat === "all" || g.cat === galCat) && App.matchesQuery(item, q);
    });
  }
  function labelLightbox() {   // static controls: translated even while the viewer is closed
    $("#lbPrev").setAttribute("aria-label", t("prevImage"));
    $("#lbNext").setAttribute("aria-label", t("nextImage"));
    $("#lbClose").setAttribute("aria-label", t("closeViewer"));
    $("#lightbox").setAttribute("aria-label", t("lightboxLabel"));
    $("#lbLink").textContent = t("viewDetails");
  }
  function updateLightbox() {
    labelLightbox();
    const g = lbList[lbIndex];
    if (!g) return;
    $("#lbImg").src = g.img;
    $("#lbImg").alt = t("galleryAlt", { name: galName(g) });
    $("#lbCaption").textContent = galCaption(g);
    $("#lbCount").textContent = t("imageOf", { i: lbIndex + 1, n: lbList.length });
    $("#lbPrev").setAttribute("aria-label", t("prevImage"));
    $("#lbNext").setAttribute("aria-label", t("nextImage"));
    $("#lbClose").setAttribute("aria-label", t("closeViewer"));
    $("#lightbox").setAttribute("aria-label", t("lightboxLabel"));
    const link = $("#lbLink");
    link.href = g.link; link.textContent = t("viewDetails");
  }
  function openLightbox(i) {
    lbList = galleryList(); lbIndex = i; lastFocus = document.activeElement;
    updateLightbox();
    const dlg = $("#lightbox");
    if (typeof dlg.showModal === "function") { if (!dlg.open) dlg.showModal(); } else dlg.setAttribute("open", "");
    $("#lbClose").focus();
  }
  function stepLightbox(d) {
    if (!lbList.length) return;
    lbIndex = (lbIndex + d + lbList.length) % lbList.length;
    updateLightbox();
  }

  App.register("gallery", {
    init() {
      $("#gallerySearch").addEventListener("input", () => App.pages.gallery.render());
      $("#clearSearch").addEventListener("click", () => { $("#gallerySearch").value = ""; App.pages.gallery.render(); $("#gallerySearch").focus(); });
      $("#catChips").addEventListener("click", e => {
        const b = e.target.closest("button[data-cat]");
        if (b) { galCat = b.dataset.cat; App.pages.gallery.render(); }
      });
      $("#galleryGrid").addEventListener("click", e => {
        const b = e.target.closest("button[data-i]");
        if (b) openLightbox(parseInt(b.dataset.i, 10));
      });
      $("#lbPrev").addEventListener("click", () => stepLightbox(-1));
      $("#lbNext").addEventListener("click", () => stepLightbox(1));
      $("#lbClose").addEventListener("click", () => { const d = $("#lightbox"); if (d.close) d.close(); else d.removeAttribute("open"); });
      $("#lightbox").addEventListener("keydown", e => {
        if (e.key === "ArrowLeft") { e.preventDefault(); stepLightbox(-1); }
        if (e.key === "ArrowRight") { e.preventDefault(); stepLightbox(1); }
      });
      $("#lightbox").addEventListener("click", e => { if (e.target === e.currentTarget && e.currentTarget.close) e.currentTarget.close(); });
      $("#lightbox").addEventListener("close", () => { if (lastFocus && lastFocus.focus) lastFocus.focus(); });
    },
    render() {
      const cats = ["all", "temple", "fort", "heritage", "nature"];
      $("#catChips").innerHTML = cats.map(c =>
        '<button type="button" class="chip" data-cat="' + c + '" aria-pressed="' + (c === galCat) + '">' +
        esc(c === "all" ? t("all") : App.catLabel(c)) + "</button>").join("");
      const list = galleryList();
      $("#galleryGrid").innerHTML = list.map((g, i) =>
        '<button type="button" class="shot" data-i="' + i + '" aria-label="' + esc(t("openImage", { name: galName(g) })) + '">' +
        '<img src="' + g.img + '" alt="' + esc(t("galleryAlt", { name: galName(g) })) + '" loading="lazy">' +
        "<span>" + esc(galCaption(g)) + "</span></button>").join("");
      labelLightbox();
      $("#galleryEmpty").hidden = list.length > 0;
      $("#galleryCount").textContent = list.length ? t("resultsCount", { n: list.length }) : t("noResults");
      if ($("#lightbox").open) { lbList = list; lbIndex = Math.min(lbIndex, list.length - 1); updateLightbox(); }
    }
  });

  /* ------------------------------- ABOUT ----------------------------- */
  App.register("about", {
    render() {
      $("#aboutShare").innerHTML = App.shareButtons(t("siteName"));
    }
  });
})();
