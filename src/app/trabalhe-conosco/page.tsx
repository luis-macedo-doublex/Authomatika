import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/PageHero";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Trabalhe Conosco",
};

const vagas = [
  {
    title: "Auxiliar de Serviços Gerais",
    location: "Narandiba, SP",
    type: "Temporário",
    area: "Operações",
  },
  {
    title: "Montador Eletromecânico",
    location: "Narandiba, SP",
    type: "Temporário",
    area: "Montagem",
  },
];

export default function TrabalheConoscoPage() {
  return (
    <>
      <PageHero
        title="Trabalhe Conosco"
        subtitle="A melhor escolha para sua carreira em engenharia e automação"
        breadcrumbs={[{ label: "Trabalhe Conosco" }]}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="w-12 h-1 bg-primary mb-6" />
              <h2 className="section-heading text-foreground mb-4">
                Faça parte do nosso time
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Com 25 anos de história e uma atuação global, a Authomathika é
                uma empresa de referência em soluções nas áreas de elétrica,
                automação, instrumentação, energias renováveis e montagem
                eletromecânica.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Buscamos profissionais apaixonados por engenharia, com vontade
                de crescer e contribuir com projetos desafiadores nos mais
                variados setores industriais.
              </p>
              <Button asChild size="lg" className="font-display font-semibold">
                <Link
                  href={company.gupy}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Todas as Vagas no Gupy
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                Vagas em Aberto
              </h3>
              <div className="space-y-4">
                {vagas.map((vaga) => (
                  <Card key={vaga.title} className="border border-border">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <h4 className="font-display font-bold text-lg text-foreground">
                          {vaga.title}
                        </h4>
                        <Badge
                          variant="secondary"
                          className="font-body text-xs shrink-0"
                        >
                          {vaga.type}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="flex items-center gap-1 text-xs font-body text-muted-foreground">
                          <MapPin className="w-3 h-3" /> {vaga.location}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-body text-muted-foreground">
                          <Briefcase className="w-3 h-3" /> {vaga.area}
                        </span>
                      </div>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="font-body font-medium"
                      >
                        <Link
                          href={company.gupy}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Candidatar-se{" "}
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
