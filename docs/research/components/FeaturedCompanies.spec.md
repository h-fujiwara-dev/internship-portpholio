# FeaturedCompanies Specification

## Overview
- **Target file:** `src/components/FeaturedCompanies.tsx`
- **Screenshot:** `docs/design-references/internshipguide.jp/desktop-top.jpg` ("注目のインターンシップ企業" section, scroll ~1 screen down)
- **Interaction model:** static grid
- **Dependency:** uses the already-built `CompanyCard` component from `src/components/CompanyCard.tsx`
  (import it — do not recreate the card markup/styles here). `CompanyCard` accepts a
  `card: CompanyCard` prop (type in `src/types/internship.ts`, no `rank` for this section).

## DOM Structure
```
section.section.pickup
  h2.c-title "注目のインターンシップ企業"
  div.section__body
    ul.pickup__list
      <CompanyCard card={...} />  x6 (no rank badge)
    a.c-button.c-button--full "注目のインターンをもっと見る"
```

## Computed Styles (exact values)
- `h2.c-title`: see DeadlineCalendar.spec.md — reuse identical heading styling (font-size:18px,
  color:#58717d, border-bottom:3px solid #63dbff, centered).
- `.pickup__list`: `list-style:none` (mobile: default block stacking, `> li { margin-top:2em }`).
  Desktop (≥769px): `display:flex; flex-wrap:wrap`, each `> li { flex: 0 0 31.3333%; margin-top:0 }`,
  and the 2nd item in each row of 3 gets the gutter: `:nth-child(2) { margin-right:3%; margin-left:3% }`.
  Practically: build this as `md:flex md:flex-wrap` with each card `md:basis-[31.3333%]` and
  `md:[&:nth-child(2)]:mx-[3%]` (or simpler: use a 3-column CSS grid with `gap` that visually matches —
  either approach is fine as long as 3 columns at ~31.3%/3%/31.3%/3%/31.3% ratios result).
- `.section` (outer): margin-top:3em. `.section__body`: padding:0 1em; margin-top:2em.
- "もっと見る" button: same `.c-button.c-button--full` treatment as DeadlineCalendar (bg `#5e9fb5`,
  full width, chevron, hover `opacity:.6`).

## Real Content (verbatim — 6 cards, use as mock data)
1. **伊藤忠エネクス株式会社** — tags: 短期(short-term) — 東京都：虎ノ門駅、霞が関駅 — 【夏期オープンカンパニー/対面】エネルギーの未来を考える3DAYS OPENCOMPANY — image `/images/companies/0002_1009.png`
2. **株式会社キーエンス　営業職インターンシップ** — tags: 1day(1day), オンライン(online) — 浜松町・新大阪 — 「営業職のリアル」を知る ～営業利益率50％超！期待を超える営業力の「謎」に迫る！～ — image `/images/companies/0002_0539.png`
3. **キャリアを共に考えよう！選べる！就業体験コース** — tags: 1day(1day), オンライン(online) — オンライン、東京、大阪 — 5つのシゴト体験を通じて、自分の可能性の扉を開けよう！ — image `/images/companies/0002_0599.png`
4. **Bandai Namco Filmworks Presents SUMMER FESTIVAL 2026 ～アニメ制作から商品化・プロモーションまでを網羅する1dayビジネス体験～** — tags: 1day(1day), オンライン(online) — オンラインでの開催となります — 【8月27日開催予定！】28新卒向け・バンダイナムコフィルムワークス 夏の大型イベント！ — image `/images/companies/0002_0977.png`
5. **【28卒】Ｓｋｙ株式会社　好働力！体感1DAYイベント** — tags: 1day(1day) — 北海道、福岡 — 札幌・福岡で開催！先輩社員座談会もセットで開催！ — image `/images/companies/0002_1319.png`
6. **キーエンス S職(事務職) インターンシップ** — tags: 1day(1day), オンライン(online) — 東京：浜松町駅 大阪：新大阪駅 — 高収益を支える、事務領域のスペシャリストの仕事を体験！ — image `/images/companies/0002_1476.png`

All `href: "#"`.

## Assets
- Company thumbnails: `/images/companies/0002_1009.png`, `0002_0539.png`, `0002_0599.png`,
  `0002_0977.png`, `0002_1319.png`, `0002_1476.png` (already downloaded)

## Responsive Behavior
- **Desktop (≥769px):** 3-column flex-wrap grid, cards stack their own content vertically
  (`CompanyCard` already handles this internally via its own responsive classes).
- **Mobile (<769px):** single column, `margin-top:2em` between cards (`CompanyCard` renders its
  image-left/text-right row layout automatically at this width — no extra work needed here).
- **Breakpoint:** 769px
