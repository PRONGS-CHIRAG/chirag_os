import type { NavLink, SiteConfig } from "./types";

export const SITE_CONFIG: SiteConfig = {
  name: "Chirag OS — AI Venture Operating System",
  tagline: "AI Venture Operating System",
  description:
    "I engineer intelligent systems and build ventures around real-world problems. AI engineer, researcher, and entrepreneur working across agentic AI, RAG, applied ML, explainable systems, and AI-native product development.",
  url: "https://chirag-os.vercel.app",
  githubUrl: "https://github.com/PRONGS-CHIRAG",
  linkedinUrl: "https://www.linkedin.com/in/chiragnvijay/",
  email: "chiragatgermany@gmail.com",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Command Center", href: "#mission-control" },
  { label: "Ventures", href: "#ventures" },
  { label: "AI Systems", href: "#ai-systems" },
  { label: "Research", href: "#research" },
  { label: "Journey", href: "#journey" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = {
  github: SITE_CONFIG.githubUrl,
  linkedin: SITE_CONFIG.linkedinUrl,
  email: SITE_CONFIG.email,
  cv: "/cv.pdf",
};

export const SECTION_ANCHORS = {
  hero: "hero",
  missionControl: "mission-control",
  cellvara: "cellvara",
  aiSystems: "ai-systems",
  ventures: "ventures",
  architecture: "architecture",
  proof: "proof",
  journey: "journey",
  research: "research",
  capabilities: "capabilities",
  credentials: "credentials",
  writing: "writing",
  about: "about",
  contact: "contact",
  footer: "footer",
};
