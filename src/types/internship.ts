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

/** 締切カレンダー、注目企業グリッド、イベントランキンググリッドで共通利用するカード。 */
export interface CompanyCard {
  title: string;
  href: string;
  image: string;
  tags: Tag[];
  location: string;
  description: string;
  /** イベントランキンググリッドでのみ設定（「1位」「2位」「3位」）。 */
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

/** ロゴ画像は使わず、ブランドカラーを付けたテキストワードマークとして表示する。 */
export interface ClientLogo {
  name: string;
  color: string;
}
