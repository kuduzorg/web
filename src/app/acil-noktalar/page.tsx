import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LocationFinder } from "@/components/location-finder";
import { Badge } from "@/components/ui/badge";
import { Siren } from "lucide-react";

export default function EmergencyLocationsPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
                <Badge variant="destructive" className="animate-pulse gap-1">
                    <Siren className="w-3 h-3" /> Canlı Veri
                </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Acil Sağlık Noktaları
            </h1>
            <p className="text-muted-foreground mt-2 text-lg max-w-3xl">
                Konumunuza en yakın <strong>Nöbetçi Veterinerleri</strong> ve <strong>Hastane Acil Servislerini</strong> anlık olarak bulun, yol tarifi alın.
            </p>
        </div>

        {/* BULUCU BİLEŞENİ */}
        <LocationFinder />

        {/* Bilgi Notu */}
        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 flex gap-4">
            <span className="text-2xl">💡</span>
            <div className="text-sm text-blue-800 dark:text-blue-300">
                <strong className="block mb-1">İpucu:</strong>
                Listede "AÇIK" ibaresi olan yerler şu an hizmet vermektedir. Gitmeden önce mutlaka telefonla teyit alınız. Nöbetçi listeleri anlık değişebilir.
            </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}