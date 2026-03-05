import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/layout/PageHero";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Produtos",
  description: "9 produtos próprios da Authomathika para o setor industrial.",
};

export default function ProdutosPage() {
  return (
    <>
      <PageHero
        title="Produtos"
        subtitle="Linha de produtos próprios desenvolvidos pela Authomathika para o setor industrial"
        breadcrumbs={[{ label: "Produtos" }]}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link key={product.slug} href={`/produtos/${product.slug}`}>
                <Card className="h-full border border-border hover-lift cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="font-display font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h2>
                      {product.badge && (
                        <Badge className="font-body text-xs bg-primary/10 text-primary border-primary/20 shrink-0 ml-2">
                          {product.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="font-body text-sm font-medium text-muted-foreground mb-3">
                      {product.shortDescription}
                    </p>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {product.description}
                    </p>
                    <span className="flex items-center gap-1 text-xs font-body font-medium text-primary group-hover:gap-2 transition-all">
                      Ver especificações <ArrowRight className="w-3 h-3" />
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
