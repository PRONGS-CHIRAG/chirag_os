import { ExternalLink, AlertTriangle } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { StatusPill } from "@/components/ui/StatusPill";
import { cn } from "@/lib/utils";
import type { ProjectItem } from "@/lib/types";

interface FeaturedSystemCardProps {
  project: ProjectItem;
  className?: string;
}

export function FeaturedSystemCard({ project, className }: FeaturedSystemCardProps) {
  return (
    <GlassCard className={cn("flex flex-col gap-4 h-full", className)}>
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-heading text-lg font-bold text-text-primary leading-tight">
          {project.title}
        </h3>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="flex-shrink-0 text-text-faint hover:text-accent-engineering transition-colors"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      <p className="text-text-secondary text-sm leading-relaxed flex-1">
        {project.summary}
      </p>

      {project.bestAngle && (
        <p className="font-mono text-xs text-text-faint italic">
          {project.bestAngle}
        </p>
      )}

      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 5).map((tag) => (
            <Badge key={tag} variant="mono">
              {tag}
            </Badge>
          ))}
        </div>
      )}

      {project.disclaimer && (
        <div className="flex items-start gap-2 rounded-lg border border-amber-400/20 bg-amber-400/5 px-3 py-2">
          <AlertTriangle size={13} className="text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="font-mono text-[10px] text-amber-400/80 leading-relaxed">
            {project.disclaimer}
          </p>
        </div>
      )}

      {project.verificationStatus === "needs-review" && (
        <StatusPill status="needs-review" />
      )}
    </GlassCard>
  );
}
