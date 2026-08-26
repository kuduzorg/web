"use client";

import { useState } from "react";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/site-page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
    Mail,
    MapPin,
    Send,
    Loader2,
    CheckCircle2,
    Github,
    Instagram,
    Phone,
    Megaphone,
    AlertTriangle,
    HelpCircle // İkon importları
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ReportModal } from "@/components/report-modal";

const contactSchema = z.object({
    name: z.string().min(2, "Adınız en az 2 karakter olmalıdır."),
    email: z.string().email("Geçerli bir e-posta adresi giriniz."),
    subject: z.string().min(1, "Lütfen bir konu seçiniz."),
    message: z.string().min(10, "Mesajınız en az 10 karakter olmalıdır."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = async (data: ContactFormValues) => {
        setSubmitError("");
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...data, website: "" }),
        });
        const body = await response.json();
        if (!response.ok) {
            setSubmitError(body.error || "Mesaj gönderilemedi.");
            return;
        }
        setIsSuccess(true);
        form.reset();
    };

    return (
        <main className="min-h-screen bg-[#f7f9fc] text-slate-950 flex flex-col">
            <PageHero eyebrow="İletişim" title="Bizimle" accent="iletişime geçin." description="Gönüllü olmak, proje hakkında öneri sunmak veya teknik bir sorunu bildirmek için doğru kanaldan bize ulaşın." />

            <div className="mx-auto w-full max-w-[1320px] px-5 py-12 lg:px-8 lg:py-16 flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Sol Panel: Bilgi Blokları */}
                    <div className="lg:col-span-5 space-y-8">

                        {/* 1. İhbar Yönlendirme */}
                        <div className="relative overflow-hidden rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 to-white p-6 shadow-sm">
                            <AlertTriangle className="absolute -right-4 -top-4 h-24 w-24 text-red-100 rotate-12 pointer-events-none" />

                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-red-600 flex items-center gap-2">
                                    <Megaphone className="h-5 w-5" />
                                    İhbar mı Yapacaksınız?
                                </h3>
                                <p className="text-sm text-muted-foreground mt-2 mb-6 leading-relaxed">
                                    Saldırgan hayvan veya kuduz şüphesi bildirimi için lütfen aşağıdaki kanalları kullanın:
                                </p>

                                <div className="grid grid-cols-1 gap-3">
                                    <ReportModal>
                                        <Button variant="outline" className="w-full justify-start h-12 border-slate-200 bg-white hover:bg-red-50 hover:border-red-200 text-slate-700 hover:text-red-600">
                                            <MapPin className="w-4 h-4 mr-3" />
                                            Platform Üzerinden Bildir
                                        </Button>
                                    </ReportModal>

                                    <div className="grid grid-cols-1 gap-3">
                                        <Button asChild className="w-full justify-start h-12 bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-200">
                                            <a href="tel:112">
                                                <Phone className="w-4 h-4 mr-2" /> 112 Acil
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. İletişim Bilgileri */}
                        <Card className="border-border shadow-sm bg-card">
                            <CardContent className="p-6 space-y-6">
                                {/* E-Posta */}
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-slate-100 rounded-lg text-slate-600">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">E-Posta</h4>
                                        <p className="text-muted-foreground text-sm mb-1">Genel sorular ve işbirlikleri için:</p>
                                        <a href="mailto:iletisim@kuduz.org" className="text-sm font-bold text-red-600 hover:text-red-700">iletisim@kuduz.org</a>
                                    </div>
                                </div>

                                {/* Konum Bilgisi */}
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-red-50 rounded-lg text-red-600">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">Konum</h4>
                                        <p className="text-muted-foreground text-sm">
                                            Ekibimiz Türkiye&apos;nin farklı illerinden gönüllülerle uzaktan çalışmaktadır.
                                        </p>
                                    </div>
                                </div>

                                {/* Sosyal Medya */}
                                <div className="pt-4 border-t border-border">
                                    <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Sosyal Medya</h4>
                                    <div className="flex gap-4">
                                        <Button variant="outline" size="icon" className="hover:bg-red-50 hover:text-red-600 transition-colors">
                                            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                                        </Button>
                                        <Button variant="outline" size="icon" className="hover:bg-pink-50 hover:text-pink-600 transition-colors">
                                            <Instagram className="w-5 h-5" />
                                        </Button>
                                        <Button variant="outline" size="icon" className="hover:bg-muted hover:text-foreground transition-colors">
                                            <Github className="w-5 h-5" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* 3. SSS Yönlendirmesi */}
                        <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-4">
                            <HelpCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">Hızlı Cevap mı Arıyorsunuz?</h4>
                                <p className="text-slate-600 text-xs mt-1 mb-3 leading-relaxed">
                                    Sorunuz aşı takvimi, bulaşma yolları veya yasal süreçler ile ilgiliyse, cevabı muhtemelen SSS sayfamızdadır.
                                </p>
                                <Button variant="link" className="p-0 h-auto text-red-600 font-bold text-xs group" asChild>
                                    <a href="/sss" className="flex items-center">Sıkça Sorulan Sorulara Git <span className="group-hover:translate-x-1 transition-transform ml-1">&rarr;</span></a>
                                </Button>
                            </div>
                        </div>

                    </div>

                    {/* Sağ Panel: İletişim Formu */}
                    <div className="lg:col-span-7">
                        <Card className="border-border shadow-lg bg-card">
                            <CardContent className="p-8">
                                {isSuccess ? (
                                    <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground mb-2">Mesajınız Alındı!</h3>
                                        <p className="text-muted-foreground max-w-sm">
                                            Teşekkür ederiz. Ekibimiz mesajınızı inceleyip en kısa sürede size dönüş yapacaktır.
                                        </p>
                                        <Button variant="outline" className="mt-8" onClick={() => setIsSuccess(false)}>
                                            Yeni Mesaj Gönder
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Adınız Soyadınız</Label>
                                                <Input id="name" placeholder="Örn: Ahmet Yılmaz" {...form.register("name")} className="bg-background" />
                                                {form.formState.errors.name && <span className="text-xs text-red-500">{form.formState.errors.name.message}</span>}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">E-Posta Adresiniz</Label>
                                                <Input id="email" type="email" placeholder="ahmet@ornek.com" {...form.register("email")} className="bg-background" />
                                                {form.formState.errors.email && <span className="text-xs text-red-500">{form.formState.errors.email.message}</span>}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label>Konu</Label>
                                            <Select onValueChange={(val) => form.setValue("subject", val)}>
                                                <SelectTrigger className="bg-background"><SelectValue placeholder="Mesajınız ne hakkında?" /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="gonullu">Gönüllü Olmak İstiyorum</SelectItem>
                                                    <SelectItem value="oneri">Öneri / Geri Bildirim</SelectItem>
                                                    <SelectItem value="hata">Web Sitesi Hatası Bildir</SelectItem>
                                                    <SelectItem value="basin">Basın / Medya</SelectItem>
                                                    <SelectItem value="diger">Diğer</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            {form.formState.errors.subject && <span className="text-xs text-red-500">{form.formState.errors.subject.message}</span>}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Mesajınız</Label>
                                            <Textarea id="message" placeholder="Lütfen mesajınızı detaylı bir şekilde yazın..." className="min-h-[150px] bg-background resize-none" {...form.register("message")} />
                                            {form.formState.errors.message && <span className="text-xs text-red-500">{form.formState.errors.message.message}</span>}
                                        </div>

                                        <div className="pt-2">
                                            {submitError && <p className="mb-3 text-sm font-medium text-red-600">{submitError}</p>}
                                            <Button type="submit" className="w-full md:w-auto px-8 py-6 font-bold text-lg bg-primary text-primary-foreground hover:bg-primary/90" disabled={form.formState.isSubmitting}>
                                                {form.formState.isSubmitting ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Gönderiliyor</> : <><Send className="w-5 h-5 mr-2" /> Mesajı Gönder</>}
                                            </Button>
                                        </div>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
}
