import type { ResearchItem } from "@/lib/types";

export const RESEARCH_ITEMS: ResearchItem[] = [
  {
    id: "bosch-thesis",
    title: "Predicting Perceived E-Bike Motor Loudness and Sound Quality ratings using Vibration Data with Explainable Artificial Intelligence",
    subtitle: "Master's Thesis — Bosch eBike Systems",
    summary:
      "Predicting perceived e-bike motor loudness and sound quality ratings using vibration data with explainable artificial intelligence techniques.",
    description:
      "Industrial ML thesis applying explainable boosting machines and interpretability methods to vibration sensor data from e-bike motors. Included large-scale ETL pipeline development and model evaluation.",
    researchType: "thesis",
    featured: true,
    startDate: "April 2024",
    endDate: "October 2024",
    verificationStatus: "verified-public",
    tags: ["Explainable AI", "Applied ML", "Signal Processing", "Industrial AI", "EBM"],
  },
  {
    id: "signal-processing",
    title: "Wavelet Signal Compression Research",
    subtitle: "Research Assistant — FORWISS, University of Passau",
    summary:
      "Signal-processing research on compression of wavelet-based sensor data using NetCDF and HDF5 formats and JPEG compression techniques.",
    description:
      "Contributed to research software and publication in wavelet-based data compression for scientific sensor streams, working with NetCDF and HDF5 data formats and JPEG compression techniques.",
    researchType: "signal-processing",
    featured: true,
    startDate: "June 2022",
    endDate: "July 2023",
    verificationStatus: "verified-public",
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
    startDate: "October 2019",
    endDate: "October 2021",
    verificationStatus: "verified-public",
    tags: ["IoT", "Smart Infrastructure", "Embedded Systems", "Sensors"],
  },
  {
    id: "patent-drone",
    title: "A Flying Object for Dispensing Chemical Composition and Method Thereof",
    subtitle: "Patent",
    summary:
      "Patent for an autonomous drone system designed for precision dispensing of pesticides in farms using computer vision algorithms.",
    description:
      "Inventive concept covering a drone-based chemical dispensing mechanism with controlled release and flight path automation for agricultural use cases.",
    researchType: "patent",
    patentNumber: "201941047691",
    featured: true,
    startDate: "June 2019",
    endDate: "December 2019",
    verificationStatus: "verified-public",
    tags: ["Patent", "Drone", "Agriculture", "Automation"," Computer Vision"],
  },
];

export const RESEARCH_INTERESTS = [
  "Agentic AI",
  "Autonomous AI systems",
  "Explainable AI",
  "Human-AI collaboration",
  "AI for regulated environments",
  "AI governance and enablement",
  "Safe and Responsible AI",
];
