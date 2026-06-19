import type { CapabilityCategory } from "@/lib/types";

export const CAPABILITY_CATEGORIES: CapabilityCategory[] = [
  {
    id: "agent-orchestration",
    label: "Agent Orchestration",
    accentColor: "accent-ai",
    skills: [
      {
        name: "LangGraph",
        evidence: [{ projectId: "prepai", label: "PrepAI" }],
      },
      {
        name: "CrewAI",
        evidence: [
          { projectId: "job-applying-buddy", label: "Job Applying Buddy" },
          { projectId: "nourishbot", label: "AI NourishBot" },
        ],
      },
      {
        name: "AutoGen",
        evidence: [{ projectId: "medassist-mas", label: "MedAssist MAS" }],
      },
      {
        name: "Specialist-Agent Workflows",
        evidence: [
          { projectId: "docchat", label: "DocChat" },
          { projectId: "forgefoundry", label: "ForgeFoundry" },
        ],
      },
    ],
  },
  {
    id: "retrieval-knowledge",
    label: "Retrieval & Knowledge Systems",
    accentColor: "accent-engineering",
    skills: [
      {
        name: "FAISS",
        evidence: [{ projectId: "vidintel", label: "Vidintel" }],
      },
      {
        name: "ChromaDB",
        evidence: [{ projectId: "docchat", label: "DocChat" }],
      },
      {
        name: "BM25 + Vector Retrieval",
        evidence: [{ projectId: "docchat", label: "DocChat" }],
      },
      {
        name: "Document Processing",
        evidence: [
          { projectId: "docchat", label: "DocChat" },
          { projectId: "prepai", label: "PrepAI" },
        ],
      },
      {
        name: "Retrieval Verification",
        evidence: [{ projectId: "docchat", label: "DocChat" }],
      },
    ],
  },
  {
    id: "speech-multimodal",
    label: "Speech & Multimodal AI",
    accentColor: "accent-research",
    skills: [
      {
        name: "Whisper",
        evidence: [
          { projectId: "prepai", label: "PrepAI" },
          { projectId: "speech-analyzer", label: "Speech Analyzer AI" },
        ],
      },
      {
        name: "Image Understanding",
        evidence: [{ projectId: "nourishbot", label: "AI NourishBot" }],
      },
      {
        name: "Audio & Signal ML",
        evidence: [{ projectId: "bosch-thesis", label: "Bosch Thesis" }],
      },
      {
        name: "Video Transcript Intelligence",
        evidence: [{ projectId: "vidintel", label: "Vidintel" }],
      },
    ],
  },
  {
    id: "applied-ml-data",
    label: "Applied ML & Data",
    accentColor: "accent-engineering",
    skills: [
      {
        name: "Python / PyTorch / TensorFlow",
        evidence: [{ projectId: "covid-detection", label: "COVID-19 Detection" }],
      },
      {
        name: "Explainable Boosting Machines",
        evidence: [{ projectId: "bosch-thesis", label: "Bosch Thesis" }],
      },
      {
        name: "XGBoost / LightGBM",
        evidence: [{ projectId: "banking-fraud-detector", label: "Banking Fraud Detector" }],
      },
      {
        name: "ETL Pipelines",
        evidence: [{ projectId: "bosch-thesis", label: "Bosch Thesis" }],
      },
      {
        name: "Model Interpretability",
        evidence: [{ projectId: "bosch-thesis", label: "Bosch Thesis" }],
      },
    ],
  },
  {
    id: "backend-deployment",
    label: "Backend & Deployment",
    accentColor: "accent-venture",
    skills: [
      {
        name: "FastAPI",
        evidence: [{ projectId: "prepai", label: "PrepAI" }],
      },
      {
        name: "Gradio",
        evidence: [
          { projectId: "medassist-mas", label: "MedAssist MAS" },
          { projectId: "vidintel", label: "Vidintel" },
        ],
      },
      {
        name: "Pydantic",
        evidence: [
          { projectId: "prepai", label: "PrepAI" },
          { projectId: "medassist-mas", label: "MedAssist MAS" },
        ],
      },
      {
        name: "Docker / REST APIs",
        evidence: [{ projectId: "banking-fraud-detector", label: "Banking Fraud Detector" }],
      },
    ],
  },
  {
    id: "product-entrepreneurship",
    label: "Product & Entrepreneurship",
    accentColor: "accent-venture",
    skills: [
      {
        name: "Customer Discovery",
        evidence: [{ projectId: "cellvara", label: "Cellvara" },{ projectId:"afterz", label: "Afterz" }],
      },
      {
        name: "Value Propositions & Business Models",
        evidence: [{ projectId: "forgefoundry", label: "ForgeFoundry" }, { projectId: "cellvara", label: "Cellvara" }],
      },
      {
        name: "GTM Strategy",
        evidence: [{ projectId: "forgefoundry", label: "ForgeFoundry" }, { projectId: "cellvara", label: "Cellvara" }],
      },
      {
        name: "Rapid Prototyping",
        evidence: [{ projectId: "afterz", label: "Afterz" },  {projectId: "cellvara", label: "Cellvara" }],
      },
      {
        name: "Pitch Development",
        evidence: [{ projectId: "forgefoundry", label: "ForgeFoundry" }, { projectId: "cellvara", label: "Cellvara" }],
      },
    ],
  },
];
