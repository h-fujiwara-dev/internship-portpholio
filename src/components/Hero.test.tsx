import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { Hero } from "@/components/Hero"

describe("Hero", () => {
  it("メインの見出しが表示される", () => {
    render(<Hero />)
    expect(
      screen.getByRole("heading", { level: 1 })
    ).toHaveTextContent("インターンシップを大学生が探すならインターンコンパス")
  })

  it("モバイル用のCTAボタンが表示される", () => {
    render(<Hero />)
    expect(
      screen.getByRole("button", { name: "無料会員登録してインターンを探す" })
    ).toBeInTheDocument()
  })

  it("ログインフォームの入力欄が表示される", () => {
    render(<Hero />)
    // メールアドレス入力欄はログインカードと会員登録欄の2箇所に存在する
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

  it("LINEログインと会員登録のCTAが表示される", () => {
    render(<Hero />)
    expect(
      screen.getByRole("button", { name: /LINEでログイン/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /会員登録（無料）/ })
    ).toBeInTheDocument()
  })

  // Hero 内の入力欄・ボタンは現状イベントハンドラが未実装の静的なマークアップ
  // （クローン範囲の都合、AGENTS.md参照）のため、ここでは送信時の挙動ではなく
  // 構造・アクセシビリティのみを検証する。
})
