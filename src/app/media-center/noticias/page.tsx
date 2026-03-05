import type { Metadata } from "next";
import { Calendar } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Section } from "@/components/site/primitives";

export const metadata: Metadata = { title: "Notícias" };

const news = [
  { title: "Fenasucro 2022", date: "2022", excerpt: "Participação da Authomathika na principal feira de bioenergia." },
  { title: "Fenasucro 2019", date: "2019", excerpt: "Novos projetos e investimentos para o setor industrial." },
  { title: "2.000 dias sem acidentes de trabalho", date: "2019", excerpt: "Marco no compromisso com segurança operacional." },
  { title: "Reunião Anual Fermentec 2019", date: "2019", excerpt: "Fortalecimento de relacionamentos no setor sucroenergético." },
  { title: "Projetos de 2018", date: "2018", excerpt: "Bahia Etanol, Mosaic Uberaba e outros cases relevantes." },
  { title: "Authomathika na Fenasucro 2018", date: "2018", excerpt: "Presença consolidada no calendário de bioenergia." },
  { title: "Prêmio Excelência Entressafra 2016/2017", date: "2017", excerpt: "Reconhecimento da BP Biofuels à performance da equipe." },
  { title: "Parada Geral Vale CMA e Vale CIU", date: "2017", excerpt: "Execução de parada de manutenção de grande porte." },
  { title: "Planta Piloto de Etanol SENAI", date: "2017", excerpt: "Conclusão da primeira unidade piloto de etanol (UPPE)." },
];

export default function NoticiasPage() {
  return (
    <main>
      <PageIntro
        tag="Atualizações"
        title="Notícias"
        subtitle="Principais marcos, eventos e reconhecimentos da Authomathika."
        breadcrumbs={[
          { label: "Media Center", href: "/media-center" },
          { label: "Notícias" },
        ]}
      />

      <Section>
        <Container>
          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
            <div className="divide-y divide-zinc-200">
              {news.map((item) => (
                <article key={item.title} className="px-5 py-5">
                  <div className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] text-zinc-500">
                    <Calendar className="size-3.5 text-primary" /> {item.date}
                  </div>
                  <h2 className="mt-2 font-display text-2xl font-bold text-zinc-900">{item.title}</h2>
                  <p className="mt-1 text-sm text-zinc-600">{item.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
