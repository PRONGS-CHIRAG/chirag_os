import type { Post } from "@/lib/types";

export const POSTS: Post[] = [
  {
    id: "post-agentic-ai-design",
    title: "Designing Multi-Agent Systems That Don't Hallucinate",
    summary:
      "How structured outputs, verification agents, and deterministic pre-checks reduce hallucination in agentic AI systems.",
    category: "Agentic AI Systems",
    readingTime: 5,
    featured: true,
    verificationStatus: "verified-public",
    linkedinUrl: "verified-public",
  },
  {
    id: "post-rag-verification",
    title: "Why RAG Alone Isn't Enough",
    summary:
      "Retrieval-augmented generation improves grounding but verification agents are needed for production reliability.",
    category: "RAG & Retrieval",
    readingTime: 4,
    featured: true,
    verificationStatus: "verified-public",
    linkedinUrl: "verified-public",
  },
  {
    id: "post-building-cellvara",
    title: "What I Learned from Customer Discovery in Pharma AI",
    summary:
      "Observations from speaking with pharma and biotech teams about AI adoption challenges and decision-making.",
    category: "Building Cellvara",
    readingTime: 6,
    featured: true,
    verificationStatus: "verified-public",
    linkedinUrl: "verified-public",
  },
  {
    id: "post-responsible-ai-pharma",
    title: "Responsible AI in Regulated Environments",
    summary:
      "Why explainability, traceability, and human oversight matter more than model accuracy in regulated sectors.",
    category: "Responsible AI",
    readingTime: 5,
    featured: true,
    verificationStatus: "verified-public",
    linkedinUrl: "verified-public",
  },
  {
    id: "post-hackathon-retro",
    title: "Building an AI Product in 24 Hours",
    summary:
      "Lessons from rapid prototyping at hackathons: what to cut, what to keep, and how to demo AI systems clearly.",
    category: "Hackathon Retrospectives",
    readingTime: 4,
    featured: false,
    verificationStatus: "verified-public",
    linkedinUrl: "verified-public",
  },
  {
    id: "post-explainability-production",
    title: "Explainability in Production ML",
    summary:
      "From academic SHAP values to production-grade explainability: what actually matters when deploying to stakeholders.",
    category: "Research Explainers",
    readingTime: 5,
    featured: false,
    verificationStatus: "verified-public",
    linkedinUrl: "verified-public",
  },
  {
    id: "post-venture-lessons",
    title: "What ForgeFoundry Taught Me About AI Product Thinking",
    summary:
      "Building an AI co-founder platform surfaced tensions between automation and genuine user value.",
    category: "Product & Venture Lessons",
    readingTime: 5,
    featured: false,
    verificationStatus: "verified-public",
    linkedinUrl: "verified-public",
  },
];
