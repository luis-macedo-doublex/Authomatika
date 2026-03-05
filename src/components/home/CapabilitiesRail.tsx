import Link from "next/link";
import { ArrowRight, Sun, Zap, Cpu, Wrench, Settings, Building2 } from "lucide-react";
import { businessAreas } from "@/lib/data/businesses";

const iconMap: Record<string, React.ElementType> = {
  Sun,
  Zap,
  Cpu,
  Wrench,
  Settings,
  Building2,
};

export function CapabilitiesRail() {
  return (
    <section className="overflow-hidden bg-white py-20">
      {/* Header */}
      <div className="mx-auto mb-10 max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="mono-label mb-3">Divisões operacionais</p>
            <h2 className="section-heading-sm text-zinc-900">O que fazemos</h2>
          </div>
          <Link
            href="/nossos-negocios"
            className="hidden items-center gap-2 text-sm font-semibold text-zinc-400 transition-colors hover:text-zinc-900 sm:inline-flex"
          >
            Ver todas <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      {/* Horizontal scroll rail — bleeds to right edge */}
      <div className="pl-5 sm:pl-8">
        <div
          className="flex gap-4 overflow-x-auto pb-4"
          style={{ scrollSnapType: "x mandatory", scrollPaddingLeft: "1.25rem" }}
        >
          {businessAreas.map((area, i) => {
            const Icon = iconMap[area.icon] ?? Building2;
            return (
              <Link
                key={area.slug}
                href={`/nossos-negocios/${area.slug}`}
                className="group flex w-[280px] flex-none flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-all duration-200 hover:border-primary/30 hover:bg-white hover:shadow-lg hover:shadow-zinc-900/6"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="mb-auto">
                  {/* Number + icon */}
                  <div className="mb-5 flex items-start justify-between">
                    <span className="font-mono text-[11px] font-medium text-zinc-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex size-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-400 transition-colors group-hover:border-primary/20 group-hover:text-primary">
                      <Icon className="size-5" />
                    </div>
                  </div>

                  <h3 className="mb-2 font-display text-lg font-bold text-zinc-900">
                    {area.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-500">{area.shortDescription}</p>
                </div>

                {/* Metrics */}
                {area.metrics.length > 0 ? (
                  <div className="mt-6 grid grid-cols-2 gap-3 border-t border-zinc-100 pt-5">
                    {area.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <div className="font-display text-xl font-bold text-zinc-900">
                          {m.value}
                        </div>
                        <div className="mt-0.5 text-[10px] leading-tight text-zinc-400">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}

                {/* CTA */}
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-zinc-400 transition-colors group-hover:text-primary">
                  <span>Saiba mais</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            );
          })}

          {/* Right spacer */}
          <div className="w-5 flex-none sm:w-8" />
        </div>
      </div>
    </section>
  );
}
