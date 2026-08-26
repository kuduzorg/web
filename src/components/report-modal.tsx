"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Turnstile } from "@marsidev/react-turnstile"; // YENİ EKLENDİ
import {
  MapPin,
  Camera,
  Loader2,
  CheckCircle2,
  Send,
  AlertTriangle,
  Phone,
  ShieldCheck,
  Info
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Form Validasyon Şeması
const formSchema = z.object({
  firstName: z.string().min(2, "Ad en az 2 karakter olmalıdır."),
  lastName: z.string().min(2, "Soyad en az 2 karakter olmalıdır."),
  phoneNumber: z.string().min(10, "Geçerli bir telefon numarası giriniz."),
  description: z.string().min(10, "Lütfen durumu en az 10 karakterle açıklayın."),
  location: z.string().min(1, "Konum bilgisi gereklidir."),
  photo: z.any().optional(),
});

export function ReportModal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [step, setStep] = useState<"form" | "success">("form");

  // Turnstile Token State'i
  const [turnstileStatus, setTurnstileStatus] = useState<"pending" | "success" | "error">("pending");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });



  // Fotoğraf Yükleme
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Gönderme İşlemi
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Ekstra Güvenlik: Token yoksa işlemi durdur
    if (turnstileStatus !== "success" || !turnstileToken) {
      alert("Lütfen güvenliği doğrulayın.");
      return;
    }

    try {
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      const file = fileInput?.files?.[0];
      const payload = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (key !== "photo" && typeof value === "string") payload.set(key, value);
      });
      payload.set("token", turnstileToken);
      if (file) payload.set("photo", file);

      const response = await fetch('/api/reports', {
        method: 'POST',
        body: payload,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Bir hata oluştu');
      }

      console.log("Rapor Başarıyla Gönderildi");
      setStep("success");

    } catch (error) {
      console.error('Submit Error:', error);
      alert("Rapor gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  // Modal kapandığında state'i sıfırla
  const handleOpenChange = (val: boolean) => {
    setIsOpen(val);
    if (!val) {
      setTimeout(() => {
        setStep("form");
        form.reset();
        setPreview(null);
        setTurnstileStatus("pending");
        setTurnstileToken(null);
      }, 500);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">

        {step === "success" ? (
          // --- BAŞARI EKRANI ---
          <div className="flex flex-col items-center justify-center py-6 text-center animate-in zoom-in duration-300">

            <div className="mb-6 flex flex-col items-center">
              <div className="h-16 w-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Risk Verisi Kaydedildi</h3>
              <p className="text-muted-foreground text-sm max-w-xs mt-2">
                Girdiğiniz bilgiler, risk analizi yapılmak üzere sisteme anonim olarak işlenmiştir. Katkınız için teşekkürler.
              </p>
            </div>

            <div className="w-full bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-6 rounded-r-xl text-left shadow-sm mb-6">
              <h4 className="text-red-700 dark:text-red-400 font-bold flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5" />
                Müdahale Gerekiyor mu?
              </h4>
              <p className="text-sm text-red-600/90 dark:text-red-400/80 mb-4 leading-relaxed">
                Platformumuz bir acil çağrı merkezi <strong>değildir</strong> ve saha ekibi yönlendirmez. Eğer saldırgan bir hayvan veya ısırılma vakası varsa, devletin resmi ekiplerine ulaşmak için lütfen aşağıdaki butonu kullanın.
              </p>

              <Button
                className="w-full h-14 text-lg font-bold bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-200 dark:shadow-none flex items-center justify-center gap-3"
                asChild
              >
                <a href="tel:112">
                  <Phone className="h-6 w-6" />
                  112 ACİL ÇAĞRI
                </a>
              </Button>
            </div>

            <Button variant="ghost" className="text-muted-foreground text-xs" onClick={() => setIsOpen(false)}>
              Kapat ve Siteye Dön
            </Button>
          </div>
        ) : (
          // --- FORM EKRANI ---
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-foreground">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Send className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                Risk Bildirimi Yap
              </DialogTitle>
              <DialogDescription>
                Bölgenizdeki riskli durumu veri tabanımıza ekleyin. Bu veriler analiz amaçlıdır ve <strong>halka açık paylaşılmaz.</strong>
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-2">

              {/* Fotoğraf */}
              <div className="group relative w-full h-32 bg-muted/50 border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all overflow-hidden">
                {preview ? (
                  <img src={preview} className="absolute inset-0 w-full h-full object-cover" alt="Önizleme" />
                ) : (
                  <>
                    <Camera className="w-8 h-8 text-muted-foreground group-hover:text-primary mb-2 transition-colors" />
                    <span className="text-xs text-muted-foreground font-medium">Fotoğraf Yükle / Çek</span>
                  </>
                )}
                <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handlePhotoChange} />
              </div>

              {/* Konum */}
              <div>
                <Label className="text-xs font-bold text-muted-foreground uppercase mb-1 block">Konum / Adres</Label>
                <Input
                  {...form.register("location")}
                  placeholder="Adres veya konum tarifi giriniz (Örn: Cumhuriyet Mah. Atatürk Cad. No:5)"
                  className="bg-background"
                />
              </div>
              {form.formState.errors.location && (
                <span className="text-xs text-red-500 font-medium block -mt-3">{form.formState.errors.location.message?.toString()}</span>
              )}

              {/* Kişisel Bilgiler */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-xs font-bold text-muted-foreground uppercase mb-1 block">Ad</Label>
                  <Input {...form.register("firstName")} placeholder="Adınız" className="bg-background" />
                  {form.formState.errors.firstName && (
                    <span className="text-xs text-red-500 font-medium block mt-1">{form.formState.errors.firstName.message?.toString()}</span>
                  )}
                </div>
                <div>
                  <Label className="text-xs font-bold text-muted-foreground uppercase mb-1 block">Soyad</Label>
                  <Input {...form.register("lastName")} placeholder="Soyadınız" className="bg-background" />
                  {form.formState.errors.lastName && (
                    <span className="text-xs text-red-500 font-medium block mt-1">{form.formState.errors.lastName.message?.toString()}</span>
                  )}
                </div>
              </div>

              <div>
                <Label className="text-xs font-bold text-muted-foreground uppercase mb-1 block">Telefon Numarası</Label>
                <Input {...form.register("phoneNumber")} placeholder="0555 555 55 55" type="tel" className="bg-background" />
                {form.formState.errors.phoneNumber && (
                  <span className="text-xs text-red-500 font-medium block mt-1">{form.formState.errors.phoneNumber.message?.toString()}</span>
                )}
              </div>

              {/* Açıklama */}
              <div>
                <Label className="text-xs font-bold text-muted-foreground uppercase mb-1 block">Durum Açıklaması</Label>
                <Textarea
                  {...form.register("description")}
                  placeholder="Hayvanın durumu (saldırganlık, salya, dengesizlik vb.) hakkında bilgi verin."
                  className="bg-background resize-none w-full break-all"
                  rows={3}
                />
                {form.formState.errors.description && (
                  <span className="text-xs text-red-500 font-medium block mt-1">{form.formState.errors.description.message?.toString()}</span>
                )}
              </div>

              {/* TURNSTILE (Cloudflare Captcha) */}
              <div className="flex justify-center py-2">
                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"} // Fallback test key
                  onSuccess={(token) => {
                    setTurnstileStatus("success");
                    setTurnstileToken(token);
                  }}
                  onError={() => setTurnstileStatus("error")}
                />
              </div>

              {/* Bilgi Notu */}
              <div className="flex gap-3 p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg text-xs text-blue-700 dark:text-blue-300">
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p>Gönderilen veriler spam koruması altındadır. IP adresiniz güvenlik amacıyla kaydedilebilir.</p>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                // Turnstile başarılı değilse butonu disable et
                disabled={form.formState.isSubmitting || turnstileStatus !== "success"}
              >
                {form.formState.isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Kaydı Oluştur"}
              </Button>

            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
