import { describe, expect, it } from "vitest"
import { cn } from "@/lib/utils"

describe("cn", () => {
  it("複数のクラス文字列を1つにマージする", () => {
    expect(cn("foo", "bar")).toBe("foo bar")
  })

  it("falsyな値は除外される", () => {
    expect(cn("foo", false && "hidden", undefined, null, "", "bar")).toBe(
      "foo bar"
    )
  })

  it("clsxのオブジェクト構文をサポートする", () => {
    expect(cn("base", { active: true, disabled: false })).toBe("base active")
  })

  it("clsxの配列構文をサポートする", () => {
    expect(cn(["foo", "bar"], "baz")).toBe("foo bar baz")
  })

  it("競合するTailwindクラスは後に指定した方が勝つ", () => {
    expect(cn("p-2", "p-4")).toBe("p-4")
    expect(cn("text-sm", "text-lg")).toBe("text-lg")
  })

  it("競合を解決しつつ無関係なクラスは維持する", () => {
    expect(cn("flex p-2 text-sm", "p-4")).toBe("flex text-sm p-4")
  })

  it("意味のある入力がない場合は空文字を返す", () => {
    expect(cn()).toBe("")
    expect(cn(false, undefined, null)).toBe("")
  })
})
