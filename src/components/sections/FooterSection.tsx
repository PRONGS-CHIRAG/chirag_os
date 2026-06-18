import { ExternalLink, Mail, FileText, Code2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatusPill } from "@/components/ui/StatusPill";
import { NAV_LINKS, SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";
import { VENTURES } from "@/content/ventures";

const cellvara = VENTURES.find((v) => v.id === "cellvara")!;

const SOCIAL = [
  { href: SOCIAL_LINKS.github, label: "GitHub", icon: Code2 },
  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", icon: ExternalLink },
  { href: `mailto:${SOCIAL_LINKS.email}`, label: "Email", icon: Mail },
  { href: SOCIAL_LINKS.cv, label: "Download CV", icon: FileText },
];

export default function FooterSection() {
  return (
    <footer id="footer" className="bg-background-secondary border-t border-card-border py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-heading font-bold text-text-primary text-lg mb-1">
              Chirag OS
            </p>
            <p className="font-mono text-xs text-text-muted mb-3">{SITE_CONFIG.tagline}</p>
            <p className="text-text-secondary text-sm leading-relaxed">
              Building intelligent systems, responsible AI workflows, and venture experiments around real-world problems.
            </p>
          </div>

          <div className="flex gap-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-text-faint mb-3">
                Navigation
              </p>
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-text-muted text-sm hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-text-faint mb-3">
                Connect
              </p>
              <ul className="flex flex-col gap-2">
                {SOCIAL.map(({ href, label, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex items-center gap-2 text-text-muted text-sm hover:text-text-primary transition-colors"
                    >
                      <Icon size={14} />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-text-faint mb-3">
              Currently Building
            </p>
            <GlassCard className="p-4 gap-2 flex flex-col">
              <div className="flex items-center gap-2">
                <p className="font-heading font-bold text-text-primary text-sm">{cellvara.title}</p>
                <StatusPill status="Active Venture" />
              </div>
              <p className="text-text-secondary text-xs leading-relaxed">{cellvara.summary}</p>
            </GlassCard>
          </div>
        </div>

        <div className="border-t border-card-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-text-faint">
            © {new Date().getFullYear()} Chirag Natesh Vijay. All rights reserved.
          </p>
          <p className="font-mono text-xs text-text-faint">
            Built with Next.js and a lot of intent.
          </p>
        </div>
      </Container>
    </footer>
  );
}
