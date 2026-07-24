import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { AboutSection } from "@/components/AboutSection"

describe("AboutSection", () => {
  it("セクション見出しが表示される", () => {
    render(<AboutSection />)
    expect(
      screen.getByRole("heading", { name: "インターンコンパスとは" })
    ).toBeInTheDocument()
  })

  it("本文テキストが表示される", () => {
    render(<AboutSection />)
    expect(
      screen.getByText(/日本全国の企業の情報を掲載したインターンシップ総合サイトです/)
    ).toBeInTheDocument()
  })

  it("CTAリンクが表示される", () => {
    render(<AboutSection />)
    expect(
      screen.getByRole("link", { name: /今すぐインターンシップを探す/ })
    ).toBeInTheDocument()
  })
})
