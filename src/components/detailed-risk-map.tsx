"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Search, MapPin, AlertTriangle, Syringe, Building2, Calendar, Activity, Edit } from "lucide-react";
import geoData from "@/data/turkiye-geo.json";
import type { CityRabiesData } from "@/data/rabies-data";
import { useRabiesData } from "@/hooks/use-rabies-data";

// -- TİP TANIMLAMALARI --
type Feature = {
  type: string;
  properties: {
    id: string;
    name: string;
  };
  geometry: {
    type: "Polygon" | "MultiPolygon";
    coordinates: number[][][][] | number[][][];
  };
};

export function DetailedRiskMap() {
  const cityData: Record<string, CityRabiesData> = useRabiesData();
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);
  const [hoveredCityId, setHoveredCityId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const width = 1000;
  const height = 450;

  const paths = useMemo(() => {
    const features = geoData.features as Feature[];
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

    features.forEach((feature) => {
      const extractCoords = (coords: any[]) => {
        if (typeof coords[0] === 'number') {
          const [x, y] = coords;
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        } else {
          coords.forEach(extractCoords);
        }
      };
      extractCoords(feature.geometry.coordinates);
    });

    const project = ([lon, lat]: [number, number]) => {
      const x = ((lon - minX) / (maxX - minX)) * width;
      const y = height - ((lat - minY) / (maxY - minY)) * height;
      return [x, y];
    };

    const createPath = (coordinates: any[], type: string) => {
      if (type === "Polygon") {
        return coordinates.map((ring: number[][]) => "M" + ring.map(c => project([c[0], c[1]]).join(",")).join("L") + "Z").join(" ");
      } else if (type === "MultiPolygon") {
        return coordinates.map((polygon: number[][][]) => polygon.map((ring: number[][]) => "M" + ring.map(c => project([c[0], c[1]]).join(",")).join("L") + "Z").join(" ")).join(" ");
      }
      return "";
    };

    return features.map((f) => ({
      id: f.properties.id,
      name: f.properties.name,
      d: createPath(f.geometry.coordinates, f.geometry.type),
    }));
  }, []);

  // Renk mantığı ve risk seviyeleri
  const hasCityData = (id: string) => {
    const city = cityData[id];
    return Boolean(city && (city.confirmedCases > 0 || city.riskContactCount > 0 || city.hospitals > 0 || city.vets > 0 || city.lastCase !== "-"));
  };
  const getFillColor = (id: string) => {
    const isSelected = selectedCityId === id;
    const isHovered = hoveredCityId === id;
    const risk = cityData[id]?.riskLevel || "low";

    // Seçili il vurgusu (Koyu Gri/Siyah)
    // Yüksek risk ile seçim karışıklığını önlemek için
    if (isSelected) return "fill-slate-800 dark:fill-slate-100";
    if (!hasCityData(id)) return isHovered ? "fill-slate-400 dark:fill-slate-500" : "fill-slate-300 dark:fill-slate-700";

    let baseColor = "fill-[#8faebc] dark:fill-[#668795]"; // Düşük risk
    if (risk === "medium") baseColor = "fill-orange-300 dark:fill-orange-600";
    if (risk === "high") baseColor = "fill-red-500 dark:fill-red-800";

    if (isHovered) {
      if (risk === "high") return "fill-red-400 dark:fill-red-700";
      if (risk === "medium") return "fill-orange-200 dark:fill-orange-500";
      return "fill-[#789aa9] dark:fill-[#789aa9]";
    }

    return baseColor;
  };

  const filteredCities = Object.values(cityData).filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  ).sort((a, b) => a.name.localeCompare(b.name));

  const selectedCity = selectedCityId ? cityData[selectedCityId] : null;

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-[800px] lg:h-[600px]">

      {/* SOL PANEL: Şehir Listesi */}
      <Card className="w-full lg:w-1/4 flex flex-col h-full border-border shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border bg-card z-10">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="İl Ara..."
              className="pl-9 bg-background border-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Alt boşluk ayarı */}
        <ScrollArea className="flex-1 h-full bg-card">
          <div className="p-2 pb-6 space-y-1"> {/* Son elemanın görünürlüğü için ek boşluk */}
            {
              filteredCities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => setSelectedCityId(city.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-sm transition-all duration-200 group ${selectedCityId === city.id
                    ? "bg-slate-900 text-white shadow-sm font-semibold dark:bg-slate-100 dark:text-slate-900"
                    : "hover:bg-muted text-foreground"
                    }`}
                >
                  <span>{city.name}</span>
                  <div className={`w-2.5 h-2.5 rounded-full ring-2 ring-offset-1 ring-offset-card ${!hasCityData(city.id) ? 'bg-slate-300 ring-slate-200 dark:bg-slate-600 dark:ring-slate-800' : city.riskLevel === 'high' ? 'bg-red-500 ring-red-200' :
                    city.riskLevel === 'medium' ? 'bg-orange-400 ring-orange-200' : 'bg-[#8faebc] ring-[#c5d5dc] dark:bg-[#668795] dark:ring-[#456672]'
                    }`} />
                </button>
              ))
            }
          </div>
        </ScrollArea>
      </Card>

      {/* ORTA PANEL: Harita */}
      <Card className="w-full lg:w-2/4 relative bg-muted/30 border-border flex flex-col overflow-hidden justify-center">
        {/* Lejant (Açıklama) */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10 pointer-events-none">
          <Badge variant="outline" className="bg-card/80 backdrop-blur border-red-200 text-red-600 shadow-sm">Yüksek Risk</Badge>
          <Badge variant="outline" className="bg-card/80 backdrop-blur border-orange-200 text-orange-600 shadow-sm">Orta Risk</Badge>
          <Badge variant="outline" className="bg-card/80 backdrop-blur border-[#b8cbd3] text-[#557886] shadow-sm">Düşük Risk</Badge>
          <Badge variant="outline" className="bg-card/80 backdrop-blur border-slate-300 text-slate-600 shadow-sm">Veri Yok</Badge>
          <Badge variant="default" className="bg-slate-800 text-white shadow-sm mt-2 justify-center">Seçili İl</Badge>
        </div>

        {/* Düzenleme Butonu */}
        <Link
          href="/katkida-bulun"
          className="absolute top-44 right-4 z-30 p-2 bg-background/60 hover:bg-background/90 backdrop-blur-md rounded-full shadow-sm border border-border/50 transition-all group/edit"
          aria-label="Katkıda Bulun"
        >
          <Edit className="w-4 h-4 text-muted-foreground group-hover/edit:text-primary transition-colors" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1.5 bg-popover/95 backdrop-blur text-popover-foreground text-xs font-medium rounded-md shadow-lg border border-border/50 opacity-0 group-hover/edit:opacity-100 transition-all duration-200 translate-x-2 group-hover/edit:translate-x-0 whitespace-nowrap pointer-events-none">
            Katkıda Bulun
          </span>
        </Link>

        <div className="w-full px-4">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto drop-shadow-xl">
            <g>
              {paths.map((city) => (
                <path
                  key={city.id}
                  d={city.d}
                  className={`stroke-background stroke-[1] transition-all duration-200 cursor-pointer ${getFillColor(city.id)}`}
                  onMouseEnter={() => setHoveredCityId(city.id)}
                  onMouseLeave={() => setHoveredCityId(null)}
                  onClick={() => setSelectedCityId(city.id)}
                />
              ))}
            </g>
          </svg>
        </div>
      </Card>

      {/* SAĞ PANEL: Detay Kartı */}
      <Card className="w-full lg:w-1/4 border-border shadow-sm flex flex-col overflow-hidden bg-card">
        {selectedCity ? (
          <div className="flex flex-col h-full">
            <div className={`p-6 border-b border-border ${selectedCity.riskLevel === 'high' ? 'bg-red-50 dark:bg-red-950/20' :
              selectedCity.riskLevel === 'medium' ? 'bg-orange-50 dark:bg-orange-950/20' : 'bg-slate-100 dark:bg-slate-900'
              }`}>
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-2xl font-bold text-foreground">{selectedCity.name}</h2>
              </div>
              <Badge className={`uppercase tracking-wide text-[10px] font-bold ${selectedCity.riskLevel === 'high' ? 'bg-red-500 hover:bg-red-600' :
                selectedCity.riskLevel === 'medium' ? 'bg-orange-500 hover:bg-orange-600' : 'bg-slate-500 hover:bg-slate-600'
                }`}>
                {selectedCity.riskLevel === 'high' ? 'YÜKSEK RİSK' : selectedCity.riskLevel === 'medium' ? 'ORTA RİSK' : 'DÜŞÜK RİSK'}
              </Badge>
            </div>

            <ScrollArea className="flex-1">
              <div className="p-6 space-y-4">
                <StatItem
                  icon={<AlertTriangle className="w-4 h-4 text-red-500" />}
                  label="Doğrulanmış Vaka"
                  value={selectedCity.confirmedCases === 0 ? "Veri Yok" : selectedCity.confirmedCases}
                  isText={selectedCity.confirmedCases === 0}
                />
                <StatItem
                  icon={<Activity className="w-4 h-4 text-orange-500" />}
                  label="Riskli Temas"
                  value={selectedCity.riskContactCount === 0 ? "Veri Yok" : selectedCity.riskContactCount}
                  isText={selectedCity.riskContactCount === 0}
                />
                <StatItem
                  icon={<Building2 className="w-4 h-4 text-blue-500" />}
                  label="Aşı Merkezi"
                  value={selectedCity.hospitals === 0 ? "Veri Yok" : selectedCity.hospitals}
                  isText={selectedCity.hospitals === 0}
                />
                <StatItem
                  icon={<Syringe className="w-4 h-4 text-emerald-500" />}
                  label="Veteriner"
                  value={selectedCity.vets === 0 ? "Veri Yok" : selectedCity.vets}
                  isText={selectedCity.vets === 0}
                />
                <StatItem icon={<Calendar className="w-4 h-4 text-muted-foreground" />} label="Son Vaka" value={selectedCity.lastCase} isText />
              </div>
            </ScrollArea>

            <div className="p-6 border-t border-border bg-muted/10">
              <Button className="w-full font-semibold shadow-sm">
                <MapPin className="w-4 h-4 mr-2" />
                En Yakın Aşı Merkezini Bul
              </Button>
            </div>

          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center p-8 text-muted-foreground bg-muted/5">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4 opacity-50">
              <MapPin className="w-8 h-8" />
            </div>
            <p className="text-lg font-medium text-foreground">Bir şehir seçilmedi</p>
            <p className="text-sm mt-2 max-w-[200px]">Detaylı risk verilerini görmek için haritadan veya listeden bir il seçin.</p>
          </div>
        )}
      </Card>

    </div>
  );
}

function StatItem({ icon, label, value, isText = false }: { icon: any, label: string, value: string | number, isText?: boolean }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-background border border-border shadow-sm transition-all hover:border-primary/20">
      <div className="flex items-center gap-3 text-muted-foreground">
        <div className="p-2 bg-muted/50 rounded-lg">
          {icon}
        </div>
        <span className="text-sm font-medium">{label}</span>
      </div>
      <span className={`font-bold text-lg ${isText ? 'text-sm' : ''} text-foreground`}>{value}</span>
    </div>
  )
}
