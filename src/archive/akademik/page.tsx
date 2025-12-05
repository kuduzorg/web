"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Microscope,
    FileText,
    Database,
    Lock,
    Search,
    Download,
    ExternalLink,
    Users,
    BrainCircuit,
    Dna,
    Atom,
    LayoutGrid,
    Activity
} from "lucide-react";

// Örnek Veriler
const papers = [
    {
        id: 1,
        title: "Efficacy of a single-dose rabies vaccine protocol in rural Anatolia",
        journal: "Turkish Journal of Medical Sciences",
        year: "2024",
        authors: "Yılmaz S., Demir K.",
        tags: ["Vaccine", "Epidemiology"]
    },
    {
        id: 2,
        title: "Genomic sequencing of Lyssavirus strains in fox populations",
        journal: "Virology Reports",
        year: "2023",
        authors: "Schmidt H., Öztürk A.",
        tags: ["Virology", "Genetics"]
    },
    {
        id: 3,
        title: "Neuroimaging findings in early-stage rabies encephalitis",
        journal: "Journal of Neurology",
        year: "2024",
        authors: "Can B., Erdem M.",
        tags: ["Neurology", "MRI"]
    }
];

export default function AcademicPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <main className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-[#0f172a] to-[#0B1121] text-slate-200 selection:bg-cyan-500/30 relative overflow-x-hidden">

            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="dark">
                <Navbar />
            </div>

            {/* Header */}
            <div className="border-b border-white/5 bg-white/5 backdrop-blur-xl sticky top-16 z-30 shadow-2xl shadow-black/20">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg shadow-lg shadow-cyan-500/20 text-white">
                            <Dna className="w-5 h-5" />
                        </div>
                        <div>
                            <h1 className="font-bold text-white text-base tracking-tight flex items-center gap-2">
                                Kuduz.org <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[10px] border border-blue-500/20 font-mono">LABS</span>
                            </h1>
                            <p className="text-[10px] text-cyan-100/60 uppercase tracking-wide">Akademik Araştırma Ekosistemi</p>
                        </div>
                    </div>

                    {/* Sağ Panel: Kullanıcı Durumuna Göre İçerik */}
                    {!isLoggedIn ? (
                        <Badge variant="outline" className="border-amber-500/30 text-amber-400 bg-amber-500/10 gap-1.5 px-3 py-1 text-xs">
                            <Lock className="w-3 h-3" /> Misafir Erişimi
                        </Badge>
                    ) : (
                        <div className="flex items-center gap-3">
                            <div className="hidden md:flex items-center gap-2 text-xs text-slate-400">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Sistem Aktif
                            </div>
                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 flex items-center justify-center text-xs font-bold text-white">
                                DR
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content */}
            <div className={`container mx-auto px-4 py-8 flex-1 relative z-10 flex flex-col ${!isLoggedIn ? 'justify-center min-h-[calc(100vh-140px)]' : ''}`}>

                {!isLoggedIn ? (
                    <div className="flex flex-col items-center justify-center text-center space-y-8 -mt-12">
                        {/* Teaser Ekranı (Giriş Yapılmamış) */}
                        <div
                            className="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 shadow-2xl shadow-blue-900/50 relative group cursor-pointer transition-all hover:scale-105 hover:border-cyan-500/50"
                            onClick={() => setIsLoggedIn(true)}
                        >
                            <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Lock className="w-10 h-10 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                            <div className="absolute -bottom-3 bg-cyan-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg group-hover:bg-cyan-500 transition-colors">
                                GİRİŞ YAP
                            </div>
                        </div>

                        <div className="space-y-3 max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                                Bilimin <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Merkez Üssü</span>
                            </h2>
                            <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto">
                                Doğrulanmış sağlık profesyonelleri için tasarlanmış kapalı devre veri ağı.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mt-8">
                            <FeatureCard icon={<Database className="text-cyan-400 w-6 h-6" />} title="Büyük Veri Havuzu" desc="1200+ doğrulanmış vaka verisi." color="cyan" />
                            <FeatureCard icon={<BrainCircuit className="text-indigo-400 w-6 h-6" />} title="Nöro-Patoloji Atlası" desc="Yüksek çözünürlüklü MRI görüntüleri." color="indigo" />
                            <FeatureCard icon={<Atom className="text-violet-400 w-6 h-6" />} title="Ar-Ge İşbirlikleri" desc="Türkiye geneli laboratuvar ağı." color="violet" />
                        </div>
                    </div>
                ) : (

                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 w-full max-w-7xl mx-auto">
                        {/* Dashboard Ekranı (Giriş Yapılmış) */}

                        <Tabs defaultValue="literature" className="w-full">
                            {/* Dashboard Toolbar */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-white/5 pb-6">
                                <TabsList className="bg-slate-900/50 border border-white/10 p-1 h-auto self-start md:self-auto rounded-lg">
                                    <TabsTrigger value="literature" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-400 px-4 py-2 text-sm rounded-md transition-all"><FileText className="w-4 h-4 mr-2" /> Literatür</TabsTrigger>
                                    <TabsTrigger value="data" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-400 px-4 py-2 text-sm rounded-md transition-all"><Database className="w-4 h-4 mr-2" /> Veri Setleri</TabsTrigger>
                                    <TabsTrigger value="atlas" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-400 px-4 py-2 text-sm rounded-md transition-all"><Microscope className="w-4 h-4 mr-2" /> Patoloji Atlası</TabsTrigger>
                                </TabsList>

                                <div className="relative w-full md:w-80 group">
                                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                                    <Input
                                        placeholder="DOI, Yazar veya Anahtar Kelime..."
                                        className="pl-10 bg-slate-900/50 border-white/10 text-slate-200 focus:border-cyan-500/50 focus:ring-cyan-500/20 h-10 text-sm placeholder:text-slate-600 rounded-lg transition-all"
                                    />
                                </div>
                            </div>

                            {/* 1. Sekme: Literatür */}
                            <TabsContent value="literature" className="space-y-6 focus-visible:ring-0 outline-none">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                                    {/* Sol: Makale Listesi */}
                                    <div className="lg:col-span-8 space-y-4">
                                        <div className="flex items-center justify-between mb-2 px-1">
                                            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                                                <Activity className="w-4 h-4 text-cyan-500" /> Canlı Yayın Akışı
                                            </h3>
                                            <span className="text-xs text-slate-600 font-mono">SYNC: 12ms</span>
                                        </div>

                                        {papers.map((paper) => (
                                            <Card key={paper.id} className="bg-slate-900/40 border-white/5 hover:border-cyan-500/30 hover:bg-slate-800/60 transition-all group cursor-pointer backdrop-blur-sm">
                                                <CardContent className="p-6">
                                                    <div className="flex justify-between items-start gap-4">
                                                        <div className="space-y-2">
                                                            <h4 className="text-lg font-bold text-slate-200 group-hover:text-cyan-400 transition-colors leading-snug">
                                                                {paper.title}
                                                            </h4>
                                                            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                                                                <span className="text-slate-300 font-medium flex items-center gap-1"><Users className="w-3 h-3" /> {paper.authors}</span>
                                                                <span className="w-1 h-1 bg-slate-700 rounded-full" />
                                                                <span className="text-slate-400 italic">{paper.journal}</span>
                                                                <Badge variant="outline" className="border-slate-700 text-slate-500 text-[10px] h-5 ml-2 bg-slate-950">{paper.year}</Badge>
                                                            </div>
                                                        </div>
                                                        <Button size="icon" variant="ghost" className="text-slate-600 hover:text-white hover:bg-white/10 shrink-0 rounded-lg">
                                                            <ExternalLink className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                    <div className="flex gap-2 mt-4">
                                                        {paper.tags.map(tag => (
                                                            <Badge key={tag} variant="secondary" className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] hover:bg-blue-500/20 font-normal px-2">
                                                                #{tag}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>

                                    {/* Sağ: Yan Menü */}
                                    <div className="lg:col-span-4 space-y-6">
                                        {/* İstatistik Kartı */}
                                        <Card className="bg-slate-900/60 border-white/5 backdrop-blur-sm">
                                            <CardHeader className="pb-2 pt-5 px-5">
                                                <CardTitle className="text-white text-xs font-bold uppercase tracking-widest text-slate-500 flex justify-between">
                                                    Yayın İstatistiği
                                                    <LayoutGrid className="w-4 h-4" />
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="px-5 pb-5">
                                                <div className="h-32 w-full flex items-end justify-between gap-1 pt-4 border-b border-white/5 pb-2">
                                                    {[35, 55, 45, 70, 60, 85, 95].map((h, i) => (
                                                        <div key={i} className="w-full bg-gradient-to-t from-cyan-900/40 to-cyan-500/50 hover:from-cyan-500/40 hover:to-cyan-400/80 transition-all rounded-t-sm relative group" style={{ height: `${h}%` }}>
                                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">{h}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex justify-between text-[10px] text-slate-600 mt-2 font-mono">
                                                    <span>JAN</span>
                                                    <span>JUN</span>
                                                </div>
                                            </CardContent>
                                        </Card>

                                        {/* CTA Kartı */}
                                        <Card className="bg-gradient-to-br from-blue-700 to-indigo-800 border-none shadow-2xl relative overflow-hidden">
                                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                                            <CardContent className="p-6 relative z-10">
                                                <h4 className="font-bold text-white mb-2 text-lg flex items-center gap-2">
                                                    <Database className="w-4 h-4 text-blue-300" /> Veri Girişi
                                                </h4>
                                                <p className="text-xs text-blue-100 mb-5 leading-relaxed opacity-90">
                                                    Saha çalışmalarınızdan elde ettiğiniz anonim vaka verilerini ulusal havuza ekleyin.
                                                </p>
                                                <Button variant="secondary" className="w-full bg-white text-blue-900 hover:bg-blue-50 font-bold border-none shadow-lg h-10 text-xs tracking-wide">
                                                    VAKA EKLE +
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* 2. Sekme: Veri Setleri */}
                            <TabsContent value="data" className="mt-0">
                                <Card className="bg-slate-900/40 border-white/5 border-dashed border-2 backdrop-blur-sm">
                                    <CardContent className="p-20 text-center text-slate-500 flex flex-col items-center justify-center">
                                        <div className="p-5 bg-slate-800/50 rounded-full mb-6 shadow-inner">
                                            <Database className="w-10 h-10 text-slate-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">Ham Veri Setleri</h3>
                                        <p className="max-w-sm mx-auto mb-8 text-slate-500 text-sm leading-relaxed">
                                            Epidemiyolojik veriler ve aşı stok durumlarını içeren veri setlerini (CSV/JSON) buradan indirebilirsiniz.
                                        </p>
                                        <div className="flex gap-4">
                                            <Button className="bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-900/20">
                                                <Download className="w-4 h-4 mr-2" /> Veri İndir (CSV)
                                            </Button>
                                            <Button variant="outline" className="border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white">
                                                API Docs
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* 3. Sekme: Atlas */}
                            <TabsContent value="atlas" className="mt-0">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="aspect-square bg-black rounded-xl border border-slate-800 flex items-center justify-center relative overflow-hidden group cursor-zoom-in shadow-lg">
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-slate-950 to-black opacity-80" />

                                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                <span className="text-white text-[10px] font-mono block mb-0.5">SAMPLE_00{i}.TIFF</span>
                                                <span className="text-cyan-400 text-[9px] font-bold">40x ZOOM • H&E</span>
                                            </div>

                                            <Microscope className="w-10 h-10 text-slate-700 group-hover:text-cyan-500/80 transition-all duration-500 relative z-10 group-hover:scale-110" />

                                            {/* Grid Overlay Efekti */}
                                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>

                        </Tabs>
                    </div>
                )}

            </div>
            <div className="dark mt-auto border-t border-white/5">
                <Footer />
            </div>
        </main >
    );
}

// Yardımcı Bileşen
function FeatureCard({ icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) {
    return (
        <div className={`p-6 bg-white/5 border border-white/5 hover:border-${color}-500/30 hover:bg-white/[0.07] transition-all rounded-2xl flex flex-col items-center text-center gap-4 group`}>
            <div className={`p-3 bg-${color}-500/10 rounded-xl border border-${color}-500/20 group-hover:scale-110 transition-transform`}>
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-slate-100 text-lg mb-2 group-hover:text-white transition-colors">{title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}