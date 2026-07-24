import { test, expect } from "@playwright/test"

test.describe("トップページ", () => {
  test("想定通りのドキュメントタイトルが設定されている", async ({ page }) => {
    await page.goto("/")
    await expect(page).toHaveTitle(
      "インターンコンパス-大学生のインターンシップ総合サイト"
    )
  })

  test("主要なセクションが全て表示される", async ({ page }) => {
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

  test("クライアントロゴのマルケーが2トラック分表示される", async ({
    page,
  }) => {
    await page.goto("/")
    await expect(page.getByText("キャリアブリッジ").first()).toBeVisible()
  })

  test("フッターの「トップへ戻る」リンクをクリックするとページ上部に戻る", async ({
    page,
  }) => {
    await page.goto("/")
    await page.getByRole("link", { name: /トップへ戻る/ }).click()
    await expect(page).toHaveURL(/#top$/)
  })
})
