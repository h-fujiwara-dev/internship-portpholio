# BEHAVIORS.md — internshipguide.jp

Source: live site inspected via Chrome MCP + downloaded/pretty-printed production CSS
(`css/common/style.css`, `css/index/style.css`). This site is server-rendered (plain
PHP + jQuery, FontAwesome 6.6.0 icons, no React/Vue/Next). Breakpoints are **mobile-first**:
base styles = mobile, `@media (min-width: 480px)` = large mobile, `@media (min-width: 769px)` = desktop.
There is no third breakpoint; 769px is the single mobile↔desktop switch.

## Global mechanisms

### Sticky header
- `.l-body__header { position: sticky; top: 0; z-index: 10000; }`
- Background `rgba(255,255,255,.95)` with `border-bottom: 1px solid #e2e2e2`.
- Verified via scroll test (scrollTo 0 → 1500 → back): **no visual change on scroll** — no shrink,
  no shadow toggle, no color change. It just stays pinned. Simple `position: sticky`, nothing JS-driven.

### Sticky sidebar
- `.p-side-contents` / `.p-aside-contents { position: sticky; top: 70px; }` — desktop only (769px+).
  On mobile the sidebar banner stack flows inline (no sticky).

### Infinite logo marquee ("注目の掲載企業" strip under the hero)
- Structure: `.company-section > .c-company (overflow:hidden, display:flex) > .c-company__list (ul, display:flex)`
- The `<ul>` contains the logo `<li>` list **duplicated twice** (e.g. 19 unique logos → 38 `<li>` items)
  so the loop is seamless.
- Animation: `.c-company__list { animation: scroll 60s linear infinite; }`
  ```css
  @keyframes scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
  ```
- INTERACTION MODEL: time-driven, pure CSS, no JS, no pause-on-hover observed.
- 19 unique client logos, each `100×48` PNG, e.g. リクルート, トヨタ自動車, 電通, Ｓｋｙ, 三菱UFJ銀行,
  三井住友海上火災保険, 楽天, 一条工務店, 阪急阪神HG, 読売新聞社, ソフトバンク, 東京電力ホールディングス,
  Cygames, マイナビ, メルカリ, 青山商事, 経済産業省, and 2 more (rotates on each page load — the
  live site returns different subsets across reloads, so treat the exact set/order as illustrative).

### Client-side data population (IMPORTANT — do not treat as a scroll/IO behavior)
- The raw server HTML ships every content image as a shared placeholder `/img/dammy.png`.
- Real photos (company card thumbnails `intern_pic/*.png`, sidebar banner images `banner/*.png`,
  hero background) are swapped in by JS (`lazyload-image-polyfill.js`, `fetured_intern.js`,
  `bayworks.js`) after the initial paint / on scroll-into-view. This is a **lazy-load swap**, not an
  animated reveal — there's no fade/opacity transition tied to it. For the clone, just render real
  `<img>`/`next/image` tags directly (no lazy-load shim needed — Next.js already lazy-loads offscreen
  images by default).

### Deadline calendar mini-list ("厳選短期インターンシップ締切カレンダー")
- `.p-calendar { height: 190px; overflow-y: auto; }` — a **fixed-height internally-scrolling list**,
  not pagination, not a click-driven "load more" for the visible box itself.
- It renders ~300+ `<li>` items server-side; the 190px box only reveals ~2–3 rows, user scrolls
  *inside* the box to see more.
- Below the box, a separate "もっと見る" button (`.c-button`, full-width) navigates to a dedicated
  calendar page — this is a normal link, not an in-place expand.
- INTERACTION MODEL: static list + native internal scroll (`overflow-y:auto`); "もっと見る" is a
  plain navigation link.

