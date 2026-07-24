import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { CompanyCard } from "@/components/CompanyCard"
import type { CompanyCard as CompanyCardData } from "@/types/internship"

const BASE_CARD: CompanyCardData = {
  title: "テスト株式会社 夏季インターンシップ",
  href: "/companies/test",
  image: "/images/companies/test.jpg",
  tags: [
    { label: "短期", variant: "short-term" },
    { label: "オンライン", variant: "online" },
  ],
  location: "東京都",
  description: "テスト用の説明文です。",
}

describe("CompanyCard", () => {
  it("renders the title, location, and description", () => {
    render(
      <ul>
        <CompanyCard card={BASE_CARD} />
      </ul>
    )

    expect(screen.getByText(BASE_CARD.title)).toBeInTheDocument()
    expect(screen.getByText(BASE_CARD.location)).toBeInTheDocument()
    expect(screen.getByText(BASE_CARD.description)).toBeInTheDocument()
  })

  it("renders every tag label", () => {
    render(
      <ul>
        <CompanyCard card={BASE_CARD} />
      </ul>
    )

    for (const tag of BASE_CARD.tags) {
      expect(screen.getByText(tag.label)).toBeInTheDocument()
    }
  })

  it("points the title link, image link, and detail link at card.href", () => {
    render(
      <ul>
        <CompanyCard card={BASE_CARD} />
      </ul>
    )

    const links = screen.getAllByRole("link")
    expect(links).toHaveLength(3)
    for (const link of links) {
      expect(link).toHaveAttribute("href", BASE_CARD.href)
    }
  })

  it("renders the card image with the title as alt text", () => {
    render(
      <ul>
        <CompanyCard card={BASE_CARD} />
      </ul>
    )

    expect(screen.getByRole("img", { name: BASE_CARD.title })).toBeInTheDocument()
  })

  it("does not render a rank badge when card.rank is absent", () => {
    render(
      <ul>
        <CompanyCard card={BASE_CARD} />
      </ul>
    )

    expect(screen.queryByText(/位$/)).not.toBeInTheDocument()
  })

  it("renders a rank badge when card.rank is set", () => {
    render(
      <ul>
        <CompanyCard card={{ ...BASE_CARD, rank: "1位" }} />
      </ul>
    )

    expect(screen.getByText("1位")).toBeInTheDocument()
  })
})
