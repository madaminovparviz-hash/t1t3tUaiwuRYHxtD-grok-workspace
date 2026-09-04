import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight outline-none select-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:not-disabled:scale-[0.96] transition-[scale,background-color,color,box-shadow] duration-150 ease-out",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-fg hover:bg-accent-hover shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_8%,transparent)]",
        outline:
          "bg-transparent text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_16%,transparent)] hover:bg-fg/4",
        ghost: "bg-transparent text-fg hover:bg-fg/5",
        invert:
          "bg-accent-fg text-accent hover:bg-surface shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-accent-fg)_18%,transparent)]",
      },
      size: {
        md: "h-11 rounded-lg px-5 text-sm",
        lg: "h-12 rounded-xl px-6 text-sm",
        sm: "h-10 rounded-md px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
