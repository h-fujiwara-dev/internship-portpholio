import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { RecommendedArticles } from "@/components/RecommendedArticles"

describe("RecommendedArticles", () => {
  it("renders the section heading", () => {
    render(<RecommendedArticles />)
    expect(
      screen.getByRole("heading", { name: "大学生おすすめ記事" })
    ).toBeInTheDocument()
  })

  it("renders all 4 articles as links with a thumbnail image", () => {
    render(<RecommendedArticles />)
    const links = screen.getAllByRole("link")
    expect(links).toHaveLength(4)
    expect(screen.getAllByRole("img")).toHaveLength(4)
  })

  it("renders each article's title as link text", () => {
    render(<RecommendedArticles />)
    expect(
      screen.getByRole("link", { name: /大学１・２年生もインターンに行こう/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: /インターンシップとアルバイトの違いは/ })
    ).toBeInTheDocument()
  })
})
