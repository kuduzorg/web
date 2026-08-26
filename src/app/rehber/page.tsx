import Link from "next/link";
import { ArrowDown, Clock3, HeartPulse, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/footer";
import { GuidanceTimeline } from "@/components/guidance-timeline";

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(220,38,38,.09),transparent_65%)]" />
        <div className="relative mx-auto grid max-w-[1320px] gap-10 px-5 py-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-extrabold tracking-wide text-red-600"><ShieldCheck className="h-4 w-4" /> ACİL DURUM REHBERİ</span>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.08] tracking-[-.04em] md:text-6xl">Temas sonrası sakin olun, <span className="text-red-600">bu adımları izleyin.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Doğru yara bakımı ve gecikmeden sağlık kuruluşuna başvuru hayatidir. Rehberi ilk adımdan başlayarak uygulayın.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#adimlar" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-red-600 px-6 text-sm font-bold text-white shadow-lg shadow-red-600/15 hover:bg-red-700">Adımlara başla <ArrowDown className="h-4 w-4" /></a>
              <Link href="/acil-noktalar" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-bold text-slate-700 hover:border-red-200"><MapPin className="h-4 w-4 text-red-600" /> En yakın sağlık kuruluşu</Link>
            </div>
          </div>
          <div className="rounded-3xl bg-slate-950 p-7 text-white shadow-2xl shadow-slate-950/10 md:p-9">
            <div className="flex items-start justify-between gap-5"><div><small className="font-bold uppercase tracking-[.16em] text-red-400">İlk dakikalar</small><h2 className="mt-2 text-2xl font-black">Önce bunları yapın</h2></div><span className="grid h-12 w-12 place-items-center rounded-2xl bg-red-600"><HeartPulse className="h-6 w-6" /></span></div>
            <ol className="mt-7 space-y-5">
              <li className="flex gap-4"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-bold">01</span><p className="pt-1 text-sm leading-6 text-slate-300"><strong className="text-white">Yarayı yıkayın:</strong> Bol su ve sabunla 15 dakika temizleyin.</p></li>
              <li className="flex gap-4"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-bold">02</span><p className="pt-1 text-sm leading-6 text-slate-300"><strong className="text-white">Teması sonlandırın:</strong> Hayvanı yakalamaya veya yeniden yaklaşmaya çalışmayın.</p></li>
              <li className="flex gap-4"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-red-600 text-xs font-bold">03</span><p className="pt-1 text-sm leading-6 text-slate-300"><strong className="text-white">Sağlık kuruluşuna gidin:</strong> Belirti beklemeden hekim değerlendirmesi alın.</p></li>
            </ol>
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6"><span className="flex items-center gap-2 text-xs text-slate-400"><Clock3 className="h-4 w-4" /> Gecikmeyin</span><a href="tel:112" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-black text-red-600"><Phone className="h-4 w-4" /> 112</a></div>
          </div>
        </div>
      </section>
      <section id="adimlar" className="mx-auto max-w-[1220px] px-5 py-20 lg:px-8">
        <div className="mb-10 max-w-2xl"><span className="text-xs font-bold uppercase tracking-[.16em] text-red-600">Adım adım uygulayın</span><h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Temas sonrası yol haritası</h2><p className="mt-3 leading-7 text-slate-600">Her adımı açarak talimatları uygulayın. Tıbbi karar ve kişisel aşı planı için hekiminizin yönlendirmesi esastır.</p></div>
        <GuidanceTimeline />
      </section>
      <section className="border-t border-slate-200 bg-white py-10"><div className="mx-auto flex max-w-[900px] items-start gap-4 px-5 text-sm leading-6 text-slate-500"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-red-500" /><p>Bu içerik bilgilendirme amaçlıdır ve hekim değerlendirmesinin yerine geçmez. Şüpheli temas durumunda belirti oluşmasını beklemeden bir sağlık kuruluşuna başvurun.</p></div></section>
      <Footer />
    </main>
  );
}
