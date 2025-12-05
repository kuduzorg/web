import { FileText, Download, Printer, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const resources = [
  {
    title: "Apartman/Site Bilgilendirme Posteri",
    desc: "Site girişlerine asmak için evcil hayvan aşılama uyarısı ve yasal sorumluluklar.",
    icon: <Printer className="w-10 h-10 text-blue-500" />,
    size: "A4 - PDF",
  },
  {
    title: "Çocuklar İçin: Köpeklere Nasıl Yaklaşılır?",
    desc: "İlkokul çağındaki çocuklar için resimli anlatım ve güvenlik kuralları.",
    icon: <School className="w-10 h-10 text-orange-500" />,
    size: "A3 - Renkli PDF",
  },
  {
    title: "Isırılma Durumunda İlk Yardım Kartı",
    desc: "Cüzdanda taşınabilir, acil durumda yapılması gerekenleri özetleyen kart.",
    icon: <FileText className="w-10 h-10 text-red-500" />,
    size: "Kartvizit Boy",
  },
];

export function ResourcesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Bilinçlendirme Materyalleri</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Toplum sağlığına katkıda bulunmak ister misiniz? Aşağıdaki materyalleri indirip okulunuza, iş yerinize veya apartmanınıza asabilirsiniz.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((res, i) => (
            <Card key={i} className="group hover:border-primary/50 transition-colors">
              <CardHeader className="space-y-1">
                <div className="mb-4 p-3 w-fit rounded-lg bg-muted group-hover:bg-muted/80 transition-colors">
                  {res.icon}
                </div>
                <CardTitle className="text-xl">{res.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-sm">
                  {res.desc}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                  {res.size}
                </span>
                <Button variant="outline" size="sm" disabled className="gap-2">
                  <Download className="w-4 h-4" /> Hazırlanıyor
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}