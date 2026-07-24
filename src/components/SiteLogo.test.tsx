import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { SiteLogo } from "@/components/SiteLogo"

describe("SiteLogo", () => {
  it("ブランド名のテキストが表示される", () => {
    render(<SiteLogo />)
    expect(screen.getByText("インターンコンパス")).toBeInTheDocument()
  })

  it("カスタム className がルート要素にマージされる", () => {
    const { container } = render(<SiteLogo className="text-2xl" />)
    expect(container.firstElementChild).toHaveClass("text-2xl")
  })
})
