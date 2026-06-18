"use client";

import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Container } from "@/components/layout/Container";
import { SearchBar } from "@/components/ui/SearchBar";
import { FilterPills } from "@/components/ui/FilterPills";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CredentialCard } from "@/components/cards/CredentialCard";
import { CREDENTIALS, CREDENTIAL_CATEGORIES } from "@/content/credentials";

const fuse = new Fuse(CREDENTIALS, {
  keys: ["title", "issuer", "category"],
  threshold: 0.35,
});

export default function CredentialsSection() {
  const [query, setQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    let result = CREDENTIALS;
    if (query.trim()) {
      result = fuse.search(query).map((r) => r.item);
    }
    if (activeFilters.length > 0 && !activeFilters.includes("All")) {
      result = result.filter((c) => c.category && activeFilters.includes(c.category));
    }
    return result;
  }, [query, activeFilters]);

  const displayed = showAll ? filtered : filtered.slice(0, 8);

  return (
    <SectionWrapper id="credentials" background="primary">
      <Container>
        <SectionHeading
          eyebrow="VERIFIED LEARNING"
          title="Credentials"
          accentColor="text-accent-ai"
          description="Certifications and courses across agentic AI, deep learning, multimodal AI, and product development."
        />

        <div className="flex flex-col gap-4 mb-8">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search credentials..."
            className="max-w-md"
          />
          <FilterPills
            options={CREDENTIAL_CATEGORIES}
            selected={activeFilters}
            onChange={setActiveFilters}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayed.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.04}>
              <CredentialCard item={item} />
            </ScrollReveal>
          ))}
        </div>

        {filtered.length > 8 && (
          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              onClick={() => setShowAll((v) => !v)}
            >
              {showAll ? "Show Less" : `View All (${filtered.length})`}
            </Button>
          </div>
        )}
      </Container>
    </SectionWrapper>
  );
}
