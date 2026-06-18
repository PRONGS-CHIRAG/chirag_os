"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({ value, onChange, placeholder = "Search...", className }: SearchBarProps) {
  return (
    <div className={cn("relative", className)}>
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-text-faint pointer-events-none"
        size={16}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "w-full bg-card-bg border border-card-border rounded-xl pl-9 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-faint",
          "focus:outline-none focus:border-card-border-strong focus:ring-1 focus:ring-white/10",
          "transition-all font-mono"
        )}
      />
    </div>
  );
}
