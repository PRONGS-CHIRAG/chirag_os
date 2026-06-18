import { Mail } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ContactPathCard } from "@/components/cards/ContactPathCard";
import { CONTACT_PATHS } from "@/content/contactPaths";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function ContactSection() {
  const firstThree = CONTACT_PATHS.slice(0, 3);
  const lastTwo = CONTACT_PATHS.slice(3);

  return (
    <SectionWrapper id="contact" background="secondary">
      <Container>
        <SectionHeading
          eyebrow="COLLABORATION PATHS"
          title="Work With Chirag"
          accentColor="text-accent-venture"
          description="Whether you are hiring for AI roles, exploring a Cellvara pilot, building a startup, or looking for a research collaborator, choose the path that fits best."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {firstThree.map((path, i) => (
            <ScrollReveal key={path.id} delay={i * 0.08}>
              <ContactPathCard path={path} isPrimary={path.id === "hire-chirag"} />
            </ScrollReveal>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {lastTwo.map((path, i) => (
            <ScrollReveal key={path.id} delay={i * 0.08} className="w-full md:w-[calc(50%-12px)] max-w-sm">
              <ContactPathCard path={path} isPrimary={false} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-text-muted">
          <Mail size={16} className="text-accent-venture shrink-0" />
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="font-mono text-sm hover:text-text-primary transition-colors"
          >
            {SOCIAL_LINKS.email}
          </a>
        </div>
      </Container>
    </SectionWrapper>
  );
}
