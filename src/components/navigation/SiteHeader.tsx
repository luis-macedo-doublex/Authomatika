"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sun,
  Zap,
  Cpu,
  Wrench,
  Settings,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessAreas } from "@/lib/data/businesses";
import { cn } from "@/lib/utils";

type MegaPanel = "negócios" | "empresa" | null;

const iconMap: Record<string, React.ElementType> = {
  Sun,
  Zap,
  Cpu,
  Wrench,
  Settings,
  Building2,
};

const empresaLinks = [
  {
    label: "Institucional",
    href: "/empresa/institucional",
    desc: "Nossa história, missão e valores",
  },
  {
    label: "Visão Corporativa",
    href: "/empresa/visao-corporativa",
    desc: "Pilares de governança e compromisso",
  },
  {
    label: "Linha do Tempo",
    href: "/empresa/linha-do-tempo",
    desc: "25 anos de evolução e marcos",
  },
  {
    label: "Clientes",
    href: "/empresa/clientes",
    desc: "Referências e parceiros estratégicos",
  },
];

const simpleLinks = [
  { label: "Serviços", href: "/servicos" },
  { label: "Produtos", href: "/produtos" },
  { label: "Obras", href: "/obras" },
  { label: "Media Center", href: "/media-center" },
  { label: "Contato", href: "/contato" },
];

export function SiteHeader() {
  const [activeMega, setActiveMega] = useState<MegaPanel>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMega = () => setActiveMega(null);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        scrolled
          ? "border-b border-zinc-200 bg-white/97 shadow-sm backdrop-blur-xl"
          : "bg-white/90 backdrop-blur-md",
      )}
      onMouseLeave={closeMega}
    >
      {/* ── Nav bar ─────────────────────────────────────── */}
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          onClick={() => {
            closeMega();
            setMobileOpen(false);
          }}
        >
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
            <span className="font-display text-sm font-bold tracking-tight text-white">A</span>
          </div>
          <div className="leading-none">
            <p className="font-display text-[0.95rem] font-bold tracking-tight text-zinc-900">
              Authomathika
            </p>
            <p className="mt-0.5 text-[9px] uppercase tracking-[0.18em] text-zinc-400">
              Engenharia Integrada
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {/* Empresa — opens mega panel */}
          <button
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors",
              activeMega === "empresa"
                ? "bg-zinc-100 text-zinc-900"
                : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900",
            )}
            onMouseEnter={() => setActiveMega("empresa")}
          >
            Empresa
          </button>

          {/* Negócios — opens mega panel */}
          <button
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors",
              activeMega === "negócios"
                ? "bg-zinc-100 text-zinc-900"
                : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900",
            )}
            onMouseEnter={() => setActiveMega("negócios")}
          >
            Negócios
          </button>

          {/* Plain links */}
          {simpleLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
              onMouseEnter={closeMega}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden rounded-full px-5 font-semibold sm:inline-flex"
          >
            <Link href="/contato/solicitacao-de-orcamento">Solicitar Orçamento</Link>
          </Button>
          <button
            className="inline-flex size-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:bg-zinc-50 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
          </button>
        </div>
      </div>

      {/* ── Mega panel: Negócios ─────────────────────────── */}
      {activeMega === "negócios" ? (
        <div className="animate-reveal absolute left-0 right-0 top-full border-b border-zinc-200 bg-white shadow-2xl shadow-zinc-900/10">
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                Divisões operacionais
              </p>
              <Link
                href="/nossos-negocios"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-opacity hover:opacity-80"
                onClick={closeMega}
              >
                Ver todas as divisões <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
              {businessAreas.map((area) => {
                const Icon = iconMap[area.icon] ?? Building2;
                return (
                  <Link
                    key={area.slug}
                    href={`/nossos-negocios/${area.slug}`}
                    className="group flex items-start gap-3 rounded-xl border border-zinc-100 bg-zinc-50/50 p-4 transition-all hover:border-primary/20 hover:bg-white hover:shadow-sm"
                    onClick={closeMega}
                  >
                    <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-400 transition-colors group-hover:border-primary/20 group-hover:text-primary">
                      <Icon className="size-4.5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-display text-sm font-bold text-zinc-900">{area.name}</p>
                      <p className="mt-0.5 line-clamp-1 text-xs text-zinc-500">
                        {area.shortDescription}
                      </p>
                      {area.metrics[0] ? (
                        <p className="mt-1.5 text-xs font-semibold text-primary">
                          {area.metrics[0].value} {area.metrics[0].label}
                        </p>
                      ) : null}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}

      {/* ── Mega panel: Empresa ──────────────────────────── */}
      {activeMega === "empresa" ? (
        <div className="animate-reveal absolute left-0 right-0 top-full border-b border-zinc-200 bg-white shadow-2xl shadow-zinc-900/10">
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
            <p className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
              A empresa
            </p>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {empresaLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-xl border border-zinc-100 bg-zinc-50/50 p-4 transition-all hover:border-primary/20 hover:bg-white hover:shadow-sm"
                  onClick={closeMega}
                >
                  <p className="font-display text-sm font-bold text-zinc-900 group-hover:text-primary transition-colors">
                    {link.label}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {/* ── Mobile menu ──────────────────────────────────── */}
      <div
        className={cn(
          "overflow-hidden border-t border-zinc-100 bg-white transition-all duration-300 lg:hidden",
          mobileOpen ? "max-h-[85vh] overflow-y-auto" : "max-h-0",
        )}
      >
        <div className="mx-auto max-w-7xl space-y-1 px-5 py-5 sm:px-8">
          {/* Empresa group */}
          <div>
            <p className="px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Empresa
            </p>
            {empresaLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Negócios group */}
          <div>
            <p className="px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Negócios
            </p>
            {businessAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/nossos-negocios/${area.slug}`}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                onClick={() => setMobileOpen(false)}
              >
                {area.name}
              </Link>
            ))}
          </div>

          {/* Simple links */}
          {simpleLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="border-t border-zinc-100 pt-4">
            <Button asChild className="w-full rounded-full font-semibold">
              <Link
                href="/contato/solicitacao-de-orcamento"
                onClick={() => setMobileOpen(false)}
              >
                Solicitar Orçamento
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
