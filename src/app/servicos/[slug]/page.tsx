import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/PageHero";
import { servicePages, getServicePage } from "@/lib/data/services";
import { serviceSchema } from "@/lib/schemas";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return { title: "Não encontrado" };

  return {
    title: `${service.name} – Serviços Industriais`,
    description: service.description,
    keywords: [
      service.name,
      "Authomathika",
      "serviços industriais",
      "manutenção industrial",
      "Sertãozinho SP",
      ...(service.certifications ?? []),
    ],
    openGraph: {
      title: `${service.name} | Authomathika`,
      description: service.shortDescription,
      url: `https://www.authomathika.com.br/servicos/${slug}`,
      type: "website",
    },
    alternates: {
      canonical: `https://www.authomathika.com.br/servicos/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();

  const schema = serviceSchema({
    name: service.name,
    description: service.description,
    url: `/servicos/${slug}`,
    features: service.features,
  });

  return (
    <>
      <Script
        id={`schema-service-detail-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        title={service.name}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { label: "Serviços", href: "/servicos" },
          { label: service.name },
        ]}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="w-12 h-1 bg-primary mb-6" aria-hidden="true" />
              <h2 className="section-heading text-foreground mb-4">
                Sobre o Serviço
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg mb-8">
                {service.description}
              </p>
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                O que oferecemos
              </h3>
              <ul className="space-y-3" role="list">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="font-body text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {service.certifications && (
                <Card className="border border-border">
                  <CardContent className="p-6">
                    <h3 className="font-display font-bold text-lg text-foreground mb-4">
                      Certificações
                    </h3>
                    <ul className="flex flex-wrap gap-2" role="list">
                      {service.certifications.map((cert) => (
                        <li key={cert}>
                          <Badge className="font-body bg-primary/10 text-primary border-primary/20">
                            {cert}
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
                    Fale com nossa equipe
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    Entre em contato para saber mais sobre este serviço.
                  </p>
                  <Button asChild className="w-full font-display font-semibold">
                    <Link href="/contato/fale-conosco">
                      Entrar em Contato{" "}
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
