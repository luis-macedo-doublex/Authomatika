import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Solicitação de Orçamento",
};

const produtos = [
  "SLV-1A – Medidor de Nível Chute Donnelly",
  "PX 400 – Analisador de Pasteurização",
  "AUTH 300 – Atuador Eletropneumático",
  "DPG-1A – Transmissor de Posição",
  "DCLT-1C – Medidor Contínuo Nível Donnelly",
  "ProMtec – Medidor de Densidade",
  "Derivador AS-i",
  "Planta Didática",
  "Painéis Elétricos",
  "Energias Renováveis",
  "Elétrica",
  "Automação",
  "Serviços de Manutenção",
  "Montagem Eletromecânica",
  "Engenharia EPC",
];

export default function SolicitacaoOrcamentoPage() {
  return (
    <>
      <PageHero
        title="Solicitação de Orçamento"
        subtitle="Solicite representantes, orçamento personalizado ou informações sobre nossos produtos e serviços"
        breadcrumbs={[
          { label: "Contato", href: "/contato" },
          { label: "Solicitação de Orçamento" },
        ]}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="border border-border">
            <CardContent className="p-8">
              <div className="w-12 h-1 bg-primary mb-6" />
              <h2 className="section-heading text-foreground mb-6">
                Dados para Orçamento
              </h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm text-foreground mb-1 block">
                      Nome *
                    </label>
                    <input
                      type="text"
                      className="w-full border border-input rounded px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-1 block">
                      Empresa *
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
                      Telefone
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-input rounded px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm text-foreground mb-1 block">
                    Produto / Serviço de Interesse *
                  </label>
                  <select className="w-full border border-input rounded px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-background">
                    <option value="">Selecione...</option>
                    {produtos.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-body text-sm text-foreground mb-1 block">
                    Descrição / Escopo do Projeto
                  </label>
                  <textarea
                    rows={5}
                    className="w-full border border-input rounded px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Descreva as necessidades do seu projeto..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-display font-semibold py-3 px-4 rounded hover:bg-primary/90 transition-colors text-base"
                >
                  Enviar Solicitação de Orçamento
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
