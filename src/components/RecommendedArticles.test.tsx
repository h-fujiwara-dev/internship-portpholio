import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { RecommendedArticles } from "@/components/RecommendedArticles"

describe("RecommendedArticles", () => {
  it("セクション見出しが表示される", () => {
    render(<RecommendedArticles />)
    expect(
      screen.getByRole("heading", { name: "大学生おすすめ記事" })
    ).toBeInTheDocument()
  })

  it("サムネイル画像付きの記事リンクが4件表示される", () => {
    render(<RecommendedArticles />)
    const links = screen.getAllByRole("link")
    expect(links).toHaveLength(4)
    expect(screen.getAllByRole("img")).toHaveLength(4)
  })

  it("各記事のタイトルがリンクテキストとして表示される", () => {
    render(<RecommendedArticles />)
    expect(
      screen.getByRole("link", { name: /大学１・２年生もインターンに行こう/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: /インターンシップとアルバイトの違いは/ })
    ).toBeInTheDocument()
  })
})
