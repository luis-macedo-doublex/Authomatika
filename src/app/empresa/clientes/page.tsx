import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { clients } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Clientes",
};

export default function ClientesPage() {
  return (
    <>
      <PageHero
        title="Nossos Clientes"
        subtitle="Empresas líderes que confiam na Authomathika para seus projetos de engenharia"
        breadcrumbs={[
          { label: "Empresa", href: "/empresa" },
          { label: "Clientes" },
        ]}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <div className="w-12 h-1 bg-primary mb-4" />
            <h2 className="section-heading text-foreground mb-2">
              Clientes de Referência
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl">
              Ao longo de 25 anos, construímos relações sólidas com empresas dos
              mais variados setores industriais.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {clients.map((client) => (
              <div
                key={client}
                className="bg-muted/30 border border-border rounded-lg p-4 flex items-center justify-center text-center hover:border-primary/40 hover:bg-primary/5 transition-colors"
              >
                <span className="font-body text-sm font-medium text-foreground">
                  {client}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-muted/30 rounded-lg border border-border text-center">
            <p className="font-body text-muted-foreground">
              Além dos clientes listados, a Authomathika possui um portfólio com{" "}
              <strong className="text-foreground">43+ empresas</strong> atendidas
              em todo o Brasil.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
