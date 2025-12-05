"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Loader2, Stethoscope, Syringe, Info } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Google Maps Embed API Key (Bunu .env dosyana eklemelisin)
// NEXT_PUBLIC_GOOGLE_MAPS_KEY=...
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

export function LocationFinder() {
  const [activeTab, setActiveTab] = useState<"vet" | "hospital">("vet");
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Sayfa açılınca konumu almaya çalış
  useEffect(() => {
    handleLocateMe();
  }, []);

  const handleLocateMe = () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setIsLoading(false);
        },
        (error) => {
          console.error("Konum hatası", error);
          setIsLoading(false);
          // Konum alınamazsa varsayılan (Ankara) veya boş bırakabiliriz
        }
      );
    } else {
      setIsLoading(false);
    }
  };

  // Arama Terimi
  const query = activeTab === "vet" ? "nöbetçi+veteriner" : "acil+servis+hastane";
  
  // Harita URL'i
  // Konum varsa merkeze alıyoruz, yoksa genel Türkiye araması yapıyor
  const mapSrc = userLocation 
    ? `https://www.google.com/maps/embed/v1/search?key=${API_KEY}&q=${query}&center=${userLocation.lat},${userLocation.lng}&zoom=14`
    : `https://www.google.com/maps/embed/v1/search?key=${API_KEY}&q=${query}&zoom=6`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[650px]">
      
      {/* SOL PANEL: KONTROL VE BİLGİ */}
      <Card className="lg:col-span-3 h-full border-border flex flex-col bg-card p-6">
        
        <div className="space-y-6">
            {/* Başlık */}
            <div>
                <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-primary" /> Yakın Noktalar
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                    Acil durumda size en yakın sağlık kuruluşunu bulun.
                </p>
            </div>

            {/* Kategori Seçimi */}
            <div className="space-y-2">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Ne Arıyorsunuz?</span>
                <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "vet" | "hospital")} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="vet" className="flex gap-2"><Syringe className="w-4 h-4" /> Veteriner</TabsTrigger>
                        <TabsTrigger value="hospital" className="flex gap-2"><Stethoscope className="w-4 h-4" /> Hastane</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            {/* Konum Butonu */}
            <Button 
                variant={userLocation ? "outline" : "default"} 
                className={`w-full py-6 font-semibold ${!userLocation && "animate-pulse"}`}
                onClick={handleLocateMe}
                disabled={isLoading}
            >
                {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <MapPin className="w-4 h-4 mr-2" />}
                {userLocation ? "Konumumu Güncelle" : "Konumumu Bul"}
            </Button>

            {/* Bilgi Kartı */}
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                <div className="flex gap-3">
                    <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <div className="space-y-1">
                        <p className="text-xs font-bold text-blue-800 dark:text-blue-300">Google Maps Verisi</p>
                        <p className="text-xs text-blue-700 dark:text-blue-400 leading-relaxed">
                            Harita üzerindeki sonuçlar Google tarafından sağlanmaktadır. "Açık" yazsa bile gitmeden önce aramanız önerilir.
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </Card>

      {/* SAĞ PANEL: GOOGLE MAPS EMBED */}
      <Card className="lg:col-span-9 h-full border-border overflow-hidden relative bg-muted/20 flex items-center justify-center shadow-sm">
        {API_KEY ? (
             <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={mapSrc}
                className="w-full h-full"
            ></iframe>
        ) : (
            <div className="text-center p-8">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Harita Yüklenemedi</h3>
                <p className="text-muted-foreground max-w-xs mx-auto mt-2">
                    API anahtarı eksik. Lütfen geliştirici ile iletişime geçin.
                </p>
            </div>
        )}
      </Card>

    </div>
  );
}