# Ashtavinayak Darshan – Explore the Divine Maharashtra

A multi-page tourism website for the eight Ganesha temples of the Ashtavinayak yatra, written in plain HTML, CSS and vanilla JavaScript.
**Every page works in English, मराठी and हिंदी.**

## Pages

| Page | File | What it does |
|---|---|---|
| Home | `index.html` | Hero, introduction, temple cards, facts, travel highlights |
| Eight Temples | `temples.html` | Multilingual search, district filter, favourites |
| Temple details | `temple.html?id=morgaon` | History, legend, architecture, festivals, how to reach, guidelines, previous/next buttons |
| Darshan Routes | `routes.html` | Start city, route and travel mode; distance, time and cost estimates; Google Maps directions |
| Nearby Attractions | `nearby.html` | Forts, caves and heritage sites with category filter and search |
| Trip Planner | `planner.html` | Day-wise itinerary, print button, reminders, checklist |
| Photo Gallery | `gallery.html` | Filters, search, keyboard-accessible image viewer |
| About Us | `about.html` | About, festivals, etiquette, accessibility, sources and credits |

## Project structure

```
ashtavinayak-darshan/
├── index.html, temples.html, temple.html, routes.html,
│   nearby.html, planner.html, gallery.html, about.html
├── css/style.css          (light / dark / high-contrast, Devanagari spacing)
├── images/                (SVG illustrations, no text inside them)
└── js/
    ├── translations.js    (all fixed interface text: en / mr / hi)
    ├── temples.js         (temple, attraction and gallery data in en / mr / hi)
    ├── main.js            (language engine, header/footer, theme, favourites, search)
    ├── pages.js           (home, temples, temple, nearby, gallery, about)
    ├── routes.js          (route data and the Darshan Routes page)
    └── trip-planner.js    (itinerary builder and the Trip Planner page)
```

## How the multilingual system works

* **Interface text** lives in `js/translations.js`, organised as `translations.en`, `translations.mr`, `translations.hi`, each with the same keys.
* **Content** (temple names, history, legends and so on) lives in `js/temples.js`. Every text is an object `{ en, mr, hi }`.
* **Static HTML** uses `data-i18n="key"` (text) and `data-i18n-attr="aria-label:key;placeholder:key"` (attributes). English text is kept inside the HTML as a fallback.
* **Dynamic content** (cards, filters, itineraries, messages) is built in JavaScript with `App.t("key")` and `App.L(object)`, and is re-rendered whenever the language changes. Form values, search text, filters, favourites and the trip-planner selections are kept in the DOM or in `localStorage`, so nothing is lost when the language changes.
* **Persistence:** the choice is saved in `localStorage` (`av_lang`). First-time visitors get their browser language if it is Marathi or Hindi, otherwise English.
* `<html lang>` is updated to `en`, `mr` or `hi`, and the page title changes too.
* **Search** normalises text (case, Devanagari anusvara/chandrabindu, long/short vowel variants) and looks through names, villages, deities, districts and transliterated aliases in all three languages. Searching `Morgaon`, `morgav`, `मोरगाव` or `मयूरेश्वर` all find the same temple.

### Adding or changing text

1. Add the key to **all three** blocks in `js/translations.js` (keep `{placeholders}` identical).
2. Use `data-i18n="yourKey"` in the HTML, or `App.t("yourKey")` in JavaScript.
3. For temple content, edit `js/temples.js` and fill in `en`, `mr` and `hi`.

## Run it on your computer

Open the folder in VS Code and either double-click `index.html`, or use the **Live Server** extension (right-click `index.html` → *Open with Live Server*).
You can also run `python3 -m http.server 8000` in the folder and open <http://localhost:8000>.

## Publish with GitHub Pages

1. Create a new repository on GitHub (for example `ashtavinayak-darshan`).
2. In VS Code open the Source Control panel, choose **Initialize Repository**, write a commit message and commit.
3. Run the two commands GitHub shows under *"push an existing repository"* (`git remote add origin …` and `git push -u origin main`).
4. On GitHub open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
5. After a minute your site is live at `https://<your-username>.github.io/ashtavinayak-darshan/`.

## Multilingual testing checklist

Tick each line once for **English**, **मराठी** and **हिंदी** (use the language buttons in the top bar). Test on a desktop browser and on a phone-width window (about 375 px).

