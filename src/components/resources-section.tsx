import { ArrowUpRight, BookOpen, MapPinned, Route, School, Stethoscope } from "lucide-react";
import Link from "next/link";

const resources = [
  { icon: BookOpen, eyebrow: "Temel bilgiler", title: "Kuduz hakkında doğru bilinenler", desc: "Bulaş yolları, belirtiler, aşılama ve korunma hakkında kısa ve anlaşılır bilgiler.", href: "/bilgi", tone: "bg-red-50 text-red-600" },
  { icon: Stethoscope, eyebrow: "Acil rehber", title: "Temas sonrası ne yapmalıyım?", desc: "İlk dakikalardan sağlık kuruluşuna başvuruya kadar uygulanması gereken adımlar.", href: "/rehber", tone: "bg-red-50 text-red-600" },
  { icon: Route, eyebrow: "Seyahat", title: "Yola çıkmadan önce hazırlanın", desc: "Riskli bölgeler, aşı planlaması ve seyahat sırasında alınabilecek önlemler.", href: "/seyahat", tone: "bg-slate-100 text-slate-600" },
  { icon: MapPinned, eyebrow: "Yakınımda", title: "Acil noktaları görüntüle", desc: "Sağlık kuruluşları ve veteriner hizmetlerine hızlıca ulaşmak için konum rehberi.", href: "/acil-noktalar", tone: "bg-red-50/70 text-red-500" },
];

export function ResourcesSection() {
  return (
    <section className="bg-[#f6f8fb] py-20">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl"><span className="text-xs font-bold uppercase tracking-[.16em] text-red-600">Bilgi merkezi</span><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">İhtiyacınız olan bilgiye hızlıca ulaşın</h2><p className="mt-3 leading-7 text-slate-600">Uzun metinler arasında kaybolmadan, bulunduğunuz duruma uygun rehberi seçin.</p></div>
          <Link href="/kaynakca" className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700">Tüm bilimsel kaynaklar <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {resources.map(({ icon: Icon, eyebrow, title, desc, href, tone }) => (
            <Link key={title} href={href} className="group grid gap-5 border-b border-slate-200 p-6 transition-colors last:border-0 hover:bg-slate-50 md:grid-cols-[56px_1fr_1.2fr_28px] md:items-center md:px-8">
              <span className={`grid h-12 w-12 place-items-center rounded-xl ${tone}`}><Icon className="h-5 w-5" /></span>
              <div><small className="font-bold uppercase tracking-wider text-slate-400">{eyebrow}</small><h3 className="mt-1 font-bold text-slate-950">{title}</h3></div>
              <p className="text-sm leading-6 text-slate-500">{desc}</p>
              <ArrowUpRight className="hidden h-5 w-5 text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-red-600 md:block" />
            </Link>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-4 rounded-2xl border border-dashed border-slate-300 bg-white/60 px-6 py-5"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600"><School className="h-5 w-5" /></span><p className="text-sm leading-6 text-slate-600"><strong className="text-slate-900">Okul ve kurumlar için materyaller hazırlanıyor.</strong> Yazdırılabilir poster ve ilk yardım kartları doğrulama tamamlandığında bu alanda yayımlanacak.</p></div>
      </div>
    </section>
  );
}
