"use client";

import { useState, useEffect } from "react";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/site-page";
import {
    Plane,
    MapPin,
    Phone,
    AlertTriangle,
    Syringe,
    Search,
    Loader2
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { travelData, CountryData } from "@/data/travel-data";
import { CountryMap } from "@/components/country-map";
import trGeo from "@/data/turkiye-geo.json";

// Ülke kodunu bayrak emojisine çeviren yardımcı fonksiyon
function getFlagEmoji(countryCode: string) {
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
}

export default function TravelPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
    const [mapData, setMapData] = useState<any>(null);
    const [loadingMap, setLoadingMap] = useState(false);
    const [mapError, setMapError] = useState(false);

    // Basit arama filtresi
    const filteredCountries = travelData.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Harita verisini çek
    useEffect(() => {
        if (!selectedCountry) {
            setMapData(null);
            return;
        }

        const fetchMap = async () => {
            setLoadingMap(true);
            setMapError(false);
            setMapData(null);

            try {
                // Türkiye için lokal dosyayı kullan
                if (selectedCountry.code === "TR") {
                    setMapData(trGeo);
                    setLoadingMap(false);
                    return;
                }

                // Diğer ülkeler için CDN'den çek
                const cdnUrl = process.env.NEXT_PUBLIC_MAP_CDN_URL;
                if (!cdnUrl) {
                    console.error("NEXT_PUBLIC_MAP_CDN_URL tanımlı değil.");
                    setMapError(true);
                    setLoadingMap(false);
                    return;
                }

                const response = await fetch(`${cdnUrl}/maps/${selectedCountry.code.toLowerCase()}.json`);
                if (!response.ok) {
                    throw new Error("Harita bulunamadı");
                }
                const data = await response.json();
                setMapData(data);
            } catch (error) {
                console.error("Harita yükleme hatası:", error);
                setMapError(true);
            } finally {
                setLoadingMap(false);
            }
        };

        fetchMap();
    }, [selectedCountry]);

    return (
        <main className="min-h-screen bg-[#f7f9fc] text-slate-950 flex flex-col">
            <PageHero eyebrow="Seyahat sağlığı" title="Rotanızdaki kuduz" accent="riskini öğrenin." description="Gideceğiniz ülkeyi seçin; risk durumunu, aşı önerilerini ve acil iletişim bilgilerini yolculuktan önce inceleyin.">
                    <div className="max-w-md mx-auto relative group">
                        <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input
                            type="text"
                            placeholder="Ülke ara (Örn: Tayland, Almanya)..."
                            className="pl-12 h-12 text-lg shadow-lg border-border focus:border-primary"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setSelectedCountry(null); // Yeni aramada seçimi sıfırla
                            }}
                        />

                        {/* Arama Sonuçları (Dropdown gibi) */}
                        {searchTerm && !selectedCountry && (
                            <div className="absolute top-14 left-0 right-0 bg-card border border-border rounded-xl shadow-xl z-50 overflow-hidden max-h-[300px] overflow-y-auto">
                                {filteredCountries.length > 0 ? (
                                    filteredCountries.map(country => (
                                        <div
                                            key={country.code}
                                            className="p-3 hover:bg-muted cursor-pointer flex items-center gap-3 border-b border-border/50 last:border-0"
                                            onClick={() => {
                                                setSelectedCountry(country);
                                                setSearchTerm(country.name);
                                            }}
                                        >
                                            <span className="text-2xl">
                                                {getFlagEmoji(country.code)}
                                            </span>
                                            <span className="font-medium text-foreground">{country.name}</span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-4 text-sm text-muted-foreground">Sonuç bulunamadı.</div>
                                )}
                            </div>
                        )}
                    </div>
            </PageHero>

            {/* Sonuç Alanı */}
            <div className="mx-auto w-full max-w-[1320px] px-5 py-12 lg:px-8 lg:py-16 flex-1">
                {selectedCountry ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch animate-in fade-in slide-in-from-bottom-4 duration-500">

                        {/* SOL KOLON: Bilgi Kartı */}
                        <Card className="w-full h-full border-border shadow-2xl overflow-hidden flex flex-col">

                            {/* Üst Risk Şeridi */}
                            <div className={`h-3 w-full shrink-0 ${selectedCountry.riskLevel === 'high' ? 'bg-red-600' :
                                selectedCountry.riskLevel === 'medium' ? 'bg-orange-500' :
                                    selectedCountry.riskLevel === 'low' ? 'bg-yellow-400' : 'bg-green-500'
                                }`} />

                            <CardHeader className="pb-4 shrink-0">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Seçilen Destinasyon</p>
                                        <CardTitle className="text-4xl font-bold text-foreground mt-1 flex items-center gap-3">
                                            <span className="text-3xl">{getFlagEmoji(selectedCountry.code)}</span>
                                            {selectedCountry.name}
                                        </CardTitle>
                                    </div>
                                    {/* Risk Rozeti */}
                                    <Badge className={`text-base px-4 py-1 ${selectedCountry.riskLevel === 'high' ? 'bg-red-100 text-red-700 border-red-200 hover:bg-red-200' :
                                        selectedCountry.riskLevel === 'free' ? 'bg-green-100 text-green-700 border-green-200 hover:bg-green-200' :
                                            'bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200'
                                        }`}>
                                        {selectedCountry.riskLevel === 'high' ? 'YÜKSEK RİSK' :
                                            selectedCountry.riskLevel === 'free' ? 'RİSKSİZ BÖLGE' : 'ORTA/DÜŞÜK RİSK'}
                                    </Badge>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-8 flex-1">

                                {/* 1. Acil Numaralar */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-muted/30 rounded-xl border border-border flex items-center gap-4">
                                        <div className="p-3 bg-red-50 rounded-full text-red-600">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-muted-foreground block">POLİS</span>
                                            <span className="text-2xl font-mono font-bold text-foreground">{selectedCountry.emergency.police}</span>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-muted/30 rounded-xl border border-border flex items-center gap-4">
                                        <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-400">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-muted-foreground block">AMBULANS</span>
                                            <span className="text-2xl font-mono font-bold text-foreground">{selectedCountry.emergency.ambulance}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Dikkat Edilmesi Gerekenler */}
                                <div>
                                    <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                                        <AlertTriangle className="w-5 h-5 text-amber-500" /> Riskli Hayvanlar
                                    </h3>
                                    <div className="flex gap-2 flex-wrap">
                                        {selectedCountry.vectors.map((animal, i) => (
                                            <Badge key={i} variant="secondary" className="text-sm px-3 py-1">
                                                {animal}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* 3. Tavsiye Kutusu */}
                                <div className="bg-white p-5 rounded-xl border border-slate-200">
                                    <h4 className="text-slate-900 font-bold flex items-center gap-2 mb-2">
                                        <Syringe className="w-4 h-4" /> Sağlık Tavsiyesi
                                    </h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {selectedCountry.advice}
                                    </p>
                                </div>

                            </CardContent>
                        </Card>

                        {/* SAĞ KOLON: Harita */}
                        <div className="w-full h-full">
                            {loadingMap ? (
                                <div className="w-full h-full min-h-[400px] bg-muted/20 rounded-xl border border-border flex flex-col items-center justify-center text-muted-foreground">
                                    <Loader2 className="w-12 h-12 animate-spin mb-4 text-primary" />
                                    <p>Harita yükleniyor...</p>
                                </div>
                            ) : mapError ? (
                                <div className="w-full h-full min-h-[400px] bg-muted/20 rounded-xl border border-border flex flex-col items-center justify-center text-muted-foreground p-8 text-center">
                                    <MapPin className="w-16 h-16 mb-4 opacity-20" />
                                    <p className="font-medium">Harita verisi bulunamadı.</p>
                                    <p className="text-sm mt-2 opacity-70">Bağlantı hatası veya eksik veri.</p>
                                </div>
                            ) : mapData ? (
                                <CountryMap
                                    geoData={mapData}
                                    countryName={selectedCountry.name}
                                    riskLevel={selectedCountry.riskLevel}
                                />
                            ) : (
                                <div className="w-full h-full min-h-[400px] bg-muted/20 rounded-xl border border-border flex flex-col items-center justify-center text-muted-foreground p-8 text-center">
                                    <MapPin className="w-16 h-16 mb-4 opacity-20" />
                                    <p className="font-medium">Harita verisi bekleniyor...</p>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    /* Boş Durum */
                    <div className="text-center text-muted-foreground mt-12 opacity-50">
                        <MapPin className="w-24 h-24 mx-auto mb-4 stroke-1" />
                        <p>Bilgilerini görmek istediğiniz ülkeyi yukarıdan aratın.</p>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
