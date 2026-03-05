import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { timeline } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Linha do Tempo",
};

export default function LinhaDoTempoPage() {
  return (
    <>
      <PageHero
        title="Linha do Tempo"
        subtitle="25 anos de história, crescimento e excelência no setor industrial brasileiro"
        breadcrumbs={[
          { label: "Empresa", href: "/empresa" },
          { label: "Linha do Tempo" },
        ]}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-7 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-2">
                {timeline.map((item) => (
                  <div
                    key={item.year}
                    className="relative flex items-start gap-6"
                  >
                    <div className="relative z-10 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold text-sm shrink-0">
                      {item.year}
                    </div>
                    <div className="flex-1 pt-3 pb-8">
                      <p className="font-body text-foreground leading-relaxed">
                        {item.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
