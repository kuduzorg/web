import { EyeOff, Droplets, Footprints, EarOff } from "lucide-react";

export function Symptoms() {
  const symptoms = [
    {
      icon: <Droplets className="w-8 h-8 text-blue-500" />,
      title: "Aşırı Salya ve Yutkunma Güçlüğü",
      desc: "Hayvan suyunu yutamaz, ağzından sürekli salya akar veya suya karşı korku (hidrofobi) geliştirir.",
    },
    {
      icon: <EyeOff className="w-8 h-8 text-purple-500" />,
      title: "Işık ve Sesten Rahatsızlık",
      desc: "Karanlık ve kuytu yerlere saklanma eğilimi gösterir. Işığa ve sese karşı aşırı duyarlı veya agresif olabilir.",
    },
    {
      icon: <Footprints className="w-8 h-8 text-orange-500" />,
      title: "Dengesizlik ve Felç",
      desc: "Arka ayaklarda tutulma, yürürken sendeleme veya tamamen hareketsiz kalma gibi nörolojik belirtiler.",
    },
    {
      icon: <EarOff className="w-8 h-8 text-red-500" />,
      title: "Davranış Değişikliği",
      desc: "Vahşi bir hayvanın aşırı evcil davranması veya evcil bir hayvanın sahibini tanımaması/saldırması.",
    },
  ];

  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Erken Teşhis</span>
          <h2 className="text-3xl font-bold text-foreground mt-2">
            Riskli Hayvanı Nasıl Tanırsınız?
          </h2>
          <p className="text-muted-foreground mt-2">
            Aşağıdaki belirtilerden birini gösteren hayvana <u>kesinlikle yaklaşmayın</u> ve yetkililere bildirin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {symptoms.map((sym, i) => (
            <div key={i} className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {sym.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{sym.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {sym.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}