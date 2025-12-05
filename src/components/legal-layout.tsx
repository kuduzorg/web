import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export function LegalLayout({ children, title, active }: { children: React.ReactNode, title: string, active: string }) {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* SOL: Yasal Menü */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <nav className="flex flex-col space-y-1 sticky top-24">
              <h3 className="font-bold text-foreground px-4 mb-2">Yasal</h3>
              <Link href="/gizlilik" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${active === 'gizlilik' ? 'bg-muted text-foreground' : 'text-muted-foreground hover:bg-muted/80'}`}>Gizlilik Politikası</Link>
              <Link href="/kullanim-sartlari" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${active === 'sartlar' ? 'bg-muted text-foreground' : 'text-muted-foreground hover:bg-muted/80'}`}>Kullanım Şartları</Link>
              <Link href="/kvkk" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${active === 'kvkk' ? 'bg-muted text-foreground' : 'text-muted-foreground hover:bg-muted/80'}`}>KVKK Aydınlatma</Link>
            </nav>
          </aside>

          {/* SAĞ: İçerik */}
          <div className="flex-1">
            <div className="bg-card rounded-2xl border border-border shadow-sm p-8 md:p-12">
              <h1 className="text-3xl font-bold text-foreground mb-8 border-b border-border pb-4">{title}</h1>
              <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600">
                {children}
              </article>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}