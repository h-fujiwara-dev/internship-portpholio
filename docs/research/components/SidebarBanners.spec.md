# SidebarBanners Specification

## Overview
- **Target file:** `src/components/SidebarBanners.tsx`
- **Screenshot:** `docs/design-references/internshipguide.jp/desktop-top.jpg` (right column banners)
- **Interaction model:** static links; container is sticky on desktop only

## DOM Structure
```
div.p-aside-contents (sticky wrapper, desktop only)
  div.p-side-banner (grid of banner items)
    div.p-side-banner__item x9
      a > img
```
This component renders the RIGHT sidebar column. It sits beside sections 4–8 in the page (Deadline
Calendar through Recommended Articles) — in the page assembly it's placed once in the grid's second
column (`.l-wrap__side`), not repeated per-section.

## Computed Styles (exact values)

### Outer sticky wrapper — `.p-aside-contents` (or `.p-side-contents`, same behavior)
- display:flex; flex-direction:column; gap:24px (mobile, non-sticky)
- Desktop (≥769px): position:sticky; top:70px; padding-left:24px

### `.p-side-banner` (grid)
- display:grid; grid-template-columns: repeat(auto-fit, minmax(170px,1fr)); gap:8px
- margin-top:2em (mobile); margin-top:0 (≥769px)
- At the sidebar's actual rendered width (300px fixed column on desktop), `minmax(170px,1fr)`
  resolves to a single column — render this as a simple vertical stack (`flex-col gap-2`) rather than
  literally implementing `auto-fit` grid math; visually identical at this container width.

### `.p-side-banner__item img`
- vertical-align: bottom
- `width:100%; height:auto` (inherited from `.l-wrap__side img` / `.p-contents__side img` rules)

## States & Behaviors
- No hover effect specifically declared on banner images/links beyond the global `a:hover{opacity:.6}`.
- Sticky only kicks in at ≥769px; on mobile the banner stack flows inline in normal document order
  (it will appear once, after the sections it accompanies, since there's only one sidebar slot in the
  single-column mobile layout).

## Assets (9 banners, in this order, already downloaded to `public/images/banners/`)
1. 大学1・2年生もインターンに行こう — banner-01.png
2. 見逃し注意!! 厳選インターンシップ締め切りカレンダー — banner-02.png
3. 就活エントリー締切カレンダー — banner-03.png
4. 適性検査・SPI対策の決定版 Webテスト対策問題集&模擬試験 — banner-04.jpg
5. マンガでわかるインターンシップのすすめ — banner-05.png
6. 就活イベントまとめ — banner-06.png
7. インターンシップ体験談 — banner-07.png
8. 就活!!本選考体験記 — banner-08.jpg
9. 内定者のES — banner-09.png

Build a `SIDEBAR_BANNERS: SidebarBanner[]` array (type in `src/types/internship.ts`) with
`image: "/images/banners/banner-0N.<ext>"`, the `alt` text above, and `href: "#"` for each.

## Responsive Behavior
- **Desktop (≥769px):** sticky, `top:70px`, single 300px-wide column, no top margin.
- **Mobile (<769px):** not sticky, `margin-top:2em`, stacked full-width, flows after its section.
- **Breakpoint:** 769px
