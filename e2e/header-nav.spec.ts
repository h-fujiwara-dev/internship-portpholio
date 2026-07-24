import { test, expect } from "@playwright/test"

test.describe("Header navigation — desktop viewport", () => {
  test("shows the desktop nav and hides the hamburger button", async ({
    page,
  }) => {
    await page.goto("/")

    await expect(
      page.getByRole("navigation", { name: "メインメニュー" })
    ).toBeVisible()
    await expect(
      page.getByRole("button", { name: "メニューを開く" })
    ).toBeHidden()
  })
})

test.describe("Header navigation — mobile viewport", () => {
  test.use({ viewport: { width: 375, height: 812 } })

  test("shows the hamburger button and hides the desktop nav", async ({
    page,
  }) => {
    await page.goto("/")

    await expect(
      page.getByRole("button", { name: "メニューを開く" })
    ).toBeVisible()
    await expect(
      page.getByRole("navigation", { name: "メインメニュー" })
    ).toBeHidden()
  })

  test("opens and closes the mobile nav panel via the hamburger and close buttons", async ({
    page,
  }) => {
    await page.goto("/")

    const panel = page.locator("#mobile-nav-panel")
    await expect(panel).toHaveAttribute("aria-hidden", "true")

    await page.getByRole("button", { name: "メニューを開く" }).click()
    await expect(panel).toHaveAttribute("aria-hidden", "false")
    await expect(panel).toBeVisible()

    await page.getByRole("button", { name: "メニューを閉じる" }).click()
    await expect(panel).toHaveAttribute("aria-hidden", "true")
  })

  test("closes the mobile nav panel when a nav link is clicked", async ({
    page,
  }) => {
    await page.goto("/")

    const panel = page.locator("#mobile-nav-panel")
    await page.getByRole("button", { name: "メニューを開く" }).click()
    await expect(panel).toHaveAttribute("aria-hidden", "false")

    await panel.getByRole("link", { name: /ログイン/ }).click()
    await expect(panel).toHaveAttribute("aria-hidden", "true")
  })
})
