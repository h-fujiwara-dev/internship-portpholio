import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { SiteLogo } from "@/components/SiteLogo"

describe("SiteLogo", () => {
  it("renders the brand name text", () => {
    render(<SiteLogo />)
    expect(screen.getByText("インターンコンパス")).toBeInTheDocument()
  })

  it("merges a custom className onto the root element", () => {
    const { container } = render(<SiteLogo className="text-2xl" />)
    expect(container.firstElementChild).toHaveClass("text-2xl")
  })
})
