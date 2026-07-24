import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { Footer } from "@/components/Footer"

describe("Footer", () => {
  it("「トップへ戻る」リンクが #top を指している", () => {
    render(<Footer />)
    expect(screen.getByRole("link", { name: /トップへ戻る/ })).toHaveAttribute(
      "href",
      "#top"
    )
  })

  it("3つのカラムにまたがるサイトマップリンクが17件表示される", () => {
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

  it("サイトロゴとコピーライト表記が表示される", () => {
    render(<Footer />)
    expect(screen.getByText("インターンコンパス")).toBeInTheDocument()
    expect(
      screen.getByText(/COPYRIGHT © 2014 NextLab, Inc\. ALL RIGHTS RESERVED\./)
    ).toBeInTheDocument()
  })
})
