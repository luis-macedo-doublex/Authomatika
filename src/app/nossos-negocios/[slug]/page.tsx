import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessAreas, getBusinessArea } from "@/lib/data/businesses";
import { serviceSchema } from "@/lib/schemas";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Eyebrow, Panel, Section } from "@/components/site/primitives";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return businessAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getBusinessArea(slug);
  if (!area) return { title: "Não encontrado" };

  return {
    title: `${area.name} – Engenharia Industrial`,
    description: area.description,
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
    <main>
      <Script id={`schema-service-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageIntro
        tag="Divisão"
        title={area.name}
        subtitle={area.shortDescription}
        breadcrumbs={[
          { label: "Nossos Negócios", href: "/nossos-negocios" },
          { label: area.name },
        ]}
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <Panel className="space-y-4">
              <Eyebrow>Contexto técnico</Eyebrow>
              <p className="text-zinc-600">{area.description}</p>
            </Panel>

            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
              <div className="border-b border-zinc-200 px-5 py-3 text-xs uppercase tracking-[0.14em] text-zinc-500">Serviços e soluções</div>
              <div className="divide-y divide-zinc-200">
                {area.services.map((item, idx) => (
                  <div key={item} className="grid gap-2 px-5 py-4 md:grid-cols-[48px_1fr] md:items-center">
                    <span className="font-mono text-xs text-zinc-400">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <Panel className="space-y-3">
              <Eyebrow>Indicadores da divisão</Eyebrow>
              {area.metrics.map((metric) => (
                <div key={metric.label} className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3">
                  <div className="text-xs uppercase tracking-[0.14em] text-zinc-500">{metric.label}</div>
                  <div className="font-display text-2xl font-bold text-zinc-900">{metric.value}</div>
                </div>
              ))}
            </Panel>

            <Panel className="space-y-4">
              <h3 className="font-display text-xl font-bold text-zinc-900">Abrir estudo de escopo</h3>
              <Button asChild className="w-full rounded-full font-semibold">
                <Link href="/contato/solicitacao-de-orcamento">
                  Solicitar orçamento <ArrowRight className="size-4" />
                </Link>
              </Button>
              <a href="tel:+551635134000" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900">
                <Phone className="size-4 text-primary" /> (16) 3513-4000
              </a>
              <a href="mailto:comercial@authomathika.com.br" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900">
                <Mail className="size-4 text-primary" /> comercial@authomathika.com.br
              </a>
            </Panel>
          </aside>
        </Container>
      </Section>
    </main>
  );
}
