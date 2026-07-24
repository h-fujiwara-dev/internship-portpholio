import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee"

describe("ClientLogoMarquee", () => {
  it("renders two duplicated tracks of the same 19 client logos", () => {
    render(<ClientLogoMarquee />)
    // Each of the 19 fake client names should appear exactly twice
    // (once per track), which is what makes the marquee loop seamlessly.
    expect(screen.getAllByText("キャリアブリッジ")).toHaveLength(2)
    expect(screen.getAllByText("ネオウェーブ")).toHaveLength(2)
  })

  it("renders 38 total logo items across both tracks", () => {
    const { container } = render(<ClientLogoMarquee />)
    expect(container.querySelectorAll("li")).toHaveLength(38)
  })
})
