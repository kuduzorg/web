import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground">Sıkça Sorulan Sorular</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Isırıldım ama yara çok küçük, yine de aşı olmalı mıyım?</AccordionTrigger>
            <AccordionContent>
              Evet. Kuduz virüsü sinir uçlarından ilerler. Yaranın boyutu değil, virüsün vücuda girip girmediği önemlidir. En ufak tırmalama veya kanamada bile sağlık kuruluşuna başvurmalısınız.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Evcil hayvanım aşılandı, beni ısırırsa risk var mı?</AccordionTrigger>
            <AccordionContent>
              Eğer hayvanın aşıları güncelse ve veteriner karnesinde bu kayıtlıysa risk çok düşüktür. Ancak prosedür gereği sağlık kuruluşuna gidip durumu bildirmeli ve hekimin yönlendirmesine uymalısınız.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Kuduzun tedavisi var mı?</AccordionTrigger>
            <AccordionContent>
              Belirtiler (semptomlar) başladıktan sonra kuduzun bilinen kesin bir tedavisi yoktur ve %99.9 ölümcüldür. Bu yüzden <strong>belirtiler başlamadan önce</strong> yapılan aşı ve serum müdahalesi hayati önem taşır.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Yarasalar Türkiye'de kuduz taşır mı?</AccordionTrigger>
            <AccordionContent>
              Evet, nadir de olsa yarasalar kuduz taşıyıcısı olabilir. Yarasalarla temas durumunda ısırık izi çok küçük olduğundan fark edilmeyebilir, mutlaka doktora danışılmalıdır.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}