### Featured companies / event ranking grids ("注目のインターンシップ企業", "大学生・就活生イベントランキング")
- Both reuse the exact same card component: `<li class="pickup__item p-company-card">`.
  - Ranking variant adds `<div class="p-company-card__rank">1位</div>` badge
    (`position:absolute; top:-0.5em; left:-0.5em; background:#5e9fb5; color:#fff`).
  - Both variants show: thumbnail image (`p-company-card__thmb`), title (`p-company-card__title-text`,
    color `#5e9fb5`, bottom border dotted `#63dbff`), tag list (`c-tag-list` → colored `c-tag` pills),
    location/meta line with a FontAwesome location-dot icon, description paragraph, and a
    "詳細をみる" text-link with a right-chevron pseudo-element (`::after` FontAwesome, color `#63dbff`).
- Desktop layout: `.pickup__list { display:flex; flex-wrap:wrap; }`, each `.pickup__list > li`
  = `flex: 0 0 31.3333%` (3-column grid), with the **2nd column only** getting
  `margin-left/right: 3%` as the gutter (a flex trick, not `gap`).
- Mobile: cards stack full-width, `margin-top: 2em` between them, thumbnail is `flex:0 0 38%` beside
  a `flex:0 0 60%` text summary (image-left/text-right row layout) — this is DIFFERENT from desktop
  where the whole card stacks vertically (`flex-direction:column`) with the image on top full-width.
- INTERACTION MODEL: static content grid. Only interaction = link hover.

### Hover states (all via generic opacity dimming — this is the site's one hover idiom, reused everywhere)
- Links: `a:hover { opacity: .6; }` (global default in `common-style.css`).
- Buttons `.c-button:hover { opacity:.6 }`; `.c-button--entry:hover` swaps to a darker solid color
  AND sets `opacity:1` (background `#de5485`→`#cb3b6e`); `.c-button--login:hover` same pattern
  (`#5ab9dd`→`#52abcd`).
- `.p-company-card__button:hover { opacity:.6 }`.
- `.p-footer-sitemap__list li:hover { opacity:.6 }` (desktop only, 769px+).
- `.p-footer-sns a:hover`, `.p-footer-gotop a:hover`, `.p-header-navi__list a:hover` (desktop: adds
  `background:#e2e2e2`, no opacity change) — mobile nav links have no hover (touch device).
- No custom transition-duration is declared anywhere for these — hovers are instant (default
  `opacity` snap, no `transition` property set), so don't invent an eased transition.

### Header navigation — desktop vs mobile are structurally different, not just resized
- Desktop (769px+): `.p-header-navi--pc` visible, a plain horizontal inline link row
  (採用担当者様はこちら / お役立ち情報 / 新規会員登録 / ログイン), each with a small mask-icon
  (`.p-header-navi__icon`, SVG mask via `--icon-url` CSS var, colored `#5e9fb5`).
- Mobile (<769px): `.p-header-navi--pc` is `display:none`; instead `.p-header-navi--sp` renders a
  **full-screen slide-out panel** (`min-height:100vh; background:#58717d`) triggered by a hamburger
  button (`.p-header-navi-button`, top-right, icon+label stacked, "MENU" style). The panel has its
  own close bar (`.p-header-navi__close_base`, height `5em`, `background:#58717d`) with a close (✕)
  button pinned `position:fixed; top:0; left:0`. Each nav link is full-width with a chevron `::after`
  and a `2px solid #fff` divider between items.
- INTERACTION MODEL: click-driven (hamburger toggles the mobile panel open/closed — implement with a
  boolean state + slide/fade, since exact JS transition wasn't captured, use a simple 250–300ms panel
  slide-in from the right or fade, matching the "full screen overlay nav" pattern).

### Hero section ("インターンシップを大学生が探すなら…")
- `.key-visual` background image: mobile-first `main_bg_mob.jpg`, swapped to `main_bg.jpg` at 769px+
  (`background-size:cover; background-position:center`), with a `.key-visual__inner` dark scrim
  `rgba(0,0,0,.4)` overlay (mobile) — at 769px+ this becomes a flex row (copy left, form right,
  `min-height:400px`).
