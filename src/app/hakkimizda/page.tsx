import { Footer } from "@/components/footer";
import { PageHero } from "@/components/site-page";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShieldCheck, Activity, Scale, Users, Lightbulb } from "lucide-react";
import Image from "next/image"; // Görsel kullanımı için import

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950 flex flex-col">
      <PageHero eyebrow="Hikâyemiz ve misyonumuz" title="Bilgiyle koru," accent="birlikte önle." description="Kuduz.org, toplumu bilimsel verilerle bilinçlendirmek ve insan-hayvan sağlığını ortak bir paydada korumak için çalışan bağımsız bir sivil inisiyatiftir." />

      {/* Değerler Bölümü (Grid) */}
      <section className="py-20">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Kart 1 */}
            <Card className="border-none shadow-lg bg-card/50 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 mx-auto bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-red-600">
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
                <div className="w-14 h-14 mx-auto bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-slate-600">
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
                <div className="w-14 h-14 mx-auto bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-red-500">
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
              <div className="prose prose-slate text-lg text-muted-foreground leading-relaxed">
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
                  <Users className="w-6 h-6 text-red-600" />
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
          <div className="inline-block p-3 bg-yellow-50 rounded-full mb-6 shadow-sm">
            <Lightbulb className="w-6 h-6 text-yellow-700" />
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
