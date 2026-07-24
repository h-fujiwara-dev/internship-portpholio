import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { FeaturedCompanies } from "@/components/FeaturedCompanies"

describe("FeaturedCompanies", () => {
  it("renders the section heading", () => {
    render(<FeaturedCompanies />)
    expect(
      screen.getByRole("heading", { name: "注目のインターンシップ企業" })
    ).toBeInTheDocument()
  })

  it("renders all 6 featured company cards", () => {
    render(<FeaturedCompanies />)
    expect(screen.getAllByRole("img")).toHaveLength(6)
  })

  it("renders the 'もっと見る' link", () => {
    render(<FeaturedCompanies />)
    expect(
      screen.getByRole("link", { name: /注目のインターンをもっと見る/ })
    ).toBeInTheDocument()
  })
})
