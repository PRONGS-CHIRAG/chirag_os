import { ExternalLink } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Container } from "@/components/layout/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { StatusPill } from "@/components/ui/StatusPill";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { POSTS } from "@/content/posts";

const featured = POSTS.filter((p) => p.featured).slice(0, 4);

export default function WritingSection() {
  return (
    <SectionWrapper id="writing" background="secondary">
      <Container>
        <SectionHeading
          eyebrow="WRITING & SHARING"
          title="Public Thinking"
          accentColor="text-accent-research"
          description="Sharing ideas on AI systems, building Cellvara, venture lessons, and applied research."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.08}>
              <GlassCard className="flex flex-col gap-3 h-full">
                <div className="flex items-start justify-between gap-2">
                  {post.category && (
                    <Badge variant="research" className="text-xs shrink-0">
                      {post.category}
                    </Badge>
                  )}
                  {post.linkedinUrl === "needs-review" ? (
                    <span
                      title="Link pending"
                      className="shrink-0 text-text-faint cursor-default"
                      aria-label="Link pending"
                    >
                      <ExternalLink size={14} />
                    </span>
                  ) : post.linkedinUrl ? (
                    <a
                      href={post.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View on LinkedIn"
                      className="shrink-0 text-text-faint hover:text-text-secondary transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  ) : null}
                </div>

                <h3 className="font-heading font-bold text-text-primary text-sm md:text-base leading-snug flex-1">
                  {post.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">{post.summary}</p>

                {post.linkedinUrl === "needs-review" && (
                  <StatusPill status="needs-review" />
                )}
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
