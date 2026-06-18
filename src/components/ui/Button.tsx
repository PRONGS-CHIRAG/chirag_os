"use client";

import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-engineering text-background-primary font-semibold hover:brightness-110 shadow-glow-engineering/50 hover:shadow-glow-engineering transition-all",
  secondary:
    "bg-card-bg-strong border border-card-border text-text-primary hover:bg-card-bg hover:border-card-border-strong transition-all",
  ghost:
    "bg-transparent text-text-primary hover:bg-card-bg transition-all",
  outline:
    "bg-transparent border border-card-border text-text-secondary hover:border-accent-engineering hover:text-text-primary transition-all",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm rounded-lg",
  md: "h-10 px-5 text-sm rounded-xl",
  lg: "h-12 px-7 text-base rounded-xl",
};

export function Button({
  variant = "secondary",
  size = "md",
  asChild = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
