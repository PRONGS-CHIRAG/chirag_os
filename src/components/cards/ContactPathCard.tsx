"use client";

import {
  Briefcase,
  FlaskConical,
  Code2,
  Mic,
  BookOpen,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { cn } from "@/lib/utils";
import type { ContactPath } from "@/lib/types";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
  Briefcase,
  FlaskConical,
  Code2,
  Mic,
  BookOpen,
};

const GLOW_MAP: Record<string, string> = {
  "accent-engineering": "hover:border-accent-engineering/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.12)]",
  "accent-venture": "hover:border-accent-venture/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.12)]",
  "accent-ai": "hover:border-accent-ai/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]",
  "accent-research": "hover:border-accent-research/40 hover:shadow-[0_0_20px_rgba(244,114,182,0.12)]",
};

const ICON_COLOR_MAP: Record<string, string> = {
  "accent-engineering": "text-accent-engineering",
  "accent-venture": "text-accent-venture",
  "accent-ai": "text-accent-ai",
  "accent-research": "text-accent-research",
};

interface ContactPathCardProps {
  path: ContactPath;
  isPrimary?: boolean;
}

export function ContactPathCard({ path, isPrimary = false }: ContactPathCardProps) {
  const Icon = ICON_MAP[path.icon] ?? Briefcase;
  const glowClass = GLOW_MAP[path.accentColor] ?? "";

  return (
    <GlassCard className={cn("flex flex-col gap-4 h-full transition-shadow duration-300", glowClass)}>
      <div className="flex items-start gap-3">
        <span className={cn("shrink-0 p-2 rounded-lg bg-card-bg border border-card-border", ICON_COLOR_MAP[path.accentColor] ?? "text-text-primary")}>
          <Icon size={18} />
        </span>
        <h3 className="font-heading font-bold text-text-primary text-base leading-snug">
          {path.title}
        </h3>
      </div>

      <p className="text-text-secondary text-sm leading-relaxed flex-1">{path.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {path.audiences.map((a) => (
          <span key={a} className="font-mono text-xs text-text-faint bg-card-bg border border-card-border px-2 py-0.5 rounded-md">
            {a}
          </span>
        ))}
      </div>

      <MagneticButton>
        <Button
          variant={isPrimary ? "primary" : "secondary"}
          size="md"
          asChild
          className="w-full"
        >
          <a href={path.ctaHref}>{path.ctaLabel}</a>
        </Button>
      </MagneticButton>
    </GlassCard>
  );
}
