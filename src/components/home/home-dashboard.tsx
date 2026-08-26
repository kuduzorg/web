"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AlertTriangle, ArrowRight, ChevronRight, FileText,
  MapPin, Newspaper, Shield, ShieldCheck, Siren, Users, XCircle,
  CheckCircle2, Activity, Building2,
} from "lucide-react";
import geoData from "@/data/turkiye-geo.json";
import { useRabiesData } from "@/hooks/use-rabies-data";
import { ReportModal } from "@/components/report-modal";

type Coordinates = number[] | Coordinates[];
type Feature = { properties: { id: string; name: string }; geometry: { type: "Polygon" | "MultiPolygon"; coordinates: Coordinates } };
type NewsItem = { id: string; title: string; source: string; tag: string; published_at: string; link: string | null };
type Stats = { reports: number; contributions: number; news: number };

const myths = [
  ["Kuduz sadece köpeklerden bulaşır.", "Yanlış. Kediler, tilkiler, yarasalar ve diğer memeliler de bulaştırabilir."],
  ["Yara küçükse veya kanamıyorsa risk yoktur.", "Yanlış. Virüs tükürükle bulaşır; yara gözle görülmeyebilir."],
  ["Aşı vurulursa hemen koruma sağlar.", "Yanlış. Aşı koruyucu etki oluşturması için zaman gerektirir."],
];

