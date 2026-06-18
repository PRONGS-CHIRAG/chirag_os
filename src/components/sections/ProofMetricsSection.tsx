import { GlassCard } from "@/components/ui/GlassCard";
import { MetricCard } from "@/components/ui/MetricCard";
import { StatusPill } from "@/components/ui/StatusPill";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const DEFENSIBLE_METRICS = [
  { value: "50+", label: "Public Repositories", footnote: "github.com/PRONGS-CHIRAG" },
  { value: "Patent", label: "Holder", footnote: "user-provided" },
  { value: "Published", label: "Researcher", footnote: "user-provided" },
  { value: "8+", label: "Agentic AI & RAG Systems", footnote: "public GitHub" },
  { value: "Founder", label: "Cellvara", footnote: "user-provided" },
  { value: "Industrial", label: "ML Experience", footnote: "user-provided" },
];

const BOSCH_ITEMS = [
  "100,000+ rows/day industrial data workflows",
  "ETL pipeline: 3 hours → 8 minutes",
  "Applied ML & explainability for e-bike acoustic/vibration data",
];

export default function ProofMetricsSection() {
  return (
    <SectionWrapper id="proof" background="secondary">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="MEASURABLE OUTCOMES"
            title="Proof & Impact"
            description="Defensible evidence of engineering depth, research contributions, and venture building."
            accentColor="text-accent-engineering"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {DEFENSIBLE_METRICS.map((metric, i) => (
            <ScrollReveal key={metric.label} delay={i * 0.08}>
              <GlassCard>
                <MetricCard
                  value={metric.value}
                  label={metric.label}
                  footnote={metric.footnote}
                />
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <GlassCard className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-heading text-lg font-bold text-text-primary">
                Industrial Context — Bosch eBike Systems
              </h3>
              <StatusPill status="needs-review" />
            </div>
            <p className="font-mono text-xs text-text-faint uppercase tracking-wider">
              Industrial Context — Pending Verification
            </p>
            <ul className="flex flex-col gap-2">
              {BOSCH_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="w-1 h-1 rounded-full bg-accent-warning flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </ScrollReveal>
      </Container>
    </SectionWrapper>
  );
}
