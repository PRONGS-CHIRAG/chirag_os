import { cn } from "@/lib/utils";
import type { VerificationStatus } from "@/lib/types";

interface StatusPillProps {
  status: VerificationStatus | string;
  className?: string;
}

export function StatusPill({ status, className }: StatusPillProps) {
  if (status === "needs-review") {
    return (
      <span className={cn("inline-flex items-center gap-1.5 font-mono text-xs text-amber-400/80", className)}>
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-400" />
        </span>
        Pending Verification
      </span>
    );
  }

  if (status === "verified-public") {
    return (
      <span className={cn("inline-flex items-center gap-1.5 font-mono text-xs text-accent-venture", className)}>
        <span className="h-1.5 w-1.5 rounded-full bg-accent-venture" />
        Verified
      </span>
    );
  }

  if (status === "confidential") {
    return (
      <span className={cn("inline-flex items-center gap-1.5 font-mono text-xs text-text-faint", className)}>
        <span className="h-1.5 w-1.5 rounded bg-text-faint" />
        Confidential
      </span>
    );
  }

  if (status === "archived") {
    return (
      <span className={cn("inline-flex items-center gap-1.5 font-mono text-xs text-accent-danger/60", className)}>
        <span className="h-1.5 w-1.5 rounded-full bg-accent-danger/60" />
        Archived
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-1.5 font-mono text-xs text-accent-venture", className)}>
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-venture opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-venture" />
      </span>
      {status}
    </span>
  );
}
