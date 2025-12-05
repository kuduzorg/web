import { CheckCircle2, XCircle } from "lucide-react";

export function MythsFacts() {
  const items = [
    {
      myth: "Kuduz köpekler her zaman saldırgan olur ve ağızlarından köpük saçar.",
      fact: "Hayır. 'Sakin kuduz' denilen türde hayvan aşırı durgunlaşabilir, felç belirtileri gösterebilir ve hiç saldırmayabilir.",
    },
    {
      myth: "Sadece köpeklerden kuduz bulaşır.",
      fact: "Yanlış. Kediler, tilkiler, yarasalar ve hatta inekler gibi memeli hayvanlar da kuduz taşıyıcısı olabilir.",
    },
    {
      myth: "Yara küçükse veya kanamadıysa doktora gitmeye gerek yoktur.",
      fact: "Kesinlikle yanlış. Virüs, gözle görülmeyecek kadar küçük sıyrıklardan veya mukoza temasından bile bulaşabilir.",
    },
    {
      myth: "Isırıldıktan sonra hemen aşı olmazsam ölürüm.",
      fact: "Hemen değil, ancak 'mümkün olan en kısa sürede' aşılanmalısınız. Semptomlar başlamadan önce aşı koruyucudur.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Doğru Bilinen Yanlışlar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Halk arasında yayılan yanlış bilgiler hayatınıza mal olabilir. Bilimin ışığında gerçekleri öğrenin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 p-6 rounded-xl border border-border shadow-sm bg-muted/50 hover:bg-card transition-colors"
            >
              {/* Sol: Yanlış */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 text-red-600 font-semibold text-sm uppercase tracking-wide">
                  <XCircle className="w-4 h-4" /> Yanlış
                </div>
                <p className="text-muted-foreground font-medium line-through decoration-red-300 decoration-2">
                  "{item.myth}"
                </p>
              </div>

              {/* Dikey Çizgi (Mobil hariç) */}
              <div className="hidden sm:block w-px bg-border self-stretch" />

              {/* Sağ: Doğru */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 text-green-600 font-semibold text-sm uppercase tracking-wide">
                  <CheckCircle2 className="w-4 h-4" /> Doğru
                </div>
                <p className="text-foreground font-medium">
                  {item.fact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}