import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { VaccineTracker } from "@/components/vaccine-tracker"; // Bileşen importları
import { MythsFacts } from "@/components/myths-facts";
import { TurkeyMap } from "@/components/turkiye-map";
import { Symptoms } from "@/components/symptoms";
import { ResourcesSection } from "@/components/resources-section"; // Bileşen importları
import { LatestNews } from "@/components/latest-news";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Üst Menü */}
      <Navbar />

      {/* Ana Karşılama ve Aksiyon Butonları */}
      <Hero />

      {/* Bilinçlendirme Bölümü */}
      <MythsFacts />

      {/* Durum Analizi Bölümü */}
      <TurkeyMap />

      {/* Eğitim Bölümü */}
      <Symptoms />

      {/* Materyal Bölümü */}
      {/* İndirilebilir içerikler için yerleşim */}
      <ResourcesSection />

      {/* Güncel Haberler Bölümü */}
      <LatestNews />

      {/* Destek Bölümü */}
      <FAQ />

      {/* Alt Bilgi ve Yasal Uyarı */}
      <Footer />
    </main>
  );
}