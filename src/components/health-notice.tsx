"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, ArrowRight, CheckCircle2, Info, LockKeyhole, ShieldPlus, X } from "lucide-react";

const COOKIE_NAME = "kuduz_health_notice_acknowledged";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

function hasAcknowledgementCookie() {
  return document.cookie
    .split(";")
    .some((cookie) => cookie.trim().startsWith(`${COOKIE_NAME}=`));
}

export function HealthNotice() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (hasAcknowledgementCookie()) return;
    const frame = requestAnimationFrame(() => setOpen(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const acknowledge = () => {
    document.cookie = `${COOKIE_NAME}=1; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
    setOpen(false);
  };

  const goToGuide = () => {
    setOpen(false);
    router.push("/rehber");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] grid place-items-center bg-slate-950/55 p-4 backdrop-blur-sm" role="presentation">
      <section role="dialog" aria-modal="true" aria-labelledby="health-notice-title" className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-2xl sm:p-8">
        <button onClick={() => setOpen(false)} aria-label="Bilgilendirmeyi kapat" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"><X className="h-5 w-5" /></button>

        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-red-50 text-red-600"><ShieldPlus className="h-10 w-10" strokeWidth={1.8} /></div>
        <div className="mt-6 text-center">
          <h2 id="health-notice-title" className="text-2xl font-black tracking-tight">Önemli Sağlık Bilgilendirmesi</h2>
          <span className="mx-auto mt-4 block h-0.5 w-10 bg-red-600" />
          <p className="mx-auto mt-5 max-w-sm text-sm leading-6 text-slate-600">Kuduz.org bilgilendirme ve risk farkındalığı amacıyla hazırlanmıştır; tıbbi tanı veya kişisel tedavi önerisi sunmaz.</p>
        </div>

        <div className="mt-6 flex gap-3 rounded-xl border border-red-100 bg-red-50 p-4">
          <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-red-600"><AlertTriangle className="h-4 w-4" /></span>
          <p className="text-xs leading-5 text-slate-700">Bir hayvan tarafından ısırıldıysanız, tırmalandıysanız veya riskli bir temas yaşadıysanız platformdaki sonuçlardan bağımsız olarak <strong className="text-red-700">tıbbi değerlendirmeyi geciktirmeyin ve bir sağlık kuruluşuna başvurun.</strong></p>
        </div>

        <div className="mt-3 flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-xs text-slate-600"><Info className="h-4 w-4 shrink-0 text-slate-500" /><span>Acil bir durumda vakit kaybetmeden <a href="tel:112" className="font-bold text-red-600">112 Acil</a>&apos;i arayın.</span></div>

        <div className="mt-6 grid gap-3 sm:grid-cols-[.85fr_1.15fr]">
          <button onClick={acknowledge} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600"><CheckCircle2 className="h-4 w-4" /> Okudum, Anladım</button>
          <button onClick={goToGuide} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-red-600 px-4 text-sm font-bold text-white shadow-lg shadow-red-600/15 transition-colors hover:bg-red-700">Temas Yaşadım, Ne Yapmalıyım? <ArrowRight className="h-4 w-4" /></button>
        </div>

        <p className="mt-5 flex items-center justify-center gap-2 text-[11px] text-slate-400"><LockKeyhole className="h-3.5 w-3.5" /> Bu bildirim onaydan sonra çerez süresince tekrar gösterilmez.</p>
      </section>
    </div>
  );
}
