import Script from "next/script";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbSchema } from "@/lib/schemas";

interface Crumb {
  label: string;
  href?: string;
}

interface PageIntroProps {
  tag?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}

export function PageIntro({ tag, title, subtitle, breadcrumbs }: PageIntroProps) {
  const hasBreadcrumbs = breadcrumbs && breadcrumbs.length > 0;

  const schema = hasBreadcrumbs
    ? breadcrumbSchema(
        breadcrumbs.map((crumb) => ({
          name: crumb.label,
          url: crumb.href,
        })),
      )
    : null;

  return (
    <section className="relative overflow-hidden border-b border-zinc-200 bg-white pt-24 pb-14 md:pt-28 md:pb-18">
      {schema ? (
        <Script
          id={`schema-breadcrumb-${title.toLowerCase().replace(/\s+/g, "-")}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ) : null}

      {/* Subtle grid */}
      <div className="page-grid pointer-events-none absolute inset-0 opacity-40" />

      {/* Red accent bar at top */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-primary" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        {/* Breadcrumb */}
        {hasBreadcrumbs ? (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-400">
              <li>
                <Link href="/" className="transition-colors hover:text-zinc-700">
                  Início
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={`${crumb.label}-${index}`} className="flex items-center gap-1.5">
                    <ChevronRight className="size-3 text-zinc-300" aria-hidden="true" />
                    {crumb.href ? (
                      <Link href={crumb.href} className="transition-colors hover:text-zinc-700">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span
                        className="font-medium text-zinc-700"
                        aria-current={isLast ? "page" : undefined}
                      >
                        {crumb.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}

        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="space-y-4 md:col-span-7">
            {tag ? <p className="mono-label">{tag}</p> : null}
            {/* Accent line */}
            <div className="h-0.5 w-10 bg-primary" />
            <h1 className="section-heading text-zinc-900">{title}</h1>
          </div>
          <div className="md:col-span-5">
            {subtitle ? (
              <p className="text-base leading-relaxed text-zinc-500 md:text-lg">{subtitle}</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
