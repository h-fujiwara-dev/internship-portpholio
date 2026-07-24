import { describe, expect, it } from "vitest"
import { cn } from "@/lib/utils"

describe("cn", () => {
  it("merges multiple class strings into one", () => {
    expect(cn("foo", "bar")).toBe("foo bar")
  })

  it("drops falsy values", () => {
    expect(cn("foo", false && "hidden", undefined, null, "", "bar")).toBe(
      "foo bar"
    )
  })

  it("supports clsx object syntax", () => {
    expect(cn("base", { active: true, disabled: false })).toBe("base active")
  })

  it("supports clsx array syntax", () => {
    expect(cn(["foo", "bar"], "baz")).toBe("foo bar baz")
  })

  it("resolves conflicting Tailwind classes, last one wins", () => {
    expect(cn("p-2", "p-4")).toBe("p-4")
    expect(cn("text-sm", "text-lg")).toBe("text-lg")
  })

  it("keeps unrelated classes while resolving conflicts", () => {
    expect(cn("flex p-2 text-sm", "p-4")).toBe("flex text-sm p-4")
  })

  it("returns an empty string when given no meaningful input", () => {
    expect(cn()).toBe("")
    expect(cn(false, undefined, null)).toBe("")
  })
})
