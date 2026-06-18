import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ResearchCard } from "@/components/cards/ResearchCard";
import { RESEARCH_ITEMS, RESEARCH_INTERESTS } from "@/content/research";

export default function ResearchSection() {
  return (
    <SectionWrapper id="research" background="primary">
      <Container>
        <SectionHeading
          eyebrow="KNOWLEDGE WORK"
          title="Research & Innovation"
          accentColor="text-accent-research"
          description="Academic research, industrial applied ML, and intellectual property contributions."
        />

        <Grid cols={2} gap={6}>
          {RESEARCH_ITEMS.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.08}>
              <ResearchCard item={item} />
            </ScrollReveal>
          ))}
        </Grid>

        <div className="mt-12">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-research mb-4">
            Research Interests
          </p>
          <div className="flex flex-wrap gap-2">
            {RESEARCH_INTERESTS.map((interest) => (
              <Badge key={interest} variant="research">
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
