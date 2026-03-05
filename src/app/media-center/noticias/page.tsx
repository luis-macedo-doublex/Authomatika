import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Notícias",
};

const noticias = [
  {
    title: "Fenasucro 2022",
    date: "2022",
    excerpt:
      "A Authomathika esteve presente mais um ano junto ao evento Fenasucro & Agrocana, feira mundial da Bioenergia.",
  },
  {
    title: "Fenasucro 2019",
    date: "2019",
    excerpt:
      "Ano de 2019 veio carregado de expectativas para o setor industrial, novos projetos, investimentos e novidades.",
  },
  {
    title: "2.000 dias sem acidentes de trabalho",
    date: "2019",
    excerpt:
      "Marco importante no compromisso da Authomathika com a segurança de seus colaboradores.",
  },
  {
    title: "Reunião Anual Fermentec 2019",
    date: "2019",
    excerpt:
      "Authomathika presente na Reunião Anual Fermentec, fortalecendo os laços com o setor sucroenergético.",
  },
  {
    title: "Alguns Projetos da Authomathika em 2018",
    date: "2018",
    excerpt:
      "Bahia Etanol, Fosfogesso em Mosaic Uberaba, projeto SPDA da planta Mosaic Araxá e Usina Aroeira.",
  },
  {
    title: "Authomathika na Fenasucro & Agrocana 2018",
    date: "2018",
    excerpt:
      "Participar da Fenasucro é ser reconhecido pelo setor de açúcar, etanol e bioenergia.",
  },
  {
    title: "Prêmio Excelência de Fornecedores Entressafra 2016/2017",
    date: "2017",
    excerpt:
      "A Authomathika recebeu da BP Biofuels o Prêmio Excelência de Fornecedores.",
  },
  {
    title: "Parada Geral Vale CMA e Vale CIU 2017",
    date: "2017",
    excerpt:
      "Mais uma grande parada de manutenção executada com sucesso pela equipe da Authomathika.",
  },
  {
    title: "Planta Piloto de Etanol SENAI",
    date: "2017",
    excerpt:
      "Authomathika concluiu o fornecimento e instalação da primeira Unidade Piloto para Produção de Etanol (UPPE).",
  },
];

export default function NoticiasPage() {
  return (
    <>
      <PageHero
        title="Notícias"
        subtitle="Fique por dentro das novidades da Authomathika e do setor industrial"
        breadcrumbs={[
          { label: "Media Center", href: "/media-center" },
          { label: "Notícias" },
        ]}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {noticias.map((news) => (
              <Card key={news.title} className="border border-border hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="font-body text-xs">
                      {news.date}
                    </Badge>
                  </div>
                  <h2 className="font-display font-bold text-xl text-foreground mb-2 leading-tight">
                    {news.title}
                  </h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {news.excerpt}
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
