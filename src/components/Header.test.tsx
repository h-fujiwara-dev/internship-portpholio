import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Header } from "@/components/Header"

// モバイルナビパネルは閉じている間 `aria-hidden` になっており、aria-hidden な
// 要素のアクセシブルネーム計算はクエリモードによって結果が変わり信頼できない。
// そのため role ではなく安定した `#mobile-nav-panel` という id で取得する。
function getMobileNavPanel(container: HTMLElement) {
  const panel = container.querySelector("#mobile-nav-panel")
  if (!panel) throw new Error("mobile nav panel not found")
  return panel
}

describe("Header", () => {
  it("デスクトップ用ナビに全てのナビ項目が表示される", () => {
    render(<Header />)
    const nav = screen.getByRole("navigation", { name: "メインメニュー" })
    expect(nav).toBeInTheDocument()
    expect(nav.querySelectorAll("a")).toHaveLength(4)
  })

  it("モバイルナビパネルは初期状態で閉じている", () => {
    const { container } = render(<Header />)
    const panel = getMobileNavPanel(container)
    expect(panel).toHaveAttribute("aria-hidden", "true")

    const openButton = screen.getByRole("button", { name: "メニューを開く" })
    expect(openButton).toHaveAttribute("aria-expanded", "false")
  })

  it("ハンバーガーボタンをクリックするとモバイルナビパネルが開く", async () => {
    const user = userEvent.setup()
    const { container } = render(<Header />)

    await user.click(screen.getByRole("button", { name: "メニューを開く" }))

    const panel = getMobileNavPanel(container)
    expect(panel).toHaveAttribute("aria-hidden", "false")
    expect(screen.getByRole("button", { name: "メニューを開く" })).toHaveAttribute(
      "aria-expanded",
      "true"
    )
  })

  it("閉じるボタンをクリックするとモバイルナビパネルが閉じる", async () => {
    const user = userEvent.setup()
    const { container } = render(<Header />)

    await user.click(screen.getByRole("button", { name: "メニューを開く" }))
    await user.click(screen.getByRole("button", { name: "メニューを閉じる" }))

    expect(getMobileNavPanel(container)).toHaveAttribute("aria-hidden", "true")
  })

  it("パネル内のナビリンクをクリックするとモバイルナビパネルが閉じる", async () => {
    const user = userEvent.setup()
    const { container } = render(<Header />)

    await user.click(screen.getByRole("button", { name: "メニューを開く" }))
    const panel = getMobileNavPanel(container)
    const [firstLink] = panel.querySelectorAll("a")

    await user.click(firstLink)

    expect(panel).toHaveAttribute("aria-hidden", "true")
  })
})
