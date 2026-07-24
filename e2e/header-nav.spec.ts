import { test, expect } from "@playwright/test"

test.describe("ヘッダーナビゲーション — デスクトップビューポート", () => {
  test("デスクトップ用ナビが表示され、ハンバーガーボタンは非表示になる", async ({
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

test.describe("ヘッダーナビゲーション — モバイルビューポート", () => {
  test.use({ viewport: { width: 375, height: 812 } })

  test("ハンバーガーボタンが表示され、デスクトップ用ナビは非表示になる", async ({
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

  test("ハンバーガーボタンと閉じるボタンでモバイルナビパネルを開閉できる", async ({
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

  test("ナビリンクをクリックするとモバイルナビパネルが閉じる", async ({
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
