import { Footer } from "@/components/footer";
import { LocationFinder } from "@/components/location-finder";
import { PageContainer, PageHero } from "@/components/site-page";

export default function EmergencyLocationsPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950 flex flex-col">
      <PageHero eyebrow="Konum hizmetleri" title="Acil sağlık noktalarını" accent="hızla bulun." description="Konumunuza en yakın nöbetçi veterinerleri ve hastane acil servislerini görüntüleyin, iletişim bilgilerine ulaşın ve yol tarifi alın." />
      <PageContainer className="flex-1 py-12 lg:py-16">

        {/* BULUCU BİLEŞENİ */}
        <LocationFinder />

        {/* Bilgi Notu */}
        <div className="mt-8 flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-red-50 text-red-600">i</span>
            <div className="text-sm leading-6 text-slate-600">
                <strong className="block mb-1">İpucu:</strong>
                Listede "AÇIK" ibaresi olan yerler şu an hizmet vermektedir. Gitmeden önce mutlaka telefonla teyit alınız. Nöbetçi listeleri anlık değişebilir.
            </div>
        </div>

      </PageContainer>

      <Footer />
    </main>
  );
}