export function HomeDashboard({ stats, news }: { stats: Stats; news: NewsItem[] }) {
  const rabiesData = useRabiesData();
  const [hovered, setHovered] = useState<string | null>(null);

  const paths = useMemo(() => {
    const features = geoData.features as Feature[];
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    const scan = (coords: Coordinates) => {
      if (typeof coords[0] === "number") {
        const point = coords as number[]; const x = point[0]; const y = point[1];
        minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y);
      } else (coords as Coordinates[]).forEach(scan);
    };
    features.forEach((feature) => scan(feature.geometry.coordinates));
    const project = (point: number[]) => [((point[0] - minX) / (maxX - minX)) * 1000, 450 - ((point[1] - minY) / (maxY - minY)) * 450];
    const ringPath = (ring: Coordinates) => "M" + (ring as Coordinates[]).map((point) => project(point as number[]).join(",")).join("L") + "Z";
    const makePath = (coords: Coordinates, type: string) => type === "Polygon"
      ? (coords as Coordinates[]).map(ringPath).join(" ")
      : (coords as Coordinates[]).map((polygon) => (polygon as Coordinates[]).map(ringPath).join(" ")).join(" ");
    return features.map((feature) => ({ id: feature.properties.id, name: feature.properties.name, d: makePath(feature.geometry.coordinates, feature.geometry.type) }));
  }, []);

  const city = hovered ? rabiesData[hovered] : null;
  const totals = Object.values(rabiesData).reduce((sum, item) => ({ cases: sum.cases + item.confirmedCases, contacts: sum.contacts + item.riskContactCount }), { cases: 0, contacts: 0 });
  const hasData = (id: string) => {
    const item = rabiesData[id];
    return Boolean(item && (item.confirmedCases > 0 || item.riskContactCount > 0 || item.hospitals > 0 || item.vets > 0 || item.lastCase !== "-"));
  };
  const fill = (id: string) => !hasData(id) ? "fill-slate-300 hover:fill-slate-400" : rabiesData[id]?.riskLevel === "high" ? "fill-red-500 hover:fill-red-600" : rabiesData[id]?.riskLevel === "medium" ? "fill-orange-300 hover:fill-orange-400" : "fill-[#8faebc] hover:fill-[#789aa9]";

  return <main className="min-h-screen bg-[#fbfcfe] text-slate-950">
    <div className="mx-auto max-w-[1440px] space-y-5 px-5 py-5 lg:px-8">
      <section className="grid items-center gap-7 py-1 lg:grid-cols-[.78fr_1.22fr]">
        <div className="py-7 lg:pr-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-[11px] font-bold text-red-600"><span className="h-2 w-2 rounded-full border border-red-500" /> CANLI VERİLERLE GÜNCELLENİR</span>
          <h1 className="mt-5 text-4xl font-black leading-[1.13] tracking-[-.04em] md:text-[44px] xl:text-[48px]">Türkiye’de Kuduz Riskini Takip Ediyor, <span className="text-red-600">Bilgiye Dönüştürüyoruz.</span></h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">Bilimsel veriler, resmi kaynaklar ve vatandaş bildirimleriyle kuduz riskini birlikte izliyor ve azaltıyoruz.</p>
          <div className="mt-7 grid max-w-[540px] gap-3 sm:grid-cols-2">
            <Link href="/rehber" className="group flex h-[72px] min-w-0 items-center gap-4 rounded-xl bg-red-600 px-5 text-left text-white shadow-lg shadow-red-600/15 transition-all hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/12"><AlertTriangle className="h-5 w-5" /></span><span className="min-w-0"><strong className="block text-sm leading-5">Isırıldım, Ne Yapmalıyım?</strong><small className="mt-0.5 block text-xs text-red-100">Acil adımları öğren</small></span></Link>
            <Link href="/risk-haritasi" className="group flex h-[72px] min-w-0 items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-red-50 text-red-600"><MapPin className="h-5 w-5" /></span><span className="min-w-0"><strong className="block text-sm leading-5">Risk Haritasını Gör</strong><small className="mt-0.5 block text-xs leading-5 text-slate-500">İllere göre riski incele</small></span></Link>
          </div>
        </div>

        <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-red-500" /> Risk Verisi</span><Link href="/risk-haritasi" className="rounded-lg border px-3 py-2 font-semibold hover:border-red-200 hover:text-red-600">Detaylı Harita</Link></div>
          <div className="relative mt-1 min-h-[320px] grid place-items-center">
            <svg viewBox="0 0 1000 450" className="w-full drop-shadow-xl"><g>{paths.map((path) => <path key={path.id} d={path.d} className={`cursor-pointer stroke-white stroke-[1.4] transition-colors ${fill(path.id)}`} onMouseEnter={() => setHovered(path.id)} onMouseLeave={() => setHovered(null)} />)}</g></svg>
            {city && <div className="pointer-events-none absolute right-[16%] top-[20%] w-52 rounded-xl border bg-white p-4 text-xs shadow-xl"><div className="mb-3 flex items-center justify-between"><strong className="text-base">{city.name}</strong><span className={`rounded-full px-2 py-1 text-[9px] font-bold ${!hasData(city.id) ? "bg-slate-200 text-slate-700" : city.riskLevel === "high" ? "bg-red-600 text-white" : city.riskLevel === "medium" ? "bg-orange-500 text-white" : "bg-[#789aa9] text-white"}`}>{!hasData(city.id) ? "VERİ YOK" : city.riskLevel === "high" ? "YÜKSEK RİSK" : city.riskLevel === "medium" ? "ORTA RİSK" : "DÜŞÜK RİSK"}</span></div><div className="space-y-2 text-slate-600"><p className="flex justify-between">Doğrulanmış Vaka <b>{city.confirmedCases || "—"}</b></p><p className="flex justify-between">Riskli Temas <b>{city.riskContactCount || "—"}</b></p><p className="flex justify-between">Son Vaka <b>{city.lastCase}</b></p></div></div>}
          </div>
          <div className="grid grid-cols-2 gap-3 border-t pt-3 text-[11px] sm:grid-cols-4"><Legend color="bg-red-500" label="Yüksek Risk" detail="Acil eylem gerekli"/><Legend color="bg-orange-400" label="Orta Risk" detail="Takip önerilir"/><Legend color="bg-[#8faebc]" label="Düşük Risk" detail="Kontrol altında"/><Legend color="bg-slate-300 ring-1 ring-slate-400" label="Veri Yok" detail="Yeterli veri yok"/></div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Metric icon={<ShieldCheck/>} tone="red" label="DOĞRULANMIŞ VAKA" value={totals.cases} detail="il bazlı toplam" />
        <Metric icon={<AlertTriangle/>} tone="softRed" label="RİSKLİ TEMAS BİLDİRİMİ" value={totals.contacts} detail="kayıtlı temas" />
        <Metric icon={<Newspaper/>} tone="slate" label="İZLENEN HABER KAYNAĞI" value={stats.news} detail="güncel haber" />
        <Metric icon={<Users/>} tone="softSlate" label="VATANDAŞ BİLDİRİMİ" value={stats.reports + stats.contributions} detail="toplam bildirim" />
      </section>

      <section className="grid gap-4 lg:grid-cols-[1fr_1.02fr_.88fr]">
        <DashboardCard title="Son Olaylar" link="/haberler" linkLabel="Tümünü Gör">
          {news.length ? news.slice(0,3).map((item) => <a href={item.link || "/haberler"} key={item.id} className="flex items-center gap-3 border-b py-3 last:border-0"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-red-50 text-red-600"><Siren className="h-4 w-4" /></span><span className="min-w-0 flex-1"><strong className="block truncate text-sm">{item.title}</strong><small className="text-slate-500">{item.source}</small></span><span className="text-[11px] text-slate-500">{new Date(item.published_at).toLocaleDateString("tr-TR", { day:"numeric", month:"short" })}</span></a>) : <p className="py-8 text-center text-sm text-slate-500">Henüz olay kaydı yok.</p>}
        </DashboardCard>
        <DashboardCard title="Yanlış Bilinenler" link="/bilgi" linkLabel="Tümünü Gör">
          {myths.map(([myth, fact], index) => <div key={myth} className="flex gap-3 border-b py-3 last:border-0"><span className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg ${index === 1 ? "bg-slate-100 text-slate-600" : "bg-red-50 text-red-600"}`}>{index === 1 ? <CheckCircle2 className="h-4 w-4"/> : <XCircle className="h-4 w-4"/>}</span><span><strong className="block text-[13px]">“{myth}”</strong><small className="mt-1 block leading-5 text-slate-500">{fact}</small></span></div>)}
        </DashboardCard>
        <DashboardCard title="Bilmeniz Gerekenler" link="/rehber" linkLabel="Tüm rehbere git">
          <GuideLink href="/bilgi" icon={<Activity/>} label="Kuduz Nedir?" tone="red"/><GuideLink href="/bilgi#belirtiler" icon={<Shield/>} label="Belirtiler" tone="blue"/><GuideLink href="/rehber" icon={<ShieldCheck/>} label="Korunma Yolları" tone="green"/><GuideLink href="/bilgi" icon={<Building2/>} label="Aşı Hakkında" tone="orange"/>
        </DashboardCard>
      </section>

      <section className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-100 bg-slate-50 px-7 py-6 lg:flex-row">
        <div className="flex items-center gap-4"><span className="grid h-14 w-14 place-items-center rounded-full bg-slate-200 text-slate-600"><ShieldCheck /></span><span><strong className="block">Güvenilir Kaynaklardan, Şeffaf Veriyle</strong><small className="text-slate-500">Resmi kurumlar, haber kaynakları ve doğrulanmış vatandaş bildirimleriyle güncellenir.</small></span></div>
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-bold text-slate-500">
          <a href="https://www.saglik.gov.tr/" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-opacity hover:opacity-75">
            <Image src="/institutions/health-ministry.png" alt="T.C. Sağlık Bakanlığı logosu" width={48} height={48} className="h-12 w-12 object-contain" />
            <span className="max-w-24 leading-tight">T.C. Sağlık Bakanlığı</span>
          </a>
          <a href="https://www.tarimorman.gov.tr/" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-opacity hover:opacity-75">
            <Image src="/institutions/agriculture-ministry.svg" alt="T.C. Tarım ve Orman Bakanlığı logosu" width={48} height={48} className="h-12 w-12 object-contain" />
            <span className="max-w-28 leading-tight">T.C. Tarım ve Orman Bakanlığı</span>
          </a>
          <a href="https://www.who.int/health-topics/rabies" target="_blank" rel="noreferrer" className="flex items-center transition-opacity hover:opacity-75">
            <Image src="/institutions/who.svg" alt="Dünya Sağlık Örgütü (WHO) logosu" width={150} height={46} className="h-12 w-auto object-contain" />
          </a>
          <span className="grid h-12 w-12 place-items-center rounded-full border bg-white">+16</span>
        </div>
      </section>

      <div className="flex justify-center py-2"><ReportModal><button className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-red-600"><FileText className="h-4 w-4"/> Şüpheli durum veya hayvan bildir</button></ReportModal></div>
    </div>
  </main>;
}

function Legend({color,label,detail}:{color:string;label:string;detail:string}){return <div className="flex gap-2"><span className={`mt-1 h-3 w-3 shrink-0 rounded-full ${color}`}/><span><strong className="block">{label}</strong><small className="text-slate-500">{detail}</small></span></div>}
function Metric({icon,tone,label,value,detail}:{icon:React.ReactNode;tone:string;label:string;value:number;detail:string}){const colors:Record<string,string>={red:"bg-red-50 text-red-600",softRed:"bg-red-50/70 text-red-500",slate:"bg-slate-100 text-slate-700",softSlate:"bg-slate-50 text-slate-500"};return <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><span className={`grid h-11 w-11 place-items-center rounded-xl [&>svg]:h-5 [&>svg]:w-5 ${colors[tone]}`}>{icon}</span><span><small className="block text-[10px] font-bold tracking-wide text-slate-500">{label}</small><strong className="block text-2xl">{value.toLocaleString("tr-TR")}</strong><em className="text-[10px] not-italic text-slate-500">{detail}</em></span></div>}
function DashboardCard({title,link,linkLabel,children}:{title:string;link:string;linkLabel:string;children:React.ReactNode}){return <div className="flex min-h-[285px] flex-col rounded-xl border border-slate-200 bg-white shadow-sm"><div className="flex items-center justify-between px-5 pt-5"><h2 className="font-bold">{title}</h2><Link href={link} className="flex items-center gap-1 text-[11px] font-bold text-red-600">{linkLabel}<ArrowRight className="h-3 w-3"/></Link></div><div className="flex-1 px-5 py-2">{children}</div><Link href={link} className="flex items-center justify-center gap-2 border-t py-3 text-[11px] font-bold text-red-600">{linkLabel}<ArrowRight className="h-3 w-3"/></Link></div>}
function GuideLink({href,icon,label,tone}:{href:string;icon:React.ReactNode;label:string;tone:string}){const colors:Record<string,string>={red:"bg-red-50 text-red-600",blue:"bg-slate-100 text-slate-600",green:"bg-red-50/70 text-red-500",orange:"bg-slate-50 text-slate-500"};return <Link href={href} className="flex items-center gap-3 border-b py-3 last:border-0"><span className={`grid h-9 w-9 place-items-center rounded-lg [&>svg]:h-4 [&>svg]:w-4 ${colors[tone]}`}>{icon}</span><strong className="flex-1 text-sm">{label}</strong><ChevronRight className="h-4 w-4 text-slate-400"/></Link>}
