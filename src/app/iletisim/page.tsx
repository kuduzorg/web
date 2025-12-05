"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
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
    Twitter,
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
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form Data:", data);
        setIsSuccess(true);
        form.reset();
    };

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* Header */}
            <section className="bg-card border-b border-border py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-extrabold text-foreground mb-4">
                        Bizimle İletişime Geçin
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Gönüllü olmak, proje hakkında öneri sunmak veya teknik bir sorunu bildirmek için bize ulaşabilirsiniz.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Sol Panel: Bilgi Blokları */}
                    <div className="lg:col-span-5 space-y-8">

                        {/* 1. İhbar Yönlendirme */}
                        <div className="relative overflow-hidden rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-background dark:border-red-900/50 p-6 shadow-sm">
                            <AlertTriangle className="absolute -right-4 -top-4 h-24 w-24 text-red-100 dark:text-red-900/20 rotate-12 pointer-events-none" />

                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-red-600 dark:text-red-500 flex items-center gap-2">
                                    <Megaphone className="h-5 w-5" />
                                    İhbar mı Yapacaksınız?
                                </h3>
                                <p className="text-sm text-muted-foreground mt-2 mb-6 leading-relaxed">
                                    Saldırgan hayvan veya kuduz şüphesi bildirimi için lütfen aşağıdaki kanalları kullanın:
                                </p>

                                <div className="grid grid-cols-1 gap-3">
                                    <ReportModal>
                                        <Button variant="outline" className="w-full justify-start h-12 border-blue-200 bg-blue-50 hover:bg-blue-100 hover:border-blue-300 text-blue-700 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400">
                                            <MapPin className="w-4 h-4 mr-3" />
                                            Platform Üzerinden Bildir
                                            <span className="ml-auto text-[10px] bg-blue-200 dark:bg-blue-800 px-2 py-0.5 rounded-full text-blue-800 dark:text-blue-200">Önerilen</span>
                                        </Button>
                                    </ReportModal>

                                    <div className="grid grid-cols-2 gap-3">
                                        <Button asChild className="w-full justify-start h-12 bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-200 dark:shadow-none">
                                            <a href="tel:112">
                                                <Phone className="w-4 h-4 mr-2" /> 112 Acil
                                            </a>
                                        </Button>
                                        <Button variant="secondary" asChild className="w-full justify-start h-12 border border-border">
                                            <a href="tel:153">
                                                <Phone className="w-4 h-4 mr-2" /> 153 Beyaz Masa
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
                                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">E-Posta</h4>
                                        <p className="text-muted-foreground text-sm mb-1">Genel sorular ve işbirlikleri için:</p>
                                        <span className="text-muted-foreground line-through text-sm block">iletisim@kuduz.org</span>
                                        <p className="text-red-500 text-xs font-bold mt-1">
                                            (Geçici olarak kullanım dışıdır, lütfen yandaki formu kullanınız.)
                                        </p>
                                    </div>
                                </div>

                                {/* Konum Bilgisi */}
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-600 dark:text-purple-400">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">Konum</h4>
                                        <p className="text-muted-foreground text-sm">
                                            Ekibimiz Türkiye'nin farklı illerinden gönüllülerle uzaktan (remote) çalışmaktadır.
                                        </p>
                                    </div>
                                </div>

                                {/* Sosyal Medya */}
                                <div className="pt-4 border-t border-border">
                                    <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Sosyal Medya</h4>
                                    <div className="flex gap-4">
                                        <Button variant="outline" size="icon" className="hover:bg-blue-50 hover:text-blue-500 transition-colors">
                                            <Twitter className="w-5 h-5" />
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
                        <div className="p-5 rounded-xl bg-blue-50 border border-blue-100 dark:bg-blue-900/10 dark:border-blue-800 flex items-start gap-4">
                            <HelpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-blue-800 dark:text-blue-300 text-sm">Hızlı Cevap mı Arıyorsunuz?</h4>
                                <p className="text-blue-700 dark:text-blue-400 text-xs mt-1 mb-3 leading-relaxed">
                                    Sorunuz aşı takvimi, bulaşma yolları veya yasal süreçler ile ilgiliyse, cevabı muhtemelen SSS sayfamızdadır.
                                </p>
                                <Button variant="link" className="p-0 h-auto text-blue-600 dark:text-blue-300 font-bold text-xs group" asChild>
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
                                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
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