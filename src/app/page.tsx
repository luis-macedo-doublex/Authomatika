import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { CapabilitiesRail } from "@/components/home/CapabilitiesRail";
import { ProofBento } from "@/components/home/ProofBento";
import { WorksGallery } from "@/components/home/WorksGallery";
import { CompanyBrief } from "@/components/home/CompanyBrief";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Authomathika – Engenharia Integradora",
  description:
    "Soluções completas de engenharia integradora de sistemas elétricos e automação para operações industriais críticas.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CapabilitiesRail />
      <ProofBento />
      <WorksGallery />
      <CompanyBrief />
      <ContactCTA />
    </main>
  );
}
