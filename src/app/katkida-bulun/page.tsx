"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Send, AlertCircle, Upload, Loader2, X } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Turnstile } from "@marsidev/react-turnstile";
import { supabase } from "@/lib/supabase";

export default function ContributePage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [turnstileStatus, setTurnstileStatus] = useState<"pending" | "success" | "error">("pending");
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileError, setFileError] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setFileError(null);

        if (file) {
            if (file.size > 10 * 1024 * 1024) { // Maksimum dosya boyutu: 10MB
                setFileError("Dosya boyutu 10MB'dan büyük olamaz.");
                setSelectedFile(null);
                return;
            }
            setSelectedFile(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (turnstileStatus !== "success" || !turnstileToken) {
            alert("Lütfen güvenliği doğrulayın.");
            return;
        }

        setIsSubmitting(true);

        try {
            const formData = new FormData(e.currentTarget);
            let mediaUrl = null;

            // 1. Dosya Yükleme İşlemi
            if (selectedFile) {
                const fileExt = selectedFile.name.split('.').pop();
                const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
                const filePath = `${fileName}`;

                const { error: uploadError } = await supabase.storage
                    .from('content-requests')
                    .upload(filePath, selectedFile);

                if (uploadError) {
                    throw new Error("Dosya yüklenirken hata oluştu: " + uploadError.message);
                }

                const { data: { publicUrl } } = supabase.storage
                    .from('content-requests')
                    .getPublicUrl(filePath);

                mediaUrl = publicUrl;
            }

            // 2. Veritabanı Kayıt İşlemi
            const { error: insertError } = await supabase
                .from('contribution_requests')
                .insert({
                    type: formData.get('type'),
                    subject: formData.get('subject'),
                    content: formData.get('content'),
                    source_url: formData.get('source'),
                    submitter_name: formData.get('name'),
                    submitter_email: formData.get('email'),
                    media_url: mediaUrl,
                    status: 'pending'
                });

            if (insertError) {
                throw new Error("Kayıt oluşturulurken hata: " + insertError.message);
            }

            setIsSuccess(true);
        } catch (error: any) {
            console.error("Hata:", error);
            alert("Bir hata oluştu: " + error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* Hero Bölümü */}
            <section className="bg-primary/5 border-b border-primary/10 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
                        Bilgiye Katkıda Bulunun
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Kuduz.org topluluk destekli bir bilgi platformudur. Bildiğiniz, teyit ettiğiniz veya düzeltilmesi gerektiğini düşündüğünüz bilgileri bizimle paylaşın.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 flex-1 max-w-3xl">
                {isSuccess ? (
                    <Card className="border-green-200 bg-green-50 dark:bg-green-900/20">
                        <CardContent className="pt-6 text-center py-16">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">
                                Katkınız İçin Teşekkürler!
                            </h2>
                            <p className="text-green-700 dark:text-green-400 max-w-md mx-auto mb-8">
                                Gönderdiğiniz içerik editörlerimiz tarafından incelendikten sonra yayına alınacaktır.
                                Bilginin doğruluğu ve güvenilirliği için yaptığınız katkı çok değerli.
                            </p>
                            <Button
                                onClick={() => {
                                    setIsSuccess(false);
                                    setSelectedFile(null);
                                    setTurnstileStatus("pending");
                                    setTurnstileToken(null);
                                }}
                                variant="outline"
                                className="border-green-200 text-green-700 hover:bg-green-100 dark:border-green-800 dark:text-green-300 dark:hover:bg-green-900/50"
                            >
                                Yeni Bir Katkı Yap
                            </Button>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid gap-8">
                        <Alert className="bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800">
                            <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            <AlertTitle className="text-blue-800 dark:text-blue-300">Nasıl Çalışır?</AlertTitle>
                            <AlertDescription className="text-blue-700 dark:text-blue-400">
                                Gönderdiğiniz veriler (yeni haber, istatistik düzeltmesi, seyahat uyarısı vb.) ekibimizce doğrulanır ve kaynak gösterilerek siteye eklenir.
                            </AlertDescription>
                        </Alert>

                        <Card>
                            <CardHeader>
                                <CardTitle>İçerik Gönderim Formu</CardTitle>
                                <CardDescription>
                                    Lütfen eklemek veya düzeltmek istediğiniz bilgiyi detaylıca açıklayın.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="type">Katkı Türü</Label>
                                            <Select name="type" required>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Seçiniz" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="correction">Hata Düzeltmesi</SelectItem>
                                                    <SelectItem value="new_content">Yeni İçerik / Haber</SelectItem>
                                                    <SelectItem value="data_update">Veri Güncellemesi</SelectItem>
                                                    <SelectItem value="suggestion">Öneri / Geri Bildirim</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="subject">Konu / Başlık</Label>
                                            <Input name="subject" id="subject" placeholder="Örn: Tayland Aşı Zorunluluğu" required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="content">İçerik Detayı</Label>
                                        <Textarea
                                            name="content"
                                            id="content"
                                            placeholder="Eklemek istediğiniz bilgiyi veya düzeltmeyi buraya yazın..."
                                            className="min-h-[200px]"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="file">Medya / Belge (İsteğe Bağlı)</Label>
                                        <div className="flex items-center gap-4">
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={() => document.getElementById('file-upload')?.click()}
                                                className="w-full md:w-auto"
                                            >
                                                <Upload className="w-4 h-4 mr-2" />
                                                {selectedFile ? "Dosya Değiştir" : "Dosya Yükle (Max 10MB)"}
                                            </Button>
                                            <input
                                                id="file-upload"
                                                type="file"
                                                className="hidden"
                                                accept="image/*,video/*,.pdf,.doc,.docx"
                                                onChange={handleFileChange}
                                            />
                                            {selectedFile && (
                                                <div className="flex items-center gap-2 text-sm bg-muted px-3 py-2 rounded-md">
                                                    <span className="truncate max-w-[150px]">{selectedFile.name}</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => setSelectedFile(null)}
                                                        className="text-muted-foreground hover:text-destructive"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                        {fileError && (
                                            <p className="text-xs text-destructive font-medium mt-1">{fileError}</p>
                                        )}
                                        <p className="text-xs text-muted-foreground">
                                            Kanıt niteliğindeki görsel, video veya belgeleri ekleyebilirsiniz.
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="source">Kaynak (URL veya Referans)</Label>
                                        <Input name="source" id="source" placeholder="https://..." type="url" />
                                        <p className="text-xs text-muted-foreground">
                                            Bilginin doğrulanabilmesi için lütfen kaynak belirtin.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">İsim Soyisim (İsteğe Bağlı)</Label>
                                            <Input name="name" id="name" placeholder="Adınız" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">E-posta (İsteğe Bağlı)</Label>
                                            <Input name="email" id="email" type="email" placeholder="ornek@email.com" />
                                        </div>
                                    </div>

                                    {/* Turnstile Doğrulama */}
                                    <div className="flex justify-center py-4">
                                        <Turnstile
                                            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                                            onSuccess={(token) => {
                                                setTurnstileStatus("success");
                                                setTurnstileToken(token);
                                            }}
                                            onError={() => setTurnstileStatus("error")}
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full md:w-auto"
                                        disabled={isSubmitting || turnstileStatus !== "success"}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Gönderiliyor...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4 mr-2" /> Katkıyı Gönder
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
