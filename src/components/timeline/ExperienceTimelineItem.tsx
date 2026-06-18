"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { StatusPill } from "@/components/ui/StatusPill";
import { formatDate } from "@/lib/utils";
import type { ExperienceItem } from "@/lib/types";

const trackVariant = {
  engineering: "engineering",
  research: "research",
  entrepreneurship: "venture",
  education: "ai",
} as const;

interface ExperienceTimelineItemProps {
  item: ExperienceItem;
}

export function ExperienceTimelineItem({ item }: ExperienceTimelineItemProps) {
  const [expanded, setExpanded] = useState(false);
  const isNeedsReview = item.verificationStatus === "needs-review";
  const variant = trackVariant[item.track ?? "engineering"];

  const displayDate =
    item.startDate && item.startDate !== "needs-review"
      ? `${formatDate(item.startDate)} — ${item.endDate === "present" ? "Present" : item.endDate && item.endDate !== "needs-review" ? formatDate(item.endDate) : "[Pending Verification]"}`
      : "[Pending Verification]";

  return (
    <GlassCard
      onClick={() => setExpanded((v) => !v)}
      className="cursor-pointer select-none"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <Badge variant={variant} className="text-xs">
              {item.track}
            </Badge>
            {isNeedsReview && <StatusPill status="needs-review" />}
          </div>
          <h3 className="font-heading font-bold text-text-primary text-sm md:text-base leading-snug">
            {item.organization ?? item.title}
          </h3>
          {item.role && item.role !== "needs-review" && (
            <p className="font-mono text-xs text-text-muted mt-0.5">{item.role}</p>
          )}
          <p className="font-mono text-xs text-text-faint mt-1">{displayDate}</p>
        </div>
        <button
          aria-label={expanded ? "Collapse" : "Expand"}
          className="shrink-0 text-text-faint hover:text-text-secondary transition-colors mt-0.5"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded((v) => !v);
          }}
        >
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-card-border">
          <p className="text-text-secondary text-sm leading-relaxed mb-3">
            {isNeedsReview
              ? item.summary?.replace(/\d[\d,]+\+?/g, "[Pending Verification]") ?? item.summary
              : item.summary}
          </p>
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="mono" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      )}
    </GlassCard>
  );
}
