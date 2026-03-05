import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/PageHero";
import { businessAreas, getBusinessArea } from "@/lib/data/businesses";
import { serviceSchema } from "@/lib/schemas";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return businessAreas.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getBusinessArea(slug);
  if (!area) return { title: "Não encontrado" };

  return {
    title: `${area.name} – Engenharia Industrial`,
    description: area.description,
    keywords: [
      area.name,
      "Authomathika",
      "engenharia industrial",
      "Sertãozinho SP",
      ...(area.partners ?? []),
    ],
    openGraph: {
      title: `${area.name} | Authomathika`,
      description: area.shortDescription,
      url: `https://www.authomathika.com.br/nossos-negocios/${slug}`,
      type: "website",
    },
    alternates: {
      canonical: `https://www.authomathika.com.br/nossos-negocios/${slug}`,
    },
  };
}

export default async function BusinessPage({ params }: Props) {
  const { slug } = await params;
  const area = getBusinessArea(slug);
  if (!area) notFound();

  const schema = serviceSchema({
    name: area.name,
    description: area.description,
    url: `/nossos-negocios/${slug}`,
    features: area.services,
  });

  return (
    <>
      <Script
        id={`schema-service-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        title={area.name}
        subtitle={area.shortDescription}
        breadcrumbs={[
          { label: "Nossos Negócios", href: "/nossos-negocios" },
          { label: area.name },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="w-12 h-1 bg-primary mb-6" aria-hidden="true" />
              <h2 className="section-heading text-foreground mb-4">
                Sobre esta Divisão
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg mb-8">
                {area.description}
              </p>
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                Serviços &amp; Soluções
              </h3>
              <ul className="space-y-3" role="list">
                {area.services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="font-body text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <Card className="border border-border">
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-lg text-foreground mb-4">
                    Números desta Divisão
                  </h3>
                  <div className="space-y-4">
                    {area.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="text-center p-4 bg-muted/30 rounded-lg"
                      >
                        <div className="font-display font-bold text-3xl text-primary mb-1">
                          {m.value}
                        </div>
                        <div className="font-body text-xs text-muted-foreground">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {area.partners && (
                <Card className="border border-border">
                  <CardContent className="p-6">
                    <h3 className="font-display font-bold text-lg text-foreground mb-4">
                      Parceiros Tecnológicos
                    </h3>
                    <ul
                      className="flex flex-wrap gap-2"
                      role="list"
                      aria-label="Parceiros homologados"
                    >
                      {area.partners.map((partner) => (
                        <li key={partner}>
                          <Badge
                            variant="outline"
                            className="font-body text-xs"
                          >
                            {partner}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              <Card className="border border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    Solicite um Orçamento
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    Entre em contato com nossa equipe para discutir seu projeto.
                  </p>
                  <Button asChild className="w-full font-display font-semibold">
                    <Link href="/contato/solicitacao-de-orcamento">
                      Solicitar Orçamento{" "}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
