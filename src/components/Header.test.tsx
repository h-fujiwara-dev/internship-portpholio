import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Header } from "@/components/Header"

// The mobile nav panel is `aria-hidden` while closed, and accessible-name
// computation for an aria-hidden element is unreliable across query modes —
// so it's queried by its stable `#mobile-nav-panel` id instead of by role,
// regardless of open/closed state.
function getMobileNavPanel(container: HTMLElement) {
  const panel = container.querySelector("#mobile-nav-panel")
  if (!panel) throw new Error("mobile nav panel not found")
  return panel
}

describe("Header", () => {
  it("renders the desktop nav with all nav items", () => {
    render(<Header />)
    const nav = screen.getByRole("navigation", { name: "メインメニュー" })
    expect(nav).toBeInTheDocument()
    expect(nav.querySelectorAll("a")).toHaveLength(4)
  })

  it("renders the mobile nav panel closed by default", () => {
    const { container } = render(<Header />)
    const panel = getMobileNavPanel(container)
    expect(panel).toHaveAttribute("aria-hidden", "true")

    const openButton = screen.getByRole("button", { name: "メニューを開く" })
    expect(openButton).toHaveAttribute("aria-expanded", "false")
  })

  it("opens the mobile nav panel when the hamburger button is clicked", async () => {
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

  it("closes the mobile nav panel when the close button is clicked", async () => {
    const user = userEvent.setup()
    const { container } = render(<Header />)

    await user.click(screen.getByRole("button", { name: "メニューを開く" }))
    await user.click(screen.getByRole("button", { name: "メニューを閉じる" }))

    expect(getMobileNavPanel(container)).toHaveAttribute("aria-hidden", "true")
  })

  it("closes the mobile nav panel when a nav link inside it is clicked", async () => {
    const user = userEvent.setup()
    const { container } = render(<Header />)

    await user.click(screen.getByRole("button", { name: "メニューを開く" }))
    const panel = getMobileNavPanel(container)
    const [firstLink] = panel.querySelectorAll("a")

    await user.click(firstLink)

    expect(panel).toHaveAttribute("aria-hidden", "true")
  })
})
