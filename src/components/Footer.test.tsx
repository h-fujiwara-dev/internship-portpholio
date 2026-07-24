import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { Footer } from "@/components/Footer"

describe("Footer", () => {
  it("renders the back-to-top link pointing at #top", () => {
    render(<Footer />)
    expect(screen.getByRole("link", { name: /トップへ戻る/ })).toHaveAttribute(
      "href",
      "#top"
    )
  })

  it("renders 17 sitemap links across the 3 columns", () => {
    render(<Footer />)
    const sitemapLinks = [
      "トップページ",
      "会社概要",
      "お問い合わせ",
      "会員登録（無料）",
      "全国のインターン・インターンシップ",
      "Webテスト対策",
      "企業ログイン",
      "多くの企業様に支持される理由",
      "インターンシップの掲載無料",
      "説明会、インターンの掲載・採用無料",
      "IC学生集客サービス",
      "インターンコンパスとは",
      "インターン生募集",
      "利用規約",
      "プライバシーポリシー",
      "注目のキーワード一覧",
      "一般教養クイズ集(外部)",
    ]
    for (const label of sitemapLinks) {
      expect(screen.getByRole("link", { name: label })).toBeInTheDocument()
    }
  })

  it("renders the site logo and copyright notice", () => {
    render(<Footer />)
    expect(screen.getByText("インターンコンパス")).toBeInTheDocument()
    expect(
      screen.getByText(/COPYRIGHT © 2014 NextLab, Inc\. ALL RIGHTS RESERVED\./)
    ).toBeInTheDocument()
  })
})
