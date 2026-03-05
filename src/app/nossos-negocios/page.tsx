import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sun, Zap, Cpu, Wrench, Settings, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/layout/PageHero";
import { businessAreas } from "@/lib/data/businesses";

export const metadata: Metadata = {
  title: "Nossos Negócios",
  description:
    "6 divisões especializadas em engenharia elétrica e automação industrial.",
};

const icons: Record<string, React.ReactNode> = {
  Sun: <Sun className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Cpu: <Cpu className="w-8 h-8" />,
  Wrench: <Wrench className="w-8 h-8" />,
  Settings: <Settings className="w-8 h-8" />,
  Building2: <Building2 className="w-8 h-8" />,
};

export default function NossosNegociosPage() {
  return (
    <>
      <PageHero
        title="Nossos Negócios"
        subtitle="Seis divisões especializadas que cobrem toda a cadeia de engenharia elétrica e automação industrial"
        breadcrumbs={[{ label: "Nossos Negócios" }]}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/nossos-negocios/${area.slug}`}
              >
                <Card className="h-full border border-border hover-lift cursor-pointer group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                      {icons[area.icon]}
                    </div>
                    <h2 className="font-display font-bold text-2xl text-foreground mb-3">
                      {area.name}
                    </h2>
                    <p className="font-body text-muted-foreground leading-relaxed mb-5 text-sm">
                      {area.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {area.metrics.map((m) => (
                        <Badge
                          key={m.label}
                          variant="secondary"
                          className="font-body text-xs"
                        >
                          {m.value} {m.label}
                        </Badge>
                      ))}
                    </div>
                    <span className="flex items-center gap-1.5 text-sm font-body font-medium text-primary group-hover:gap-3 transition-all">
                      Ver detalhes <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
