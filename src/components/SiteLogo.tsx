import { CompassIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

/** Text-based brand mark for "インターンコンパス" (no image asset). */
export function SiteLogo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-1.5 text-[#5e9fb5]", className)}>
      <CompassIcon className="h-[1em] w-[1em] shrink-0" />
      <span className="font-bold whitespace-nowrap">インターンコンパス</span>
    </span>
  );
}
