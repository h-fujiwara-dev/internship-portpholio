import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { FeaturedCompanies } from "@/components/FeaturedCompanies"

describe("FeaturedCompanies", () => {
  it("セクション見出しが表示される", () => {
    render(<FeaturedCompanies />)
    expect(
      screen.getByRole("heading", { name: "注目のインターンシップ企業" })
    ).toBeInTheDocument()
  })

  it("注目企業カードが6件表示される", () => {
    render(<FeaturedCompanies />)
    expect(screen.getAllByRole("img")).toHaveLength(6)
  })

  it("「もっと見る」リンクが表示される", () => {
    render(<FeaturedCompanies />)
    expect(
      screen.getByRole("link", { name: /注目のインターンをもっと見る/ })
    ).toBeInTheDocument()
  })
})
