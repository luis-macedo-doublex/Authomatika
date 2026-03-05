"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Empresa",
    href: "/empresa",
    children: [
      { label: "Institucional", href: "/empresa/institucional" },
      { label: "Visão Corporativa", href: "/empresa/visao-corporativa" },
      { label: "Linha do Tempo", href: "/empresa/linha-do-tempo" },
      { label: "Clientes", href: "/empresa/clientes" },
    ],
  },
  {
    label: "Nossos Negócios",
    href: "/nossos-negocios",
    children: [
      { label: "Energias Renováveis", href: "/nossos-negocios/energias-renovaveis" },
      { label: "Elétrica", href: "/nossos-negocios/eletrica" },
      { label: "Automação", href: "/nossos-negocios/automacao" },
      { label: "Serviços", href: "/nossos-negocios/servicos" },
      { label: "Montagem Eletromecânica", href: "/nossos-negocios/montagem-eletromecanica" },
      { label: "Engenharia EPC", href: "/nossos-negocios/engenharia-epc" },
    ],
  },
  {
    label: "Serviços",
    href: "/servicos",
    children: [
      { label: "Paradas Programadas", href: "/servicos/paradas-programadas" },
      { label: "Manutenção", href: "/servicos/manutencao" },
      { label: "Metrologia", href: "/servicos/metrologia" },
      { label: "Serviços em Campo", href: "/servicos/servicos-em-campo" },
      { label: "Tecnologia da Informação", href: "/servicos/tecnologia-da-informacao" },
    ],
  },
  { label: "Produtos", href: "/produtos" },
  { label: "Obras", href: "/obras" },
  {
    label: "Media Center",
    href: "/media-center",
    children: [
      { label: "Notícias", href: "/media-center/noticias" },
      { label: "Blog", href: "/media-center/blog" },
    ],
  },
  { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-md"
          : "bg-white/95 backdrop-blur-sm"
      )}
    >
      {/* Top bar */}
      <div className="bg-[oklch(0.451_0.225_17.5)] text-white">
        <div className="container mx-auto px-4 flex items-center justify-between py-1.5">
          <span className="text-xs font-body">
            Sertãozinho, SP – Engenharia Integradora desde 1999
          </span>
          <a
            href="tel:+551635134000"
            className="flex items-center gap-1.5 text-xs font-body hover:text-white/80 transition-colors"
          >
            <Phone className="w-3 h-3" />
            (16) 3513-4000
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div
              className="font-display font-700 text-2xl tracking-tight leading-none"
              style={{ color: "oklch(0.451 0.225 17.5)" }}
            >
              AUTHOMATHIKA
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-body font-500 text-slate-700 hover:text-primary rounded transition-colors",
                    activeMenu === item.label && "text-primary"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        activeMenu === item.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {item.children && activeMenu === item.label && (
                  <div className="absolute top-full left-0 mt-0 bg-white border border-border rounded-lg shadow-xl py-2 min-w-[220px] z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm font-body text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <Button asChild size="sm" className="font-display font-600 tracking-wide">
              <Link href="/contato/solicitacao-de-orcamento">Solicitar Orçamento</Link>
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="xl:hidden p-2 text-slate-700 hover:text-primary transition-colors"
                aria-label="Abrir menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="bg-primary p-4 flex items-center justify-between">
                  <span className="font-display font-700 text-xl text-white tracking-tight">
                    AUTHOMATHIKA
                  </span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto py-4">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          className="flex-1 px-4 py-3 text-sm font-body font-500 text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors block"
                          onClick={() => {
                            if (!item.children) setMobileOpen(false);
                          }}
                        >
                          {item.label}
                        </Link>
                        {item.children && (
                          <button
                            className="px-4 py-3 text-slate-500 hover:text-primary transition-colors"
                            onClick={() =>
                              setMobileExpanded(
                                mobileExpanded === item.label ? null : item.label
                              )
                            }
                          >
                            <ChevronDown
                              className={cn(
                                "w-4 h-4 transition-transform duration-200",
                                mobileExpanded === item.label && "rotate-180"
                              )}
                            />
                          </button>
                        )}
                      </div>
                      {item.children && mobileExpanded === item.label && (
                        <div className="bg-slate-50">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-8 py-2.5 text-sm font-body text-slate-600 hover:text-primary transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                      <Separator />
                    </div>
                  ))}
                </nav>

                <div className="p-4 border-t border-border">
                  <Button asChild className="w-full font-display font-600">
                    <Link href="/contato/solicitacao-de-orcamento" onClick={() => setMobileOpen(false)}>
                      Solicitar Orçamento
                    </Link>
                  </Button>
                  <a
                    href="tel:+551635134000"
                    className="flex items-center justify-center gap-2 mt-3 text-sm font-body text-slate-600 hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    (16) 3513-4000
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
