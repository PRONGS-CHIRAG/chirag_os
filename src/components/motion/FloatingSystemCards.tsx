"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Bot, BarChart3, Rocket, MessageSquare, ShieldCheck, FlaskConical, TrendingUp } from "lucide-react";

const CARDS = [
  { icon: Bot, title: "Agentic AI Systems", desc: "Multi-agent orchestration" },
  { icon: BarChart3, title: "Applied ML", desc: "Industrial & research ML" },
  { icon: Rocket, title: "Founder Ventures", desc: "Cellvara & experiments" },
  { icon: MessageSquare, title: "RAG + LLM Products", desc: "Document intelligence" },
  { icon: ShieldCheck, title: "Responsible AI", desc: "Governance & enablement" },
  { icon: FlaskConical, title: "Research", desc: "Signal, explainability, IoT" },
  { icon: TrendingUp, title: "Product Strategy", desc: "Venture to launch" },
];

const POSITIONS = [
  { top: "4%",  left: "10%",  delay: 0 },
  { top: "18%", left: "55%",  delay: 0.4 },
  { top: "36%", left: "2%",   delay: 0.8 },
  { top: "38%", left: "62%",  delay: 0.2 },
  { top: "58%", left: "22%",  delay: 0.6 },
  { top: "62%", left: "68%",  delay: 1.0 },
  { top: "78%", left: "42%",  delay: 0.3 },
];

export function FloatingSystemCards() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full min-h-[480px]">
      {CARDS.map((card, i) => {
        const pos = POSITIONS[i];
        const Icon = card.icon;
        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={shouldReduceMotion ? { opacity: 1, scale: 1 } : {
              opacity: [0, 1],
              scale: [0.9, 1],
              y: [0, -8, 0],
            }}
            transition={
              shouldReduceMotion
                ? { duration: 0.3, delay: pos.delay }
                : {
                    opacity: { duration: 0.5, delay: pos.delay },
                    scale: { duration: 0.5, delay: pos.delay },
                    y: {
                      duration: 4 + i * 0.5,
                      delay: pos.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
            }
            className={cn(
              "absolute backdrop-blur-md bg-card-bg-strong border border-card-border rounded-xl p-3",
              "flex items-center gap-3 min-w-[160px] max-w-[200px]",
              "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none"
            )}
            style={{ top: pos.top, left: pos.left }}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-card-bg flex items-center justify-center border border-card-border">
              <Icon size={16} className="text-accent-engineering" />
            </div>
            <div className="min-w-0">
              <p className="font-heading text-xs font-semibold text-text-primary leading-tight truncate">
                {card.title}
              </p>
              <p className="font-mono text-[10px] text-text-faint leading-tight mt-0.5 truncate">
                {card.desc}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
