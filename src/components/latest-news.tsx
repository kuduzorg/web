import { ArrowRight, Calendar, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export async function LatestNews() {
  const { data: news } = await supabase
    .from('news')
    .select('*')
    .order('published_at', { ascending: false })
    .limit(3);

  return (
    <section className="py-16 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Önemli Haberler</h2>
            <p className="text-muted-foreground mt-2">Kuduzla mücadelede önemli haberler ve bilimsel veriler.</p>
          </div>

          {/* Link bileşeni buton içinde kullanımı */}
          <Button variant="ghost" className="hidden sm:flex text-primary hover:text-primary hover:bg-primary/10" asChild>
            <Link href="/haberler">
              Tüm Haberler <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news?.map((item, i) => (
            <Link href={item.link || '#'} key={i} target={item.link ? "_blank" : undefined} className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all cursor-pointer block">
              {/* Görsel Alanı */}
              <div className="h-48 w-full bg-muted flex items-center justify-center overflow-hidden">
                {item.image_url ? (
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <Newspaper className="w-12 h-12 text-muted-foreground opacity-50" />
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="font-semibold text-primary">{item.source}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(item.published_at).toLocaleDateString('tr-TR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {item.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}