"use client";

import { cn } from "@/lib/utils";

interface FilterPillsProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  className?: string;
}

export function FilterPills({ options, selected, onChange, className }: FilterPillsProps) {
  function toggle(option: string) {
    if (selected.includes(option)) {
      onChange(selected.filter((s) => s !== option));
    } else {
      onChange([...selected, option]);
    }
  }

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {options.map((option) => {
        const active = selected.includes(option);
        return (
          <button
            key={option}
            onClick={() => toggle(option)}
            aria-pressed={active}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-mono transition-all border cursor-pointer",
              active
                ? "bg-card-bg-strong border-card-border-strong text-text-primary"
                : "bg-transparent border-card-border text-text-muted hover:border-card-border-strong hover:text-text-secondary"
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
