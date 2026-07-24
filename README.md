# インターンコンパス

<a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License" /></a>

大学生向けインターンシップ情報サイトを、AIコーディングエージェントで解析・再構築したポートフォリオ実装です。実在のインターン情報サイト「[internshipguide.jp](https://internshipguide.jp/)」のトップページをリバースエンジニアリングし、デザイン・レイアウト・インタラクションをピクセル単位で再現した上で、サービス名・企業名・画像などはすべて架空のものに置き換えています。

## このプロジェクトについて

- **目的** — 実在サービスのUIを題材に、「デザインの精密な再現力」と「モダンなフロントエンド実装力」を示すポートフォリオとして制作しました。
- **手法** — Claude Code (Opus 4.8) 上で動作する自作のAIエージェントパイプライン(`/clone-website` スキル)を用い、対象サイトのスクリーンショット取得・CSS計算値の抽出・アセットダウンロード・コンポーネント仕様書作成・並列実装までを自動化しています。
- **公開にあたって** — サービス名は「インターンコンパス」、運営会社は架空の「株式会社ネクストラボ」としています。掲載企業名・ロゴ・写真・お知らせ内容はすべてダミーデータに置き換え済みで、実在の企業・サービスとは一切関係ありません。

## 実装内容

トップページを構成する以下のセクションを、実サイトの `getComputedStyle()` の値をベースに忠実に再現しました。

| セクション | 内容 |
| --- | --- |
| Header | グローバルナビゲーション、ロゴ |
| Hero | ログインカード、締切カレンダーへの導線 |
| FeaturedCompanies | 注目企業カード一覧 |
| AboutSection | サービス紹介 |
| DeadlineCalendar | エントリー締切カレンダー |
| RecommendedArticles | おすすめ記事一覧 |
| EventRanking | 人気イベントランキング |
| SidebarBanners | サイドバー広告枠(スクロール追従) |
| ClientLogoMarquee | 導入企業ロゴの無限スクロール(2トラック) |
| Footer | フッターリンク、法的表記 |

見た目の一致だけでなく、レイアウト崩れの修正・レスポンシブ対応・スクロール速度や間隔の調整など、挙動レベルでの再現にもこだわっています。

## アピールポイント

- 実サイトの構造・スタイル・インタラクションを詳細に分析し、コンポーネント仕様書に落とし込んだ上で実装する設計力
- Next.js 16 (App Router) / React 19 / TypeScript (strict) / Tailwind CSS v4 / shadcn(Radix) によるモダンなフロントエンド実装力
- AIエージェントを活用した開発ワークフロー(git worktreeでの並列ビルド・分業)の構築・運用経験
- 著作権・商標に配慮した適切なデータ匿名化・de-branding対応

## 技術スタック

- **Next.js 16** — App Router, React 19, TypeScript strict
- **shadcn/ui** — Radix primitives + Tailwind CSS v4
- **Tailwind CSS v4** — oklchデザイントークン
- **Lucide React** — アイコン

## プロジェクト構成

```
src/
  app/                # Next.js ルーティング
  components/         # Reactコンポーネント (Header, Hero, FeaturedCompanies など)
    ui/               # shadcn/ui プリミティブ
    icons.tsx         # 抽出したSVGアイコン
  lib/utils.ts        # cn() ユーティリティ
  types/              # TypeScript型定義
docs/
  research/           # 解析結果・コンポーネント仕様書
  design-references/  # 参考スクリーンショット
public/
  images/             # ダミー画像・プレースホルダー
  seo/                # favicon, OGP画像
```

## セットアップ

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

### コマンド一覧

```bash
npm run dev       # 開発サーバー起動
npm run build     # 本番ビルド
npm run lint      # ESLintチェック
npm run typecheck # 型チェック
npm run check     # lint + typecheck + build
```

### Dockerを使う場合

```bash
docker compose up app --build # ビルドして起動
docker compose up dev --build # 開発モードで起動 (port 3001)
```

## 免責事項

本リポジトリはポートフォリオ・技術デモ目的で作成したものであり、実在の企業・サービス・人物とは一切関係ありません。掲載されている企業名・ロゴ・写真・お知らせ・記事内容はすべて架空のものです。フィッシングや実在サービスへのなりすまし、対象サイトの利用規約に反する用途での利用はできません。

## クレジット

本プロジェクトは [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) をベースに、AIエージェントによるWebサイト解析・再構築パイプラインを利用して構築しました。

## License

MIT
