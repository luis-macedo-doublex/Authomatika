import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Wrench, BarChart3, Activity, Network } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/layout/PageHero";
import { servicePages } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Serviços especializados em manutenção, metrologia, paradas programadas e mais.",
};

const icons: Record<string, React.ReactNode> = {
  "paradas-programadas": <Shield className="w-7 h-7" />,
  manutencao: <Wrench className="w-7 h-7" />,
  metrologia: <BarChart3 className="w-7 h-7" />,
  "servicos-em-campo": <Activity className="w-7 h-7" />,
  "tecnologia-da-informacao": <Network className="w-7 h-7" />,
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        title="Serviços"
        subtitle="Suporte técnico especializado para manutenção, metrologia e diagnóstico de equipamentos industriais"
        breadcrumbs={[{ label: "Serviços" }]}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicePages.map((service) => (
              <Link key={service.slug} href={`/servicos/${service.slug}`}>
                <Card className="h-full border border-border hover-lift cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      {icons[service.slug] || <Wrench className="w-7 h-7" />}
                    </div>
                    <h2 className="font-display font-bold text-xl text-foreground mb-2">
                      {service.name}
                    </h2>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                    <span className="flex items-center gap-1 text-xs font-body font-medium text-primary group-hover:gap-2 transition-all">
                      Ver detalhes <ArrowRight className="w-3 h-3" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-heading text-white mb-2">
            42.027 equipamentos atendidos
          </h2>
          <p className="font-body text-white/80 text-lg">
            297.000 horas de serviço · 1.630 atendimentos técnicos
          </p>
        </div>
      </section>
    </>
  );
}
