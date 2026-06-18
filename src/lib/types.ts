export type VerificationStatus =
  | "verified-public"
  | "user-provided"
  | "needs-review"
  | "confidential"
  | "archived";

export type Visibility = "public" | "private" | "needs-approval";

export interface ContentItem {
  id: string;
  title: string;
  subtitle?: string;
  summary?: string;
  description?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
  featured?: boolean;
  visibility?: Visibility;
  sourceType?: "github" | "linkedin" | "wix" | "user-provided" | "manual";
  sourceUrl?: string;
  verificationStatus?: VerificationStatus;
  tags?: string[];
  capabilities?: string[];
  relatedProjects?: string[];
  media?: {
    image?: string;
    video?: string;
    demo?: string;
  };
}

export interface ArchitectureNode {
  id: string;
  label: string;
  responsibility: string;
  input: string;
  output: string;
  technology: string;
  failureMode: string;
  validationMethod: string;
}

export interface ProjectItem extends ContentItem {
  architectureNodes?: ArchitectureNode[];
  bestAngle?: string;
  disclaimer?: string;
  githubUrl?: string;
  demoUrl?: string;
  category?: string;
}

export interface VentureItem extends ContentItem {
  stage?: string;
  focus?: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface ResearchItem extends ContentItem {
  researchType?: "thesis" | "paper" | "patent" | "signal-processing" | "iot";
  patentNumber?: string;
}

export interface ExperienceItem extends ContentItem {
  organization?: string;
  role?: string;
  track?: "engineering" | "research" | "entrepreneurship" | "education";
}

export interface CredentialItem extends ContentItem {
  issuer?: string;
  credentialId?: string;
  verifyUrl?: string;
  category?: string;
  completionDate?: string;
}

export interface CapabilitySkill {
  name: string;
  evidence: { projectId: string; label: string }[];
}

export interface CapabilityCategory {
  id: string;
  label: string;
  accentColor: string;
  skills: CapabilitySkill[];
}

export interface ContactPath {
  id: string;
  title: string;
  description: string;
  audiences: string[];
  ctaLabel: string;
  ctaHref: string;
  accentColor: string;
  icon: string;
}

export interface Post extends ContentItem {
  category?: string;
  readingTime?: number;
  linkedinUrl?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}
