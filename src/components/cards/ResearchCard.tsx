import { BookOpen, Award, FlaskConical, Brain } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { StatusPill } from "@/components/ui/StatusPill";
import type { ResearchItem } from "@/lib/types";

const typeIcon: Record<string, React.ComponentType<{ size?: number }>> = {
  thesis: BookOpen,
  patent: Award,
  publication: FlaskConical,
  "signal-processing": FlaskConical,
  iot: Brain,
  interest: Brain,
};

interface ResearchCardProps {
  item: ResearchItem;
}

export function ResearchCard({ item }: ResearchCardProps) {
  const Icon = typeIcon[item.researchType ?? "interest"] ?? BookOpen;

  return (
    <GlassCard className="flex flex-col gap-4 h-full">
      <div className="flex items-start gap-3">
        <span className="shrink-0 p-2 rounded-lg bg-card-bg border border-card-border text-accent-research">
          <Icon size={18} />
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap gap-2 mb-1">
            {item.verificationStatus === "needs-review" && (
              <StatusPill status="needs-review" />
            )}
          </div>
          <h3 className="font-heading font-bold text-text-primary text-sm md:text-base leading-snug">
            {item.title}
          </h3>
          {item.subtitle && (
            <p className="font-mono text-xs text-text-muted mt-0.5">{item.subtitle}</p>
          )}
        </div>
      </div>

      <p className="text-text-secondary text-sm leading-relaxed flex-1">{item.summary}</p>

      {item.researchType === "patent" && (
        <div className="flex items-center gap-2 text-xs font-mono text-text-muted bg-card-bg border border-card-border rounded-lg px-3 py-2">
          <Award size={12} className="text-accent-warning shrink-0" />
          <span>Patent No: </span>
          {item.patentNumber === "needs-review" ? (
            <StatusPill status="needs-review" />
          ) : (
            <span className="text-text-primary">{item.patentNumber}</span>
          )}
          {item.patentNumber === "needs-review" && (
            <span className="ml-auto text-text-faint">Full citation pending</span>
          )}
        </div>
      )}

      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="research" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </GlassCard>
  );
}
