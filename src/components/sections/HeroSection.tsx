"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { FloatingSystemCards } from "@/components/motion/FloatingSystemCards";
import { PROFILE } from "@/content/profile";

const TYPEWRITER_TEXT = "SYSTEM ONLINE";

export default function HeroSection() {
  const [typed, setTyped] = useState("");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= TYPEWRITER_TEXT.length) {
        setTyped(TYPEWRITER_TEXT.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      <Container className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center py-20">
          <div className="lg:col-span-3 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-1"
            >
              <span className="font-mono text-xs text-accent-engineering uppercase tracking-widest">
                {typed}
                <span className="animate-pulse">|</span>
              </span>
              <span className="font-mono text-xs text-text-muted uppercase tracking-widest">
                CHIRAG OS / AI VENTURE OPERATING SYSTEM
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight"
            >
              I engineer{" "}
              <span className="bg-gradient-to-r from-accent-engineering to-accent-ai bg-clip-text text-transparent">
                intelligent systems
              </span>{" "}
              and build ventures around real-world problems.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-text-secondary text-lg max-w-xl leading-relaxed"
            >
              {PROFILE.heroDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-venture opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-venture" />
              </span>
              <p className="font-mono text-xs text-text-muted">
                {PROFILE.currentMission}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap gap-3"
            >
              <Button variant="primary" asChild>
                <a href="#ai-systems">Explore AI Systems</a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="#ventures">Explore Ventures</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#journey">View Journey</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href={"/cv.pdf"} target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#contact">Contact Chirag</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-2"
            >
              {PROFILE.badges.map((badge) => (
                <Badge key={badge} variant="mono">
                  {badge}
                </Badge>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2 h-[480px] relative hidden lg:block"
          >
            <FloatingSystemCards />
          </motion.div>
        </div>
      </Container>

      {!shouldReduceMotion && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-card-border to-transparent mx-auto"
          />
        </div>
      )}
    </section>
  );
}
