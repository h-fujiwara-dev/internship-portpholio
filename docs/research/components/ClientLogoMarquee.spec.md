# ClientLogoMarquee Specification

## Overview
- **Target file:** `src/components/ClientLogoMarquee.tsx`
- **Screenshot:** `docs/design-references/internshipguide.jp/desktop-top.jpg` (strip just below hero)
- **Interaction model:** time-driven, pure CSS infinite marquee (no JS, no controls, no pause-on-hover)

## DOM Structure
```
div.company-section (overflow:hidden; margin:16px 0 mobile / 32px-56px desktop)
  div.c-company (overflow:hidden; display:flex)
    ul.c-company__list (display:flex; animated)
      li.c-company__item x38  (19 unique logos, each duplicated once, back-to-back, for a seamless loop)
        img (100×48)
```

## Computed Styles (exact values)
- `.company-section`: overflow:hidden; margin:16px 0 (mobile); at ≥769px: margin-top:32px; margin-bottom:56px
- `.c-company`: overflow:hidden; display:flex (this clips the track to the viewport width)
- `.c-company__list`: display:flex; animation: `ig-logo-scroll 60s linear infinite` (keyframes already
  added to `globals.css` as `.ig-marquee-track` utility class — apply that class to this `<ul>`,
  don't redeclare the keyframes)
- `@keyframes ig-logo-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }`
- `.c-company__item`: each `<li>` is a flex item, image is 100×48 (`width:100; height:48`), no gap
  declared (images butt against each other — add a small visual gap via item padding/margin if the
  spacing looks too tight; source had no explicit gap so keep it minimal, e.g. `mx-4` between logos).

## States & Behaviors
### Infinite scroll marquee
- **Trigger:** none — runs continuously on mount, time-driven.
- **Mechanism:** render the 19-logo array TWICE back-to-back in the DOM (`[...logos, ...logos]`), wrap
  in a flex `<ul>`, animate that `<ul>` with `translateX(0)` → `translateX(-100%)` over 60s linear
  infinite. Because the content is duplicated, `-100%` (of the doubled track's width, i.e. exactly one
  full copy of the logos) lands back at the visual start, making the loop seamless.
- **Implementation approach:** CSS animation only (no JS/requestAnimationFrame needed). Apply
  `overflow-hidden` on the outer wrapper so only one viewport-width of logos shows at a time.

## Assets (19 unique logos, in this order, downloaded to `public/images/logos/`)
1. リクルート — recruit.png
2. トヨタ自動車 — toyota.png
3. 電通 — dentsu.png
4. Ｓｋｙ — sky.png
5. 三菱UFJ銀行 — mufg.png
6. 三井住友海上火災保険 — ms-ad.png
7. 楽天 — rakuten.png
8. 一条工務店 — ichijo.png
9. 阪急阪神HG — hankyu-hanshin.png
10. 読売新聞社 — yomiuri.png
11. ソフトバンク — softbank.png
12. 東京電力ホールディングス — tepco.png
13. 株式会社Cygames — cygames.png
14. マイナビ — mynavi.png
15. メルカリ — mercari.png
16. 青山商事 — aoyama.png
17. 経済産業省 — meti.png
18. シンプレクス・ホールディングス株式会社 — simplex.png
19. ドワンゴ — dwango.png

All images are already downloaded to `public/images/logos/*.png` (see `scripts/download-assets.mjs`).
Build a `CLIENT_LOGOS: ClientLogo[]` array (type already defined in `src/types/internship.ts`) with
`name` + `image: "/images/logos/<file>.png"` for each of the 19 above, in this order.

## Responsive Behavior
- Same marquee behaves identically at all breakpoints — only the outer container margin changes
  (16px mobile → 32px/56px top/bottom desktop, per `.company-section` above). No layout restructuring.
