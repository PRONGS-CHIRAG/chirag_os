import NavbarSection from "@/components/sections/NavbarSection";
import HeroSection from "@/components/sections/HeroSection";
import MissionControlSection from "@/components/sections/MissionControlSection";
import CellvaraSection from "@/components/sections/CellvaraSection";
import FeaturedSystemsSection from "@/components/sections/FeaturedSystemsSection";
import VenturePortfolioSection from "@/components/sections/VenturePortfolioSection";
import ArchitectureExplorerSection from "@/components/sections/ArchitectureExplorerSection";
import ProofMetricsSection from "@/components/sections/ProofMetricsSection";
import BraidedTimelineSection from "@/components/sections/BraidedTimelineSection";
import ResearchSection from "@/components/sections/ResearchSection";
import CapabilityMapSection from "@/components/sections/CapabilityMapSection";
import CredentialsSection from "@/components/sections/CredentialsSection";
import WritingSection from "@/components/sections/WritingSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import CommandPalette from "@/components/CommandPalette";
import { AnimatedGridBackground } from "@/components/motion/AnimatedGridBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background-primary">
      <AnimatedGridBackground />
      <NavbarSection />
      <HeroSection />
      <MissionControlSection />
      <CellvaraSection />
      <FeaturedSystemsSection />
      <VenturePortfolioSection />
      <ArchitectureExplorerSection />
      <ProofMetricsSection />
      <BraidedTimelineSection />
      <ResearchSection />
      <CapabilityMapSection />
      <CredentialsSection />
      <WritingSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
      <CommandPalette />
    </main>
  );
}
