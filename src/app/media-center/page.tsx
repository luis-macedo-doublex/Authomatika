import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper, BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Media Center",
};

const sections = [
  {
    title: "Notícias",
    desc: "Fique por dentro das novidades da Authomathika e do setor.",
    href: "/media-center/noticias",
    icon: <Newspaper className="w-7 h-7" />,
  },
  {
    title: "Blog",
    desc: "Artigos técnicos e insights sobre engenharia e automação.",
    href: "/media-center/blog",
    icon: <BookOpen className="w-7 h-7" />,
  },
];

export default function MediaCenterPage() {
  return (
    <>
      <PageHero
        title="Media Center"
        subtitle="Notícias, artigos técnicos e conteúdo da Authomathika"
        breadcrumbs={[{ label: "Media Center" }]}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {sections.map((s) => (
              <Link key={s.title} href={s.href}>
                <Card className="h-full border border-border hover-lift cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      {s.icon}
                    </div>
                    <h2 className="font-display font-bold text-xl text-foreground mb-2">
                      {s.title}
                    </h2>
                    <p className="font-body text-sm text-muted-foreground mb-4">
                      {s.desc}
                    </p>
                    <span className="flex items-center gap-1 text-xs font-body font-medium text-primary group-hover:gap-2 transition-all">
                      Acessar <ArrowRight className="w-3 h-3" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
