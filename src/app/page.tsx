import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Cpu,
  Wrench,
  Settings,
  Building2,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { businessAreas } from "@/lib/data/businesses";
import { stats, sectors, clients } from "@/lib/data/company";
import { faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Authomathika – Engenharia Integradora de Sistemas Elétricos e Automação",
  description:
    "Authomathika é uma empresa completa de engenharia integradora de sistemas Elétricos e de Automação, sediada em Sertãozinho, SP. Desde 1999, atendemos o setor sucroenergético, fertilizantes, saneamento, mineração e energias renováveis com excelência técnica comprovada.",
  keywords: [
    "Authomathika",
    "engenharia automação Sertãozinho",
    "automação industrial SP",
    "engenharia elétrica industrial",
    "energias renováveis",
    "setor sucroenergético",
    "instrumentação industrial",
    "engenharia EPC",
    "montagem eletromecânica",
    "painéis elétricos industriais",
  ],
  openGraph: {
    title: "Authomathika – A melhor solução para o seu projeto",
    description:
      "25 anos de excelência em engenharia integradora. 336 MW de energia solar instalados, 290.000 pontos de automação, 42.027 equipamentos atendidos.",
    url: "https://www.authomathika.com.br",
    type: "website",
  },
  alternates: {
    canonical: "https://www.authomathika.com.br",
  },
};

const businessIcons: Record<string, React.ReactNode> = {
  Sun: <Sun className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  Settings: <Settings className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
};

const faqs = [
  {
    question: "O que é a Authomathika?",
    answer:
      "A Authomathika é uma empresa completa de engenharia integradora de sistemas Elétricos e de Automação, fundada em 1999 e sediada em Sertãozinho, SP. Atua em automação industrial, engenharia elétrica, energias renováveis, montagem eletromecânica e engenharia EPC.",
  },
  {
    question: "Quais setores a Authomathika atende?",
    answer:
      "A Authomathika atende principalmente o setor sucroenergético (especialista desde 1999), fertilizantes, saneamento, logística, mineração, energias renováveis, além de alimentos, química, siderurgia e petróleo.",
  },
  {
    question: "Onde a Authomathika está localizada?",
    answer:
      "A Authomathika está localizada em Sertãozinho, SP, na Rua Ivone Fernandes Bernardi, 504 – Jardim Florenzza. Telefone: (16) 3513-4000.",
  },
  {
    question: "Quais certificações a Authomathika possui?",
    answer:
      "A Authomathika possui certificação ISO 9001, conformidade com NR-10 e NR-35, e laboratórios de metrologia com certificados rastreados pela RBC (Rede Brasileira de Calibração).",
  },
  {
    question: "Quais produtos próprios a Authomathika fabrica?",
    answer:
      "A Authomathika fabrica 9 produtos próprios: SLV-1A (medidor de nível Chute Donnelly), PX 400 (analisador de pasteurização com patente americana), AUTH 300 (atuador eletropneumático), DPG-1A, DCLT-1C, ProMtec (medidor de densidade com 8.500+ instalações), Derivador AS-i, Planta Didática e Painéis Elétricos.",
  },
  {
    question: "Quanto de energia solar a Authomathika já instalou?",
    answer:
      "A Authomathika já instalou 336 MW de energia solar em 7 parques fotovoltaicos executados, atuando na geração centralizada e distribuída.",
  },
];

