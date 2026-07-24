import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { EventRanking } from "@/components/EventRanking"

describe("EventRanking", () => {
  it("renders the section heading", () => {
    render(<EventRanking />)
    expect(
      screen.getByRole("heading", { name: "大学生・就活生イベントランキング" })
    ).toBeInTheDocument()
  })

  it("renders all 3 ranked event cards", () => {
    render(<EventRanking />)
    expect(screen.getAllByRole("img")).toHaveLength(3)
  })

  it("renders rank badges 1位 through 3位", () => {
    render(<EventRanking />)
    expect(screen.getByText("1位")).toBeInTheDocument()
    expect(screen.getByText("2位")).toBeInTheDocument()
    expect(screen.getByText("3位")).toBeInTheDocument()
  })

  it("renders the 'もっと見る' link", () => {
    render(<EventRanking />)
    expect(
      screen.getByRole("link", { name: /大学生・就活生イベントをもっと見る/ })
    ).toBeInTheDocument()
  })
})