- **The login form card is desktop-only.** `.form { display:none; }` by default; only shown
  `display:block` at 769px+ (dark translucent panel `rgba(0,0,0,.75)`, padding `2em`).
- **On mobile, the form is replaced by a CTA button** `.key-visual__cta` (visible only <769px,
  `display:none` at 769px+) — a pill/button prompting toward the same login/register action.
  Do not build a mobile card that just shrinks the desktop form — mobile truly renders a different
  element.
- Login card contents (desktop): email input, password input, "ログイン情報を記憶する" checkbox +
  ログイン button (`.c-button--login`, blue `#5ab9dd`), a green "LINEでログイン" button below, then a
  divider (`border-top:1px solid #999`) into a second mini-form ("非公開求人掲載！1分で簡単登録！" in
  red, email input, pink "会員登録（無料）" button `.c-button--entry`, `#de5485`).

### Mobile-only bottom UI (not on desktop, 769px+ hides both)
- `.p-tabbar`: a bottom tab bar, `position:fixed; bottom:-100%` by default with
  `transition: bottom .5s .5s` — it slides up into view when a JS-toggled class is applied (mobile
  quick-actions bar). Exact trigger wasn't confirmed on the homepage (may be scroll-distance or
  timer-based on this template); treat as a nice-to-have, not required for pixel-parity.
- `.p-bottom-login-box`: sticky bottom login prompt, `display:none` by default (only shown when a JS
  condition adds a visible/open class), 2-column grid of quick actions. Also mobile-only
  (`display:none` at 769px+).
- Both are OUT OF SCOPE for this clone unless the user asks for mobile deep-parity — they require
  reverse-engineering minified jQuery to get the exact trigger, which the guide flags as a
  "don't approximate" risk. Note them as known gaps in the completion report.

### Footer
- Dark slate background `#58717d` for both the nav block and (implicitly) sitemap links.
- "トップへ戻る" back-to-top link sits top-right of the footer nav block, chevron icon above text,
  underlined.
- 3-column sitemap list (desktop `display:flex; justify-content:space-between`, each column
  `width: calc(33.33% - 1em)`); mobile stacks single-column. Each link row has a bottom border
  (`#6c8d9c`) and a right-aligned chevron `::after`.
- Social row: 2 circular white buttons (X, Facebook icons in `#58717d`), centered, `2em` squares.
- Copyright block below: centered small logo (30% width mobile / 120px desktop), copyright text
  `#58717d`, reCAPTCHA legal line.

## Responsive breakpoint summary
- **769px is the only structural breakpoint.** There is no separate tablet layout — anything ≥769px
  gets the "desktop" treatment (2-col grid `l-wrap`, 3-col card grids, horizontal nav, visible login
  form), anything <769px gets the mobile treatment (stacked column, hamburger nav, CTA button instead
  of form, vertical card layout with image-left/text-right).
- A secondary `480px` breakpoint exists only for one micro-layout (`.p-form-submit` switches from
  stacked buttons to a horizontal row) — not relevant to the homepage.
- `.l-wrap`: mobile = flex column with `gap:30px`; desktop (769px+) = CSS grid
  `grid-template-columns: calc(100% - 300px) 300px` (main content + 300px fixed sidebar).
- `.l-contents`: `max-width:650px` mobile → `max-width:980px` desktop (769px+).

## What NOT to build
- Do not build the header as a shrink-on-scroll header — confirmed static via scroll test.
- Do not build the logo strip as a manual carousel with buttons/dots — it's a pure CSS infinite
  marquee, no controls, no pause-on-hover observed.
- Do not treat the calendar box's internal scroll as a "load more" click interaction.
- Do not make the mobile hero literally hide the login form via `display:none` on the same DOM the
  desktop uses — build it as genuinely different content (CTA button vs. form), matching source.
