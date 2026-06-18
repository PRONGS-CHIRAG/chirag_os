"use client";

import { Camera, MapPin, Pen, Music } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Container } from "@/components/layout/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { PROFILE } from "@/content/profile";

const INTERESTS = [
  { icon: Camera, label: "Photography", text: "Capturing places and moments" },
  { icon: MapPin, label: "Travel", text: "Learning through new environments" },
  { icon: Pen, label: "Creative Writing", text: "Poetry and reflective writing" },
  { icon: Music, label: "Music & Creative AI", text: "Exploring generative creativity" },
];

function GeometricAvatar() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative flex items-center justify-center w-full h-64 md:h-80">
      <svg
        viewBox="0 0 280 280"
        className="w-full h-full max-w-xs"
        aria-hidden="true"
      >
        <motion.circle
          cx="140" cy="140" r="100"
          fill="none"
          stroke="rgba(56,189,248,0.15)"
          strokeWidth="1"
          animate={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "140px 140px" }}
        />
        <motion.circle
          cx="140" cy="140" r="70"
          fill="none"
          stroke="rgba(139,92,246,0.2)"
          strokeWidth="1"
          strokeDasharray="8 4"
          animate={shouldReduceMotion ? {} : { rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "140px 140px" }}
        />
        <motion.circle
          cx="140" cy="140" r="44"
          fill="rgba(16,185,129,0.06)"
          stroke="rgba(16,185,129,0.25)"
          strokeWidth="1"
          animate={shouldReduceMotion ? {} : { scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "140px 140px" }}
        />
        <motion.polygon
          points="140,60 200,170 80,170"
          fill="none"
          stroke="rgba(244,114,182,0.2)"
          strokeWidth="1"
          animate={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "140px 130px" }}
        />
        <circle cx="140" cy="140" r="6" fill="rgba(56,189,248,0.7)" />
        <motion.circle
          cx="140" cy="140" r="12"
          fill="none"
          stroke="rgba(56,189,248,0.3)"
          strokeWidth="1"
          animate={shouldReduceMotion ? {} : { scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "140px 140px" }}
        />
        <circle cx="210" cy="90" r="4" fill="rgba(139,92,246,0.5)" />
        <circle cx="70" cy="200" r="3" fill="rgba(16,185,129,0.5)" />
        <circle cx="195" cy="185" r="2.5" fill="rgba(244,114,182,0.5)" />
      </svg>
    </div>
  );
}

export default function AboutSection() {
  return (
    <SectionWrapper id="about" background="primary">
      <Container>
        <SectionHeading
          eyebrow="THE PERSON"
          title="About Chirag"
          accentColor="text-accent-venture"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <ScrollReveal>
              <p className="text-text-secondary text-base leading-relaxed mb-8">
                {PROFILE.bio}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-2 gap-3">
                {INTERESTS.map(({ icon: Icon, label, text }) => (
                  <GlassCard key={label} className="flex items-start gap-3 p-4">
                    <span className="shrink-0 text-accent-venture mt-0.5">
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="font-mono text-xs font-semibold text-text-primary">{label}</p>
                      <p className="text-text-faint text-xs mt-0.5 leading-snug">{text}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <GeometricAvatar />
          </ScrollReveal>
        </div>
      </Container>
    </SectionWrapper>
  );
}
