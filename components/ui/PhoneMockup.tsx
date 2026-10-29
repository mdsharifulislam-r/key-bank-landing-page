import Image from "next/image";
import { cn } from "@/lib/utils";

type PhoneMockupProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
};

/** App screenshot that already includes the phone. Drop a new file in via `src`. */
export function PhoneMockup({
  src,
  alt,
  priority = false,
  className,
  width = 472,
  height = 1024,
  sizes = "(max-width: 768px) 72vw, 280px",
}: PhoneMockupProps) {
  return (
    <div className={cn("relative w-full", className ?? "max-w-[280px]")}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="h-auto w-full rounded-[2.2rem] shadow-[0_30px_80px_-24px_rgba(15,16,51,0.45)]"
      />
    </div>
  );
}
