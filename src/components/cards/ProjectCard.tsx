import { ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { ProjectItem } from "@/lib/types";

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <GlassCard className={cn("flex flex-col gap-3", className)}>
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-heading text-base font-semibold text-text-primary leading-tight">
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
            <ExternalLink size={14} />
          </a>
        )}
      </div>

      {project.summary && (
        <p className="text-text-secondary text-sm leading-relaxed">{project.summary}</p>
      )}

      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="mono">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </GlassCard>
  );
}
