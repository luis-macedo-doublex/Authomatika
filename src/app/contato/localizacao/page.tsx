import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/layout/PageHero";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Localização",
};

export default function LocalizacaoPage() {
  return (
    <>
      <PageHero
        title="Localização"
        subtitle="Encontre nossas instalações em Sertãozinho, SP"
        breadcrumbs={[
          { label: "Contato", href: "/contato" },
          { label: "Localização" },
        ]}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <div className="w-12 h-1 bg-primary mb-6" />
              <h2 className="section-heading text-foreground mb-6">
                Nossas Instalações
              </h2>
              <div className="space-y-4">
                <Card className="border border-border">
                  <CardContent className="p-5">
                    <h3 className="font-display font-bold text-lg text-foreground mb-3">
                      Engenharia | Administração | Sistemas
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>
                          Rua Ivone Fernandes Bernardi, 504 – Jardim Florenzza
                          <br />
                          Sertãozinho, SP – CEP: 14169-379
                        </span>
                      </div>
                      <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                        <Phone className="w-4 h-4 text-primary" />
                        <a
                          href="tel:+551635134000"
                          className="hover:text-primary transition-colors"
                        >
                          {company.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                        <Mail className="w-4 h-4 text-primary" />
                        <a
                          href={`mailto:${company.email.comercial}`}
                          className="hover:text-primary transition-colors"
                        >
                          {company.email.comercial}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border border-border">
                  <CardContent className="p-5">
                    <h3 className="font-display font-bold text-lg text-foreground mb-3">
                      Services
                    </h3>
                    <div className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>
                        Rua Ivone Fernandes Bernardi, 504
                        <br />
                        Sertãozinho, SP
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border border-border">
                  <CardContent className="p-5">
                    <h3 className="font-display font-bold text-lg text-foreground mb-3">
                      Horário de Atendimento
                    </h3>
                    <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      Segunda a Sexta: 08h – 18h
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg border border-border flex items-center justify-center min-h-[400px]">
              <div className="text-center font-body text-muted-foreground">
                <MapPin className="w-12 h-12 text-primary/40 mx-auto mb-3" />
                <p className="text-sm font-medium">Sertãozinho, SP</p>
                <p className="text-xs">Rua Ivone Fernandes Bernardi, 504</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
