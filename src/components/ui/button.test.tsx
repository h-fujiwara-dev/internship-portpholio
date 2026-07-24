import { describe, expect, it, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button, buttonVariants } from "@/components/ui/button"

describe("Button", () => {
  it("children をボタンの中身として表示する", () => {
    render(<Button>クリック</Button>)
    expect(
      screen.getByRole("button", { name: "クリック" })
    ).toBeInTheDocument()
  })

  it("ネイティブの <button> 要素として描画される", () => {
    render(<Button>ボタン</Button>)
    expect(screen.getByRole("button").tagName).toBe("BUTTON")
  })

  it("variant・size を指定しない場合はデフォルトのクラスが付与される", () => {
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
  ] as const)("%s variant で期待するクラスが付与される", (variant, expectedClass) => {
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
  ] as const)("%s size で期待するクラスが付与される", (size, expectedClass) => {
    render(<Button size={size}>ボタン</Button>)
    expect(screen.getByRole("button").className).toContain(expectedClass)
  })

  it("クリック時に onClick が発火する", async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>送信</Button>)

    await user.click(screen.getByRole("button", { name: "送信" }))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("disabled のときは操作不能になり onClick も発火しない", async () => {
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

  it("カスタム className をマージし、競合する variant クラスを上書きできる", () => {
    render(<Button className="h-20">ボタン</Button>)
    const button = screen.getByRole("button")
    expect(button.className).toContain("h-20")
    expect(button.className).not.toContain("h-8")
  })
})

describe("buttonVariants", () => {
  it("引数なしで呼ぶとデフォルトの variant・size のクラスを返す", () => {
    expect(buttonVariants()).toContain("bg-primary")
    expect(buttonVariants()).toContain("h-8")
  })

  it("variant・size を明示指定した組み合わせのクラスを返す", () => {
    const classes = buttonVariants({ variant: "outline", size: "lg" })
    expect(classes).toContain("bg-background")
    expect(classes).toContain("h-9")
  })
})
