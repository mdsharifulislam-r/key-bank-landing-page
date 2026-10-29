import Image from "next/image";
import { cn } from "@/lib/utils";

type StoreBadgesProps = {
  appStoreHref: string;
  playStoreHref: string;
  appStoreBadge: string;
  playStoreBadge: string;
  appStoreAlt: string;
  playStoreAlt: string;
  onDark?: boolean;
};

export function StoreBadges({
  appStoreHref,
  playStoreHref,
  appStoreBadge,
  playStoreBadge,
  appStoreAlt,
  playStoreAlt,
  onDark = false,
}: StoreBadgesProps) {
  const linkClass = cn(
    "inline-flex overflow-hidden rounded-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary-700",
    onDark && "ring-1 ring-white/30",
  );

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={appStoreHref}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <Image src={appStoreBadge} alt={appStoreAlt} width={156} height={46} />
      </a>
      <a
        href={playStoreHref}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <Image src={playStoreBadge} alt={playStoreAlt} width={156} height={46} />
      </a>
    </div>
  );
}
