import type { ExperienceItem } from "@/lib/types";

export const EDUCATION: ExperienceItem[] = [
  {
    id: "pes-university",
    title: "PES University",
    subtitle: "B.Tech. Computer Science and Engineering",
    summary:
      "Graduated with distinction. Technical foundations, entrepreneurship courses, and early engineering projects.",
    organization: "PES University",
    track: "education",
    featured: true,
    verificationStatus: "user-provided",
    visibility: "public",
    tags: ["Computer Science", "Engineering", "Entrepreneurship"],
  },
  {
    id: "university-passau",
    title: "University of Passau",
    subtitle: "M.Sc. Computer Science — AI Specialisation",
    summary:
      "Machine learning, deep learning, explainability, and applied thesis work. Graduated with strong academic standing.",
    organization: "University of Passau",
    track: "education",
    featured: true,
    verificationStatus: "user-provided",
    visibility: "public",
    tags: ["Computer Science", "AI", "Machine Learning", "Deep Learning", "Explainability"],
  },
  {
    id: "hnu",
    title: "Hochschule Neu-Ulm",
    subtitle: "M.Sc. International Entrepreneurship, Digitalization and Sustainability",
    summary:
      "Entrepreneurship, digital transformation, business models, sustainability, impact measurement, and venture development.",
    organization: "Hochschule Neu-Ulm",
    track: "education",
    featured: true,
    verificationStatus: "user-provided",
    visibility: "public",
    tags: [
      "Entrepreneurship",
      "Digital transformation",
      "Business models",
      "Sustainability",
      "Impact measurement",
      "Venture development",
    ],
  },
];
