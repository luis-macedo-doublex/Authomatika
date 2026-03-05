import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Fornecedores",
};

export default function FornecedoresPage() {
  return (
    <>
      <PageHero
        title="Fornecedores"
        subtitle="Cadastre-se como fornecedor da Authomathika"
        breadcrumbs={[
          { label: "Contato", href: "/contato" },
          { label: "Fornecedores" },
        ]}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8">
            <div className="w-12 h-1 bg-primary mb-4" />
            <h2 className="section-heading text-foreground mb-3">
              Seja um Fornecedor
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              A Authomathika valoriza parcerias de longo prazo baseadas em
              qualidade, confiabilidade e ética. Preencha o formulário abaixo
              para se cadastrar como fornecedor.
            </p>
          </div>
          <Card className="border border-border">
            <CardContent className="p-8">
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm text-foreground mb-1 block">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      className="w-full border border-input rounded px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-1 block">
                      CNPJ *
                    </label>
                    <input
                      type="text"
                      className="w-full border border-input rounded px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="00.000.000/0001-00"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm text-foreground mb-1 block">
                      Nome do Contato *
                    </label>
                    <input
                      type="text"
                      className="w-full border border-input rounded px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-1 block">
                      Cargo
                    </label>
                    <input
                      type="text"
                      className="w-full border border-input rounded px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm text-foreground mb-1 block">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      className="w-full border border-input rounded px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-1 block">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-input rounded px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm text-foreground mb-1 block">
                    Produtos / Serviços Oferecidos *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border border-input rounded px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Descreva os produtos ou serviços que sua empresa oferece..."
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-foreground mb-1 block">
                    Portfólio / Referências
                  </label>
                  <textarea
                    rows={3}
                    className="w-full border border-input rounded px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Liste clientes atendidos ou projetos de referência..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-display font-semibold py-3 px-4 rounded hover:bg-primary/90 transition-colors text-base"
                >
                  Enviar Cadastro
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
