import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShieldCheck, Activity, Scale, Users, Lightbulb } from "lucide-react";
import Image from "next/image"; // Görsel kullanımı için import

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero Bölümü */}
      <section className="relative bg-card border-b border-border py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge variant="secondary" className="mb-6 px-4 py-1 text-sm font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-800">
            Hikayemiz ve Misyonumuz
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight mb-6">
            Bilgiyle Koru, <span className="text-primary">Sevgiyle Yaşa.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kuduz.org, Türkiye'de artan kuduz vakalarına karşı toplumu bilimsel verilerle bilinçlendirmek,
            insan ve hayvan sağlığını ortak bir paydada korumak amacıyla kurulmuş bağımsız bir sivil inisiyatiftir.
          </p>
        </div>

        {/* Arkaplan Dekoru */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-red-100 dark:bg-red-900/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[100px]" />
        </div>
      </section>

      {/* Değerler Bölümü (Grid) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Kart 1 */}
            <Card className="border-none shadow-lg bg-card/50 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 mx-auto bg-red-100 dark:bg-red-900/20 rounded-2xl flex items-center justify-center mb-6 text-red-600">
                  <Activity className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Bilimsel Temel</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Platformdaki tüm veriler; Dünya Sağlık Örgütü (WHO), T.C. Sağlık Bakanlığı ve Veteriner Hekimler Birliği'nin yayınladığı resmi protokoller referans alınarak hazırlanır. Hurafelere yer yoktur.
                </p>
              </CardContent>
            </Card>

            {/* Kart 2 */}
            <Card className="border-none shadow-lg bg-card/50 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 mx-auto bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                  <Scale className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Tarafsızlık İlkesi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Amacımız herhangi bir canlıyı hedef göstermek değil, riskleri yönetmektir. Hem insanların güvenli sokaklarda yürüme hakkını hem de sokak hayvanlarının yaşam hakkını savunuyoruz.
                </p>
              </CardContent>
            </Card>

            {/* Kart 3 */}
            <Card className="border-none shadow-lg bg-card/50 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 mx-auto bg-green-100 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mb-6 text-green-600">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Kamu Yararı</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hiçbir ticari veya siyasi amaç gütmeyiz. Tek hedefimiz; önlenebilir bir hastalık olan kuduz yüzünden tek bir canlının bile hayatını kaybetmemesidir.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Metin ve Hikaye Bölümü */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Neden Kuduz.org?</h2>
              <div className="prose prose-slate dark:prose-invert text-lg text-muted-foreground leading-relaxed">
                <p>
                  Türkiye, coğrafi konumu ve yaban hayatı çeşitliliği nedeniyle kuduz riskinin halen devam ettiği ülkelerden biridir. Ancak toplumda bu konuda büyük bir bilgi kirliliği mevcuttur. Bir yanda aşı karşıtlığı veya ihmalkarlık, diğer yanda ise hayvanlara karşı oluşan korku ve şiddet sarmalı...
                </p>
                <p className="mt-4">
                  Biz, bu iki uç noktanın arasında, <strong>akıl ve bilimin</strong> durduğu yerdeyiz. İnanıyoruz ki; doğru bilgi korkuyu yener. İnsanlar ısırıldıklarında ne yapacaklarını bilirlerse panik yapmazlar. Hayvanların aşılanması ve kısırlaştırılması teşvik edilirse risk azalır.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              <div className="flex gap-4">
                <div className="mt-1">
                  {/* İkon seçimi: Nötr ve akılcı semboller */}
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold ">Akılcı ve Bilimsel Yaklaşım</h4>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    Kuduzla mücadelede tek referansımız; <strong>Dünya Sağlık Örgütü (WHO)</strong> ve <strong>Sağlık Bakanlığı</strong> protokolleridir. Sosyal tartışmaların tarafı değil, bilimsel doğruların ve halk sağlığının savunucusuyuz.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold ">Toplumsal Sorumluluk ve İş Birliği</h4>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    Kuduz riskinin yönetimi tek bir kurumun değil, tüm toplumun ortak sorumluluğudur. Yerel yönetimler, sağlık çalışanları ve vatandaşlar arasında güvenilir bir bilgi köprüsü kurarak kamu sağlığını korumayı hedefliyoruz.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ekip ve Gönüllüler Bölümü */}
      <section className="py-20 border-t ">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-full mb-6 shadow-sm">
            <Lightbulb className="w-6 h-6 text-yellow-700 dark:text-yellow-300" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Kimiz Biz?</h2>
          <p className="max-w-3xl mx-auto mb-8 text-muted-foreground leading-relaxed">
            Kuduz.org; <strong>yazılımcılar, sağlık profesyonelleri ve veri araştırmacılarından</strong> oluşan bağımsız bir ekip tarafından, tamamen açık kaynak (open-source) ve kâr amacı gütmeden, kamu yararı gözetilerek geliştirilmektedir.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}