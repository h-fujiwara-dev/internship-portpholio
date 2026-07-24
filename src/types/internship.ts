export type TagVariant =
  | "pre-entry"
  | "long-term"
  | "short-term"
  | "event"
  | "exam"
  | "direct"
  | "1day"
  | "briefing"
  | "video"
  | "online"
  | "recruit-agent"
  | "benefit"
  | "soon"
  | "grade1"
  | "grade2"
  | "grade3";

export interface Tag {
  label: string;
  variant: TagVariant;
}

/** Shared card used by the deadline calendar, featured companies grid, and event ranking grid. */
export interface CompanyCard {
  title: string;
  href: string;
  image: string;
  tags: Tag[];
  location: string;
  description: string;
  /** Set only for the event ranking grid ("1位" / "2位" / "3位"). */
  rank?: string;
}

export interface CalendarItem {
  month: string;
  day: string;
  deadlineLabel: string;
  tags: Tag[];
  title: string;
  href: string;
}

export interface RecommendedArticle {
  title: string;
  href: string;
  thumbnail: string;
}

export interface SidebarBanner {
  image: string;
  alt: string;
  href: string;
}

export interface HeaderNavLink {
  label: string;
  href: string;
  icon: "external-link" | "book" | "user-plus" | "login";
}

export interface ClientLogo {
  name: string;
  image: string;
}
