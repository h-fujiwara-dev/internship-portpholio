import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import Home from "@/app/page"

describe("Home", () => {
  it("ページ全体が例外を投げずにマウントできる", () => {
    expect(() => render(<Home />)).not.toThrow()
  })

  it("ヘッダー・メインコンテンツ・フッターのランドマークが表示される", () => {
    render(<Home />)
    expect(screen.getByRole("navigation", { name: "メインメニュー" })).toBeInTheDocument()
    expect(screen.getByRole("main")).toBeInTheDocument()
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })

  it("主要なセクションが1回ずつ表示される", () => {
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
