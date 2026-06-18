import { ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { CredentialItem } from "@/lib/types";

interface CredentialCardProps {
  item: CredentialItem;
}

export function CredentialCard({ item }: CredentialCardProps) {
  return (
    <GlassCard className="flex flex-col gap-3 h-full">
      <div className="flex-1">
        <p className="font-mono text-xs text-text-muted mb-1">{item.issuer}</p>
        <h3 className="font-heading font-bold text-text-primary text-sm leading-snug">
          {item.title}
        </h3>
      </div>

      <div className="flex items-center justify-between gap-2 flex-wrap">
        {item.category && (
          <Badge variant="ai" className="text-xs">
            {item.category}
          </Badge>
        )}
        {item.verifyUrl && item.verifyUrl !== "needs-review" && (
          <Button variant="ghost" size="sm" asChild className="ml-auto h-7 px-2 text-xs gap-1">
            <a href={item.verifyUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={12} />
              Verify
            </a>
          </Button>
        )}
      </div>
    </GlassCard>
  );
}
