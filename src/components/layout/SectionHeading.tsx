import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  accentColor?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  accentColor = "text-accent-engineering",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", className)}>
      {eyebrow && (
        <p
          className={cn(
            "font-mono text-xs uppercase tracking-widest mb-3",
            accentColor
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-primary leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary text-base md:text-lg max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
