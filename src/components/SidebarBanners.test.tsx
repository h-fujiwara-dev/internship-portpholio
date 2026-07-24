import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { SidebarBanners } from "@/components/SidebarBanners"

describe("SidebarBanners", () => {
  it("renders all 9 banners as links with an image", () => {
    render(<SidebarBanners />)
    expect(screen.getAllByRole("link")).toHaveLength(9)
    expect(screen.getAllByRole("img")).toHaveLength(9)
  })

  it("uses each banner's alt text as both the image alt and the visible label", () => {
    render(<SidebarBanners />)
    const [firstImage] = screen.getAllByRole("img")
    expect(firstImage).toHaveAttribute(
      "alt",
      "大学1・2年生もインターンに行こう"
    )
    expect(
      screen.getByText("大学1・2年生もインターンに行こう")
    ).toBeInTheDocument()
  })
})
