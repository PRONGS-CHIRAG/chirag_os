import { ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StatusPill } from "@/components/ui/StatusPill";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { VENTURES } from "@/content/ventures";
import { EXPERIENCE } from "@/content/experience";
import { EDUCATION } from "@/content/education";
import { FEATURED_PROJECTS } from "@/content/projects";

const ENGINEERING_FOCUS = [
  "Agent orchestration",
  "Enterprise RAG",
  "Structured outputs",
  "Human-in-the-loop workflows",
  "AI evaluation",
  "Explainable implementation guidance",
  "Responsible AI adoption",
];

const RESEARCH_QUESTION =
  "How can organisations adopt advanced AI systems without sacrificing explainability, governance, operational trust, or human accountability?";

export default function MissionControlSection() {
  const cellvara = VENTURES.find((v) => v.id === "cellvara")!;
  const hilti = EXPERIENCE.find((e) => e.id === "hilti")!;
  const hnu = EDUCATION.find((e) => e.id === "hnu")!;
  const prepai = FEATURED_PROJECTS.find((p) => p.id === "prepai")!;

  return (
    <SectionWrapper id="mission-control" background="secondary">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="COMMAND CENTER"
            title="Mission Control"
            description="A live overview of current ventures, engineering focus, professional context, and active research direction."
            accentColor="text-accent-engineering"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScrollReveal delay={0.1}>
            <GlassCard className="flex flex-col gap-4 h-full">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-accent-venture">
                  ACTIVE VENTURE
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-venture opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-venture" />
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-text-primary">
                {cellvara.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed flex-1">
                {cellvara.summary}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cellvara.tags?.slice(0, 4).map((tag) => (
                  <Badge key={tag} variant="venture">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button variant="secondary" size="sm" asChild>
                <a href="#ventures">{cellvara.ctaLabel}</a>
              </Button>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <GlassCard className="flex flex-col gap-4 h-full">
              <span className="font-mono text-xs uppercase tracking-widest text-accent-engineering">
                ENGINEERING FOCUS
              </span>
              <h3 className="font-heading text-lg font-bold text-text-primary">
                Current Engineering Focus
              </h3>
              <ul className="flex flex-col gap-2 flex-1">
                {ENGINEERING_FOCUS.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="w-1 h-1 rounded-full bg-accent-engineering flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <GlassCard className="flex flex-col gap-4 h-full">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
                  PROFESSIONAL ROLE
                </span>
                <StatusPill status="needs-review" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text-primary">
                {hilti.organization}
              </h3>
              <p className="font-mono text-sm text-text-muted">{hilti.subtitle}</p>
              <p className="text-text-secondary text-sm leading-relaxed flex-1">
                {hilti.summary}
              </p>
              <p className="font-mono text-xs text-text-faint italic">
                Details pending verification
              </p>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <GlassCard className="flex flex-col gap-4 h-full">
              <span className="font-mono text-xs uppercase tracking-widest text-accent-ai">
                EDUCATION
              </span>
              <h3 className="font-heading text-xl font-bold text-text-primary">
                {hnu.organization}
              </h3>
              <p className="font-mono text-sm text-text-muted">{hnu.subtitle}</p>
              <div className="flex flex-wrap gap-1.5 flex-1 content-start">
                {hnu.tags?.map((tag) => (
                  <Badge key={tag} variant="ai">
                    {tag}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <GlassCard className="flex flex-col gap-4 h-full">
              <span className="font-mono text-xs uppercase tracking-widest text-accent-research">
                LATEST PUBLIC BUILD
              </span>
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-heading text-xl font-bold text-text-primary">
                  {prepai.title}
                </h3>
                {prepai.githubUrl && (
                  <a
                    href={prepai.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${prepai.title} on GitHub`}
                    className="text-text-faint hover:text-accent-engineering transition-colors flex-shrink-0"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              <p className="text-text-secondary text-sm leading-relaxed flex-1">
                {prepai.summary}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {prepai.tags?.slice(0, 4).map((tag) => (
                  <Badge key={tag} variant="mono">
                    {tag}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <GlassCard className="flex flex-col gap-4 h-full">
              <span className="font-mono text-xs uppercase tracking-widest text-accent-research">
                RESEARCH QUESTION
              </span>
              <p className="text-text-secondary text-sm leading-relaxed flex-1 italic">
                &ldquo;{RESEARCH_QUESTION}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="research">Responsible AI</Badge>
                <Badge variant="research">Governance</Badge>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </Container>
    </SectionWrapper>
  );
}
