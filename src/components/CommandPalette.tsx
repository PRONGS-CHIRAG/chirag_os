"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface Command {
  id: string;
  label: string;
  group: string;
  action: () => void;
}

function buildCommands(): Command[] {
  function nav(href: string) {
    return () => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
  }

  return [
    { id: "cellvara", label: "Open Cellvara", group: "Navigate", action: nav("#cellvara") },
    { id: "ai-systems", label: "Show AI Systems", group: "Navigate", action: nav("#ai-systems") },
    { id: "agentic", label: "Show Agentic AI Projects", group: "Navigate", action: nav("#ai-systems") },
    { id: "rag", label: "Show RAG Projects", group: "Navigate", action: nav("#ai-systems") },
    { id: "ventures", label: "Show Venture Projects", group: "Navigate", action: nav("#ventures") },
    { id: "research", label: "Show Research", group: "Navigate", action: nav("#research") },
    { id: "education", label: "Show Education", group: "Navigate", action: nav("#journey") },
    {
      id: "cv",
      label: "Download CV",
      group: "Actions",
      action: () => window.open(SOCIAL_LINKS.cv, "_blank"),
    },
    {
      id: "github",
      label: "Open GitHub",
      group: "Actions",
      action: () => window.open(SOCIAL_LINKS.github, "_blank"),
    },
    {
      id: "linkedin",
      label: "Open LinkedIn",
      group: "Actions",
      action: () => window.open(SOCIAL_LINKS.linkedin, "_blank"),
    },
  ];
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const commands = buildCommands();

  const filtered = query.trim()
    ? commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()))
    : commands;

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    }

    function onEvent() {
      setOpen(true);
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("chirag-os:open-palette", onEvent);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("chirag-os:open-palette", onEvent);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setActiveIndex(0);
    }
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && filtered[activeIndex]) {
      filtered[activeIndex].action();
      close();
    }
  }

  const groups = Array.from(new Set(filtered.map((c) => c.group)));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4"
          onClick={close}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
            className="relative w-full max-w-lg bg-background-secondary border border-card-border-strong rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-card-border">
              <Search size={16} className="text-text-faint flex-shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search…"
                className="flex-1 bg-transparent text-text-primary font-mono text-sm outline-none placeholder:text-text-faint"
              />
              <kbd className="hidden sm:inline-flex font-mono text-[10px] text-text-faint bg-card-bg border border-card-border rounded px-1.5 py-0.5">
                ESC
              </kbd>
            </div>

            <div className="max-h-72 overflow-y-auto py-2">
              {filtered.length === 0 ? (
                <p className="text-center font-mono text-xs text-text-faint py-8">
                  No commands found
                </p>
              ) : (
                groups.map((group) => (
                  <div key={group}>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-text-faint px-4 py-1.5">
                      {group}
                    </p>
                    {filtered
                      .filter((c) => c.group === group)
                      .map((cmd) => {
                        const idx = filtered.indexOf(cmd);
                        const isActive = idx === activeIndex;
                        return (
                          <button
                            key={cmd.id}
                            onClick={() => { cmd.action(); close(); }}
                            onMouseEnter={() => setActiveIndex(idx)}
                            className={cn(
                              "w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors cursor-pointer",
                              isActive
                                ? "bg-card-bg-strong text-text-primary"
                                : "text-text-secondary hover:bg-card-bg hover:text-text-primary"
                            )}
                          >
                            <span>{cmd.label}</span>
                            {isActive && <ArrowRight size={14} className="text-accent-engineering flex-shrink-0" />}
                          </button>
                        );
                      })}
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
