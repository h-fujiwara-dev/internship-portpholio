# DeadlineCalendar Specification

## Overview
- **Target file:** `src/components/DeadlineCalendar.tsx`
- **Screenshot:** `docs/design-references/internshipguide.jp/desktop-top.jpg` ("厳選短期インターンシップ締切カレンダー" section)
- **Interaction model:** static list + native internal scroll (fixed-height box, `overflow-y:auto`) —
  NOT pagination, NOT a click-to-expand. The "もっと見る" button below is a plain navigation link.

## DOM Structure
```
section.section (calendar section, in the LEFT/main column of the page's 2-col wrap)
  h2.c-title "厳選短期インターンシップ締切カレンダー"
  div.section__body
    ul.p-calendar (fixed height 190px, overflow-y:auto, internal scroll)
      li.p-calendar-unit (repeat, border-bottom dotted)
        div.p-calendar-unit__deadline (flex:0 0 50px column)
          div.p-calendar-deadline
            span.p-calendar-deadline__month "07月"
            span.p-calendar-deadline__day "24"
          span.p-calendar-unit__deadline-label "締切当日" (red text)
        div.p-calendar-unit__title (column: tags row + title link)
          ul.c-tag-list (tags e.g. "28卒" grade1, "ES" event)
          a "【いすゞ自動車株式会社】 夏季オープンカンパニー 生産・開発・事務技術職" (underlined, #333)
    a.c-button.c-button--full "もっと見る" (full-width button link below the scroll box)
```

## Computed Styles (exact values)

### `.c-title` (section heading — reuse for FeaturedCompanies/EventRanking headings too)
- padding: 0 0.5em 0.4em; font-weight:bold; color:#58717d; text-align:center; letter-spacing:0.02em;
  border-bottom: 3px solid #63dbff; font-size:18px

### `.p-calendar` (the scrollable box)
- position:relative; z-index:1; height:190px; overflow-y:auto; list-style:none
- This is a HARD fixed height — do not make it `min-height` or auto-grow. The whole point is a
  small peek-window with internal scroll.

### `.p-calendar-unit` (each row)
- display:flex; gap:16px; align-items:flex-start; padding:1em; border-bottom:1px dotted #63dbff
- first child: no top padding (`:first-child { padding-top:0 }`)
- first flex child (`.p-calendar-unit__deadline`): flex:0 0 50px

### `.p-calendar-deadline` (month/day badge)
- display:flex; flex-direction:column; justify-content:center
- `.p-calendar-deadline__month`: padding:0.2em 0.5em; font-size:12px; font-weight:bold; color:#fff;
  text-align:center; background-color:#c00; border-radius:5px 5px 0 0
- `.p-calendar-deadline__day`: font-weight:bold; text-align:center; border:1px solid #ccc; font-size:20px;
  line-height:1.1; padding:1px 0 (white background, black-ish text — default body color #333)
- `.p-calendar-unit__deadline-label`: line-height:1.2; text-align:center; font-size:12px; color:#c00
  (e.g. "締切当日", "締切まであと2日")

### `.p-calendar-unit__title`
- display:flex; flex-direction:column; gap:8px; margin-top:0.5em; font-size:14px
- tags use the same `c-tag` pill component/colors as `CompanyCard` (import the same `TAG_COLOR` map —
  don't redefine it) — e.g. `grade1` teal `#5e9fb5`, `event` orange `#f96`
- title link: color:#333; text-decoration:underline

### "もっと見る" button
- Reuse `.c-button` base (padding:10px; font-weight:bold; color:#fff; background:#5e9fb5;
  border:1px solid #5e9fb5; border-radius:3px; letter-spacing:2px) + `--full` (width:100%), trailing
  chevron via `::after`. Hover: `opacity:.6`.

## Real Content (verbatim, use these 10 rows as mock data)
| month | day | label | tags | title |
|---|---|---|---|---|
| 07月 | 24 | 締切当日 | 28卒(grade1), ES(event) | 【いすゞ自動車株式会社】 夏季オープンカンパニー 生産・開発・事務技術職 |
| 07月 | 24 | 締切当日 | 28卒(grade1), 応募フォーム(direct) | 【鹿島建設株式会社】 機電系 2DAYSインターンシップ 北海道開催 |
| 07月 | 24 | 締切当日 | その他(soon) | 【東急建設株式会社】 機電ワーキングセミナー 東京対面開催 |
| 07月 | 24 | 締切当日 | 既卒(grade3), 28卒以降(grade2), その他(soon) | 【東急建設株式会社】 設備ワーキングセミナー　東京開催 |
| 07月 | 24 | 締切当日 | 28卒(grade1), 応募フォーム(direct) | 【株式会社ローソン】 東北限定開催 課題解決プログラム「ローソンキャリアスクール」 |
| 07月 | 26 | 締切まであと2日 | 28卒(grade1), ES(event) | 【いすゞ自動車株式会社】 開発職夏季就業体験型インターンシップ　神奈川開催 |
| 07月 | 27 | 締切まであと3日 | 短期(short-term), オンライン(online) | 株式会社バンダイナムコフィルムワークス 夏季1dayイベント |
| 07月 | 28 | 締切まであと4日 | 1day(1day), オンライン(online) | 株式会社キーエンス　営業職インターンシップ |
| 07月 | 30 | 締切まであと6日 | 1day(1day), オンライン(online) | 株式会社ニトリ　就業体験コース |
| 08月 | 03 | 締切まであと10日 | イベント(event), 特典あり(benefit) | Super Business Forum 東京開催 |

(Tag variant names in parentheses map to the `TagVariant` union in `src/types/internship.ts` /
the `TAG_COLOR` map in `CompanyCard.tsx` — reuse, don't duplicate.)

Link every row to `href: "#"` (mock — no real detail pages in this clone).

## Assets
- None beyond the shared `c-button` styling and tag color map already established.

## Responsive Behavior
- Layout is IDENTICAL at all breakpoints (no `@media` overrides found on `.p-calendar*` classes) —
  the 190px scroll box and row layout apply the same on mobile and desktop. Only the page-level
  2-column wrap around it changes (this section is full-width in the main column either way).
- **Breakpoint:** none specific to this component.
