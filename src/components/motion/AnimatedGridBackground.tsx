"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGridBackgroundProps {
  className?: string;
}

export function AnimatedGridBackground({ className }: AnimatedGridBackgroundProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          animation: shouldReduceMotion ? "none" : undefined,
        }}
      />
      {!shouldReduceMotion && (
        <div
          className="absolute inset-0 animate-glow-pulse"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(56,189,248,0.05) 0%, transparent 70%)",
          }}
        />
      )}
    </div>
  );
}
