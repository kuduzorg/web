"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AlertTriangle, BookOpen, CalendarClock, Check, ChevronDown, Droplets, Hospital, MapPin, Pause, Play, RotateCcw, Syringe } from "lucide-react";

const steps = [
  { id: 1, title: "Yarayı yıkayın", subtitle: "En kritik ilk adım", icon: Droplets, tone: "blue" },
  { id: 2, title: "Sağlık kuruluşuna gidin", subtitle: "Vakit kaybetmeyin", icon: Hospital, tone: "red" },
  { id: 3, title: "Aşı planını takip edin", subtitle: "Hekiminizin takvimi esastır", icon: Syringe, tone: "emerald" },
  { id: 4, title: "Gözlem sürecini yönetin", subtitle: "Yetkililerle birlikte takip edin", icon: CalendarClock, tone: "amber" },
] as const;

const tones = {
  blue: "bg-red-50 text-red-600 border-red-100",
  red: "bg-red-50 text-red-600 border-red-100",
  emerald: "bg-slate-100 text-slate-700 border-slate-200",
  amber: "bg-red-50/70 text-red-500 border-red-100",
};

export function GuidanceTimeline() {
  const [activeStep, setActiveStep] = useState(1);

  const selectStep = (id: number) => {
    setActiveStep(id);
    requestAnimationFrame(() => document.getElementById("aktif-adim")?.scrollIntoView({ behavior: "smooth", block: "center" }));
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <nav aria-label="Rehber adımları" className="h-fit overflow-hidden rounded-2xl border border-slate-200 bg-white lg:sticky lg:top-24">
        <div className="border-b border-slate-200 px-6 py-5"><strong className="text-sm">4 adımda doğru müdahale</strong><p className="mt-1 text-xs text-slate-500">Tamamladığınız adımdan devam edin.</p></div>
        {steps.map(({ id, title, subtitle, icon: Icon, tone }) => {
          const active = activeStep === id;
          return <button key={id} onClick={() => selectStep(id)} className={`flex w-full items-center gap-4 border-b border-slate-100 px-5 py-5 text-left transition-colors last:border-0 ${active ? "bg-slate-950 text-white" : "hover:bg-slate-50"}`}>
            <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border ${active ? "border-white/10 bg-white/10 text-white" : tones[tone]}`}>{id < activeStep ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}</span>
            <span className="min-w-0"><small className={`block text-[10px] font-bold uppercase tracking-wider ${active ? "text-red-400" : "text-slate-400"}`}>Adım 0{id}</small><strong className="mt-0.5 block text-sm">{title}</strong><span className={`mt-1 block text-xs ${active ? "text-slate-400" : "text-slate-500"}`}>{subtitle}</span></span>
          </button>;
        })}
      </nav>

      <div id="aktif-adim" className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <StepHeader step={steps[activeStep - 1]} />
        <div className="p-6 md:p-9">
          {activeStep === 1 && <WashingTimer />}
          {activeStep === 2 && <HospitalInfo />}
          {activeStep === 3 && <VaccineTimeline />}
          {activeStep === 4 && <ObservationInfo />}
          <div className="mt-9 flex flex-col-reverse justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row">
            {activeStep > 1 ? <button onClick={() => selectStep(activeStep - 1)} className="rounded-lg px-4 py-2 text-sm font-bold text-slate-500 hover:bg-slate-50">Önceki adım</button> : <span />}
            {activeStep < 4 ? <button onClick={() => selectStep(activeStep + 1)} className="rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700">Tamamladım, sonraki adım</button> : <Link href="/risk-haritasi" className="rounded-lg bg-slate-950 px-5 py-3 text-center text-sm font-bold text-white hover:bg-slate-800">Risk haritasına git</Link>}
          </div>
        </div>
      </div>
    </div>
  );
}

function StepHeader({ step }: { step: (typeof steps)[number] }) {
  const Icon = step.icon;
  return <div className="flex items-center gap-4 border-b border-slate-200 bg-slate-50 px-6 py-6 md:px-9"><span className={`grid h-12 w-12 place-items-center rounded-xl border ${tones[step.tone]}`}><Icon className="h-6 w-6" /></span><div><small className="font-bold uppercase tracking-[.14em] text-slate-400">Adım 0{step.id}</small><h3 className="mt-1 text-xl font-black text-slate-950 md:text-2xl">{step.title}</h3></div></div>;
}

function WashingTimer() {
  const [time, setTime] = useState(900);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running || time <= 0) return;
    const interval: ReturnType<typeof setInterval> = setInterval(() => setTime((value) => Math.max(0, value - 1)), 1000);
    return () => clearInterval(interval);
  }, [running, time]);

  const display = `${Math.floor(time / 60).toString().padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;
  return <div className="grid gap-7 md:grid-cols-[1fr_260px] md:items-center">
    <div><h4 className="text-2xl font-black text-slate-950">Bol su ve sabunla 15 dakika yıkayın</h4><p className="mt-4 leading-7 text-slate-600">Yaranın içini ve çevresini nazikçe köpürtün. Varsa antiseptik uygulayın; yarayı sıkıca kapatmayın ve sağlık kuruluşuna başvurmayı ertelemeyin.</p><Info title="Neden önemli?">Yıkama, yara bölgesindeki virüs yükünün fiziksel ve kimyasal olarak azaltılmasına yardımcı olan en önemli ilk yardım adımıdır.</Info></div>
    <div className="rounded-2xl bg-red-50 p-6 text-center"><small className="font-bold uppercase tracking-wider text-red-600">Yıkama sayacı</small><strong className="mt-4 block font-mono text-5xl tracking-tight text-slate-950">{display}</strong><div className="mt-6 flex gap-2"><button onClick={() => time > 0 && setRunning(!running)} className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-red-600 text-sm font-bold text-white hover:bg-red-700">{running ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}{running ? "Duraklat" : "Başlat"}</button><button aria-label="Sayacı sıfırla" onClick={() => { setRunning(false); setTime(900); }} className="grid h-11 w-11 place-items-center rounded-lg border border-red-200 bg-white text-red-600"><RotateCcw className="h-4 w-4" /></button></div></div>
  </div>;
}

function HospitalInfo() {
  return <div><h4 className="text-2xl font-black text-slate-950">Belirti oluşmasını beklemeyin</h4><p className="mt-4 leading-7 text-slate-600">Yarayı temizledikten sonra en yakın sağlık kuruluşuna başvurun. Temasın zamanı, yeri, hayvanın türü ve mevcut durumu hakkında bildiklerinizi hekime aktarın.</p><div className="mt-7 grid gap-4 sm:grid-cols-2"><Advice number="01" title="Nereye gidilmeli?">Devlet hastanesi acil servisi veya kuduz profilaksisi uygulayan sağlık kuruluşu.</Advice><Advice number="02" title="Yanınızda ne olsun?">Varsa önceki aşı kayıtlarınız ve hayvanın aşı karnesine ilişkin bilgiler.</Advice></div><div className="mt-6 flex gap-3 rounded-xl border border-red-200 bg-red-50 p-5 text-sm leading-6 text-red-800"><AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" /><p>Baş-boyun bölgesi, el-parmaklar, derin veya çoklu yaralanmalar özellikle hızlı değerlendirilmelidir.</p></div><Link href="/acil-noktalar" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-red-600"><MapPin className="h-4 w-4" /> Yakındaki acil noktaları bul</Link></div>;
}

function VaccineTimeline() {
  const doses = [{ day: "0", label: "Başvuru günü" }, { day: "3", label: "İkinci kontrol" }, { day: "7", label: "Takip dozu" }, { day: "14", label: "Takip dozu" }];
  return <div><h4 className="text-2xl font-black text-slate-950">Size verilen takvimi eksiksiz uygulayın</h4><p className="mt-4 leading-7 text-slate-600">Aşağıdaki günler yaygın kullanılan şemayı örnekler. Temasın niteliği, önceki aşılar ve hekim değerlendirmesi nedeniyle kişisel planınız farklı olabilir.</p><div className="mt-8 grid gap-3 sm:grid-cols-4">{doses.map((dose, index) => <div key={dose.day} className="rounded-xl border border-slate-200 p-5"><span className="text-xs font-bold text-red-600">{index + 1}. DOZ</span><strong className="mt-3 block text-3xl text-slate-950">Gün {dose.day}</strong><small className="mt-2 block text-slate-500">{dose.label}</small></div>)}</div><Info title="Takvimi kim belirler?">Aşı ve kuduz immünglobulini gereksinimine yalnızca sağlık profesyoneli karar verir. Randevularınızı kendi kararınızla kesmeyin veya değiştirmeyin.</Info></div>;
}

function ObservationInfo() {
  return <div><h4 className="text-2xl font-black text-slate-950">Hayvanın takibini yetkililere bırakın</h4><p className="mt-4 leading-7 text-slate-600">Uygun durumlarda sahipli kedi ve köpekler veteriner gözetiminde izlenebilir. Bu süreç, sağlık kuruluşuna başvurmanın veya önerilen profilaksinin yerine geçmez.</p><div className="mt-7 space-y-3"><CheckRow>Sahipli hayvanın kimlik ve aşı bilgilerini kaydedin.</CheckRow><CheckRow>Hayvanın kaçması, hastalanması veya ölmesi halinde sağlık ekibine bilgi verin.</CheckRow><CheckRow>Sahipsiz ya da yabani hayvanı kendiniz yakalamaya çalışmayın.</CheckRow></div><Info title="10 günlük gözlem">Kedi ve köpeklerde gözlem kararı veteriner ve sağlık otoritelerince verilir. Aşı planınızı yalnızca sizi değerlendiren hekim değiştirebilir.</Info></div>;
}

function Info({ title, children }: { title: string; children: React.ReactNode }) {
  return <details className="group mt-7 rounded-xl border border-slate-200 bg-slate-50 p-5"><summary className="flex cursor-pointer list-none items-center gap-3 text-sm font-bold text-slate-800"><BookOpen className="h-4 w-4 text-red-600" />{title}<ChevronDown className="ml-auto h-4 w-4 transition-transform group-open:rotate-180" /></summary><p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-6 text-slate-600">{children}</p></details>;
}
function Advice({ number, title, children }: { number: string; title: string; children: React.ReactNode }) { return <div className="rounded-xl border border-slate-200 p-5"><small className="font-bold text-red-600">{number}</small><strong className="mt-2 block text-slate-950">{title}</strong><p className="mt-2 text-sm leading-6 text-slate-500">{children}</p></div>; }
function CheckRow({ children }: { children: React.ReactNode }) { return <div className="flex gap-3 rounded-xl border border-slate-200 px-5 py-4 text-sm leading-6 text-slate-600"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600"><Check className="h-3 w-3" /></span>{children}</div>; }
