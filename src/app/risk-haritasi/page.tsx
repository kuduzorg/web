import { Footer } from "@/components/footer";
import { DetailedRiskMap } from "@/components/detailed-risk-map";
import { DataDisclaimer } from "@/components/data-disclaimer";
import { PageContainer, PageHero } from "@/components/site-page";

export default function RiskMapPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950 flex flex-col">
      <PageHero eyebrow="Canlı risk verisi" title="Türkiye Kuduz" accent="Risk Haritası" description="İl bazlı risk durumlarını, vaka yoğunluklarını ve sağlık noktalarını tek görünümde inceleyin. Veriler doğrulanmış kayıtlar ve yetkili kaynaklardan derlenir." />
      <PageContainer className="flex-1 py-12 lg:py-16">

        {/* HARİTA BİLEŞENİ */}
        <DetailedRiskMap />

        {/* Alt Bilgi */}
        <DataDisclaimer />

      </PageContainer>

      <Footer />
    </main>
  );
}
