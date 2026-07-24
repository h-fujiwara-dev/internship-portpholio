import { ChevronRightIcon, LineIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="key-visual relative bg-[url(/images/hero/main_bg_mob.jpg)] bg-cover bg-center bg-no-repeat md:bg-[url(/images/hero/main_bg.jpg)]">
      <div className="key-visual__inner bg-black/40 p-[2em] md:flex md:min-h-[400px] md:items-start md:justify-center md:p-[3em]">
        <div className="key-visual__copy md:mr-[1em] md:flex-[0_1_600px]">
          <h1 className="catchphrase text-white">
            <span className="catchphrase__main-text block text-2xl font-bold tracking-[0.5px] md:text-[30px]">
              インターンシップを大学生が探すなら
              <br />
              インターンシップガイド
            </span>
            <p className="catchphrase__sub-text mt-[1em] text-sm md:text-lg md:leading-[1.8] md:tracking-[3px]">
              全国47都道府県、日本最大の掲載企業数！
              <br />
              長期も短期も探せる、日本唯一のインターンシップ総合サイト。
              <br />
              就活生も1,2年生も大学生なら今からインターン！
            </p>
          </h1>

          {/* Mobile-only CTA — desktop shows the login card instead */}
          <div className="key-visual__cta mt-6 flex items-center justify-center gap-2 md:hidden">
            <button
              type="button"
              className="w-full rounded-md bg-[#de5485] px-6 py-3 text-base font-bold text-white transition-colors hover:bg-[#cb3b6e]"
            >
              無料会員登録してインターンを探す
            </button>
          </div>
        </div>

        {/* Desktop-only login card — not rendered on mobile */}
        <div className="key-visual__form hidden md:block md:flex-[0_0_350px]">
          <div className="form bg-black/75 p-[2em] text-[#e2e2e2]">
            <input
              type="email"
              placeholder="メールアドレス"
              className="mt-[0.5em] w-full bg-white p-[0.3em] leading-[2] text-black"
            />
            <input
              type="password"
              placeholder="パスワード"
              className="mt-[0.5em] w-full bg-white p-[0.3em] leading-[2] text-black"
            />

            <div className="login-box mt-[1em] flex justify-between">
              <label className="flex flex-[1_0_auto] items-center gap-2 text-white">
                <input type="checkbox" className="h-4 w-4" />
                ログイン情報を記憶する
              </label>
              <button
                type="button"
                className="flex flex-[0_0_130px] items-center justify-center gap-1 rounded-[3px] bg-[#5ab9dd] p-[10px] text-sm font-bold tracking-[2px] text-white transition-colors hover:bg-[#52abcd]"
              >
                ログイン
                <ChevronRightIcon className="h-4 w-4 shrink-0" />
              </button>
            </div>

            <div className="line-login mt-[24px] text-center">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[#00c300] py-[10px] font-bold text-white"
              >
                <LineIcon className="h-5 w-5 shrink-0" />
                LINEでログイン
              </button>
            </div>

            <div className="entry-box mt-[1em] border-t border-[#999] pt-[0.5em]">
              <p className="text-center">
                <span className="text-red-600">非公開求人</span>
                掲載！1分で簡単登録！
              </p>
              <input
                type="email"
                placeholder="メールアドレス"
                className="mt-[0.5em] w-full bg-white p-[0.3em] leading-[2] text-black"
              />
              <button
                type="button"
                className="mt-[0.5em] flex w-full items-center justify-center gap-1 py-[0.5em] text-base font-bold text-white transition-colors bg-[#de5485] hover:bg-[#cb3b6e]"
              >
                会員登録（無料）
                <ChevronRightIcon className="h-4 w-4 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
