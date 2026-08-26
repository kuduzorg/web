"use client";

import { useState } from "react";
import Head from "next/head";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/site-page";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, BookOpen, ExternalLink } from "lucide-react";
import { faqData, categories } from "@/data/faq-data";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Arama ve Kategori Filtreleme Mantığı
  const filteredFAQs = faqData.filter((item) => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // JSON-LD Structured Data (SEO için)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": filteredFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950 flex flex-col">
      {/* SEO Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


      <PageHero eyebrow="Bilgi bankası" title="Sorularınıza" accent="güvenilir yanıtlar." description="Kuduz, aşı takvimi ve yasal süreçler hakkında en çok merak edilen soruların kaynaklandırılmış cevaplarını arayın.">
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Örn: kedi tırmalaması, aşı yan etkileri..."
              className="pl-12 h-12 text-lg shadow-sm border-input focus:border-primary transition-all bg-background"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
      </PageHero>

      {/* İçerik Alanı */}
      <div className="mx-auto w-full max-w-[1100px] px-5 py-12 lg:px-8 lg:py-16 flex-1">

        {/* Kategori Filtreleri */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full ${activeCategory === cat.id ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground border-border hover:bg-muted"}`}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Sorular Listesi */}
        <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-sm border border-border p-6 md:p-10">
          {filteredFAQs.length > 0 ? (
            <Accordion type="single" collapsible className="w-full space-y-4">
              {filteredFAQs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-border rounded-lg px-4 data-[state=open]:bg-muted/50 data-[state=open]:border-primary/20 transition-all">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4 text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                    {faq.answer}

                    {/* Kaynakça Linki */}
                    <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Kaynak:</span>
                      <a
                        href={faq.sourceUrl}
                        target="_blank"
                        rel="nofollow noreferrer"
                        className="text-xs text-red-600 hover:text-red-700 flex items-center gap-1 font-medium transition-colors"
                      >
                        {faq.source} <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>Aradığınız kriterlere uygun sonuç bulunamadı.</p>
              <Button variant="link" onClick={() => { setSearchQuery(""); setActiveCategory("all") }} className="mt-2 text-red-600">
                Filtreleri Temizle
              </Button>
            </div>
          )}
        </div>

      </div>

      <Footer />
    </main>
  );
}
