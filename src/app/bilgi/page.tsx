"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle, Info, ShieldAlert, Brain, Activity, Microscope } from "lucide-react";
import Link from "next/link";

export default function RabiesInfo() {
  const [activeSection, setActiveSection] = useState("nedir");

  // Scroll takibi ve aktif başlık güncellemesi
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["nedir", "nasil-bulasir", "virusun-yolculugu", "belirtiler", "tedavi"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sol Panel: İçindekiler Menüsü */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="font-bold text-foreground mb-4 px-2">İçindekiler</h3>
              <nav className="space-y-1 border-l-2 border-border">
                <ScrollLink id="nedir" active={activeSection}>Kuduz Nedir?</ScrollLink>
                <ScrollLink id="nasil-bulasir" active={activeSection}>Nasıl Bulaşır?</ScrollLink>
                <ScrollLink id="virusun-yolculugu" active={activeSection}>Virüsün Vücuttaki Yolculuğu</ScrollLink>
                <ScrollLink id="belirtiler" active={activeSection}>Klinik Belirtiler</ScrollLink>
                <ScrollLink id="tedavi" active={activeSection}>Tanı ve Tedavi</ScrollLink>
              </nav>

              <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                <Info className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-xs text-blue-700 font-medium">
                  Bu sayfadaki bilgiler DSÖ (WHO) ve T.C. Sağlık Bakanlığı verileri ışığında derlenmiştir.
                </p>
              </div>
            </div>
          </aside>

          {/* Sağ Panel: Ana İçerik */}
          <article className="flex-1 max-w-4xl prose prose-slate dark:prose-invert lg:prose-lg">

            {/* Başlık */}
            <div className="mb-10">
              <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-200 border-none">Tıbbi Rehber</Badge>
              <h1 className="text-4xl font-extrabold text-foreground tracking-tight mb-4">
                Kuduz Hakkında Her Şey
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Tarihin en eski ve en ölümcül hastalıklarından biri olan Kuduz (Rabies) hakkında bilmeniz gereken biyolojik, klinik ve yaşamsal gerçekler.
              </p>
            </div>

            {/* BÖLÜM 1: Nedir? */}
            <section id="nedir" className="scroll-mt-24 mb-16">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-6">
                <div className="p-2 bg-muted rounded-lg"><Microscope className="w-6 h-6 text-primary" /></div>
                Kuduz Nedir?
              </h2>
              <p>
                Kuduz, <strong>Rhabdoviridae</strong> ailesine ait RNA tabanlı bir virüsün neden olduğu,
                merkezi sinir sistemini hedef alan, akut ve ilerleyici bir viral enfeksiyondur (Zoonoz).
              </p>
              <Alert variant="destructive" className="my-6 border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/20">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Ölümcül Gerçek</AlertTitle>
                <AlertDescription>
                  Kuduz, semptomlar (belirtiler) ortaya çıktıktan sonra <strong>%99.9 oranında ölümcüldür.</strong>
                  Bilinen bir tedavisi yoktur. Ancak belirtiler başlamadan önce yapılan aşı ile <strong>%100 önlenebilir.</strong>
                </AlertDescription>
              </Alert>
            </section>

            <Separator className="my-12" />

            {/* BÖLÜM 2: Nasıl Bulaşır? */}
            <section id="nasil-bulasir" className="scroll-mt-24 mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">Nasıl Bulaşır?</h2>
              <p>
                Virüs, enfekte hayvanın <strong>salyasında (tükürüğünde)</strong> yoğun olarak bulunur.
                Kan yoluyla değil, sinirler yoluyla ilerler.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
                <li className="flex gap-3 p-4 rounded-lg border border-border bg-card">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 font-bold shrink-0">1</span>
                  <div>
                    <strong className="text-foreground">Isırılma</strong>
                    <p className="text-sm text-muted-foreground">En yaygın bulaş yoludur. Deri bütünlüğünün bozulması yeterlidir.</p>
                  </div>
                </li>
                <li className="flex gap-3 p-4 rounded-lg border border-border bg-card">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold shrink-0">2</span>
                  <div>
                    <strong className="text-foreground">Tırmalama</strong>
                    <p className="text-sm text-muted-foreground">Hayvan pençesini yalamışsa, tırnaklarda virüs bulunabilir.</p>
                  </div>
                </li>
                <li className="flex gap-3 p-4 rounded-lg border border-border bg-card">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 font-bold shrink-0">3</span>
                  <div>
                    <strong className="text-foreground">Mukoza Teması</strong>
                    <p className="text-sm text-muted-foreground">Enfekte salyanın göze, ağza veya açık bir yaraya teması.</p>
                  </div>
                </li>
                <li className="flex gap-3 p-4 rounded-lg border border-border bg-card">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold shrink-0">4</span>
                  <div>
                    <strong className="text-foreground">Nadir Yollar</strong>
                    <p className="text-sm text-muted-foreground">Organ nakli (kornea) veya mağaralarda yoğun yarasa dışkısı solunması.</p>
                  </div>
                </li>
              </ul>
            </section>

            <Separator className="my-12" />

            {/* BÖLÜM 3: Virüsün Yolculuğu */}
            <section id="virusun-yolculugu" className="scroll-mt-24 mb-16">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-6">
                <div className="p-2 bg-muted rounded-lg"><Brain className="w-6 h-6 text-primary" /></div>
                Virüsün Vücuttaki Yolculuğu
              </h2>
              <p className="mb-6">
                Kuduz virüsü kana karışmaz. Bunun yerine vücudun elektrik hattını (sinir sistemini) kullanarak sessizce ilerler. Bu yüzden bağışıklık sistemi virüsü fark etmekte gecikir.
              </p>

              <div className="relative border-l-2 border-border pl-8 space-y-8 not-prose">
                <TimelineItem
                  title="Giriş ve Kuluçka"
                  desc="Virüs kas dokusunda çoğalır. Bu evre 1 haftadan 1 yıla kadar sürebilir (genelde 1-3 ay). Aşı için altın zamandır."
                />
                <TimelineItem
                  title="Sinir Sistemine Geçiş"
                  desc="Virüs, çevresel sinirlerin ucuna tutunur ve omuriliğe doğru günde 12-24mm hızla tırmanmaya başlar."
                />
                <TimelineItem
                  title="Beyin İstilası"
                  desc="Omurilikten beyne ulaşır. Beyinde büyük bir iltihaplanma (ensefalit) başlar. İlk belirtiler burada görülür."
                />
                <TimelineItem
                  title="Dışarı Yayılım"
                  desc="Beyinden tekrar sinirler yoluyla tükürük bezlerine iner. Artık hasta bulaştırıcıdır. Kısa süre sonra ölüm gerçekleşir."
                  isLast
                />
              </div>
            </section>

            <Separator className="my-12" />

            {/* BÖLÜM 4: Belirtiler */}
            <section id="belirtiler" className="scroll-mt-24 mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">Klinik Belirtiler</h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                  <h3 className="text-lg font-bold text-foreground mb-2">1. Başlangıç (Prodromal) Dönem</h3>
                  <p className="text-muted-foreground">
                    Grip benzeri belirtiler. Ateş, halsizlik, baş ağrısı. En tipik belirti, <strong>ısırılan bölgede karıncalanma, yanma veya uyuşma hissidir.</strong>
                  </p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                  <h3 className="text-lg font-bold text-foreground mb-2">2. Akut Nörolojik Dönem</h3>
                  <p className="text-muted-foreground mb-4">İki şekilde ortaya çıkabilir:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Saldırgan (Furious) Kuduz (%80):</strong> Hiperaktivite, sudan korkma (hidrofobi), hava akımından korkma (aerofobi), bilinç kaybı, saldırganlık.</li>
                    <li><strong>Sakin (Paralytic) Kuduz (%20):</strong> Kaslarda yavaş yavaş felç başlar. Koma hali daha çabuk gelişir. Genellikle teşhisi daha zordur.</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator className="my-12" />

            {/* BÖLÜM 5: Tedavi */}
            <section id="tedavi" className="scroll-mt-24 mb-16">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-6">
                <div className="p-2 bg-muted rounded-lg"><Activity className="w-6 h-6 text-primary" /></div>
                Tanı ve Tedavi
              </h2>

              <div className="space-y-4">
                <p>
                  <strong>Tanı:</strong> Hayvanlarda ölüm sonrası beyin dokusu incelenerek kesin tanı konur. İnsanlarda ise canlıyken enseden alınan deri biyopsisi veya tükürük testi ile tanı konabilir ancak bu testler her zaman %100 sonuç vermez.
                </p>
                <p>
                  <strong>Tedavi:</strong> Belirtiler başladıktan sonra etkinliği kanıtlanmış bir tedavi yoktur. "Milwaukee Protokolü" gibi deneysel yöntemler çok nadir başarı sağlamıştır ancak genel kabul görmüş bir tedavi değildir.
                </p>

                <div className="mt-6 p-6 bg-slate-900 text-white rounded-2xl">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <ShieldAlert className="text-yellow-400" /> Tek Çare: Profilaksi (Önleme)
                  </h4>
                  <p className="mb-4 text-slate-300">
                    Temas sonrası profilaksi (PEP), virüs beyne ulaşmadan önce bağışıklık sistemini eğitmek demektir.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-white font-medium">
                    <li>Yara temizliği (Virüs yükünü %90 azaltır).</li>
                    <li>Kuduz Aşısı (4 Doz: 0, 3, 7, 14. günler).</li>
                    <li>Kuduz İmmünoglobulini (RIG): Hazır antikor desteği (gerekirse).</li>
                  </ol>
                </div>
              </div>
            </section>

          </article>
        </div>
      </div>

      <Footer />
    </main>
  );
}

// -- Yardımcı Bileşenler --

function ScrollLink({ id, active, children }: { id: string; active: string; children: React.ReactNode }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Header yüksekliği ve ofset hesaplaması
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      className={`block px-4 py-2 text-sm transition-all border-l-2 -ml-[2px] cursor-pointer ${active === id
        ? "border-primary text-primary font-semibold bg-muted"
        : "border-transparent text-muted-foreground hover:text-foreground"
        }`}
    >
      {children}
    </a>
  );
}

function TimelineItem({ title, desc, isLast }: { title: string; desc: string; isLast?: boolean }) {
  return (
    <div className="relative">
      {/* Nokta */}
      <div className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-background ${isLast ? 'bg-red-600' : 'bg-muted-foreground'} shadow-sm`} />
      <h4 className={`font-bold text-lg mb-1 ${isLast ? 'text-red-600' : 'text-foreground'}`}>{title}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </div>
  );
}