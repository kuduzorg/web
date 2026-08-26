import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, accent, description, children }: { eyebrow: string; title: string; accent?: string; description: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(220,38,38,.075),transparent_66%)]" />
      <div className="relative mx-auto max-w-[1320px] px-5 py-14 lg:px-8 lg:py-20">
        <span className="inline-flex rounded-full bg-red-50 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[.14em] text-red-600">{eyebrow}</span>
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.08] tracking-[-.04em] text-slate-950 md:text-5xl lg:text-6xl">{title}{accent && <> <span className="text-red-600">{accent}</span></>}</h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">{description}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function PageContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1320px] px-5 lg:px-8 ${className}`}>{children}</div>;
}
