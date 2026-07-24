import { describe, expect, it } from "vitest"
import { metadata } from "@/app/layout"

describe("RootLayout metadata", () => {
  it("exports the Japanese page title and description", () => {
    expect(metadata.title).toBe(
      "インターンコンパス-大学生のインターンシップ総合サイト"
    )
    expect(metadata.description).toContain("インターンシップ")
  })
})
