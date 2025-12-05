import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DetailedRiskMap } from "@/components/detailed-risk-map";
import { Badge } from "@/components/ui/badge";
import { DataDisclaimer } from "@/components/data-disclaimer";

export default function RiskMapPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="flex-1 container mx-auto px-4 py-8">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">Canlı Veri (Simülasyon)</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Türkiye Kuduz Risk Haritası</h1>
          <p className="text-muted-foreground mt-2 max-w-3xl">
            İl bazlı risk durumlarını, vaka yoğunluklarını ve sağlık noktalarını detaylı olarak inceleyebilirsiniz.
            Veriler Sağlık Bakanlığı ve Tarım Bakanlığı raporlarından derlenmektedir.
          </p>
        </div>

        {/* HARİTA BİLEŞENİ */}
        <DetailedRiskMap />

        {/* Alt Bilgi */}
        <DataDisclaimer />

      </div>

      <Footer />
    </main>
  );
}