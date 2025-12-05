import React from "react";
import { AlertTriangle, ShieldCheck, Info, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DisclaimerPage() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>

            <main className="container mx-auto px-4 py-12 max-w-4xl relative z-10">
                <div className="space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        {/* Logo Area */}
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-10 h-10 md:w-12 md:h-12 shrink-0">
                                <rect width="512" height="512" rx="100" className="fill-primary" />
                                <path fill="white" d="M110 380V130h65v105l95-105h80L235 255l125 125h-80l-95-100v100h-75z" />
                                <path fill="white" d="M390 110v30h-30v20h30v30h20v-30h30v-20h-30v-30h-20z" />
                            </svg>
                            <span className="text-2xl md:text-3xl font-bold tracking-tighter text-foreground">
                                KUDUZ.ORG
                            </span>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Yasal Uyarı ve Sorumluluk Reddi
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Kuduz.org platformunda sunulan verilerin kaynağı, doğruluğu ve kullanım koşulları hakkında bilgilendirme.
                        </p>
                    </div>

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
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                <Info className="w-6 h-6 text-blue-500" />
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
        </div>
    );
}
