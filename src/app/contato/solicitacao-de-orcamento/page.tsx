import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Panel, Section } from "@/components/site/primitives";

export const metadata: Metadata = { title: "Solicitação de Orçamento" };

export default function OrcamentoPage() {
  return (
    <main>
      <PageIntro
        tag="Pré-proposta"
        title="Solicitação de Orçamento"
        subtitle="Compartilhe o escopo inicial para receber retorno da engenharia comercial."
        breadcrumbs={[
          { label: "Contato", href: "/contato" },
          { label: "Orçamento" },
        ]}
      />

      <Section>
        <Container className="max-w-4xl">
          <Panel>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2"><Label htmlFor="nome">Nome completo</Label><Input id="nome" className="h-11" /></div>
                <div className="space-y-2"><Label htmlFor="email">E-mail corporativo</Label><Input id="email" type="email" className="h-11" /></div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2"><Label htmlFor="empresa">Empresa</Label><Input id="empresa" className="h-11" /></div>
                <div className="space-y-2"><Label htmlFor="telefone">Telefone</Label><Input id="telefone" className="h-11" /></div>
              </div>
              <div className="space-y-2"><Label htmlFor="setor">Setor</Label><Input id="setor" className="h-11" /></div>
              <div className="space-y-2"><Label htmlFor="mensagem">Escopo técnico</Label><Textarea id="mensagem" className="min-h-[140px]" /></div>
              <Button type="submit" className="w-full rounded-full font-semibold">Enviar solicitação</Button>
            </form>
          </Panel>
        </Container>
      </Section>
    </main>
  );
}
