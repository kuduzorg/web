"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplets,
  Hospital,
  Syringe,
  CalendarClock,
  CheckCircle2,
  Play,
  Pause,
  RotateCcw,
  AlertTriangle,
  ArrowDown,
  BookOpen,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Adım verileri ve açıklamalar
const steps = [
  {
    id: 1,
    title: "Yarayı Yıkayın",
    subtitle: "En Kritik İlk Adım",
    icon: <Droplets className="w-6 h-6" />,
    color: "bg-blue-500",
    lightColor: "bg-blue-50 dark:bg-blue-900/20",
    content: "Washing",
    extraInfo: {
      title: "Neden Sabun?",
      text: "Kuduz virüsü, 'zarflı' (enveloped) bir virüstür. Dış yapısı yağ (lipid) tabakasından oluşur. Sabun ve deterjanlar bu yağ tabakasını kimyasal olarak çözer ve virüsü parçalar (inaktive eder). Sadece suyla yıkamak virüsü mekanik olarak uzaklaştırır, ancak sabun virüsü öldürür. Bu işlem virüs yükünü %90'a kadar azaltabilir."
    }
  },
  {
    id: 2,
    title: "Sağlık Kuruluşuna Gidin",
    subtitle: "Vakit Kaybetmeyin",
    icon: <Hospital className="w-6 h-6" />,
    color: "bg-red-500",
    lightColor: "bg-red-50 dark:bg-red-900/20",
    content: "Hospital",
    extraInfo: {
      title: "Aşı mı, Serum mu?",
      text: "Doktorunuz yaranın durumuna göre (Kategori III temas gibi) sadece aşı değil, 'Kuduz İmmünoglobulini' (RIG) de uygulayabilir. Aşı, vücudun kendi antikorunu üretmesini sağlar (ki bu 7-10 gün sürer), Serum (RIG) ise dışarıdan hazır asker (antikor) vererek o kritik 7 günlük boşlukta virüsü nötralize eder."
    }
  },
  {
    id: 3,
    title: "Aşı Takvimi",
    subtitle: "Hayat Kurtaran Dozlar",
    icon: <Syringe className="w-6 h-6" />,
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50 dark:bg-emerald-900/20",
    content: "Vaccine",
    extraInfo: {
      title: "Neden 4 Doz?",
      text: "Bağışıklık sisteminin hafızasını güçlendirmek için dozların tekrarı şarttır. Türkiye'de genellikle Zagreb (2-1-1) veya 4 dozluk (0-3-7-14) şema uygulanır. İlk dozlar 'IgM' antikorlarını, sonraki dozlar ise uzun süreli koruma sağlayan 'IgG' antikorlarını zirveye çıkarır."
    }
  },
  {
    id: 4,
    title: "Gözlem Süreci",
    subtitle: "Hayvanı Takip Edin",
    icon: <CalendarClock className="w-6 h-6" />,
    color: "bg-orange-500",
    lightColor: "bg-orange-50 dark:bg-orange-900/20",
    content: "Observation",
    extraInfo: {
      title: "10 Gün Kuralının Bilimsel Açıklaması",
      text: "Kuduz virüsü bir hayvanın beynine ulaşıp orada çoğaldıktan sonra tükürük bezlerine iner. Hayvan ancak bu aşamada (tükürüğünde virüs varken) bulaştırıcıdır. Eğer virüs beyne ulaştıysa, hayvan %100 ihtimalle 10 gün içinde ölür. Yani hayvan 10 gün yaşıyorsa, sizi ısırdığı anda tükürüğünde virüs yoktu demektir."
    }
  }
];