export default function HomePage() {
  const faqLd = faqSchema(faqs);

  return (
    <>
      <Script
        id="schema-faq-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* HERO */}
      <section className="relative bg-dark-industrial overflow-hidden" aria-label="Apresentação">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" aria-hidden="true" />
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-5"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, oklch(0.451 0.225 17.5) 0%, transparent 70%)",
          }}
        />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 font-body text-xs tracking-widest uppercase">
              Sertãozinho, SP · Desde 1999
            </Badge>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight mb-6">
              A melhor solução
              <br />
              <span style={{ color: "oklch(0.65 0.2 17.5)" }}>
                para o seu projeto
              </span>
            </h1>
            <p className="text-white/70 font-body text-xl leading-relaxed mb-4 max-w-xl">
              Engenharia integradora de sistemas Elétricos e de Automação.
            </p>
            <p className="text-white/60 font-body text-base leading-relaxed mb-10 max-w-xl">
              25 anos entregando excelência ao setor industrial brasileiro — do setor sucroenergético às energias renováveis.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="font-display font-semibold tracking-wide text-base"
              >
                <Link href="/contato/solicitacao-de-orcamento">
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-display font-semibold tracking-wide text-base border-white/20 text-white bg-transparent hover:bg-white/10 hover:text-white"
              >
                <Link href="/nossos-negocios">Nossos Negócios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-primary" aria-label="Números em destaque">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="font-display font-bold text-2xl md:text-3xl text-white leading-none"
                  aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
                >
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="font-body text-xs text-white/70 mt-1 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOSSOS NEGÓCIOS */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="negocios-heading">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="w-12 h-1 bg-primary mb-4" aria-hidden="true" />
            <h2 id="negocios-heading" className="section-heading text-foreground mb-3">
              Nossos Negócios
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl">
              Seis divisões especializadas que cobrem toda a cadeia de
              engenharia elétrica e automação industrial.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {businessAreas.map((area) => (
              <Link key={area.slug} href={`/nossos-negocios/${area.slug}`}>
                <Card className="h-full border border-border hover-lift cursor-pointer group">
                  <CardContent className="p-6">
                    <div
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors"
                      aria-hidden="true"
                    >
                      {businessIcons[area.icon]}
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">
                      {area.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                      {area.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {area.metrics.slice(0, 2).map((m) => (
                        <Badge
                          key={m.label}
                          variant="secondary"
                          className="text-xs font-body"
                        >
                          {m.value} {m.label}
                        </Badge>
                      ))}
                    </div>
                    <span className="flex items-center gap-1 text-xs font-body font-medium text-primary group-hover:gap-2 transition-all">
                      Saiba mais <ArrowRight className="w-3 h-3" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE AUTHOMATHIKA */}
      <section className="py-20 bg-muted/40" aria-labelledby="porque-heading">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-1 bg-primary mb-4" aria-hidden="true" />
              <h2 id="porque-heading" className="section-heading text-foreground mb-4">
                25 anos de excelência em engenharia
              </h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-4">
                Reconhecidos pela forma responsável e clara de cumprir os
                contratos, trabalhando dentro da ética e profissionalismo.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Desde 1999, a Authomathika entrega soluções integradas de engenharia elétrica e automação para os maiores players do setor sucroenergético, fertilizantes, saneamento, mineração e energias renováveis do Brasil.
              </p>
              <ul className="space-y-3 mb-8" role="list">
                {[
                  "Equipe multidisciplinar de engenheiros especializados",
                  "Parceiro estratégico TOMSA DESTIL (Espanha, 150+ anos)",
                  "Software Serelepe para gestão online de serviços",
                  "Frota própria com controle por radar",
                  "Laboratórios de metrologia fixos e móveis (RBC)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-body text-sm text-foreground"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Certificações">
                {["ISO 9001", "NR-10", "NR-35", "RBC", "ERP TOTVS"].map(
                  (cert) => (
                    <Badge
                      key={cert}
                      role="listitem"
                      className="font-body font-medium text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {cert}
                    </Badge>
                  )
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4" aria-label="Métricas principais">
              {[
                { value: "336 MW", label: "Energia Solar Instalada" },
                { value: "290k", label: "Pontos de Automação" },
                { value: "42.027", label: "Equipamentos Atendidos" },
                { value: "208", label: "Projetos de Montagem" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-border rounded-lg p-6 text-center"
                >
                  <div className="font-display font-bold text-3xl text-primary mb-1">
                    {item.value}
                  </div>
                  <div className="font-body text-xs text-muted-foreground leading-tight">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SETORES */}
      <section className="py-20 bg-white" aria-labelledby="setores-heading">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <div className="w-12 h-1 bg-primary mb-4" aria-hidden="true" />
            <h2 id="setores-heading" className="section-heading text-foreground mb-2">
              Setores Atendidos
            </h2>
            <p className="font-body text-muted-foreground">
              Especialistas em diversas indústrias, com foco histórico no setor
              sucroenergético desde 1999.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className={`p-4 rounded-lg border font-body ${
                  sector.featured
                    ? "bg-primary text-white border-primary"
                    : "bg-muted/30 border-border text-foreground hover:border-primary/40 transition-colors"
                }`}
              >
                <div className="font-display font-bold text-base mb-1">
                  {sector.name}
                </div>
                <div
                  className={`text-xs leading-snug ${
                    sector.featured ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {sector.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="py-16 bg-muted/30" aria-labelledby="clientes-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="w-12 h-1 bg-primary mx-auto mb-4" aria-hidden="true" />
            <h2 id="clientes-heading" className="section-heading text-foreground mb-2">
              Clientes de Referência
            </h2>
            <p className="font-body text-muted-foreground text-sm">
              Empresas líderes que confiam na Authomathika há mais de 25 anos.
            </p>
          </div>
          <ul
            className="flex flex-wrap justify-center gap-3"
            role="list"
            aria-label="Lista de clientes"
          >
            {clients.map((client) => (
              <li
                key={client}
                className="px-4 py-2 bg-white border border-border rounded-full font-body text-sm text-foreground hover:border-primary/40 transition-colors"
              >
                {client}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ — GEO */}
      <section className="py-20 bg-white" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-10">
            <div className="w-12 h-1 bg-primary mb-4" aria-hidden="true" />
            <h2 id="faq-heading" className="section-heading text-foreground mb-2">
              Perguntas Frequentes
            </h2>
          </div>
          <dl className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-border pb-6 last:border-0">
                <dt className="font-display font-bold text-lg text-foreground mb-2">
                  {faq.question}
                </dt>
                <dd className="font-body text-muted-foreground leading-relaxed">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-gradient py-20" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="section-heading text-white mb-4">
            Pronto para o seu próximo projeto?
          </h2>
          <p className="font-body text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Fale com nossa equipe de engenharia e descubra como a Authomathika
            pode transformar seu projeto em realidade.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-display font-semibold tracking-wide"
            >
              <Link href="/contato/solicitacao-de-orcamento">
                Solicitar Orçamento
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-display font-semibold tracking-wide border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white"
            >
              <Link href="/contato/fale-conosco">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
