import { describe, expect, it } from "vitest"
import { metadata } from "@/app/layout"

describe("RootLayout のメタデータ", () => {
  it("日本語のページタイトルと説明文をエクスポートしている", () => {
    expect(metadata.title).toBe(
      "インターンコンパス-大学生のインターンシップ総合サイト"
    )
    expect(metadata.description).toContain("インターンシップ")
  })
})
