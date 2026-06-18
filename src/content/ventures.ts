import type { VentureItem } from "@/lib/types";

export const VENTURES: VentureItem[] = [
  {
    id: "cellvara",
    title: "Cellvara",
    summary:
      "AI enablement and governance infrastructure for pharma and biotech SMEs.",
    description:
      "Cellvara helps regulated pharma and biotech teams identify, evaluate, and implement AI tools and workflows with explainable guidance, role-specific recommendations, and audit-ready reasoning.",
    status: "Active Venture",
    stage: "Customer Discovery / Prototype Development",
    featured: true,
    visibility: "public",
    verificationStatus: "user-provided",
    sourceType: "user-provided",
    tags: [
      "Active Venture",
      "Customer Discovery",
      "Prototype Development",
      "Pilot Exploration",
      "Private Repository",
    ],
    focus: [
      "Responsible AI adoption",
      "Workflow mapping",
      "Compliance-aware guidance",
      "Tool recommendations",
      "AI implementation planning",
    ],
    ctaLabel: "Explore Cellvara",
    ctaHref: "#cellvara",
  },
  {
    id: "forgefoundry",
    title: "ForgeFoundry",
    summary:
      "AI co-founder platform that turns raw startup ideas into structured business narratives, GTM plans, landing pages, and investor-ready pitch decks.",
    description:
      "ForgeFoundry automates startup strategy with multi-agent pipelines covering problem-solution framing, market research, ICP personas, business models, GTM strategy, landing page publishing, and AI-generated pitch decks.",
    status: "Public Build / Venture Experiment",
    stage: "Venture Experiment",
    featured: true,
    visibility: "public",
    verificationStatus: "user-provided",
    sourceType: "user-provided",
    tags: ["Venture Experiment", "Agentic AI", "Startup Strategy", "Public Build"],
    focus: [
      "Problem-solution framing",
      "Market research",
      "ICP and personas",
      "Business model",
      "GTM strategy",
      "AI-generated pitch deck",
    ],
    ctaLabel: "View ForgeFoundry",
    ctaHref: "#ventures",
  },
  {
    id: "afterz",
    title: "Afterz",
    summary:
      "A nightlife discovery and social-connections concept helping people discover nearby events, understand who is attending, and form spontaneous plans.",
    description:
      "Afterz was a prototype concept exploring real-time event discovery, social coordination, and safety-aware nightlife planning. Current status needs verification.",
    status: "Prototype / Paused",
    stage: "Paused",
    featured: false,
    visibility: "public",
    verificationStatus: "needs-review",
    sourceType: "user-provided",
    tags: ["Prototype", "Paused", "Archived Experiment"],
    focus: ["Event discovery", "Social coordination", "Safety and inclusion"],
    ctaLabel: "View Details",
    ctaHref: "#ventures",
  },
];
