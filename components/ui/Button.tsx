import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-primary-500 text-navy shadow-glow hover:bg-primary-400 hover:shadow-[0_16px_40px_-12px_rgba(201,150,27,0.7)]",
  secondary:
    "border border-navy/15 bg-white text-navy hover:border-primary-500 hover:shadow-card",
  ghost: "bg-transparent text-navy hover:bg-navy/5",
  inverse: "bg-white text-navy hover:bg-cream",
  outlineLight: "border border-white/30 bg-white/5 text-white hover:bg-white/10",
} as const;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
  ariaLabel,
}: ButtonLinkProps) {
  const classes = cn(
    "hover-lift inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold tracking-tight transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary-700",
    variants[variant],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