export function GuidanceTimeline() {
  const [activeStep, setActiveStep] = useState(1);
  const [expandedInfo, setExpandedInfo] = useState<number | null>(null);

  useEffect(() => {
    // İlk adımdan sonraki adımlarda otomatik kaydırma
    // Sayfa yüklendiğinde kaydırma yapma
    if (activeStep > 1) {
      const element = document.getElementById(`step-${activeStep}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [activeStep]);

  const handleStepChange = (stepId: number) => {
    setActiveStep(stepId);
    setExpandedInfo(null);
  };

  return (
    <div className="max-w-4xl mx-auto relative">
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 -z-10 hidden md:block" />

      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            id={`step-${step.id}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row gap-6 ${activeStep === step.id ? 'opacity-100' : 'opacity-60 hover:opacity-100 transition-opacity'}`}
            onClick={() => setActiveStep(step.id)}
          >
            <div className="hidden md:flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg z-10 border-4 border-white dark:border-slate-900 ${step.id <= activeStep ? step.color : "bg-slate-300 dark:bg-slate-700"}`}>
                {step.id < activeStep ? <CheckCircle2 className="w-8 h-8" /> : step.icon}
              </div>
            </div>

            <Card className={`flex-1 border-2 overflow-hidden transition-all duration-300 ${activeStep === step.id ? "border-slate-300 dark:border-slate-600 shadow-xl scale-[1.02]" : "border-slate-100 dark:border-slate-800"}`}>
              <div className={`p-4 border-b flex items-center justify-between ${step.lightColor}`}>
                <div className="flex items-center gap-3">
                  <div className={`md:hidden p-2 rounded-full text-white ${step.color}`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">{step.subtitle}</p>
                  </div>
                </div>
                {activeStep === step.id && (
                  <Badge className={`${step.color} animate-pulse`}>Şu anki adım</Badge>
                )}
              </div>

              <div className="p-6">

                {/* Ana İçerik Alanı */}
                {step.content === "Washing" && <WashingTimer />}
                {step.content === "Hospital" && <HospitalInfo />}
                {step.content === "Vaccine" && <VaccineTimeline />}
                {step.content === "Observation" && <ObservationInfo />}

                {/* Ek Bilgi Alanı */}
                <div className="mt-8 pt-4 border-t border-border">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedInfo(expandedInfo === step.id ? null : step.id);
                    }}
                    className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
                  >
                    <BookOpen className="w-4 h-4" />
                    {expandedInfo === step.id ? "Bilgiyi Gizle" : "Detaylı Bilgi"}
                    {expandedInfo === step.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  <AnimatePresence>
                    {expandedInfo === step.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border text-muted-foreground text-sm leading-relaxed">
                          <strong className="block text-foreground mb-2">{step.extraInfo.title}</strong>
                          {step.extraInfo.text}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* İlerleme Butonu */}
                {activeStep === step.id && step.id < 4 && (
                  <div className="mt-6 flex justify-end">
                    <Button onClick={(e) => { e.stopPropagation(); handleStepChange(step.id + 1); }} className="gap-2">
                      Tamamladım, Sonraki Adım <ArrowDown className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Alt Bileşenler

function WashingTimer() {
  const [time, setTime] = useState(900);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    let interval: any;
    if (isActive && time > 0) interval = setInterval(() => setTime((t) => t - 1), 1000);
    else if (time === 0) setIsActive(false);
    return () => clearInterval(interval);
  }, [isActive, time]);
  const format = (s: number) => `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800 text-blue-800 dark:text-blue-200 text-sm">
        <strong className="block mb-1 text-lg">🧪 En Önemli Adım!</strong>
        Kuduz virüsü sabuna ve deterjana karşı dayanıksızdır. Yarayı köpürterek yıkamak virüs yükünü %90 oranında azaltabilir.
      </div>

      <div className="flex flex-col items-center justify-center py-8 bg-muted/30 rounded-xl border border-border">
        <span className="text-6xl font-mono font-bold text-foreground mb-6 tracking-wider">{format(time)}</span>
        <div className="flex gap-3 w-full max-w-xs">
          <Button onClick={() => setIsActive(!isActive)} size="lg" className={`flex-1 ${isActive ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "bg-blue-600 hover:bg-blue-700"}`}>
            {isActive ? <><Pause className="w-5 h-5 mr-2" /> Duraklat</> : <><Play className="w-5 h-5 mr-2" /> Süreyi Başlat</>}
          </Button>
          <Button variant="outline" size="icon" onClick={() => { setIsActive(false); setTime(900); }}>
            <RotateCcw className="w-5 h-5" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-4 font-medium">
          *15 dakika dolana kadar yıkamaya devam edin.
        </p>
      </div>
    </div>
  );
}

function HospitalInfo() {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground text-lg leading-relaxed">
        Yarayı yıkadıktan sonra vakit kaybetmeden <strong>en yakın sağlık kuruluşuna</strong> başvurmalısınız.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 border rounded-xl bg-card hover:border-red-200 dark:hover:border-red-800 hover:shadow-sm transition-all">
          <strong className="block text-foreground mb-2 text-lg">Nereye Gidilmeli?</strong>
          <p className="text-muted-foreground">Devlet Hastaneleri Acil Servisleri veya Kuduz Aşı Merkezleri.</p>
        </div>
        <div className="p-5 border rounded-xl bg-card hover:border-red-200 dark:hover:border-red-800 hover:shadow-sm transition-all">
          <strong className="block text-foreground mb-2 text-lg">Ne Söylenmeli?</strong>
          <p className="text-muted-foreground">"Kuduz riskli temas" olduğunu ve hayvanın durumunu (kaçtı, sahipli, öldü vb.) mutlaka belirtin.</p>
        </div>
      </div>
      <Alert variant="destructive" className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-900">
        <AlertTriangle className="w-5 h-5" />
        <AlertDescription className="text-red-800 dark:text-red-200 font-medium ml-2">
          Yara baş/boyun bölgesindeyse veya derinse, virüsün beyne ulaşma yolu kısaldığı için aciliyet seviyesi yüksektir.
        </AlertDescription>
      </Alert>
    </div>
  )
}

function VaccineTimeline() {
  const doses = [
    { day: 0, label: "İlk Doz", desc: "Hastaneye gittiğiniz gün" },
    { day: 3, label: "2. Doz", desc: "İlk dozdan 3 gün sonra" },
    { day: 7, label: "3. Doz", desc: "İlk dozdan 1 hafta sonra" },
    { day: 14, label: "4. Doz", desc: "Tam koruma için son doz" },
  ];

  return (
    <div className="space-y-8">
      <p className="text-muted-foreground">
        Türkiye'de uygulanan standart 4 dozluk (Zagreb Protokolü değişiklik gösterebilir) şema şöyledir:
      </p>

      <div className="relative py-6 px-2">
        {/* Çizgi */}
        <div className="absolute top-[50px] left-4 right-4 h-1 bg-muted -z-0" />

        <div className="relative z-10 grid grid-cols-4 gap-2">
          {doses.map((dose, i) => (
            <div key={i} className="flex flex-col items-center group text-center">
              <div className="w-14 h-14 rounded-full bg-card border-[5px] border-emerald-500 flex items-center justify-center text-lg font-bold text-foreground shadow-sm group-hover:scale-110 group-hover:border-emerald-600 transition-all cursor-default mb-4">
                {dose.day}
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400 mb-1">{dose.label}</span>
                <span className="text-[11px] text-muted-foreground leading-tight max-w-[80px]">{dose.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg text-sm text-emerald-800 dark:text-emerald-200 border border-emerald-100 dark:border-emerald-800 flex gap-3">
        <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-600" />
        <div>
          <strong>Önemli:</strong> Bu takvim standarttır. Hekiminiz hayvanın durumuna göre aşıyı 3. dozda kesebilir veya farklı bir takvim uygulayabilir. Hekimin takvimi esastır.
        </div>
      </div>
    </div>
  )
}

function ObservationInfo() {
  return (
    <div className="space-y-6 text-muted-foreground">
      <p className="text-lg">
        Kuduz virüsü hayvanın salyasında ancak hayvan ölmeden <strong>en fazla 10 gün önce</strong> belirmeye başlar.
      </p>
      <ul className="grid gap-3">
        <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg border border-border">
          <div className="w-2 h-2 mt-2 rounded-full bg-green-500 flex-shrink-0" />
          <span>Hayvan <strong>sahipli ve aşıları tam ise</strong>, genellikle 10 gün gözlem altında tutulur.</span>
        </li>
        <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg border border-border">
          <div className="w-2 h-2 mt-2 rounded-full bg-green-500 flex-shrink-0" />
          <span>Hayvan bu 10 günü <strong>sağlıklı bir şekilde atlatırsa</strong>, ısırdığı anda kuduz bulaştırma ihtimali yoktur.</span>
        </li>
        <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg border border-border">
          <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0" />
          <span>Hayvan <strong>kaçtıysa, öldüyse veya sahipsizse</strong>, doktor aşı takvimini tamamlamanızı isteyecektir.</span>
        </li>
      </ul>
      <div className="flex gap-3 mt-2">
        <Badge variant="outline" className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 py-1 px-3">10 Gün Kuralı</Badge>
        <Badge variant="outline" className="border-border bg-muted text-muted-foreground py-1 px-3">Veteriner Kontrolü</Badge>
      </div>
    </div>
  )
}