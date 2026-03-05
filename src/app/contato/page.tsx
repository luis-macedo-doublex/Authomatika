import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, FileText, Truck, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Contato",
};

const options = [
  {
    title: "Fale Conosco",
    desc: "Envie uma mensagem para nossa equipe.",
    href: "/contato/fale-conosco",
    icon: <MessageSquare className="w-7 h-7" />,
  },
  {
    title: "Solicitação de Orçamento",
    desc: "Solicite um orçamento personalizado.",
    href: "/contato/solicitacao-de-orcamento",
    icon: <FileText className="w-7 h-7" />,
  },
  {
    title: "Fornecedores",
    desc: "Cadastre-se como fornecedor Authomathika.",
    href: "/contato/fornecedores",
    icon: <Truck className="w-7 h-7" />,
  },
  {
    title: "Localização",
    desc: "Encontre nossas instalações.",
    href: "/contato/localizacao",
    icon: <MapPin className="w-7 h-7" />,
  },
];

export default function ContatoPage() {
  return (
    <>
      <PageHero
        title="Contato"
        subtitle="Entre em contato com a equipe Authomathika"
        breadcrumbs={[{ label: "Contato" }]}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
            {options.map((opt) => (
              <Link key={opt.title} href={opt.href}>
                <Card className="h-full border border-border hover-lift cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      {opt.icon}
                    </div>
                    <h2 className="font-display font-bold text-xl text-foreground mb-1">
                      {opt.title}
                    </h2>
                    <p className="font-body text-sm text-muted-foreground mb-3">
                      {opt.desc}
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
