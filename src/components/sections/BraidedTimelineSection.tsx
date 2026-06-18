"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Container } from "@/components/layout/Container";
import { BraidedTimeline } from "@/components/timeline/BraidedTimeline";
import { cn } from "@/lib/utils";
import { EXPERIENCE } from "@/content/experience";
import { EDUCATION } from "@/content/education";
import type { ExperienceItem } from "@/lib/types";

// Synthetic research-track node for the Bosch thesis — the concrete "braid"
// where engineering work and academic research intersect at the same organisation.
const BOSCH_THESIS_RESEARCH: ExperienceItem = {
  id: "bosch-thesis-research",
  title: "Bosch eBike Systems — Research",
  subtitle: "Master's Thesis (Research Track)",
  summary:
    "Explainable ML thesis on predicting perceived e-bike motor loudness from acoustic and vibration data. Connects industrial engineering work with academic research output.",
  organization: "Bosch eBike Systems",
  role: "needs-review",
  track: "research",
  startDate: "needs-review",
  endDate: "needs-review",
  verificationStatus: "needs-review",
  visibility: "public",
  relatedProjects: ["bosch-ebike"],
  tags: ["Explainable AI", "Applied ML", "Signal Processing", "Industrial ML"],
};

// Cellvara as an entrepreneurship-track node
const CELLVARA_VENTURE: ExperienceItem = {
  id: "cellvara-venture",
  title: "Cellvara",
  subtitle: "AI Venture — Founder",
  summary:
    "Responsible AI adoption infrastructure for pharma and biotech SMEs. Workflow mapping, AI enablement, and governance-aware recommendations.",
  organization: "Cellvara",
  role: "Founder",
  track: "entrepreneurship",
  startDate: "2024-01",
  endDate: "present",
  featured: true,
  verificationStatus: "user-provided",
  visibility: "public",
  tags: ["AI Venture", "Responsible AI", "Pharma AI", "Startup"],
};

const TRACK_LEGEND = [
  { label: "Engineering", color: "bg-accent-engineering", text: "text-accent-engineering" },
  { label: "Research", color: "bg-accent-research", text: "text-accent-research" },
  { label: "Entrepreneurship", color: "bg-accent-venture", text: "text-accent-venture" },
  { label: "Education", color: "bg-accent-ai", text: "text-accent-ai" },
];

export default function BraidedTimelineSection() {
  return (
    <SectionWrapper id="journey" background="secondary">
      <Container>
        <SectionHeading
          eyebrow="FOUR TRACKS"
          title="Braided Journey"
          accentColor="text-accent-research"
          description="From computer science foundations through research, industrial ML, agentic AI, and venture building."
        />

        <div className="flex flex-wrap gap-3 mb-10">
          {TRACK_LEGEND.map(({ label, color, text }) => (
            <span
              key={label}
              className={cn(
                "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono font-semibold",
                text,
                "border-card-border bg-card-bg"
              )}
            >
              <span className={cn("h-2 w-2 rounded-full", color)} />
              {label}
            </span>
          ))}
        </div>

        <BraidedTimeline
          items={[
            ...EXPERIENCE,
            BOSCH_THESIS_RESEARCH,
            CELLVARA_VENTURE,
            ...EDUCATION,
          ]}
        />
      </Container>
    </SectionWrapper>
  );
}
