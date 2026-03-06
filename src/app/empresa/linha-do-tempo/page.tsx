import type { Metadata } from "next";
import { timeline } from "@/lib/data/company";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Section } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Linha do Tempo",
  description:
    "25 anos de história: conheça os marcos que definiram a evolução da Authomathika desde a fundação em 1999 até os grandes projetos de automação industrial e energias renováveis de hoje.",
};

export default function LinhaDoTempoPage() {
  return (
    <main>
      <PageIntro
        tag="Histórico"
        title="Linha do Tempo"
        subtitle="Marcos de evolução da Authomathika desde 1999."
        breadcrumbs={[
          { label: "Empresa", href: "/empresa" },
          { label: "Linha do Tempo" },
        ]}
      />

      <Section>
        <Container>
          <div className="relative ml-2 border-l-2 border-zinc-200 pl-8">
            {timeline.map((item) => (
              <article key={`${item.year}-${item.event}`} className="relative mb-8 rounded-2xl border border-zinc-200 bg-white p-5">
                <span className="absolute -left-[41px] top-6 size-4 rounded-full border-2 border-primary/40 bg-primary/10" />
                <div className="font-display text-3xl font-bold text-primary">{item.year}</div>
                <p className="mt-1 text-sm text-zinc-600">{item.event}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
