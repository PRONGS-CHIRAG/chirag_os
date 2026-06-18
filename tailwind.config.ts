import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#050816",
          secondary: "#0A1020",
          tertiary: "#111827",
        },
        card: {
          bg: "rgba(255,255,255,0.05)",
          "bg-strong": "rgba(255,255,255,0.08)",
          border: "rgba(255,255,255,0.10)",
          "border-strong": "rgba(255,255,255,0.18)",
        },
        text: {
          primary: "#f8fafc",
          secondary: "#cbd5e1",
          muted: "#94a3b8",
          faint: "#64748b",
        },
        accent: {
          engineering: "#38bdf8",
          ai: "#8b5cf6",
          venture: "#10b981",
          research: "#f472b6",
          warning: "#f59e0b",
          danger: "#ef4444",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ping-slow": {
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
        "ping-slow": "ping-slow 2s cubic-bezier(0,0,0.2,1) infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        "glow-engineering": "0 0 20px rgba(56,189,248,0.35)",
        "glow-ai": "0 0 20px rgba(139,92,246,0.35)",
        "glow-venture": "0 0 20px rgba(16,185,129,0.30)",
        "glow-research": "0 0 20px rgba(244,114,182,0.30)",
      },
    },
  },
  plugins: [],
};

export default config;
