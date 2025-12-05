import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldAlert, MapPin, Activity } from "lucide-react";
import { ReportModal } from "@/components/report-modal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-8 text-center">

          {/* Üst Başlık & Misyon */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
              Bilgiyle Koru, <span className="text-primary">Bilinçle Yaşa.</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Türkiye'de kuduz riskine karşı bilimsel verilerle bilgilendirme ve
              güvenli bildirim platformu. Panik yapmayın, doğru adımları izleyin.
            </p>
          </div>

          {/* Ana Aksiyon Kartları (Grid Yapısı) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-8">

            {/* Kart 1: Acil Durum (Kırmızı) */}
            <div className="flex flex-col items-center justify-center p-8 bg-card rounded-xl shadow-lg border-2 border-primary/20 hover:border-primary transition-all group">
              <div className="p-4 bg-red-100 dark:bg-red-900/20 rounded-full mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-900/40 transition-colors">
                <Activity className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Temas Riski!</h2>
              <p className="text-muted-foreground mb-6 text-center">
                Bir hayvan tarafından ısırıldınız veya tırmalandınız mı? Saniyeler önemlidir.
              </p>
              <Link href="/rehber" passHref>
                <Button size="lg" variant="destructive" className="w-full sm:w-auto font-bold text-lg">
                  NE YAPMALIYIM?
                </Button>
              </Link>
            </div>

            {/* Kart 2: Bildirim (Mavi/Gri - Güvenli) */}
            <div className="flex flex-col items-center justify-center p-8 bg-card rounded-xl shadow-lg border-2 border-border hover:border-muted-foreground/50 transition-all group">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/40 transition-colors">
                <MapPin className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Şüpheli Durum Bildir</h2>
              <p className="text-muted-foreground mb-6 text-center">
                Çevrenizde hastalık belirtisi gösteren bir hayvan mı var? Yetkililere iletelim.
              </p>
              <ReportModal>
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-bold text-lg border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/30">
                  YETKİLİLERE BİLDİR
                </Button>
              </ReportModal>
            </div>

          </div>

          {/* Alt Bilgi */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-8">
            <ShieldAlert className="h-4 w-4" />
            <span>Verileriniz güvendedir ve halka açık haritalarda paylaşılmaz.</span>
          </div>

        </div>
      </div>

      {/* Arka plan dekorasyonu */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-red-200/50 dark:bg-red-900/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 dark:bg-blue-900/20 blur-[100px]" />
      </div>
    </section>
  );
}