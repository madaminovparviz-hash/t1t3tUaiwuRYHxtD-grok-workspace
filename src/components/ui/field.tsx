import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("mb-1.5 block text-sm font-medium text-fg", className)}
      {...props}
    />
  );
}

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-lg bg-surface px-3.5 text-base text-fg outline-none placeholder:text-subtle shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_12%,transparent)] focus:shadow-[0_0_0_2px_var(--color-ring)]",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-xl bg-surface px-3.5 py-3 text-base text-fg outline-none placeholder:text-subtle shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_12%,transparent)] focus:shadow-[0_0_0_2px_var(--color-ring)]",
        className,
      )}
      {...props}
    />
  );
}
