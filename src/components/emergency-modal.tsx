"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Activity, AlertTriangle } from "lucide-react";
import Link from "next/link";

export function EmergencyModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-l-8 border-l-red-600">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2 text-red-600">
            <AlertTriangle className="h-6 w-6" /> ACİL DURUM
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 pt-4">
          <p className="text-slate-600 text-sm font-medium">
            Lütfen durumunuza uygun olan seçeneği tıklayın.
          </p>

          {/* 1. Seçenek: 112'yi Ara */}
          <Button 
            className="w-full h-16 text-lg font-bold bg-red-600 hover:bg-red-700 shadow-lg shadow-red-100 flex items-center justify-between px-6"
            asChild
          >
            <a href="tel:112">
              <span>112 ACİL ÇAĞRI</span>
              <Phone className="h-6 w-6" />
            </a>
          </Button>

          {/* 2. Seçenek: En Yakın Hastane (Google Maps) */}
          <Button 
            className="w-full h-14 text-base font-semibold bg-white text-slate-900 border-2 border-slate-200 hover:bg-slate-50 hover:border-slate-300 flex items-center justify-between px-6"
            asChild
          >
            <a 
              href="https://www.google.com/maps/search/en+yakın+devlet+hastanesi+acil+servis" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span>En Yakın Hastane</span>
              <MapPin className="h-5 w-5 text-blue-600" />
            </a>
          </Button>

          {/* 3. Seçenek: Rehbere Git */}
          <Button 
            className="w-full h-14 text-base font-semibold bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 flex items-center justify-between px-6"
            asChild
          >
            <Link href="/rehber">
              <span>Isırıldım, Ne Yapmalıyım?</span>
              <Activity className="h-5 w-5" />
            </Link>
          </Button>
          
          <div className="pt-2 text-center">
             <span className="text-[10px] text-slate-400 uppercase tracking-wider">Saniyeler Önemlidir</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}