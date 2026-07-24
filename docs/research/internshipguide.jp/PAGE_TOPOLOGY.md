# PAGE_TOPOLOGY.md — internshipguide.jp (top page)

Total scroll height at 1470px desktop viewport: ~4279px. Single page, no client-side routing.
Layout shell: `.l-body` (flex column, `min-height:100svh`) → sticky `.l-body__header` +
`.l-body__contents` (`main`, contains `.l-wrap` grid) + `.l-body__footer`.

Two-column layout kicks in at 769px+: `.l-wrap { grid-template-columns: calc(100% - 300px) 300px; }`
— left = main content column, right = persistent sticky sidebar (banners) that runs alongside
sections 4–8 below. Below 769px the sidebar content flows inline after each relevant section
(no longer sticky).

## Sections, top to bottom

1. **Header** (`Header.tsx`) — sticky, z-index 10000. Logo left, horizontal nav right (desktop) /
   hamburger + full-screen slide panel (mobile). Static — no scroll-triggered style change.
   Interaction model: click-driven (mobile menu open/close only).

2. **Hero + Login Card** (`Hero.tsx`) — `.key-visual`, full-bleed background photo (office workers),
   dark scrim, left-aligned heading + subcopy, right-aligned login/register card (desktop only) or
   CTA button (mobile only — genuinely different markup, not a resize of the same thing).
   Interaction model: static (form inputs have normal focus/hover states only).

3. **Client Logo Marquee** (`ClientLogoMarquee.tsx`) — `.company-section > .c-company`, infinite
   CSS-animated horizontal scroll of ~19 client logos (60s linear loop, list duplicated ×2).
   Interaction model: time-driven, pure CSS.

4. **Deadline Calendar** (`DeadlineCalendar.tsx`) — "厳選短期インターンシップ締切カレンダー" heading
   + `.p-calendar` fixed-height (190px) internally-scrolling list of deadline rows (month/day badge,
   grade/type tags, title link), then a full-width "もっと見る" button link below the box.
   Sits in the LEFT column; sidebar banners begin alongside it in the right column.
   Interaction model: static list, native internal scroll.

5. **Sidebar Banner Stack** (`SidebarBanners.tsx`) — right column, sticky (`top:70px`, desktop only).
   9 stacked promotional banner images/links (auto-fit grid, `minmax(170px,1fr)`, gap 8px — effectively
   single column at 300px width). Persists next to sections 4–7. Interaction model: static links.

6. **Featured Companies** ("注目のインターンシップ企業", `FeaturedCompanies.tsx`) — 3-column card grid
   (`pickup__list`, `flex-wrap`, each card `flex:0 0 31.33%`), reuses the `CompanyCard` component (see
   #4/#7 — same underlying `.p-company-card` markup, no rank badge here). Real captured cards include
   伊藤忠エネクス株式会社, 株式会社キーエンス営業職, ニトリ, Bandai Namco Filmworks, Sky, キーエンスS職,
   etc. (multiple rows, "注目のインターンをもっと見る" button below). Interaction model: static grid.

7. **Event Ranking** ("大学生・就活生イベントランキング", `EventRanking.tsx`) — same `CompanyCard`
   component as #6, PLUS a `p-company-card__rank` badge ("1位"/"2位"/"3位", teal `#5e9fb5` background,
   absolutely positioned top-left overlapping the card corner). 3 cards: Super Business Forum 東京開催,
   グロース就活DXPO'26 夏, Super Business Forum 大阪開催. "大学生・就活生イベントをもっと見る" button
   below. Sidebar continues here (last banners: マンガでわかる, 就活イベントまとめ, 体験談, 本選考体験記,
   内定者のES).

8. **Recommended Articles** ("大学生おすすめ記事", `RecommendedArticles.tsx`) — simple vertical list,
   circular thumbnail (50×50, `object-fit` via absolute-centered `<img>`) + bold title + chevron arrow,
   dotted bottom border per row (`#63dbff`). 4 articles captured: 大学１・２年生もインターンに行こう！/
   インターンシップとアルバイトの違いは？/ 長期インターンのメリット・デメリット/
   就活の時期はいつから？28卒・29卒学生の動き方を解説. This is the last row inside the two-column
   `.l-wrap` — sidebar ends here too.

9. **About Box** ("インターンシップガイドとは", `AboutSection.tsx`) — full-width (below the 2-column
   wrap, back to single column), bordered box (`1px solid #3c8399`), heading + 3 paragraphs of body
   copy + full-width pink CTA button ("今すぐインターンシップを探す", `.c-button--entry`).
   Interaction model: static.

10. **Footer** (`Footer.tsx`) — dark slate (`#58717d`) nav block: "トップへ戻る" link top-right, 3-column
    sitemap (16 links total), centered social icons (X, Facebook), then a lighter copyright strip
    (centered small logo, copyright text, reCAPTCHA legal line). Interaction model: static, hover-only.

## Z-index / layering
- Header: `z-index: 10000` (sticky, above everything).
- Mobile nav overlay panel: `z-index: 200` when open (fixed, full-viewport).
- Mobile bottom tab bar (`.p-tabbar`, out of scope per BEHAVIORS.md): `z-index: 50`.
- No modals/tooltips on the homepage itself.

## Build sequencing implied by this topology
Foundation (fonts/colors/types/icons/assets) → Header → Hero (+ its own login-card sub-component) →
ClientLogoMarquee → CompanyCard (shared, build once) → DeadlineCalendar (uses CompanyCard-adjacent but
actually its own row layout, see spec) → SidebarBanners → FeaturedCompanies (uses CompanyCard) →
EventRanking (uses CompanyCard + rank badge) → RecommendedArticles → AboutSection → Footer → assemble
`page.tsx`.
