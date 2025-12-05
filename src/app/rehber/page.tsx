import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GuidanceTimeline } from "@/components/guidance-timeline";
import { ShieldCheck } from "lucide-react";

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      {/* Alt boşluk ayarı */}
      <div className="relative bg-slate-900 text-white pt-20 pb-56 overflow-hidden">

        {/* Arkaplan Efekti */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-red-600 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-sm font-medium mb-6 border border-white/20">
            <ShieldCheck className="w-4 h-4" /> Acil Durum Rehberi
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Sakin Olun ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">Adımları İzleyin</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Kuduz %100 ölümcül olabilir, ancak doğru zamanda yapılan müdahale ile %100 önlenebilir. Aşağıdaki prosedürü vakit kaybetmeden uygulayın.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      {/* İçerik yerleşimi ve z-index ayarı */}
      <div className="container mx-auto px-4 py-12 -mt-32 relative z-20">
        <GuidanceTimeline />
      </div>

      {/* Alt Bilgi */}
      <section className="pb-16 pt-4 text-center">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Bu rehber T.C. Sağlık Bakanlığı Kuduz Profilaksi Rehberi referans alınarak hazırlanmıştır. Her durumda hekim tavsiyesi esastır.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}