import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/layout/PageHero";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Fale Conosco",
};

export default function FaleConoscoPage() {
  return (
    <>
      <PageHero
        title="Fale Conosco"
        subtitle="Entre em contato com nossa equipe"
        breadcrumbs={[
          { label: "Contato", href: "/contato" },
          { label: "Fale Conosco" },
        ]}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <div className="w-12 h-1 bg-primary mb-6" />
              <h2 className="section-heading text-foreground mb-4">
                Entre em Contato
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Nossa equipe está pronta para atender sua solicitação. Envie uma
                mensagem e retornaremos em breve.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+551635134000"
                  className="flex items-center gap-3 font-body text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Telefone</div>
                    <div className="font-medium">{company.phone}</div>
                  </div>
                </a>
                <a
                  href={`mailto:${company.email.comercial}`}
                  className="flex items-center gap-3 font-body text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">
                      E-mail Comercial
                    </div>
                    <div className="font-medium">{company.email.comercial}</div>
                  </div>
                </a>
                <a
                  href={`mailto:${company.email.sac}`}
                  className="flex items-center gap-3 font-body text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">SAC</div>
                    <div className="font-medium">{company.email.sac}</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 font-body text-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Endereço</div>
                    <div className="font-medium text-sm">{company.address}</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border border-border">
              <CardContent className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-4">
                  Envie uma Mensagem
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-sm text-foreground mb-1 block">
                        Nome *
                      </label>
                      <input
                        type="text"
                        className="w-full border border-input rounded px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm text-foreground mb-1 block">
                        Empresa
                      </label>
                      <input
                        type="text"
                        className="w-full border border-input rounded px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Sua empresa"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-1 block">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      className="w-full border border-input rounded px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-1 block">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-input rounded px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-1 block">
                      Mensagem *
                    </label>
                    <textarea
                      rows={4}
                      className="w-full border border-input rounded px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-display font-semibold py-2 px-4 rounded hover:bg-primary/90 transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
