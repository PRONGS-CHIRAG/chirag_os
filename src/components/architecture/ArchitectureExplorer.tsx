"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArchitectureNode } from "./ArchitectureNode";
import type { ArchitectureNode as ArchNode } from "@/lib/types";

const DETAIL_FIELDS: { key: keyof ArchNode; label: string }[] = [
  { key: "responsibility", label: "Responsibility" },
  { key: "input", label: "Input" },
  { key: "output", label: "Output" },
  { key: "technology", label: "Technology" },
  { key: "failureMode", label: "Failure Mode" },
  { key: "validationMethod", label: "Validation" },
];

interface ArchitectureExplorerProps {
  nodes: ArchNode[];
}

export function ArchitectureExplorer({ nodes }: ArchitectureExplorerProps) {
  const [selected, setSelected] = useState<ArchNode | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-2 relative">
        {nodes.map((node, i) => (
          <div key={node.id} className="relative">
            <ArchitectureNode
              node={node}
              isSelected={selected?.id === node.id}
              onSelect={setSelected}
              index={i}
            />
            {i < nodes.length - 1 && (
              <div className="flex justify-center py-0.5">
                <svg width="2" height="16" viewBox="0 0 2 16" fill="none" aria-hidden="true">
                  <path d="M1 0 L1 12" stroke="rgba(56,189,248,0.3)" strokeWidth="1.5" strokeDasharray="3 2" />
                  <path d="M-1 12 L1 16 L3 12" fill="rgba(56,189,248,0.3)" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {selected ? (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="sticky top-24 bg-card-bg-strong backdrop-blur-md border border-card-border rounded-xl p-5"
            >
              <h4 className="font-heading text-lg font-bold text-text-primary mb-4">
                {selected.label}
              </h4>
              <div className="flex flex-col gap-3">
                {DETAIL_FIELDS.map(({ key, label }) => (
                  <div key={key}>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-text-faint mb-1">
                      {label}
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {selected[key] as string}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center h-48 rounded-xl border border-dashed border-card-border"
            >
              <p className="font-mono text-xs text-text-faint">Click a node to explore</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
