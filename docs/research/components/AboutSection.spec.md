# AboutSection Specification

## Overview
- **Target file:** `src/components/AboutSection.tsx`
- **Screenshot:** `docs/design-references/internshipguide.jp/desktop-top.jpg` ("インターンシップガイドとは" boxed section, just above the footer)
- **Interaction model:** static

## DOM Structure
```
div.description (bordered box, full-width, below the 2-column wrap — back to single column)
  h2.description__title "インターンシップガイドとは"
  p.description__text (3 paragraphs, see Text Content)
  div.description__link
    a.c-button.c-button--entry "今すぐインターンシップを探す"
```

## Computed Styles (exact values)
- `.description`: padding:1em; border:1px solid #3c8399
- `.description__title`: width:95%; max-width:450px; padding:0 1em; margin:0 auto; color:#000;
  text-align:center; font-weight:bold (inherit ~20px sizing from context — matches `.p-login-box__title`
  scale, render at `text-xl font-bold`)
- `.description__text`: margin-top:1em; regular body copy, default color `#333`, contains 3 paragraphs
  (line breaks between them as shown in Text Content below)
- `.description__link`: margin-top:1em
  - `a`: width:100% → full-width `.c-button--entry` (bg `#de5485`, hover `#cb3b6e`, white bold text,
    letter-spacing:2px, padding:10px, border-radius:3px, trailing chevron `::after`)

## Text Content (verbatim, 3 paragraphs)
> インターンシップガイドは、日本全国の企業の情報を掲載したインターンシップ総合サイトです。
>
> 就活生向けの情報はもちろんのこと、お金がもらえてアルバイト代わりにもなる有給インターン、大学1年生や2年生も参加可能で経験とビジネススキルが身につく長期インターンシップ、企業研究や職業研究するのに適した1day仕事体験、短期やサマーインターンなど、大企業からベンチャー企業まで様々な種類の求人を掲載しています。都道府県別に探すだけでなく、エンジニア・営業・企画・マーケティングなどの職種から検索したり、締切順、新着順や人気順での並び替え、金融・IT・メーカー・コンサルなど業種から検索することもできます。
>
> また1年生から参加出来る就活イベント情報や人気企業の内定者のES(エントリーシート)や就活体験談などの会員限定コンテンツを始め、企業とのメールや電話の仕方や、服装のマナー、面接対策など、就活にも役立つコラムも多数掲載しています。インターンシップガイドを利用して大学生活をもっと有意義にしよう！

Button label: "今すぐインターンシップを探す"

## Assets
- None (text + button only). `ChevronRightIcon` from `src/components/icons.tsx` for the button's
  trailing chevron.

## Responsive Behavior
- No `@media` overrides found for `.description*` classes — same padded bordered box at all
  breakpoints, just reflows within the page's max-width container.
- **Breakpoint:** none specific to this component.
