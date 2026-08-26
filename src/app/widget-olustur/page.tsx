"use client";

import { useState } from "react";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/site-page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Copy, Check, Code, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function WidgetGeneratorPage() {
    const [type, setType] = useState("risk"); // 'risk' | 'emergency'
    const [theme, setTheme] = useState("light"); // 'light' | 'dark'
    const [copied, setCopied] = useState(false);

    // Oluşturulan Iframe Kodu
    const iframeCode = `<iframe 
  src="https://kuduz.org/embed/${type}?theme=${theme}" 
  width="100%" 
  height="400" 
  frameborder="0" 
  style="border-radius: 12px; border: 1px solid #e2e8f0;">
</iframe>`;

    const handleCopy = () => {
        navigator.clipboard.writeText(iframeCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="min-h-screen bg-[#f7f9fc] text-slate-950 flex flex-col">
            <PageHero eyebrow="Geliştirici araçları" title="Kuduz.org verisini" accent="sitenize ekleyin." description="Risk ve acil durum bilgilerini web sitenizde, blogunuzda veya kurum portalınızda ücretsiz yayımlayın." />
            <div className="mx-auto w-full max-w-[1320px] px-5 py-12 lg:px-8 lg:py-16 flex-1">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* SOL: Ayarlar */}
                    <Card className="lg:col-span-4 h-fit border-border">
                        <CardHeader>
                            <CardTitle className="text-lg">Widget Ayarları</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-8">

                            {/* Tip Seçimi */}
                            <div className="space-y-3">
                                <Label className="text-base">1. Widget Tipi</Label>
                                <RadioGroup defaultValue="risk" onValueChange={setType} className="grid gap-2">
                                    <div className={`flex items-center justify-between rounded-md border p-4 cursor-pointer hover:bg-accent ${type === 'risk' ? 'border-primary bg-primary/5' : 'border-input'}`}>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="risk" id="r1" />
                                            <Label htmlFor="r1" className="cursor-pointer">Risk Haritası (Mini)</Label>
                                        </div>
                                    </div>
                                    <div className={`flex items-center justify-between rounded-md border p-4 cursor-pointer hover:bg-accent ${type === 'emergency' ? 'border-primary bg-primary/5' : 'border-input'}`}>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="emergency" id="r2" />
                                            <Label htmlFor="r2" className="cursor-pointer">Acil Numaralar</Label>
                                        </div>
                                    </div>
                                </RadioGroup>
                            </div>

                            {/* Tema Seçimi */}
                            <div className="space-y-3">
                                <Label className="text-base">2. Tema</Label>
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        onClick={() => setTheme("light")}
                                        className={`p-4 border rounded-xl text-center transition-all ${theme === 'light' ? 'ring-2 ring-primary border-primary' : 'border-input hover:bg-accent'}`}
                                    >
                                        <div className="w-full h-8 bg-white border border-slate-200 rounded mb-2"></div>
                                        <span className="text-sm font-medium">Aydınlık</span>
                                    </button>
                                    <button
                                        onClick={() => setTheme("dark")}
                                        className={`p-4 border rounded-xl text-center transition-all ${theme === 'dark' ? 'ring-2 ring-primary border-primary' : 'border-input hover:bg-accent'}`}
                                    >
                                        <div className="w-full h-8 bg-slate-900 border border-slate-700 rounded mb-2"></div>
                                        <span className="text-sm font-medium">Karanlık</span>
                                    </button>
                                </div>
                            </div>

                        </CardContent>
                    </Card>

                    {/* SAĞ: Önizleme ve Kod */}
                    <div className="lg:col-span-8 space-y-6">

                        {/* Önizleme Alanı */}
                        <div className="border border-border rounded-2xl p-8 bg-muted/20 flex flex-col items-center justify-center min-h-[400px] relative">
                            <div className="absolute top-4 left-4 bg-background border border-border px-3 py-1 rounded-full text-xs font-medium text-muted-foreground shadow-sm">
                                Canlı Önizleme
                            </div>

                            {/* MOCK WIDGET GÖRÜNÜMÜ (Gerçekte iframe olacak) */}
                            <div className={`w-full max-w-md rounded-xl overflow-hidden shadow-lg transition-all ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
                                {type === 'risk' ? (
                                    <div className="p-6 text-center">
                                        <h4 className="font-bold text-lg mb-2">Türkiye Kuduz Risk Durumu</h4>
                                        <div className="w-full h-32 bg-slate-200/50 rounded-lg mb-4 flex items-center justify-center text-xs text-muted-foreground">Harita Grafiği</div>
                                        <Badge variant="destructive">Yüksek Riskli İller Mevcut</Badge>
                                    </div>
                                ) : (
                                    <div className="p-6">
                                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><AlertTriangle className="text-red-500" /> Acil Durum</h4>
                                        <div className="space-y-2">
                                            <div className={`p-3 rounded-lg flex justify-between items-center ${theme === 'dark' ? 'bg-red-900/20' : 'bg-red-50'}`}>
                                                <span className="font-medium">Ambulans / Polis</span>
                                                <span className="font-bold text-red-500 text-xl">112</span>
                                            </div>
                                            <div className={`p-3 rounded-lg flex justify-between items-center ${theme === 'dark' ? 'bg-red-950/30' : 'bg-red-50'}`}>
                                                <span className="font-medium">Belediye</span>
                                                <span className="font-bold text-red-500 text-xl">153</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className={`py-2 px-4 text-[10px] text-center border-t ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-slate-500' : 'bg-slate-50 border-slate-100 text-slate-400'}`}>
                                    Powered by Kuduz.org
                                </div>
                            </div>

                        </div>

                        {/* Kod Alanı */}
                        <div className="relative">
                            <pre className="bg-slate-950 text-slate-300 p-6 rounded-xl text-sm font-mono overflow-x-auto border border-slate-800">
                                {iframeCode}
                            </pre>
                            <Button
                                size="sm"
                                className={`absolute top-4 right-4 transition-all ${copied ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-white text-slate-900 hover:bg-slate-200'}`}
                                onClick={handleCopy}
                            >
                                {copied ? <><Check className="w-4 h-4 mr-2" /> Kopyalandı</> : <><Copy className="w-4 h-4 mr-2" /> Kodu Kopyala</>}
                            </Button>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
}
