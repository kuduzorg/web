import React from "react";
import { AlertTriangle, ShieldCheck, Info, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageHero } from "@/components/site-page";
import { Footer } from "@/components/footer";

export default function DisclaimerPage() {
    return (
        <div className="min-h-screen bg-[#f7f9fc] text-slate-950">
            <PageHero eyebrow="Yasal ve şeffaflık" title="Yasal uyarı ve" accent="sorumluluk reddi." description="Platformda sunulan verilerin kaynağı, doğrulama yaklaşımı ve kullanım koşulları hakkında bilgilendirme." />
            <main className="mx-auto max-w-4xl px-5 py-12 lg:px-8 lg:py-16">
                <div className="space-y-8">

                    {/* Footer Disclaimer Text (Highlighted) */}
                    <section className="bg-slate-900 text-slate-300 border border-slate-800 rounded-xl p-6 md:p-8 shadow-sm space-y-4">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-yellow-500/10 rounded-lg">
                                <AlertTriangle className="w-6 h-6 text-yellow-500" />
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Yasal Uyarı Metni</h2>
                        </div>
                        <div className="prose prose-invert max-w-none">
                            <p>
                                Bu web sitesi (Kuduz.org), sadece bilgilendirme ve farkındalık yaratma amacı taşımaktadır.
                                Sitede yer alan bilgiler <strong className="text-yellow-500">tıbbi tavsiye niteliğinde değildir</strong> ve profesyonel hekim muayenesinin yerini tutamaz.
                                Acil durumlarda derhal en yakın sağlık kuruluşuna başvurunuz veya 112'yi arayınız.
                                Platformumuz resmi bir devlet kurumu değildir; toplanan bildirimler ilgili makamlara iletilmek üzere aracı olarak kullanılır.
                            </p>
                        </div>
                    </section>

                    {/* Map Data Section */}
                    <section className="bg-card border rounded-xl p-6 md:p-8 shadow-sm space-y-4">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <ShieldCheck className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold">Harita Verileri ve Doğrulama</h2>
                        </div>

                        <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                            <p>
                                Kuduz.org üzerindeki risk haritası ve vaka verileri, modern yapay zeka ve otomasyon teknolojileri kullanılarak derlenmektedir.
                                Veri toplama sürecimiz şu şekildedir:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li>
                                    <strong className="text-foreground">Çift Katmanlı Doğrulama:</strong> Veriler, <strong>Gemini</strong> yapay zeka modelleri kullanılarak taranır ve işlenir.
                                </li>
                                <li>
                                    <strong className="text-foreground">Sürekli Güncelleme:</strong> Sistemlerimiz, resmi kaynakları ve güvenilir haber akışlarını düzenli olarak tarayarak verileri güncel tutmaya çalışır.
                                </li>
                            </ul>

                            <div className="mt-6 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 flex gap-3 items-start">
                                <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                                <div className="text-sm text-yellow-600 dark:text-yellow-400">
                                    <p className="font-medium mb-1">Önemli Hatırlatma</p>
                                    <p>
                                        Yüksek teknoloji kullanılarak yapılan doğrulamalara rağmen, otomatik sistemler nadiren de olsa hata yapabilir veya güncel olmayan bilgiler sunabilir.
                                        Bu harita bilgilendirme amaçlıdır ve kesin tıbbi veya resmi tavsiye niteliği taşımaz. Şüpheli durumlarda lütfen her zaman yetkili sağlık kuruluşlarına ve resmi makamlara başvurunuz.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* News Data Section */}
                    <section className="bg-card border rounded-xl p-6 md:p-8 shadow-sm space-y-4">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-red-50 rounded-lg">
                                <Info className="w-6 h-6 text-red-500" />
                            </div>
                            <h2 className="text-2xl font-semibold">Haber Verileri ve Otomasyon</h2>
                        </div>

                        <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                            <p>
                                Haberler sayfasında sunulan içerikler, <strong>Google RSS</strong> servisleri üzerinden otomatik olarak toplanmakta ve <strong>Gemini</strong> yapay zeka teknolojisi ile analiz edilerek kategorize edilmektedir.
                            </p>
                            <p className="mt-2">
                                Bu süreç tamamen otomatize edilmiştir ve insan müdahalesi olmadan gerçekleşmektedir. Bu nedenle:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li>Haber başlıkları ve özetleri otomatik olarak oluşturulur.</li>
                                <li>Haber görselleri kaynak servislerden otomatik olarak çekilir.</li>
                                <li>
                                    Otomatik olarak oluşturulan haber başlıkları, görselleri ve özetleri, yüksek doğruluk payına sahip olsa da kesin bilgi niteliği taşımayabilir.
                                    Platformumuz, yönlendirilen dış kaynaklardaki haberlerin içeriğinden, doğruluğundan ve güvenilirliğinden sorumlu tutulamaz.
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* General Disclaimer Section */}
                    <section className="bg-card border rounded-xl p-6 md:p-8 shadow-sm space-y-4">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <Info className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold">Genel Sorumluluk Reddi</h2>
                        </div>

                        <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                            <p>
                                Kuduz.org, toplum sağlığı konusunda farkındalık yaratmak amacıyla kurulmuş gönüllü bir inisiyatiftir.
                                Sitede yer alan bilgiler, genel bilgilendirme amacı taşımakta olup, profesyonel tıbbi tavsiye, teşhis veya tedavi yerine geçmez.
                            </p>
                            <p className="mt-4">
                                Site yönetimi, sunulan bilgilerin doğruluğu ve güncelliği konusunda azami özeni göstermekle birlikte,
                                olası hatalardan veya bu bilgilerin kullanımından doğabilecek sonuçlardan sorumlu tutulamaz.
                            </p>
                        </div>
                    </section>

                    {/* Back Button (Moved to Bottom) */}
                    <div className="flex justify-center pt-8 pb-4">
                        <Button asChild size="lg" className="h-12 px-8 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all">
                            <Link href="/">
                                <ArrowLeft className="mr-2 w-4 h-4" /> Ana Sayfaya Dön
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
