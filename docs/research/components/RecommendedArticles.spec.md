# RecommendedArticles Specification

## Overview
- **Target file:** `src/components/RecommendedArticles.tsx`
- **Screenshot:** `docs/design-references/internshipguide.jp/desktop-top.jpg` ("大学生おすすめ記事" section, near page bottom, still inside the 2-col wrap)
- **Interaction model:** static list

## DOM Structure
```
section.section
  h2.c-title "大学生おすすめ記事"
  div.section__body
    ul.recommend__list
      li.recommend__item (repeat x4)
        a.recommend__link
          div.recommend__thmb (circular avatar/thumbnail)
            img
          div.recommend__text (title)
        (chevron rendered via ::after on .recommend__link)
```

## Computed Styles (exact values)
- `.recommend__list`: margin-top:-1em; list-style:none
- `.recommend__item`: padding:1em 0; border-bottom:1px dotted #63dbff
- `.recommend__link`: display:flex; align-items:center; font-weight:bold; color:#333
  - `::after`: inline-block; padding-left:0.5em; FontAwesome chevron, color:#63dbff, font-size:20px
    → implement with `ChevronRightIcon` from `src/components/icons.tsx`, sized ~20px, color `#63dbff`,
    placed at the end of the row (`ml-auto` or flex `justify-between`).
- `.recommend__thmb`: position:relative; flex-shrink:0; width:50px; height:50px; overflow:hidden;
  border-radius:100% (perfect circle)
  - `.recommend__thmb img`: position:absolute; top:50%; left:50%; width:auto; height:50px;
    transform:translate(-50%,-50%) — i.e. a centered-crop circle avatar. With `next/image` simplest
    equivalent is `fill` + `object-cover` inside a `relative w-[50px] h-[50px] rounded-full overflow-hidden`
    wrapper.
- `.recommend__text`: flex-grow:1; text-align:center — title text sits centered between the avatar and
  the trailing chevron.

## Real Content (verbatim — 4 articles, use as mock data, `href: "#"`)
1. 大学１・２年生もインターンに行こう！ — thumbnail `/images/articles/about-intern_mini.jpg`
2. インターンシップとアルバイトの違いは？ — thumbnail `/images/articles/intern-parttime-difference_mini.jpg`
3. 長期インターンのメリット・デメリット — thumbnail `/images/articles/long-term-internship_mini.jpg`
4. 就活の時期はいつから？28卒・29卒学生の動き方を解説 — thumbnail `/images/articles/what-is-internship-mini.jpg`

(Image-to-title pairing above is best-effort from capture order; if a swap looks visually mismatched
it's a cosmetic, not a structural, issue — keep the 4 real images and 4 real titles either way.)

## Assets
- `/images/articles/about-intern_mini.jpg`
- `/images/articles/intern-parttime-difference_mini.jpg`
- `/images/articles/long-term-internship_mini.jpg`
- `/images/articles/what-is-internship-mini.jpg`
- `ChevronRightIcon` from `src/components/icons.tsx`

## Responsive Behavior
- No `@media` overrides found for `.recommend__*` classes — identical layout at all breakpoints
  (single-column list, avatar + centered title + chevron row).
- **Breakpoint:** none specific to this component.
