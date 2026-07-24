import { describe, expect, it, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button, buttonVariants } from "@/components/ui/button"

describe("Button", () => {
  it("renders children as button content", () => {
    render(<Button>クリック</Button>)
    expect(
      screen.getByRole("button", { name: "クリック" })
    ).toBeInTheDocument()
  })

  it("renders as a native <button> element", () => {
    render(<Button>ボタン</Button>)
    expect(screen.getByRole("button").tagName).toBe("BUTTON")
  })

  it("applies default variant and size classes when none are given", () => {
    render(<Button>デフォルト</Button>)
    const button = screen.getByRole("button")
    expect(button.className).toContain("bg-primary")
    expect(button.className).toContain("h-8")
  })

  it.each([
    ["default", "bg-primary"],
    ["outline", "bg-background"],
    ["secondary", "bg-secondary"],
    ["ghost", "hover:bg-muted"],
    ["destructive", "bg-destructive/10"],
    ["link", "text-primary"],
  ] as const)("renders the %s variant with its expected classes", (variant, expectedClass) => {
    render(<Button variant={variant}>ボタン</Button>)
    expect(screen.getByRole("button").className).toContain(expectedClass)
  })

  it.each([
    ["default", "h-8"],
    ["xs", "h-6"],
    ["sm", "h-7"],
    ["lg", "h-9"],
    ["icon", "size-8"],
    ["icon-xs", "size-6"],
    ["icon-sm", "size-7"],
    ["icon-lg", "size-9"],
  ] as const)("renders the %s size with its expected classes", (size, expectedClass) => {
    render(<Button size={size}>ボタン</Button>)
    expect(screen.getByRole("button").className).toContain(expectedClass)
  })

  it("fires onClick when clicked", async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>送信</Button>)

    await user.click(screen.getByRole("button", { name: "送信" }))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("is disabled and does not fire onClick when disabled", async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(
      <Button disabled onClick={handleClick}>
        送信
      </Button>
    )

    const button = screen.getByRole("button", { name: "送信" })
    expect(button).toBeDisabled()

    await user.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })

  it("merges a custom className and lets it override conflicting variant classes", () => {
    render(<Button className="h-20">ボタン</Button>)
    const button = screen.getByRole("button")
    expect(button.className).toContain("h-20")
    expect(button.className).not.toContain("h-8")
  })
})

describe("buttonVariants", () => {
  it("returns the default variant/size classes when called with no arguments", () => {
    expect(buttonVariants()).toContain("bg-primary")
    expect(buttonVariants()).toContain("h-8")
  })

  it("returns classes for an explicit variant/size combination", () => {
    const classes = buttonVariants({ variant: "outline", size: "lg" })
    expect(classes).toContain("bg-background")
    expect(classes).toContain("h-9")
  })
})
