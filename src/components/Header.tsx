"use client"

import { useState, type ComponentType, type SVGProps } from "react"
import { SiteLogo } from "@/components/SiteLogo"
import { cn } from "@/lib/utils"
import {
  BookIcon,
  UserPlusIcon,
  ExternalLinkIcon,
  LoginIcon,
  MenuIcon,
  CloseIcon,
  ChevronRightIcon,
} from "@/components/icons"

interface NavItem {
  label: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

const NAV_ITEMS: NavItem[] = [
  { label: "採用担当者様はこちら", href: "#", icon: ExternalLinkIcon },
  { label: "お役立ち情報", href: "#", icon: BookIcon },
  { label: "新規会員登録", href: "#", icon: UserPlusIcon },
  { label: "ログイン", href: "#", icon: LoginIcon },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="l-body__header sticky top-0 z-[10000]">
      <div className="w-full border-b border-[#e2e2e2] bg-white/95">
        <div className="relative mx-auto max-w-[980px] px-[1em] pt-[1em] pb-[0.5em] md:flex md:items-center md:justify-between">
          {/* ロゴ */}
          <div className="mx-auto md:mx-0">
            <a href="#" className="block text-xl transition-opacity hover:opacity-60">
              <SiteLogo />
            </a>
          </div>

          {/* メニュー */}
          <div className="p-header__menu">
            {/* デスクトップ用ナビ */}
            <nav className="hidden md:block" aria-label="メインメニュー">
              <ul className="flex items-center">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="flex items-center gap-[0.3em] px-[0.5em] py-[1em] text-[14px] font-bold tracking-[1px] text-[#686859] transition-colors hover:bg-[#e2e2e2]"
                      >
                        <Icon className="h-4 w-4 text-[#5e9fb5] fill-[#5e9fb5]" />
                        {item.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* モバイル用ハンバーガーボタン */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="メニューを開く"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-panel"
              className="absolute top-[1em] right-[1em] flex min-w-[40px] flex-col items-center gap-1 text-[12px] text-[#58717d] md:hidden"
            >
              <MenuIcon className="h-6 w-6" />
              <span className="text-[10px]">メニュー</span>
            </button>

            {/* モバイル用ナビパネル */}
            <nav
              id="mobile-nav-panel"
              aria-label="モバイルメニュー"
              aria-hidden={!isMenuOpen}
              className={cn(
                "fixed inset-0 z-[10001] min-h-screen bg-[#58717d] transition-all duration-[250ms] ease-out md:hidden",
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "pointer-events-none translate-x-full opacity-0"
              )}
            >
              <div className="relative h-[5em] w-full border-b-2 border-[#798d95] bg-[#58717d]">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="メニューを閉じる"
                  className="absolute top-1/2 right-[1em] -translate-y-1/2 text-white"
                >
                  <CloseIcon className="h-6 w-6" />
                </button>
              </div>
              <ul className="min-h-screen bg-[#58717d]">
                {NAV_ITEMS.map((item) => (
                  <li
                    key={item.label}
                    className="mx-[1em] border-t-2 border-white first:border-t-0"
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between py-[1.5em] pr-[2em] pl-[0.5em] text-[12px] text-white"
                    >
                      {item.label}
                      <ChevronRightIcon className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
