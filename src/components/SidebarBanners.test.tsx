import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { SidebarBanners } from "@/components/SidebarBanners"

describe("SidebarBanners", () => {
  it("画像付きのバナーリンクが9件表示される", () => {
    render(<SidebarBanners />)
    expect(screen.getAllByRole("link")).toHaveLength(9)
    expect(screen.getAllByRole("img")).toHaveLength(9)
  })

  it("各バナーの alt テキストが画像の alt と表示ラベルの両方に使われる", () => {
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
