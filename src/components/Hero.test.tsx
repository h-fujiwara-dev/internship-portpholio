import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { Hero } from "@/components/Hero"

describe("Hero", () => {
  it("renders the main headline", () => {
    render(<Hero />)
    expect(
      screen.getByRole("heading", { level: 1 })
    ).toHaveTextContent("インターンシップを大学生が探すならインターンコンパス")
  })

  it("renders the mobile CTA button", () => {
    render(<Hero />)
    expect(
      screen.getByRole("button", { name: "無料会員登録してインターンを探す" })
    ).toBeInTheDocument()
  })

  it("renders the login form fields", () => {
    render(<Hero />)
    // Two email inputs exist: the login card and the signup capture below it.
    const emailInputs = screen.getAllByPlaceholderText("メールアドレス")
    expect(emailInputs).toHaveLength(2)
    for (const input of emailInputs) {
      expect(input).toHaveAttribute("type", "email")
    }
    expect(screen.getByPlaceholderText("パスワード")).toHaveAttribute(
      "type",
      "password"
    )
    expect(
      screen.getByRole("checkbox", { name: /ログイン情報を記憶する/ })
    ).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /^ログイン/ })).toBeInTheDocument()
  })

  it("renders the LINE login and signup CTAs", () => {
    render(<Hero />)
    expect(
      screen.getByRole("button", { name: /LINEでログイン/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /会員登録（無料）/ })
    ).toBeInTheDocument()
  })

  // The Hero's inputs/buttons are currently static markup with no event
  // handlers wired up (see AGENTS.md clone scope) — these tests intentionally
  // assert structure/accessibility only, not submit behavior.
})
