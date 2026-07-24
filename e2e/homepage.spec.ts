import { test, expect } from "@playwright/test"

test.describe("Homepage", () => {
  test("has the expected document title", async ({ page }) => {
    await page.goto("/")
    await expect(page).toHaveTitle(
      "インターンコンパス-大学生のインターンシップ総合サイト"
    )
  })

  test("renders every major section", async ({ page }) => {
    await page.goto("/")

    await expect(
      page.getByRole("heading", { level: 1 })
    ).toContainText("インターンシップを大学生が探すなら")

    await expect(
      page.getByRole("heading", { name: "厳選短期インターンシップ締切カレンダー" })
    ).toBeVisible()
    await expect(
      page.getByRole("heading", { name: "注目のインターンシップ企業" })
    ).toBeVisible()
    await expect(
      page.getByRole("heading", { name: "大学生・就活生イベントランキング" })
    ).toBeVisible()
    await expect(
      page.getByRole("heading", { name: "大学生おすすめ記事" })
    ).toBeVisible()
    await expect(
      page.getByRole("heading", { name: "インターンコンパスとは" })
    ).toBeVisible()

    await expect(page.getByRole("contentinfo")).toBeVisible()
    await expect(
      page.getByText("COPYRIGHT © 2014 NextLab, Inc. ALL RIGHTS RESERVED.")
    ).toBeVisible()
  })

  test("renders the client logo marquee with duplicated tracks", async ({
    page,
  }) => {
    await page.goto("/")
    await expect(page.getByText("キャリアブリッジ").first()).toBeVisible()
  })

  test("scrolls to the top when the footer's back-to-top link is clicked", async ({
    page,
  }) => {
    await page.goto("/")
    await page.getByRole("link", { name: /トップへ戻る/ }).click()
    await expect(page).toHaveURL(/#top$/)
  })
})
