import type { ResearchItem } from "@/lib/types";

export const RESEARCH_ITEMS: ResearchItem[] = [
  {
    id: "bosch-thesis",
    title: "Predicting Perceived E-Bike Motor Loudness",
    subtitle: "Master's Thesis — Bosch eBike Systems",
    summary:
      "Predicting perceived e-bike motor loudness using vibration and acoustic data with explainable machine learning techniques.",
    description:
      "Industrial ML thesis applying explainable boosting machines and interpretability methods to acoustic and vibration sensor data from e-bike motors. Included large-scale ETL pipeline development and model evaluation.",
    researchType: "thesis",
    featured: true,
    verificationStatus: "needs-review",
    tags: ["Explainable ML", "Applied ML", "Signal Processing", "Industrial AI", "EBM"],
  },
  {
    id: "signal-processing",
    title: "Wavelet Signal Compression Research",
    subtitle: "Research Assistant — FORWISS, University of Passau",
    summary:
      "Signal-processing research on compression of wavelet-based sensor data using NetCDF and HDF5 formats.",
    description:
      "Contributed to research software and publication in wavelet-based data compression for scientific sensor streams, working with NetCDF and HDF5 data formats.",
    researchType: "signal-processing",
    featured: true,
    verificationStatus: "needs-review",
    tags: ["Signal Processing", "Wavelets", "NetCDF", "HDF5", "Data Compression"],
  },
  {
    id: "smart-infrastructure",
    title: "Smart Infrastructure and Connected Living Spaces",
    subtitle: "IoT and Embedded Systems Research",
    summary:
      "Research into smart infrastructure, connected living spaces, sensors, and embedded systems for intelligent environments.",
    description:
      "Explored sensor networks, data communication protocols, and embedded systems for smart infrastructure and connected living space applications. Led to publication contribution.",
    researchType: "iot",
    featured: true,
    verificationStatus: "user-provided",
    tags: ["IoT", "Smart Infrastructure", "Embedded Systems", "Sensors"],
  },
  {
    id: "patent-drone",
    title: "A Flying Object for Dispensing Chemical Composition and Method Thereof",
    subtitle: "Patent",
    summary:
      "Patent for an autonomous drone system designed for precision dispensing of chemical compositions in agricultural and related applications.",
    description:
      "Inventive concept covering a drone-based chemical dispensing mechanism with controlled release and flight path automation for agricultural use cases.",
    researchType: "patent",
    patentNumber: "needs-review",
    featured: true,
    verificationStatus: "needs-review",
    tags: ["Patent", "Drone", "Agriculture", "Automation"],
  },
];

export const RESEARCH_INTERESTS = [
  "Agentic AI",
  "Autonomous AI systems",
  "Explainable AI",
  "Human-AI collaboration",
  "AI for regulated environments",
  "AI governance and enablement",
  "Responsible AI adoption",
  "Applied multimodal systems",
];
