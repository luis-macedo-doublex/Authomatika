import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/layout/PageHero";
import { works } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Obras",
  description: "Portfolio de obras e projetos da Authomathika.",
};

const typeColors: Record<string, string> = {
  Greenfields: "bg-green-100 text-green-800 border-green-200",
  Revamp: "bg-blue-100 text-blue-800 border-blue-200",
  Projeto: "bg-purple-100 text-purple-800 border-purple-200",
  Montagem: "bg-orange-100 text-orange-800 border-orange-200",
  "Energia Solar": "bg-yellow-100 text-yellow-800 border-yellow-200",
};

export default function ObrasPage() {
  return (
    <>
      <PageHero
        title="Obras"
        subtitle="Portfolio de projetos executados ao longo de 25 anos de história"
        breadcrumbs={[{ label: "Obras" }]}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <div className="w-12 h-1 bg-primary mb-4" />
            <h2 className="section-heading text-foreground mb-2">
              Projetos em Destaque
            </h2>
            <p className="font-body text-muted-foreground">
              Seleção dos principais projetos executados em diversos setores
              industriais.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {works.map((work) => (
              <Card
                key={work.title}
                className="border border-border hover-lift overflow-hidden p-0"
              >
                {work.image && (
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <Badge
                        className={`font-body text-xs ${
                          typeColors[work.type] ??
                          "bg-gray-100 text-gray-800 border-gray-200"
                        }`}
                      >
                        {work.type}
                      </Badge>
                    </div>
                  </div>
                )}
                <CardContent className="p-5">
                  <h3 className="font-display font-bold text-xl text-foreground mb-1">
                    {work.title}
                  </h3>
                  <p className="font-body text-sm font-medium text-primary mb-2">
                    {work.category}
                  </p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {work.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
