import Link from "next/link";
import { ArrowRight, MessageCircleQuestion, Phone, ShieldCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questions = [
  { q: "Yara çok küçükse yine de aşı gerekir mi?", a: "Evet. Yaranın boyutu riski tek başına belirlemez. En küçük tırmalama veya şüpheli temas sonrasında bile yarayı yıkayıp sağlık kuruluşuna başvurmalısınız; aşı kararını hekim verir." },
  { q: "Aşılı evcil hayvan ısırırsa risk var mı?", a: "Güncel ve belgeli aşı riski önemli ölçüde azaltır, ancak sıfırlamaz. Hayvanın aşı karnesiyle birlikte sağlık kuruluşuna başvurun ve hekimin yönlendirmesini izleyin." },
  { q: "Kuduzun tedavisi var mı?", a: "Belirtiler başladıktan sonra kuduz neredeyse daima ölümcüldür. Bu nedenle belirtiler ortaya çıkmadan önce uygulanan yara bakımı, aşı ve gerektiğinde immünglobulin hayati önem taşır." },
  { q: "Yarasalar Türkiye’de kuduz taşıyabilir mi?", a: "Evet, nadir de olsa taşıyabilir. Yarasa ısırıkları çok küçük olduğu için fark edilmeyebilir. Fiziksel temas yaşandıysa gecikmeden bir sağlık kuruluşuna danışın." },
  { q: "Şüpheli hayvanı kendim yakalamalı mıyım?", a: "Hayır. Teması artırmayın, güvenli mesafeyi koruyun ve belediye ya da ilgili veteriner birimlerine haber verin. Mümkünse konumu uzaktan kaydedin." },
];

export function FAQ() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 lg:grid-cols-[.68fr_1.32fr] lg:px-8">
        <aside>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-red-600"><MessageCircleQuestion className="h-4 w-4" /> Merak edilenler</span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">Kısa, net cevaplar</h2>
          <p className="mt-4 leading-7 text-slate-600">En sık karşılaşılan soruları bilimsel bilgiler doğrultusunda özetledik. Kişisel risk değerlendirmesi için sağlık profesyoneline başvurun.</p>
          <div className="mt-8 rounded-2xl bg-red-600 p-6 text-white shadow-lg shadow-red-600/10"><Phone className="h-7 w-7" /><strong className="mt-5 block text-xl">Acil bir temas mı yaşadınız?</strong><p className="mt-2 text-sm leading-6 text-red-100">Soru-cevap bölümünde zaman kaybetmeyin. Yarayı yıkayın ve en yakın sağlık kuruluşuna başvurun.</p><Link href="/rehber" className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Acil rehberi aç <ArrowRight className="h-4 w-4" /></Link></div>
        </aside>
        <div className="rounded-2xl border border-slate-200 px-6 py-2 shadow-sm md:px-8">
          <Accordion type="single" collapsible className="w-full">
            {questions.map((item, index) => <AccordionItem key={item.q} value={`item-${index}`}><AccordionTrigger className="py-6 text-base font-bold text-slate-900 hover:text-red-600 hover:no-underline"><span className="flex items-center gap-4"><span className="text-xs font-bold text-slate-300">0{index + 1}</span>{item.q}</span></AccordionTrigger><AccordionContent className="pb-6 pl-9 leading-7 text-slate-600">{item.a}</AccordionContent></AccordionItem>)}
          </Accordion>
          <div className="flex items-center gap-3 border-t border-slate-200 py-6 text-sm text-slate-500"><ShieldCheck className="h-5 w-5 text-red-500" /><span>Yanıtlar bilgilendirme amaçlıdır; hekim değerlendirmesinin yerine geçmez.</span></div>
        </div>
      </div>
    </section>
  );
}
