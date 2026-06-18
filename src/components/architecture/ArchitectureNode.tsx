"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ArchitectureNode as ArchNode } from "@/lib/types";

interface ArchitectureNodeProps {
  node: ArchNode;
  isSelected: boolean;
  onSelect: (node: ArchNode) => void;
  index: number;
}

export function ArchitectureNode({ node, isSelected, onSelect, index }: ArchitectureNodeProps) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      onClick={() => onSelect(node)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 cursor-pointer",
        "font-heading text-sm font-semibold",
        isSelected
          ? "bg-accent-engineering/10 border-accent-engineering/40 text-accent-engineering shadow-glow-engineering"
          : "bg-card-bg border-card-border text-text-primary hover:border-card-border-strong hover:bg-card-bg-strong"
      )}
    >
      <span className="font-mono text-[10px] text-text-faint mr-2">{String(index + 1).padStart(2, "0")}</span>
      {node.label}
    </motion.button>
  );
}
