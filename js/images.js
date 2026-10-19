/* =========================================================
   images.js - real photos for every location
   ---------------------------------------------------------
   Maps each location id to the Wikipedia article(s) about it.
   The lead photo of that article (hosted on Wikimedia Commons,
   free licence) is fetched once, cached in localStorage, and
   swapped in for the local images/<id>.svg illustration.
   If anything fails (offline, no photo), the SVG stays.
   ========================================================= */
(function () {
  // id -> Wikipedia titles to try, in order (first one with a photo wins)
  var PHOTO_SOURCES = {
    morgaon:      ["Ganesha_Temple,_Morgaon", "Morgaon"],
    siddhatek:    ["Siddhivinayak_Temple,_Siddhatek", "Siddhatek"],
    pali:         ["Ballaleshwar_Temple,_Pali", "Ballaleshwar", "Pali,_Raigad"],
    mahad:        ["Varadavinayak_Temple,_Mahad", "Varadavinayak", "Mahad"],
    theur:        ["Theur", "Chintamani_Temple,_Theur"],
    lenyadri:     ["Lenyadri", "Girijatmaj"],
    ozar:         ["Vighnahar_Temple,_Ozar", "Vigneshwara_Temple,_Ozar", "Ozar,_Pune"],
    ranjangaon:   ["Mahaganapati_Temple,_Ranjangaon", "Ranjangaon"],
    shaniwarwada: ["Shaniwar_Wada"],
    shivneri:     ["Shivneri_Fort", "Shivneri"],
    naneghat:     ["Naneghat"],
    karla:        ["Karla_Caves", "Karli_Caves"],
    jejuri:       ["Jejuri", "Khandoba_Temple,_Jejuri"],
    sarasgad:     ["Sarasgad", "Sarasgad_Fort"],
    bhigwan:      ["Bhigwan"]
  };

  var API = "https://en.wikipedia.org/api/rest_v1/page/summary/";
  var CACHE_KEY = "ashtavinayak.photos.v1";
  var cache = {};
  try { cache = JSON.parse(localStorage.getItem(CACHE_KEY) || "{}"); } catch (e) {}
  var pending = {};   // id -> Promise<string|null>

  function save() { try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache)); } catch (e) {} }

  function bigger(url) {            // ask Wikimedia for a 960px version of the thumbnail
    return url.replace(/\/(\d+)px-/, "/960px-");
  }

  function fetchTitle(title) {
    return fetch(API + encodeURIComponent(title), { headers: { Accept: "application/json" } })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (d && d.thumbnail && d.thumbnail.source) return bigger(d.thumbnail.source);
        if (d && d.originalimage && d.originalimage.source) return d.originalimage.source;
        return null;
      })
      .catch(function () { return null; });
  }

  function getPhoto(id) {
    if (cache[id]) return Promise.resolve(cache[id]);
    if (!PHOTO_SOURCES[id]) return Promise.resolve(null);
    if (pending[id]) return pending[id];
    var titles = PHOTO_SOURCES[id].slice();
    pending[id] = (function next() {
      if (!titles.length) return Promise.resolve(null);
      return fetchTitle(titles.shift()).then(function (u) {
        if (u) { cache[id] = u; save(); return u; }
        return next();
      });
    })();
    return pending[id];
  }

  function upgrade(img) {
    var m = /(?:^|\/)images\/([a-z]+)\.svg$/.exec(img.getAttribute("src") || "");
    if (!m || !PHOTO_SOURCES[m[1]] || img.dataset.photo) return;
    var id = m[1], svg = img.getAttribute("src");
    img.dataset.photo = "pending";
    getPhoto(id).then(function (url) {
      if (!url) { img.dataset.photo = "none"; return; }
      img.onerror = function () { img.onerror = null; img.src = svg; img.dataset.photo = "failed"; };
      img.referrerPolicy = "no-referrer";
      img.style.objectFit = "cover";
      img.src = url;
      img.dataset.photo = "ok";
    });
  }

  function scan(root) {
    var imgs = (root.querySelectorAll ? root.querySelectorAll("img") : []);
    for (var i = 0; i < imgs.length; i++) upgrade(imgs[i]);
    if (root.tagName === "IMG") upgrade(root);
  }

  function start() {
    scan(document);
    new MutationObserver(function (muts) {
      muts.forEach(function (m) { m.addedNodes.forEach(function (n) { if (n.nodeType === 1) scan(n); }); });
    }).observe(document.body, { childList: true, subtree: true });
  }

  window.PHOTO_SOURCES = PHOTO_SOURCES;   // handy to inspect in the console
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
