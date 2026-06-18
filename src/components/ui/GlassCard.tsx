"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  accentColor?: string;
  onClick?: () => void;
}

export function GlassCard({ children, className, accentColor, onClick }: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01, borderColor: "rgba(255,255,255,0.18)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={onClick}
      className={cn(
        "relative bg-card-bg-strong backdrop-blur-md border border-card-border rounded-xl p-6",
        "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none",
        accentColor && `border-l-2 border-l-[var(--accent-color)]`,
        onClick && "cursor-pointer",
        className
      )}
      style={accentColor ? ({ "--accent-color": `var(--${accentColor})` } as React.CSSProperties) : undefined}
    >
      {children}
    </motion.div>
  );
}
