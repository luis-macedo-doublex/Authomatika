import Link from "next/link";
import Script from "next/script";
import { ChevronRight } from "lucide-react";
import { breadcrumbSchema } from "@/lib/schemas";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  variant?: "dark" | "red";
}

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  variant = "dark",
}: PageHeroProps) {
  const hasBreadcrumbs = breadcrumbs && breadcrumbs.length > 0;
  const breadcrumbLd = hasBreadcrumbs
    ? breadcrumbSchema(
        breadcrumbs.map((b) => ({ name: b.label, url: b.href }))
      )
    : null;

  return (
    <>
      {breadcrumbLd && (
        <Script
          id={`schema-breadcrumb-${title.replace(/\s/g, "-").toLowerCase()}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      )}
      <section
        className={
          variant === "red"
            ? "bg-primary-gradient py-16 md:py-20"
            : "bg-dark-industrial py-16 md:py-20"
        }
        aria-label={`Cabeçalho: ${title}`}
      >
        <div className="container mx-auto px-4">
          {hasBreadcrumbs && (
            <nav
              aria-label="Navegação estrutural"
              className="flex items-center gap-1.5 text-xs text-white/50 mb-4 font-body"
            >
              <Link href="/" className="hover:text-white/80 transition-colors">
                Home
              </Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3" aria-hidden="true" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white/80 transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/70" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                </span>
              ))}
            </nav>
          )}
          <div
            className="w-12 h-1 mb-4"
            aria-hidden="true"
            style={{
              background:
                variant === "red"
                  ? "rgba(255,255,255,0.4)"
                  : "oklch(0.451 0.225 17.5)",
            }}
          />
          <h1 className="section-heading text-white mb-3">{title}</h1>
          {subtitle && (
            <p className="text-white/70 font-body text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
