"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ArchitectureExplorer } from "@/components/architecture/ArchitectureExplorer";
import { FEATURED_PROJECTS } from "@/content/projects";

const SYSTEM_IDS = ["prepai", "medassist-mas", "vidintel", "docchat"];
const SYSTEM_LABELS: Record<string, string> = {
  prepai: "PrepAI",
  "medassist-mas": "MedAssist MAS",
  vidintel: "Vidintel",
  docchat: "DocChat",
};

export default function ArchitectureExplorerSection() {
  const [activeId, setActiveId] = useState(SYSTEM_IDS[0]);

  const system = FEATURED_PROJECTS.find((p) => p.id === activeId);
  const nodes = system?.architectureNodes ?? [];

  return (
    <SectionWrapper id="architecture" background="primary">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="SYSTEMS THINKING"
            title="Architecture Explorer"
            description="Explore how these AI systems are designed: from user input to agents, tools, retrieval, validation, and final outputs."
            accentColor="text-accent-engineering"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-8">
            {SYSTEM_IDS.map((id) => (
              <button
                key={id}
                onClick={() => setActiveId(id)}
                className={cn(
                  "px-4 py-2 rounded-xl border font-mono text-sm transition-all cursor-pointer",
                  activeId === id
                    ? "bg-accent-engineering/10 border-accent-engineering/40 text-accent-engineering"
                    : "bg-transparent border-card-border text-text-muted hover:border-card-border-strong hover:text-text-secondary"
                )}
              >
                {SYSTEM_LABELS[id]}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {nodes.length > 0 ? (
            <ArchitectureExplorer nodes={nodes} />
          ) : (
            <div className="flex items-center justify-center h-32 border border-dashed border-card-border rounded-xl">
              <p className="font-mono text-xs text-text-faint">No architecture data available</p>
            </div>
          )}
        </ScrollReveal>
      </Container>
    </SectionWrapper>
  );
}
