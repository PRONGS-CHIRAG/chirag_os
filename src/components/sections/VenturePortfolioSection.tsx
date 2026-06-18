import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { VentureCard } from "@/components/cards/VentureCard";
import { VENTURES } from "@/content/ventures";

export default function VenturePortfolioSection() {
  return (
    <SectionWrapper id="ventures" background="secondary">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="BEYOND CODE"
            title="Venture Portfolio"
            description="Beyond building models and applications, I explore how AI can become useful products, validated workflows, and scalable ventures."
            accentColor="text-accent-venture"
          />
        </ScrollReveal>

        <div className="flex flex-col gap-5">
          {VENTURES.map((venture, i) => (
            <ScrollReveal key={venture.id} delay={i * 0.12}>
              <VentureCard venture={venture} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
