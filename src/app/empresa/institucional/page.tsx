import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Globe } from "lucide-react";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Institucional",
  description: "Conheça a Authomathika – engenharia integradora desde 1999.",
};

export default function InstitucionalPage() {
  return (
    <>
      <PageHero
        title="Institucional"
        subtitle="Uma empresa completa de engenharia integradora de sistemas Elétricos e de Automação"
        breadcrumbs={[
          { label: "Empresa", href: "/empresa" },
          { label: "Institucional" },
        ]}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="w-12 h-1 bg-primary mb-6" />
              <h2 className="section-heading text-foreground mb-4">
                Sobre a Authomathika
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Fundada em 1999 em Sertãozinho, SP, a Authomathika é uma
                  empresa completa de engenharia integradora de sistemas
                  Elétricos e de Automação. Com mais de 25 anos no mercado,
                  conquistamos uma sólida reputação pela excelência técnica e
                  pelo cumprimento responsável dos contratos.
                </p>
                <p>
                  Nossa equipe é composta por engenheiros e técnicos altamente
                  especializados, comprometidos com a entrega de soluções
                  customizadas para os mais variados segmentos industriais.
                  Atuamos desde o levantamento de requisitos até o
                  comissionamento final, passando por projeto, aquisição,
                  construção e manutenção.
                </p>
                <p>
                  Somos reconhecidos pela forma responsável e clara de cumprir
                  os contratos, trabalhando dentro da ética e profissionalismo
                  que o mercado exige. Nossa presença no setor sucroenergético,
                  de fertilizantes, saneamento, mineração e energias renováveis
                  demonstra nossa capacidade de adaptação e excelência em
                  diferentes contextos industriais.
                </p>
                <p>
                  Com a certificação ISO 9001 e conformidade com as normas
                  regulamentadoras NR-10 e NR-35, garantimos processos seguros
                  e de qualidade em todos os projetos. Utilizamos o ERP TOTVS
                  para gestão integrada e o sistema Serelepe para
                  acompanhamento online de serviços em campo.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="border border-border">
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-lg text-foreground mb-4">
                    Dados da Empresa
                  </h3>
                  <dl className="space-y-3">
                    {[
                      { label: "Fundação", value: "1999" },
                      { label: "Presidente", value: company.president },
                      { label: "CNPJ", value: company.cnpj },
                      { label: "Localização", value: "Sertãozinho, SP" },
                      { label: "Telefone", value: company.phone },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex justify-between gap-2"
                      >
                        <dt className="font-body text-sm text-muted-foreground">
                          {item.label}
                        </dt>
                        <dd className="font-body text-sm font-medium text-foreground text-right">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>
              <Card className="border border-border">
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-lg text-foreground mb-4">
                    Certificações
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[...company.certifications, "RBC", "ERP TOTVS"].map(
                      (cert) => (
                        <Badge
                          key={cert}
                          className="font-body bg-primary/10 text-primary border-primary/20"
                        >
                          {cert}
                        </Badge>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: "Equipe Especializada",
                desc: "Engenheiros e técnicos certificados nas principais normas do setor.",
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "ISO 9001",
                desc: "Sistema de gestão da qualidade certificado para todos os processos.",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Parceria Internacional",
                desc: "TOMSA DESTIL (Espanha, 150+ anos) como parceiro estratégico.",
              },
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: "Ética Profissional",
                desc: "Reconhecidos pela responsabilidade e clareza no cumprimento de contratos.",
              },
            ].map((item) => (
              <Card key={item.title} className="border border-border">
                <CardContent className="p-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
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
