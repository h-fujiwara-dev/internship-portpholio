# EventRanking Specification

## Overview
- **Target file:** `src/components/EventRanking.tsx`
- **Screenshot:** `docs/design-references/internshipguide.jp/desktop-top.jpg` ("大学生・就活生イベントランキング" section)
- **Interaction model:** static grid
- **Dependency:** uses the already-built `CompanyCard` component from `src/components/CompanyCard.tsx`
  — this section is IDENTICAL markup/CSS to FeaturedCompanies, with one addition: each card's `rank`
  prop is set ("1位" / "2位" / "3位"), which renders the teal badge (`CompanyCard` already implements
  this — just pass the `rank` field).

## DOM Structure
```
section.section.pickup
  h2.c-title "大学生・就活生イベントランキング"
  div.section__body
    ul.pickup__list
      <CompanyCard card={...} />  x3 (each with rank: "1位" | "2位" | "3位")
    a.c-button.c-button--full "大学生・就活生イベントをもっと見る"
```

## Computed Styles
- Identical to FeaturedCompanies.spec.md — same `.c-title`, same `.pickup__list` 3-column flex-wrap
  layout (only 3 items here so it's naturally one row on desktop), same "もっと見る" button treatment.
- Rank badge styling is already implemented in `CompanyCard.tsx`: `absolute -top-2 -left-2 z-10
  bg-[#5e9fb5] text-white px-4 py-[0.2em] font-bold`.

## Real Content (verbatim — 3 cards)
1. **rank: 1位 — Super Business Forum 東京開催** — tags: イベント(event), 特典あり(benefit) —
   有楽町駅：東京国際フォーラム — 【8/3@東京】日本最大級！資生堂グループ、集英社、松竹、伊藤忠商事などが出展！
2. **rank: 2位 — グロース就活DXPO'26 夏** — tags: イベント(event), 特典あり(benefit) —
   東京ビッグサイト西1ホール — 【8/22(土)@東京ビッグサイト】成長企業125社が集まる大規模就活イベント
3. **rank: 3位 — Super Business Forum 大阪開催** — tags: イベント(event), 特典あり(benefit) —
   大阪府：グランフロント大阪 — 【8/1-2@大阪】NTTデータ関西、近畿日本鉄道、伊藤忠商事など約190社が参加予定！

Use company thumbnails `/images/companies/0002_0743.png`, `/images/companies/0002_1075.png`,
`/images/companies/0002_0603.png` for cards 1/2/3 respectively (real captured event-card photos).
All `href: "#"`.

## Assets
- `/images/companies/0002_0743.png`, `0002_1075.png`, `0002_0603.png`

## Responsive Behavior
- Same as FeaturedCompanies — 3-column desktop / 1-column mobile, no special-casing needed since
  there are exactly 3 cards (fills one row on desktop either way).
- **Breakpoint:** 769px
