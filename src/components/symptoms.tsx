import { Activity, AlertTriangle, ArrowRight, Droplets, EarOff, EyeOff, Footprints, ShieldAlert } from "lucide-react";
import Link from "next/link";

const symptoms = [
  { icon: Droplets, title: "Salya ve yutkunma güçlüğü", desc: "Aşırı salya, su içememe veya yutkunurken zorlanma." },
  { icon: EyeOff, title: "Işık ve sese hassasiyet", desc: "Karanlık yerlere saklanma ve çevresel uyaranlara aşırı tepki." },
  { icon: Footprints, title: "Dengesizlik ve felç", desc: "Sendeleme, arka ayaklarda güçsüzlük veya ani hareketsizlik." },
  { icon: EarOff, title: "Davranış değişikliği", desc: "Evcil hayvanda saldırganlık, yabani hayvanda olağandışı yakınlık." },
];

export function Symptoms() {
  return (
    <section id="belirtiler" className="border-y border-slate-200 bg-white py-20">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 lg:grid-cols-[.72fr_1.28fr] lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white lg:p-10">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-red-600/25 blur-3xl" />
          <span className="relative inline-flex items-center gap-2 text-xs font-extrabold tracking-[.16em] text-red-400"><Activity className="h-4 w-4" /> ERKEN FARK ET</span>
          <h2 className="relative mt-5 text-3xl font-black leading-tight md:text-4xl">Riskli hayvanı uzaktan tanıyın.</h2>
          <p className="relative mt-4 max-w-md text-sm leading-7 text-slate-300">Tek bir belirti kuduz teşhisi değildir. Ancak olağandışı davranan bir hayvana yaklaşmamak, teması önlemek ve durumu bildirmek hem sizi hem çevrenizi korur.</p>
          <div className="relative mt-8 rounded-2xl border border-red-500/30 bg-red-500/10 p-5">
            <div className="flex gap-3"><ShieldAlert className="mt-0.5 h-6 w-6 shrink-0 text-red-400" /><div><strong className="block text-sm">Temas ettiyseniz beklemeyin</strong><p className="mt-1 text-xs leading-5 text-slate-300">Yarayı sabunlu suyla en az 15 dakika yıkayın ve en yakın sağlık kuruluşuna başvurun.</p></div></div>
          </div>
          <Link href="/rehber" className="relative mt-7 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-red-300">Acil adımları incele <ArrowRight className="h-4 w-4" /></Link>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-7 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[.16em] text-red-600">Gözlem rehberi</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Dikkat edilmesi gereken işaretler</h2>
            <p className="mt-3 leading-7 text-slate-600">Belirtileri güvenli bir mesafeden gözlemleyin. Hayvanı yakalamaya, beslemeye veya kendi imkânlarınızla taşımaya çalışmayın.</p>
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2">
            {symptoms.map(({ icon: Icon, title, desc }, index) => (
              <article key={title} className="flex gap-4 border-t border-slate-200 py-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-red-50 text-red-600"><Icon className="h-5 w-5" /></span>
                <div><span className="text-[10px] font-bold text-slate-400">0{index + 1}</span><h3 className="mt-1 font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{desc}</p></div>
              </article>
            ))}
          </div>
          <p className="mt-2 flex items-center gap-2 text-xs text-slate-500"><AlertTriangle className="h-4 w-4 text-amber-500" /> Kesin değerlendirme yalnızca veteriner hekim ve yetkili kurumlarca yapılabilir.</p>
        </div>
      </div>
    </section>
  );
}
