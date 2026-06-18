import { AlertCircle, Lock } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { VENTURES } from "@/content/ventures";

const PROBLEMS = [
  "Fragmented AI tooling across departments",
  "Unclear implementation pathways for regulated workflows",
  "Compliance concerns without traceable evidence",
  "Limited internal AI expertise in SME teams",
  "Expensive and inaccessible external consulting",
  "Difficulty matching AI tools to real workflows",
  "Lack of traceable implementation evidence",
];

const CELLVARA_PILLARS = [
  {
    title: "AI Consultant-Grade Recommendations",
    items: [
      "Explainable implementation steps",
      "Evidence-backed recommendations",
      "Traceable reasoning",
      "Action-oriented workflow guidance",
      "Tool and process suggestions mapped to business goals",
    ],
    type: "list" as const,
  },
  {
    title: "Role-Specific Compliance-Aware Enablement",
    items: ["R&D", "Quality assurance", "Regulatory affairs", "Pharmacovigilance", "Operations", "Leadership / innovation teams"],
    type: "badges" as const,
  },
  {
    title: "Workflow Mapping and Tool Orchestration",
    items: [
      "Map workflows to appropriate AI tools",
      "Evaluate tool fit and readiness",
      "Connect tools into coherent operating workflows",
      "Reduce disconnected AI experimentation",
      "Support human review and governance",
    ],
    type: "list" as const,
  },
];

export default function CellvaraSection() {
  const cellvara = VENTURES.find((v) => v.id === "cellvara")!;

  return (
    <SectionWrapper id="cellvara" background="primary">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="ACTIVE VENTURE"
            title="Current Mission: Cellvara"
            description="Responsible AI adoption infrastructure for pharma and biotech teams."
            accentColor="text-accent-venture"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          <ScrollReveal delay={0.1}>
            <div>
              <h3 className="font-heading text-xl font-bold text-text-primary mb-6">
                The Problem
              </h3>
              <div className="flex flex-col gap-3">
                {PROBLEMS.map((problem) => (
                  <div key={problem} className="flex items-start gap-3">
                    <AlertCircle size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary text-sm leading-relaxed">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            {CELLVARA_PILLARS.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={0.15 + i * 0.1}>
                <GlassCard className="flex flex-col gap-3">
                  <h4 className="font-heading text-base font-bold text-text-primary">
                    {pillar.title}
                  </h4>
                  {pillar.type === "list" ? (
                    <ul className="flex flex-col gap-1.5">
                      {pillar.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className="w-1 h-1 rounded-full bg-accent-venture flex-shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.items.map((item) => (
                        <Badge key={item} variant="venture">{item}</Badge>
                      ))}
                    </div>
                  )}
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 border-t border-card-border">
            <div className="flex flex-wrap gap-2 flex-1">
              {cellvara.tags?.map((tag) => (
                tag === "Private Repository" ? (
                  <Badge key={tag} variant="mono">
                    <Lock size={10} className="mr-1" />{tag}
                  </Badge>
                ) : (
                  <Badge key={tag} variant="venture">{tag}</Badge>
                )
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" asChild>
                <a href="#cellvara">Explore Cellvara</a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="#contact">Discuss a Pilot</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#ventures">View Founder Thesis</a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </SectionWrapper>
  );
}
