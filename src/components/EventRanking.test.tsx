import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { EventRanking } from "@/components/EventRanking"

describe("EventRanking", () => {
  it("セクション見出しが表示される", () => {
    render(<EventRanking />)
    expect(
      screen.getByRole("heading", { name: "大学生・就活生イベントランキング" })
    ).toBeInTheDocument()
  })

  it("ランキングイベントカードが3件表示される", () => {
    render(<EventRanking />)
    expect(screen.getAllByRole("img")).toHaveLength(3)
  })

  it("1位から3位までの順位バッジが表示される", () => {
    render(<EventRanking />)
    expect(screen.getByText("1位")).toBeInTheDocument()
    expect(screen.getByText("2位")).toBeInTheDocument()
    expect(screen.getByText("3位")).toBeInTheDocument()
  })

  it("「もっと見る」リンクが表示される", () => {
    render(<EventRanking />)
    expect(
      screen.getByRole("link", { name: /大学生・就活生イベントをもっと見る/ })
    ).toBeInTheDocument()
  })
})
