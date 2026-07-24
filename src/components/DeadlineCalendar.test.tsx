import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { DeadlineCalendar } from "@/components/DeadlineCalendar"

describe("DeadlineCalendar", () => {
  it("renders the section heading", () => {
    render(<DeadlineCalendar />)
    expect(
      screen.getByRole("heading", { name: "厳選短期インターンシップ締切カレンダー" })
    ).toBeInTheDocument()
  })

  it("renders all 10 calendar items plus the 'もっと見る' link", () => {
    const { container } = render(<DeadlineCalendar />)
    expect(container.querySelectorAll("a")).toHaveLength(11)
  })

  it("renders the 'もっと見る' link", () => {
    render(<DeadlineCalendar />)
    expect(screen.getByRole("link", { name: /もっと見る/ })).toBeInTheDocument()
  })
})
