"use client";

import { Footer } from "@/components/footer";
import { PageHero } from "@/components/site-page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ExternalLink, Book, FileText, Scale, Globe } from "lucide-react";
import { useState } from "react";

// Kaynak Verileri
const references = [
    {
        category: "Resmi Otoriteler",
        icon: <Globe className="w-5 h-5 text-red-500" />,
        items: [
            { title: "T.C. Sağlık Bakanlığı - Kuduz Profilaksi Rehberi", url: "https://hsgm.saglik.gov.tr/tr/zoonoz-hastaliklar/kuduz", date: "2023 Güncellemesi" },
            { title: "Dünya Sağlık Örgütü (WHO) - Rabies Fact Sheet", url: "https://www.who.int/news-room/fact-sheets/detail/rabies", date: "2024" },
            { title: "CDC (Centers for Disease Control) - Rabies Information", url: "https://www.cdc.gov/rabies/index.html", date: "Sürekli Güncel" },
            { title: "T.C. Tarım ve Orman Bakanlığı - Hayvan Hastalıkları", url: "https://www.tarimorman.gov.tr/", date: "-" },
        ]
    },
    {
        category: "Yasal Mevzuat",
        icon: <Scale className="w-5 h-5 text-red-500" />,
        items: [
            { title: "5199 Sayılı Hayvanları Koruma Kanunu", url: "https://www.mevzuat.gov.tr/", date: "Resmi Gazete" },
            { title: "Kuduz Hastalığından Korunma ve Mücadele Yönetmeliği", url: "https://www.resmigazete.gov.tr/", date: "Yönetmelik" },
        ]
    },
    {
        category: "Akademik & Bilimsel",
        icon: <Book className="w-5 h-5 text-slate-500" />,
        items: [
            { title: "Türkiye'de Kuduz Epidemiyolojisi (2010-2020)", url: "#", date: "Türk Veteriner Hekimleri Birliği Dergisi" },
            { title: "Pathogenesis of Rabies Virus - Nature Review", url: "#", date: "Nature Journal" },
        ]
    },
    {
        category: "Veri & Harita",
        icon: <FileText className="w-5 h-5 text-emerald-500" />,
        items: [
            { title: "OpenStreetMap Data", url: "https://www.openstreetmap.org/", date: "Canlı Veri" },
            { title: "Google Maps Places API", url: "https://developers.google.com/maps", date: "Lokasyon Servisleri" },
        ]
    }
];

export default function ReferencesPage() {
    const [search, setSearch] = useState("");

    // Filtreleme Fonksiyonu
    const filteredRefs = references.map(group => ({
        ...group,
        items: group.items.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    })).filter(group => group.items.length > 0);

    return (
        <main className="min-h-screen bg-[#f7f9fc] text-slate-950 flex flex-col">
            <PageHero eyebrow="Şeffaflık ve güven" title="Kaynakça ve" accent="referanslar." description="Kuduz.org üzerinde sunulan bilgilerin dayandığı ulusal ve uluslararası yetkili kurum yayınlarını inceleyin." />

            {/* İçerik */}
            <div className="mx-auto w-full max-w-5xl px-5 py-12 lg:px-8 lg:py-16 flex-1">

                {/* Arama */}
                <div className="relative mb-10">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                        placeholder="Kaynak ara (Örn: Bakanlık, WHO, Kanun)..."
                        className="pl-10 h-12 text-lg bg-card"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Listeleme */}
                <div className="space-y-8">
                    {filteredRefs.map((group, idx) => (
                        <Card key={idx} className="overflow-hidden border-border shadow-sm p-0 gap-0">
                            <CardHeader className="bg-muted/30 border-b border-border px-4 py-6 flex items-center">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-background rounded-lg border border-border shadow-sm">
                                        {group.icon}
                                    </div>
                                    <CardTitle className="text-lg font-bold text-foreground">{group.category}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <ul className="divide-y divide-border">
                                    {group.items.map((item, i) => (
                                        <li key={i} className="flex items-center justify-between p-4 hover:bg-muted/20 transition-colors group">
                                            <div>
                                                <h4 className="font-medium text-foreground text-sm md:text-base group-hover:text-primary transition-colors">
                                                    {item.title}
                                                </h4>
                                                <span className="text-xs text-muted-foreground mt-1 inline-block">
                                                    {item.date}
                                                </span>
                                            </div>
                                            <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary">
                                                <a href={item.url} target="_blank" rel="nofollow noreferrer">
                                                    <ExternalLink className="w-4 h-4" />
                                                    <span className="sr-only">Kaynağa Git</span>
                                                </a>
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}

                    {filteredRefs.length === 0 && (
                        <div className="text-center py-12 text-muted-foreground">
                            <p>Aradığınız kriterlere uygun kaynak bulunamadı.</p>
                        </div>
                    )}
                </div>

                {/* Disclaimer */}
                <div className="mt-12 p-6 bg-white border border-slate-200 rounded-xl text-sm text-slate-600 leading-relaxed">
                    <strong>Not:</strong> Bu sayfada yer alan harici bağlantılar, ilgili kurumların resmi web sitelerine aittir. Kuduz.org, harici sitelerin içeriğinden ve güncelliğinden sorumlu tutulamaz.
                </div>

            </div>

            <Footer />
        </main>
    );
}
