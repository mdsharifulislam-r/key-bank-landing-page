import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/images/logo.png"
        alt=""
        width={36}
        height={36}
        className="h-9 w-9"
      />
      <span
        className={cn(
          "font-heading text-lg font-bold tracking-tight",
          tone === "light" ? "text-white" : "text-navy",
        )}
      >
        KeyBank
      </span>
    </span>
  );
}
