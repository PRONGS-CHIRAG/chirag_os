"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { CapabilityCard } from "@/components/cards/CapabilityCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CAPABILITY_CATEGORIES } from "@/content/capabilities";
import { FEATURED_PROJECTS } from "@/content/projects";
import type { ProjectItem } from "@/lib/types";

const projectMap = new Map<string, ProjectItem>(
  FEATURED_PROJECTS.map((p) => [p.id, p])
);

// Static lookup to avoid dynamic Tailwind class construction (purged by JIT)
const ACCENT_BORDER_CLASS: Record<string, string> = {
  "accent-ai": "data-[state=active]:border-b-2 data-[state=active]:border-accent-ai",
  "accent-engineering": "data-[state=active]:border-b-2 data-[state=active]:border-accent-engineering",
  "accent-research": "data-[state=active]:border-b-2 data-[state=active]:border-accent-research",
  "accent-venture": "data-[state=active]:border-b-2 data-[state=active]:border-accent-venture",
};

export default function CapabilityMapSection() {
  return (
    <SectionWrapper id="capabilities" background="secondary">
      <Container>
        <SectionHeading
          eyebrow="SKILLS WITH PROOF"
          title="Capability Map"
          accentColor="text-accent-engineering"
          description="Every skill linked to a system that uses it. Not a logo wall."
        />

        <Tabs defaultValue={CAPABILITY_CATEGORIES[0].id}>
          <TabsList className="flex-wrap h-auto gap-1 mb-2">
            {CAPABILITY_CATEGORIES.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className={ACCENT_BORDER_CLASS[cat.accentColor] ?? ""}
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {CAPABILITY_CATEGORIES.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <Grid cols={2} gap={4}>
                {cat.skills.map((skill, i) => (
                  <ScrollReveal key={skill.name} delay={i * 0.04}>
                    <CapabilityCard skill={skill} projectMap={projectMap} />
                  </ScrollReveal>
                ))}
              </Grid>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </SectionWrapper>
  );
}