### Language selector
- [ ] The three options (English / मराठी / हिंदी) are visible on every page, on desktop and mobile
- [ ] The selected option is highlighted and works with the keyboard (Tab, Enter/Space)
- [ ] Switching language does **not** reload the page or scroll it back to the top
- [ ] First visit in a private window shows English (or your browser's Marathi/Hindi)
- [ ] The choice is remembered after refreshing the page
- [ ] The choice is kept when moving to another page, and when closing and reopening the site
- [ ] `<html lang>` changes to `en` / `mr` / `hi` (inspect the page)

### Every page – nothing important left in English
- [ ] Home: navigation, hero, buttons, introduction, temple cards, facts, highlights, footer
- [ ] Eight Temples: heading, search box and placeholder, district filter, favourites filter, cards, result count
- [ ] Temple details (check **all eight** temples): name, location, significance, history, legend, architecture, festivals, how to reach, travel advice, guidelines, nearby attractions, previous/next buttons
- [ ] Darshan Routes: all three selectors, route names and descriptions, distance/duration labels, cost note, tips, directions buttons
- [ ] Nearby Attractions: names, descriptions, significance, categories, search, visit time, directions buttons
- [ ] Trip Planner: every label, drop-down options, temple list, buttons, itinerary, reminders, checklist
- [ ] Photo Gallery: title, filters, search, captions, image alt text, viewer buttons
- [ ] About: all sections, festivals, etiquette, accessibility, credits
- [ ] Browser tab title changes with the language

### Search and filters
- [ ] Temples: `Morgaon`, `morgav`, `मोरगाव`, `मोरगांव`, `मयूरेश्वर`, `Mayureshwar` all find the first temple
- [ ] Temples: `Ballaleshwar`, `बल्लाळेश्वर`, `Chintamani`, `थेऊर`, `Girijatmaj`, `लेण्याद्री` find the right temple
- [ ] Attractions: `Shivneri`, `शिवनेरी`, `Karla` find the right place
- [ ] Gallery: English and Devanagari names both work
- [ ] "No results" message appears in the **selected** language (try `zzzz`)
- [ ] Changing language keeps the search text and the selected filters

### Trip planner
- [ ] Choosing no temple shows the validation message in the current language
- [ ] Choosing 3 temples and creating an itinerary works in all three languages
- [ ] Switching language afterwards keeps the selected temples, days, travel mode and the itinerary
- [ ] Choosing all 8 temples for 1 day shows the "needs more days" message; 5 days at a fast pace works
- [ ] Day-wise schedule, times, distances and cost estimates are the same in all three languages
- [ ] The print button opens the print dialog and the printout is readable
- [ ] The checklist ticks stay saved after language change and refresh

### Favourites, dark mode and accessibility
- [ ] Favourite hearts stay filled after changing language and after refreshing
- [ ] The favourites-only filter works in all three languages
- [ ] Dark mode, text-size (A− / A+) and high-contrast buttons work in all three languages
- [ ] The "Skip to main content" link is the first Tab stop
- [ ] Gallery viewer: opens with Enter, ← → move between images, Esc closes it, focus returns to the thumbnail

### Devanagari display
- [ ] Marathi and Hindi text is not clipped (matras above and below letters are fully visible)
- [ ] No overlapping text in cards, buttons, drop-downs or the header on a 375 px wide screen
- [ ] There is no horizontal scrolling on any page in any language
- [ ] If the Google font cannot load (turn off internet), a system Devanagari font is still used

### Technical
- [ ] The browser console shows no errors while switching languages on every page
- [ ] Directions buttons open Google Maps with the right destination (map labels follow your own Google Maps language)

## Important notes

* The pictures are simple illustrations made for this project, **not photographs** of the temples. Replace the files in `images/` with your own photos (keep the same file names) and credit the photographer on the About page.
* Distances, times and costs are **estimates** (road distance is approximated from coordinates, and from the researched Pune distances in `temples.js` where available). Check temple timings, road conditions and bus schedules before travelling.
* Google Maps shows its own language according to the visitor's Google settings. The website only translates its own button labels and instructions.
* The Marathi and Hindi text was written carefully, but it would be good for a native speaker (for example a teacher or family member) to proofread it before you submit your portfolio.
