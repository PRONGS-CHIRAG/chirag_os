import { cn } from "@/lib/utils";

type BadgeVariant =
  | "default"
  | "engineering"
  | "ai"
  | "venture"
  | "research"
  | "warning"
  | "danger"
  | "mono";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "text-text-faint border border-card-border bg-card-bg",
  engineering:
    "text-accent-engineering border border-sky-500/20 bg-sky-500/10",
  ai: "text-accent-ai border border-purple-500/20 bg-purple-500/10",
  venture:
    "text-accent-venture border border-emerald-500/20 bg-emerald-500/10",
  research:
    "text-accent-research border border-pink-500/20 bg-pink-500/10",
  warning:
    "text-amber-400 border border-amber-400/20 bg-amber-400/10",
  danger:
    "text-accent-danger border border-red-400/20 bg-red-400/10",
  mono: "text-text-muted border border-card-border bg-card-bg font-mono",
};

export function Badge({ variant = "default", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-mono",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
