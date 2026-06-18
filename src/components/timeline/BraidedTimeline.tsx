"use client";

import { GitBranch } from "lucide-react";
import { ExperienceTimelineItem } from "@/components/timeline/ExperienceTimelineItem";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";
import type { ExperienceItem } from "@/lib/types";

const TRACKS = ["engineering", "research", "entrepreneurship", "education"] as const;
type Track = (typeof TRACKS)[number];

const trackColors: Record<Track, string> = {
  engineering: "bg-accent-engineering",
  research: "bg-accent-research",
  entrepreneurship: "bg-accent-venture",
  education: "bg-accent-ai",
};

const trackTextColors: Record<Track, string> = {
  engineering: "text-accent-engineering",
  research: "text-accent-research",
  entrepreneurship: "text-accent-venture",
  education: "text-accent-ai",
};

interface BraidedTimelineProps {
  items: ExperienceItem[];
}

export function BraidedTimeline({ items }: BraidedTimelineProps) {
  const byTrack: Record<Track, ExperienceItem[]> = {
    engineering: [],
    research: [],
    entrepreneurship: [],
    education: [],
  };

  for (const item of items) {
    const t = (item.track ?? "engineering") as Track;
    if (byTrack[t]) byTrack[t].push(item);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {TRACKS.map((track) => (
        <div key={track} className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <span className={cn("h-3 w-3 rounded-full shrink-0", trackColors[track])} />
            <span className={cn("font-mono text-xs uppercase tracking-widest font-semibold", trackTextColors[track])}>
              {track}
            </span>
          </div>

          <div className="relative flex flex-col gap-4">
            <div
              className={cn(
                "absolute left-[5px] top-0 bottom-0 w-px opacity-20",
                trackColors[track]
              )}
            />
            {byTrack[track].map((item, i) => {
              const isCrossTrack = !!(item.relatedProjects && item.relatedProjects.length > 0);
              return (
                <div key={item.id} className="pl-5 relative">
                  {/* Cross-track braid marker: dual-ring dot for items spanning tracks */}
                  {isCrossTrack ? (
                    <span className="absolute left-[-2px] top-3.5 flex items-center justify-center">
                      <span className={cn("h-4 w-4 rounded-full border-2 border-accent-engineering opacity-60")} />
                      <span className={cn("absolute h-2 w-2 rounded-full", trackColors[track])} />
                    </span>
                  ) : (
                    <span
                      className={cn(
                        "absolute left-0 top-4 h-2.5 w-2.5 rounded-full border-2 border-background-primary",
                        trackColors[track]
                      )}
                    />
                  )}
                  <ScrollReveal delay={i * 0.06}>
                    {isCrossTrack && (
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <GitBranch size={11} className="text-accent-engineering opacity-60" />
                        <span className="font-mono text-[10px] text-accent-engineering opacity-60 tracking-wider">
                          SPANS ENGINEERING + RESEARCH
                        </span>
                      </div>
                    )}
                    <ExperienceTimelineItem item={item} />
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
