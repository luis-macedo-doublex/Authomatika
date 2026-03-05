import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PageHero } from "@/components/layout/PageHero";
import { products, getProduct } from "@/lib/data/products";
import { productSchema } from "@/lib/schemas";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Não encontrado" };

  return {
    title: `${product.name} – ${product.shortDescription}`,
    description: product.description,
    keywords: [
      product.name,
      product.shortDescription,
      "Authomathika",
      "produto industrial",
      "instrumentação",
      "automação industrial",
    ],
    openGraph: {
      title: `${product.name} | Authomathika`,
      description: product.description,
      url: `https://www.authomathika.com.br/produtos/${slug}`,
      type: "website",
    },
    alternates: {
      canonical: `https://www.authomathika.com.br/produtos/${slug}`,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const schema = productSchema({
    name: product.name,
    description: product.description,
    url: `/produtos/${slug}`,
    specs: product.specs,
    badge: product.badge,
  });

  return (
    <>
      <Script
        id={`schema-product-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        title={product.name}
        subtitle={product.shortDescription}
        breadcrumbs={[
          { label: "Produtos", href: "/produtos" },
          { label: product.name },
        ]}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-primary" aria-hidden="true" />
                {product.badge && (
                  <Badge className="font-body bg-primary/10 text-primary border-primary/20">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <h2 className="section-heading text-foreground mb-4">
                Sobre o Produto
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg mb-8">
                {product.description}
              </p>
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                Características
              </h3>
              <ul className="space-y-3 mb-8" role="list">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="font-body text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {product.specs && (
                <>
                  <Separator className="my-6" />
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">
                    Especificações Técnicas
                  </h3>
                  <dl className="bg-muted/30 rounded-lg border border-border overflow-hidden">
                    {Object.entries(product.specs).map(([key, value], i) => (
                      <div
                        key={key}
                        className={`flex justify-between px-5 py-3 font-body text-sm ${
                          i % 2 === 0 ? "bg-white" : "bg-muted/20"
                        }`}
                      >
                        <dt className="text-muted-foreground">{key}</dt>
                        <dd className="font-medium text-foreground">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </>
              )}
            </div>

            <div className="space-y-4">
              <Card className="border border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    Solicite Informações
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    Entre em contato para orçamento ou informações técnicas
                    sobre {product.name}.
                  </p>
                  <Button
                    asChild
                    className="w-full font-display font-semibold mb-2"
                  >
                    <Link href="/contato/solicitacao-de-orcamento">
                      Solicitar Orçamento{" "}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full font-display font-semibold"
                  >
                    <Link href="/contato/fale-conosco">Fale Conosco</Link>
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
