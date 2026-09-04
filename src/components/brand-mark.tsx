import { cn } from "@/lib/utils";

export function BrandMark({
  inverted = false,
  className,
}: {
  inverted?: boolean;
  className?: string;
}) {
  const tile = inverted ? "var(--color-accent-fg)" : "var(--color-accent)";
  const hole = inverted ? "var(--color-accent)" : "var(--color-bg)";

  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill={tile} />
      <circle cx="16" cy="13" r="6" fill={hole} />
      <rect x="7" y="21" width="18" height="2" rx="1" fill={hole} />
    </svg>
  );
}
