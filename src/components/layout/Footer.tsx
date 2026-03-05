import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  {
    title: "Empresa",
    links: [
      { label: "Institucional", href: "/empresa/institucional" },
      { label: "Visão Corporativa", href: "/empresa/visao-corporativa" },
      { label: "Linha do Tempo", href: "/empresa/linha-do-tempo" },
      { label: "Clientes", href: "/empresa/clientes" },
    ],
  },
  {
    title: "Nossos Negócios",
    links: [
      { label: "Energias Renováveis", href: "/nossos-negocios/energias-renovaveis" },
      { label: "Elétrica", href: "/nossos-negocios/eletrica" },
      { label: "Automação", href: "/nossos-negocios/automacao" },
      { label: "Serviços", href: "/nossos-negocios/servicos" },
      { label: "Montagem Eletromecânica", href: "/nossos-negocios/montagem-eletromecanica" },
      { label: "Engenharia EPC", href: "/nossos-negocios/engenharia-epc" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { label: "Paradas Programadas", href: "/servicos/paradas-programadas" },
      { label: "Manutenção", href: "/servicos/manutencao" },
      { label: "Metrologia", href: "/servicos/metrologia" },
      { label: "Serviços em Campo", href: "/servicos/servicos-em-campo" },
      { label: "TI Industrial", href: "/servicos/tecnologia-da-informacao" },
    ],
  },
  {
    title: "Mais",
    links: [
      { label: "Produtos", href: "/produtos" },
      { label: "Obras", href: "/obras" },
      { label: "Notícias", href: "/media-center/noticias" },
      { label: "Blog", href: "/media-center/blog" },
      { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
      { label: "Solicitar Orçamento", href: "/contato/solicitacao-de-orcamento" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-dark-industrial text-white/80">
      {/* Main footer */}
      <div className="container mx-auto px-4 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="font-display font-700 text-2xl text-white tracking-tight mb-4">
              AUTHOMATHIKA
            </div>
            <p className="text-sm font-body text-white/60 mb-6 max-w-xs leading-relaxed">
              Engenharia integradora de sistemas Elétricos e de Automação.
              Sertãozinho, SP — desde 1999.
            </p>

            {/* Contact */}
            <div className="space-y-2 mb-6">
              <a
                href="tel:+551635134000"
                className="flex items-center gap-2 text-sm font-body text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                (16) 3513-4000
              </a>
              <a
                href="mailto:comercial@authomathika.com.br"
                className="flex items-center gap-2 text-sm font-body text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                comercial@authomathika.com.br
              </a>
              <div className="flex items-start gap-2 text-sm font-body text-white/60">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>
                  R. Ivone Fernandes Bernardi, 504<br />
                  Sertãozinho – SP
                </span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/authomathika"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded flex items-center justify-center bg-white/10 hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/authomathika/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded flex items-center justify-center bg-white/10 hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/authomathika-epc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded flex items-center justify-center bg-white/10 hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@authomathika8151"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded flex items-center justify-center bg-white/10 hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="font-display font-600 text-sm uppercase tracking-widest text-white mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-body text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Bottom bar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-body text-white/40">
          <span>
            © {new Date().getFullYear()} Authomathika Engenharia. CNPJ: 03.119.551/0001-67
          </span>
          <div className="flex items-center gap-4">
            <Link href="/contato" className="hover:text-white/70 transition-colors">
              Contato
            </Link>
            <Link href="/contato/fornecedores" className="hover:text-white/70 transition-colors">
              Fornecedores
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
