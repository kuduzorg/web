"use client";

import { useState, useEffect } from "react";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/site-page";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {
    Calendar,
    Search,
    ChevronRight,
    AlertCircle,
    CheckCircle2,
    Info,
    Newspaper,
    Clock
} from "lucide-react";
import Link from "next/link";

interface NewsItem {
    id: string;
    title: string;
    summary: string;
    source: string;
    tag: string;
    published_at: string;
    image_url: string;
    link: string;
}

export default function NewsPage() {
    const [search, setSearch] = useState("");
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('/api/news');
                if (!response.ok) throw new Error('Haberler alınamadı');
                setNews(await response.json());
            } catch (error) {
                console.error('Error fetching news:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    const filteredNews = news.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    // Pagination Logic
    const ITEMS_PER_PAGE = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);

    const paginatedNews = filteredNews.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // Reset page when search changes
    useEffect(() => {
        setCurrentPage(1);
    }, [search]);

    // Durum İkon ve Badge'leri
    const getStatusIndicator = (tag: string) => {
        // Normalize tag for comparison
        const normalizedTag = tag?.toUpperCase();

        switch (normalizedTag) {
            case "DOĞRULANDI":
                return (
                    <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 w-fit">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-bold uppercase tracking-wide">Doğrulandı</span>
                    </div>
                );
            case "RİSKLİ/ŞÜPHELİ":
                return (
                    <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100 w-fit">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-bold uppercase tracking-wide">Riskli/Şüpheli</span>
                    </div>
                );
            case "NORMALLEŞME":
                return (
                    <div className="flex items-center gap-2 text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 w-fit">
                        <Info className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-bold uppercase tracking-wide">Normalleşme</span>
                    </div>
                );
            case "VAKA":
                return (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-100 w-fit">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-bold uppercase tracking-wide">Vaka</span>
                    </div>
                );
            default:
                return (
                    <div className="flex items-center gap-2 text-muted-foreground bg-muted px-2.5 py-1 rounded-md border border-border w-fit">
                        <Newspaper className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-bold uppercase tracking-wide">Bilgi</span>
                    </div>
                );
        }
    };

    return (
        <main className="min-h-screen bg-[#f7f9fc] text-slate-950 flex flex-col">
            <PageHero eyebrow="Canlı haber akışı" title="Haberler ve" accent="bildirimler." description="Resmî kurum açıklamalarını, sahadan gelen kayıtları ve doğrulanmış gelişmeleri tek akışta takip edin.">
                        <div className="relative w-full max-w-md">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Anahtar kelime ile filtrele..."
                                className="pl-9 bg-muted/50 border-border focus:bg-background transition-all"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
            </PageHero>
            <div className="mx-auto w-full max-w-5xl px-5 pt-8 lg:px-8">
                    <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                        <div className="flex gap-3">
                            <Info className="w-5 h-5 text-red-600 shrink-0 mt-0.5 sm:mt-0" />
                            <div className="text-sm leading-6 text-slate-600">
                                <p>
                                    <strong>Otomatik Veri Toplama:</strong> Haber başlıkları, görselleri ve özetleri otomatik sistemlerce oluşturulmuştur ve kesinlik taşımayabilir.
                                    Platformumuz, kaynak haberin içeriğinden ve doğruluğundan sorumlu değildir.
                                </p>
                            </div>
                        </div>
                        <Button variant="outline" size="sm" className="shrink-0 text-xs h-8 border-slate-200 hover:border-red-200 hover:text-red-600" asChild>
                            <Link href="/yasal-uyari">
                                Devamını Gör <ChevronRight className="w-3 h-3 ml-1" />
                            </Link>
                        </Button>
                    </div>
            </div>

            {/* Liste Görünümü */}
            <div className="flex-1 mx-auto w-full max-w-5xl px-5 py-8 lg:px-8 lg:pb-16">

                <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
                    {/* Tablo Başlığı (Masaüstü) */}
                    <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-muted/50 border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        <div className="col-span-2">Tarih / Saat</div>
                        <div className="col-span-2">Durum</div>
                        <div className="col-span-6">Konu</div>
                        <div className="col-span-2 text-right">Detay</div>
                    </div>

                    {/* Liste Öğeleri */}
                    <div className="divide-y divide-border">
                        {loading ? (
                            <div className="py-16 text-center text-muted-foreground">
                                <p>Yükleniyor...</p>
                            </div>
                        ) : paginatedNews.length > 0 ? (
                            paginatedNews.map((news) => (
                                <Link key={news.id} href={news.link || '#'} target={news.link ? "_blank" : undefined} className="block group hover:bg-muted/50 transition-colors">
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 items-center">

                                        {/* 1. Tarih Bilgisi */}
                                        <div className="col-span-12 md:col-span-2 flex md:flex-col items-center md:items-start gap-2 md:gap-0.5">
                                            <div className="flex items-center gap-1.5 text-foreground font-bold font-mono">
                                                <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                                                {new Date(news.published_at).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' })}
                                            </div>
                                            <div className="text-xs text-muted-foreground flex items-center gap-1 ml-auto md:ml-0">
                                                <Clock className="w-3 h-3" />
                                                {new Date(news.published_at).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                                            </div>
                                        </div>

                                        {/* 2. Durum Rozeti */}
                                        <div className="col-span-12 md:col-span-2">
                                            {getStatusIndicator(news.tag)}
                                        </div>

                                        {/* 3. İçerik Bilgisi */}
                                        <div className="col-span-12 md:col-span-6 flex items-start gap-4 pr-4">
                                            {/* Küçük Thumbnail */}
                                            <div className="w-12 h-12 rounded-lg flex-shrink-0 bg-muted overflow-hidden border border-border hidden sm:block">
                                                {news.image_url ? (
                                                    <img src={news.image_url} alt={news.title} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-muted">
                                                        <Newspaper className="w-6 h-6 text-muted-foreground opacity-50" />
                                                    </div>
                                                )}
                                            </div>

                                            <div className="space-y-1 min-w-0">
                                                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                                                    {news.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground line-clamp-1">
                                                    {news.summary?.replace(/<[^>]*>?/gm, '')}
                                                </p>
                                                {/* Kategori etiketi (Mobil) */}
                                                <div className="sm:hidden pt-1">
                                                    <Badge variant="outline" className="text-[10px] px-1.5 h-5 text-muted-foreground border-border font-normal">{news.source}</Badge>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 4. Aksiyon */}
                                        <div className="col-span-12 md:col-span-2 flex justify-end items-center gap-3">
                                            <Badge variant="secondary" className="hidden md:flex text-[10px] text-muted-foreground bg-muted hover:bg-muted/80 truncate max-w-[120px]">
                                                {news.source}
                                            </Badge>
                                            <ChevronRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                                        </div>

                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="py-16 text-center text-muted-foreground">
                                <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                <p>Kriterlere uygun kayıt bulunamadı.</p>
                            </div>
                        )}
                    </div>

                    {/* Footer / Pagination */}
                    {totalPages > 1 && (
                        <div className="px-6 py-4 bg-muted/30 border-t border-border">
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (currentPage > 1) setCurrentPage(p => p - 1);
                                            }}
                                            className={currentPage === 1 ? "pointer-events-none opacity-50" : "hover:bg-background cursor-pointer"}
                                        />
                                    </PaginationItem>

                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <PaginationItem key={page}>
                                            <PaginationLink
                                                href="#"
                                                isActive={currentPage === page}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setCurrentPage(page);
                                                }}
                                                className={currentPage === page ? "bg-background border-border shadow-sm text-foreground" : "hover:bg-background cursor-pointer"}
                                            >
                                                {page}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))}

                                    <PaginationItem>
                                        <PaginationNext
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (currentPage < totalPages) setCurrentPage(p => p + 1);
                                            }}
                                            className={currentPage === totalPages ? "pointer-events-none opacity-50" : "hover:bg-background cursor-pointer"}
                                        />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    )}

                </div>
            </div>

            <Footer />
        </main>
    );
}
