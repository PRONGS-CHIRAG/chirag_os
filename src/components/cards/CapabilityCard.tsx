import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";
import type { CapabilitySkill, ProjectItem } from "@/lib/types";

interface CapabilityCardProps {
  skill: CapabilitySkill;
  projectMap: Map<string, ProjectItem>;
}

export function CapabilityCard({ skill, projectMap }: CapabilityCardProps) {
  return (
    <GlassCard className="flex flex-col gap-3">
      <span className="font-mono font-bold text-text-primary text-sm">
        {skill.name}
      </span>
      {skill.evidence.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {skill.evidence.map(({ projectId, label }) => {
            const project = projectMap.get(projectId);
            return (
              <span
                key={projectId}
                title={project?.summary ?? label}
                className={cn(
                  "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-mono",
                  "bg-card-bg border border-card-border text-text-muted",
                  "hover:text-text-secondary hover:border-card-border-strong transition-colors cursor-default"
                )}
              >
                <span className="text-text-faint">→</span>
                {label}
              </span>
            );
          })}
        </div>
      )}
    </GlassCard>
  );
}
