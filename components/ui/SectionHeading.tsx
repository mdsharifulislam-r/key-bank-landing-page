import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  tone?: "dark" | "light";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-start",
      )}
    >
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.18em]",
          tone === "light" ? "text-primary-200" : "text-brown",
        )}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "mt-3 text-3xl font-bold tracking-tight sm:text-4xl",
          tone === "light" ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-7 sm:text-lg",
            tone === "light" ? "text-white/75" : "text-navy/75",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
