"use client";

import { useState } from "react";
import { FilterPills } from "@/components/ui/FilterPills";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FeaturedSystemCard } from "@/components/cards/FeaturedSystemCard";
import { FEATURED_PROJECTS } from "@/content/projects";

const FILTER_OPTIONS = ["All", "Agentic AI", "RAG", "Multimodal", "Applied ML", "Safety"];

const TAG_MATCH: Record<string, string[]> = {
  "Agentic AI": ["Multi-Agent", "LangGraph", "CrewAI", "AutoGen", "Agentic AI & RAG"],
  "RAG": ["RAG", "Vector DB", "FAISS", "ChromaDB", "Summarisation"],
  "Multimodal": ["Multimodal AI", "Vision", "YouTube", "Whisper", "Speech AI"],
  "Applied ML": ["Applied ML", "XGBoost", "Drift", "Kafka"],
  "Safety": ["Safety", "Healthcare AI", "Pydantic"],
};

export default function FeaturedSystemsSection() {
  const [selected, setSelected] = useState<string[]>(["All"]);

  function handleChange(next: string[]) {
    if (next.length === 0) {
      setSelected(["All"]);
      return;
    }
    if (next.includes("All") && !selected.includes("All")) {
      setSelected(["All"]);
      return;
    }
    setSelected(next.filter((s) => s !== "All"));
  }

  const showAll = selected.includes("All") || selected.length === 0;

  const filtered = showAll
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) =>
        selected.some((s) => {
          const matchers = TAG_MATCH[s] ?? [];
          return (
            matchers.some((m) => p.tags?.includes(m)) ||
            matchers.some((m) => p.category?.includes(m))
          );
        })
      );

  return (
    <SectionWrapper id="ai-systems" background="primary">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="PUBLIC BUILDS"
            title="Featured AI Systems"
            description="A selection of public AI systems and prototypes exploring agent orchestration, retrieval, multimodal intelligence, structured outputs, and workflow automation."
            accentColor="text-accent-ai"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <FilterPills
            options={FILTER_OPTIONS}
            selected={selected}
            onChange={handleChange}
            className="mb-8"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.08}>
              <FeaturedSystemCard project={project} className="h-full" />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
