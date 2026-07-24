import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee"

describe("ClientLogoMarquee", () => {
  it("同じ19社分のロゴが2つのトラックに複製されて表示される", () => {
    render(<ClientLogoMarquee />)
    // 19社の架空クライアント名それぞれが、トラックごとに1回ずつ計2回表示される
    // ことで、マルケー（無限スクロール）が途切れなく見える。
    expect(screen.getAllByText("キャリアブリッジ")).toHaveLength(2)
    expect(screen.getAllByText("ネオウェーブ")).toHaveLength(2)
  })

  it("2つのトラック合計で38件のロゴ項目が表示される", () => {
    const { container } = render(<ClientLogoMarquee />)
    expect(container.querySelectorAll("li")).toHaveLength(38)
  })
})
