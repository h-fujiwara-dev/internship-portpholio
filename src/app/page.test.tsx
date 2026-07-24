import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import Home from "@/app/page"

describe("Home", () => {
  it("mounts the full page composition without throwing", () => {
    expect(() => render(<Home />)).not.toThrow()
  })

  it("renders the header, main content, and footer landmarks", () => {
    render(<Home />)
    expect(screen.getByRole("navigation", { name: "メインメニュー" })).toBeInTheDocument()
    expect(screen.getByRole("main")).toBeInTheDocument()
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })

  it("renders every major section exactly once", () => {
    render(<Home />)
    expect(
      screen.getByRole("heading", { level: 1 })
    ).toHaveTextContent("インターンシップを大学生が探すならインターンコンパス")
    expect(
      screen.getByRole("heading", { name: "厳選短期インターンシップ締切カレンダー" })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: "注目のインターンシップ企業" })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: "大学生・就活生イベントランキング" })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: "大学生おすすめ記事" })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: "インターンコンパスとは" })
    ).toBeInTheDocument()
  })
})
