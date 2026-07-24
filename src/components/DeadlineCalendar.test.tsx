import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { DeadlineCalendar } from "@/components/DeadlineCalendar"

describe("DeadlineCalendar", () => {
  it("セクション見出しが表示される", () => {
    render(<DeadlineCalendar />)
    expect(
      screen.getByRole("heading", { name: "厳選短期インターンシップ締切カレンダー" })
    ).toBeInTheDocument()
  })

  it("10件のカレンダー項目と「もっと見る」リンクが表示される", () => {
    const { container } = render(<DeadlineCalendar />)
    expect(container.querySelectorAll("a")).toHaveLength(11)
  })

  it("「もっと見る」リンクが表示される", () => {
    render(<DeadlineCalendar />)
    expect(screen.getByRole("link", { name: /もっと見る/ })).toBeInTheDocument()
  })
})
