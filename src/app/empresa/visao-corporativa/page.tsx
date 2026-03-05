import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe, TrendingUp, Heart } from "lucide-react";
import { visionPillars } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Visão Corporativa",
};

const pillarIcons: Record<string, React.ReactNode> = {
  Users: <Users className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  Handshake: <Heart className="w-8 h-8" />,
};

export default function VisaoCorporativaPage() {
  return (
    <>
      <PageHero
        title="Visão Corporativa"
        subtitle="Os pilares que guiam nossa atuação e definem nosso compromisso com todas as partes interessadas"
        breadcrumbs={[
          { label: "Empresa", href: "/empresa" },
          { label: "Visão Corporativa" },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="w-12 h-1 bg-primary mx-auto mb-6" />
            <h2 className="section-heading text-foreground mb-4">
              Nosso Compromisso
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              A Authomathika pauta sua atuação em quatro pilares fundamentais
              que garantem relações equilibradas, sustentáveis e de longo prazo
              com todos os stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visionPillars.map((pillar, i) => (
              <Card key={pillar.title} className="border border-border hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-white shrink-0">
                      {pillarIcons[pillar.icon] || <Heart className="w-8 h-8" />}
                    </div>
                    <div>
                      <div className="font-body text-xs uppercase tracking-widest text-primary mb-1">
                        Pilar {i + 1}
                      </div>
                      <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                        {pillar.title}
                      </h3>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-gradient">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
              &ldquo;Reconhecidos pela forma responsável e clara de cumprir os
              contratos, trabalhando dentro da ética e profissionalismo.&rdquo;
            </p>
            <cite className="font-body text-white/70 text-sm not-italic">
              — Missão Authomathika
            </cite>
          </blockquote>
        </div>
      </section>
    </>
  );
}
