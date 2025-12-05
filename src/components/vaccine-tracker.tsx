"use client";

import { useState } from "react";
import { format, addDays, addYears } from "date-fns";
import { tr } from "date-fns/locale";
import { Calendar as CalendarIcon, Check, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function VaccineTracker() {
  const [date, setDate] = useState<Date>();
  const [activeTab, setActiveTab] = useState("pet");

  return (
    <section className="py-16 bg-slate-50 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Aşı Takvimi Hesaplayıcı</h2>
          <p className="text-slate-500 mt-2">
            Evcil dostlarınızın veya temas sonrası kendi aşı takviminizi kolayca planlayın.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="w-full max-w-3xl shadow-lg">
            <CardHeader>
              <Tabs defaultValue="pet" onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="pet">Evcil Hayvan (Yıllık)</TabsTrigger>
                  <TabsTrigger value="human">Temas Sonrası (İnsan)</TabsTrigger>
                </TabsList>

                {/* Evcil Hayvan Sekmesi */}
                <TabsContent value="pet" className="space-y-4 py-4">
                  <div className="text-center space-y-4">
                    <p className="text-sm text-slate-600">
                      Kediniz veya köpeğiniz en son ne zaman kuduz aşısı oldu?
                    </p>
                    <div className="flex justify-center">
                      <DatePickerWithPresets date={date} setDate={setDate} />
                    </div>

                    {date && (
                      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-in fade-in slide-in-from-bottom-4">
                        <h4 className="font-semibold text-green-800 flex items-center justify-center gap-2">
                          <Check className="w-5 h-5" /> Bir Sonraki Aşı Tarihi:
                        </h4>
                        <p className="text-3xl font-bold text-green-900 mt-2">
                          {format(addYears(date, 1), "d MMMM yyyy", { locale: tr })}
                        </p>
                        <p className="text-xs text-green-600 mt-2">
                          *Yasal zorunluluk gereği her yıl tekrarlanmalıdır.
                        </p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* İnsan Sekmesi */}
                <TabsContent value="human" className="space-y-4 py-4">
                  <div className="text-center space-y-4">
                    <p className="text-sm text-slate-600">
                      İlk doz aşınızı (0. Gün) hangi tarihte oldunuz?
                    </p>
                    <div className="flex justify-center">
                      <DatePickerWithPresets date={date} setDate={setDate} />
                    </div>

                    {date && (
                      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[0, 3, 7, 14].map((day, i) => (
                          <div key={day} className={`p-3 rounded-lg border text-center ${i === 0 ? "bg-slate-100 border-slate-300" : "bg-white border-slate-200"}`}>
                            <span className="text-xs font-bold text-slate-400 uppercase">{day}. Gün Dozu</span>
                            <div className="font-bold text-slate-900 mt-1">
                              {format(addDays(date, day), "d MMM", { locale: tr })}
                            </div>
                            <div className="text-xs text-slate-500">
                              {format(addDays(date, day), "EEEE", { locale: tr })}
                            </div>
                          </div>
                        ))}
                        <div className="col-span-2 md:col-span-4 mt-2 text-xs text-slate-400 text-left">
                          * Standart 4 dozluk şemaya (0, 3, 7, 14) göre hesaplanmıştır. Hekiminizin önerdiği takvim esastır.
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Tarih Seçici Bileşeni
function DatePickerWithPresets({ date, setDate }: { date: Date | undefined, setDate: (d: Date | undefined) => void }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP", { locale: tr }) : <span>Tarih seçiniz</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          locale={tr}
        />
      </PopoverContent>
    </Popover>
  );
}