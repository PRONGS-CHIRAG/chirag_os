import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: string;
  label: string;
  footnote?: string;
  className?: string;
}

export function MetricCard({ value, label, footnote, className }: MetricCardProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="font-heading text-4xl font-bold text-text-primary leading-none">
        {value}
      </span>
      <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
        {label}
      </span>
      {footnote && (
        <span className="text-xs italic text-text-faint">{footnote}</span>
      )}
    </div>
  );
}
