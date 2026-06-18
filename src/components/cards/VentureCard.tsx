import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { StatusPill } from "@/components/ui/StatusPill";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import type { VentureItem } from "@/lib/types";

interface VentureCardProps {
  venture: VentureItem;
}

const ACCENT_BARS: Record<string, string> = {
  cellvara: "bg-accent-venture",
  forgefoundry: "bg-accent-warning",
  afterz: "bg-accent-danger",
};

const BADGE_VARIANTS: Record<string, "venture" | "warning" | "danger"> = {
  cellvara: "venture",
  forgefoundry: "warning",
  afterz: "danger",
};

export function VentureCard({ venture }: VentureCardProps) {
  const barClass = ACCENT_BARS[venture.id] ?? "bg-card-border-strong";
  const badgeVariant = BADGE_VARIANTS[venture.id] ?? "default";

  return (
    <GlassCard className="flex gap-0 overflow-hidden p-0">
      <div className={cn("w-1 flex-shrink-0 rounded-l-xl", barClass)} />
      <div className="flex-1 p-6">
        <div className="flex flex-col md:flex-row md:items-start gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="font-heading text-xl font-bold text-text-primary">
                {venture.title}
              </h3>
              {venture.stage && (
                <Badge variant={badgeVariant}>{venture.stage}</Badge>
              )}
              {venture.verificationStatus === "needs-review" && (
                <StatusPill status="needs-review" />
              )}
            </div>

            <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-2xl">
              {venture.description ?? venture.summary}
            </p>

            {venture.focus && venture.focus.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {venture.focus.map((item) => (
                  <Badge key={item} variant="mono">
                    {item}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {venture.ctaLabel && venture.ctaHref && (
            <div className="flex-shrink-0">
              <Button
                variant={venture.id === "cellvara" ? "primary" : "secondary"}
                size="sm"
                asChild
              >
                <a href={venture.ctaHref}>{venture.ctaLabel}</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
