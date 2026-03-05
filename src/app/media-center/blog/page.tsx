import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Blog",
};

const posts = [
  {
    title:
      "10 Dicas para Escolher seu Fornecedor de Painéis e Quadros Elétricos",
    date: "2022",
    category: "Elétrica",
    excerpt:
      "Escolher o fornecedor certo de painéis elétricos é uma decisão estratégica. Veja os critérios essenciais para fazer a melhor escolha para sua empresa.",
  },
  {
    title: "Como o DCLT Melhora a Eficiência de uma Usina de Açúcar e Etanol?",
    date: "2021",
    category: "Produtos",
    excerpt:
      "O DCLT-1C trouxe uma revolução na medição contínua do nível do chute Donnelly. Entenda como este produto pode aumentar a eficiência da sua usina.",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Artigos técnicos e insights sobre engenharia, automação e o setor industrial"
        breadcrumbs={[
          { label: "Media Center", href: "/media-center" },
          { label: "Blog" },
        ]}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {posts.map((post) => (
              <Card key={post.title} className="border border-border hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="font-body text-xs bg-primary/10 text-primary border-primary/20">
                      {post.category}
                    </Badge>
                    <span className="font-body text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-xl text-foreground mb-3 leading-tight">
                    {post.title}
                  </h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
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
