"use client";

import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Loader2, Stethoscope, Syringe, Info } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { MapPlace } from "@/components/osm-location-map";

const OsmLocationMap = dynamic(() => import("@/components/osm-location-map"), { ssr: false, loading: () => <div className="grid h-full place-items-center text-sm text-slate-500">Harita yükleniyor...</div> });
const ANKARA: [number, number] = [39.9334, 32.8597];

type OverpassElement = { id: number; lat?: number; lon?: number; center?: { lat: number; lon: number }; tags?: Record<string, string> };

export function LocationFinder() {
  const [activeTab, setActiveTab] = useState<"vet" | "hospital">("vet");
  const [center, setCenter] = useState<[number, number]>(ANKARA);
  const [hasUserLocation, setHasUserLocation] = useState(false);
  const [locating, setLocating] = useState(false);
  const [loadingPlaces, setLoadingPlaces] = useState(false);
  const [places, setPlaces] = useState<MapPlace[]>([]);

  const handleLocateMe = useCallback(() => {
    if (!navigator.geolocation) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => { setCenter([coords.latitude, coords.longitude]); setHasUserLocation(true); setLocating(false); },
      () => setLocating(false),
      { enableHighAccuracy: true, timeout: 10_000, maximumAge: 60_000 },
    );
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const amenity = activeTab === "vet" ? "veterinary" : "hospital";
    const query = `[out:json][timeout:20];(node[amenity=${amenity}](around:12000,${center[0]},${center[1]});way[amenity=${amenity}](around:12000,${center[0]},${center[1]});relation[amenity=${amenity}](around:12000,${center[0]},${center[1]}););out center tags 40;`;
    const frame = requestAnimationFrame(() => setLoadingPlaces(true));
    fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`, { signal: controller.signal })
      .then((response) => response.ok ? response.json() : Promise.reject(new Error("Overpass yanıt vermedi")))
      .then((data: { elements?: OverpassElement[] }) => setPlaces((data.elements ?? []).flatMap((item) => {
        const lat = item.lat ?? item.center?.lat; const lng = item.lon ?? item.center?.lon;
        if (lat === undefined || lng === undefined) return [];
        return [{ id: String(item.id), lat, lng, name: item.tags?.name || (activeTab === "vet" ? "Veteriner kliniği" : "Hastane"), phone: item.tags?.phone, address: item.tags?.["addr:street"] }];
      })))
      .catch((error) => { if (error instanceof Error && error.name !== "AbortError") setPlaces([]); })
      .finally(() => setLoadingPlaces(false));
    return () => { cancelAnimationFrame(frame); controller.abort(); };
  }, [activeTab, center]);

  return <div className="grid min-h-[650px] grid-cols-1 gap-6 lg:grid-cols-12">
    <Card className="flex h-full flex-col border-slate-200 bg-white p-6 lg:col-span-3">
      <div className="space-y-6">
        <div><h3 className="flex items-center gap-2 text-lg font-bold"><Navigation className="h-5 w-5 text-red-600" /> Yakın Noktalar</h3><p className="mt-1 text-sm text-slate-500">Yakınınızdaki sağlık kuruluşlarını OpenStreetMap verisiyle bulun.</p></div>
        <div className="space-y-2"><span className="text-xs font-bold uppercase tracking-wider text-slate-500">Ne arıyorsunuz?</span><Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "vet" | "hospital")}><TabsList className="grid w-full grid-cols-2"><TabsTrigger value="vet" className="gap-2"><Syringe className="h-4 w-4" /> Veteriner</TabsTrigger><TabsTrigger value="hospital" className="gap-2"><Stethoscope className="h-4 w-4" /> Hastane</TabsTrigger></TabsList></Tabs></div>
        <Button variant={hasUserLocation ? "outline" : "default"} className="w-full py-6 font-semibold" onClick={handleLocateMe} disabled={locating}>{locating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <MapPin className="mr-2 h-4 w-4" />}{hasUserLocation ? "Konumumu Güncelle" : "Konumumu Bul"}</Button>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4"><div className="flex gap-3"><Info className="h-5 w-5 shrink-0 text-red-600" /><div><p className="text-xs font-bold text-slate-800">Anahtarsız açık harita</p><p className="mt-1 text-xs leading-5 text-slate-600">Harita OpenStreetMap, yakın nokta sonuçları Overpass tarafından sağlanır. Gitmeden önce telefonla teyit alın.</p></div></div></div>
        <p className="text-xs text-slate-500">{loadingPlaces ? "Yakın noktalar aranıyor..." : `${places.length} nokta bulundu.`}</p>
      </div>
    </Card>
    <Card className="relative min-h-[500px] overflow-hidden border-slate-200 bg-slate-100 shadow-sm lg:col-span-9 lg:min-h-[650px]"><OsmLocationMap center={center} places={places} /></Card>
  </div>;
}
