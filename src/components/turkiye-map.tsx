"use client";

import { useMemo, useState, useRef } from "react";
import Link from "next/link";
import { Edit } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import geoData from "@/data/turkiye-geo.json";
import { DataDisclaimer } from "@/components/data-disclaimer";
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

export function TurkeyMap() {
  const rabiesData = useRabiesData();
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  // Tooltip konfigürasyonu
  const [tooltip, setTooltip] = useState({
    x: 0,
    y: 0,
    dirX: "right", // 'right' | 'left'
    dirY: "top"    // 'top' | 'bottom'
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const width = 1000;
  const height = 450;

  // Harita projeksiyon hesaplamaları
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
        return coordinates.map((ring: number[][]) => {
          return "M" + ring.map(coord => project([coord[0], coord[1]]).join(",")).join("L") + "Z";
        }).join(" ");
      } else if (type === "MultiPolygon") {
        return coordinates.map((polygon: number[][][]) => {
          return polygon.map((ring: number[][]) => {
            return "M" + ring.map(coord => project([coord[0], coord[1]]).join(",")).join("L") + "Z";
          }).join(" ");
        }).join(" ");
      }
      return "";
    };

    return features.map((feature) => ({
      id: feature.properties.id,
      name: feature.properties.name,
      d: createPath(feature.geometry.coordinates, feature.geometry.type),
    }));
  }, []);

  // Renklendirme mantığı
  const getCityColor = (id: string) => {
    const city = rabiesData[id];
    if (!city || !(city.confirmedCases > 0 || city.riskContactCount > 0 || city.hospitals > 0 || city.vets > 0 || city.lastCase !== "-")) return "fill-slate-300 hover:fill-slate-400 dark:fill-slate-700 dark:hover:fill-slate-600";
    const risk = city.riskLevel;
    switch (risk) {
      case "high": return "fill-red-600 hover:fill-red-500 dark:fill-red-800 dark:hover:fill-red-700";
      case "medium": return "fill-orange-400 hover:fill-orange-300 dark:fill-orange-600 dark:hover:fill-orange-500";
      default: return "fill-[#8faebc] hover:fill-[#789aa9] dark:fill-[#668795] dark:hover:fill-[#789aa9]";
    }
  };

  // Mouse hareketi ve tooltip konumlandırma
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Yatay konumlandırma: Sağ yarıdaysa sola yasla
    const dirX = x > rect.width / 2 ? "left" : "right";

    // Dikey konumlandırma: Üst yarıdaysa aşağıya yasla
    const dirY = y < rect.height / 2 ? "bottom" : "top";

    setTooltip({ x, y, dirX, dirY });
  };

  return (
    <section className="py-16 bg-background" id="risk-haritasi">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Sol Panel: Bilgi Paneli */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div>
              <Badge variant="outline" className="border-red-200 text-red-600 bg-red-50 mb-2">
                Resmi Veriler (Simülasyon)
              </Badge>
              <h2 className="text-3xl font-bold text-foreground">
                İl Bazlı Risk Haritası
              </h2>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                Kuduz vakalarının yoğunluğuna göre renklendirilmiş güncel Türkiye haritası.
                Şehrinizin üzerine gelerek detaylı durumu görebilirsiniz.
              </p>
            </div>

            <Card className="p-4 bg-card border-none">
              <h4 className="font-semibold text-sm mb-3 text-foreground">Risk Seviyeleri</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-4 h-4 rounded-full bg-red-600 shadow-sm"></div>
                  <span><strong>Yüksek Risk:</strong> Acil eylem planı devrede.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-4 h-4 rounded-full bg-orange-400 shadow-sm"></div>
                  <span><strong>Orta Risk:</strong> Gözetim altında, kısmi vakalar.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-4 h-4 rounded-full bg-muted shadow-sm"></div>
                  <span><strong>Düşük Risk:</strong> Vaka görülmedi veya kontrol altında.</span>
                </div>
              </div>
            </Card>

            <DataDisclaimer compact />
          </div>

          {/* Sağ Panel: İnteraktif Harita */}
          <div
            ref={containerRef}
            className="w-full lg:w-2/3 relative bg-muted/20 rounded-xl p-4 border border-border shadow-inner overflow-hidden group cursor-crosshair"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHoveredCity(null)}
          >
            {/* Düzenleme Butonu */}
            <Link
              href="/katkida-bulun"
              className="absolute top-4 right-4 z-30 p-2 bg-background/60 hover:bg-background/90 backdrop-blur-md rounded-full shadow-sm border border-border/50 transition-all group/edit"
              aria-label="Katkıda Bulun"
            >
              <Edit className="w-4 h-4 text-muted-foreground group-hover/edit:text-primary transition-colors" />
              <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1.5 bg-popover/95 backdrop-blur text-popover-foreground text-xs font-medium rounded-md shadow-lg border border-border/50 opacity-0 group-hover/edit:opacity-100 transition-all duration-200 translate-x-2 group-hover/edit:translate-x-0 whitespace-nowrap pointer-events-none">
                Katkıda Bulun
              </span>
            </Link>

            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="w-full h-auto drop-shadow-lg"
              style={{ maxHeight: "600px" }}
            >
              <g className="transition-all duration-300 ease-in-out">
                {paths.map((city) => (
                  <path
                    key={city.id}
                    id={city.id}
                    d={city.d}
                    className={`
                      stroke-background stroke-[1px] transition-colors duration-200
                      ${getCityColor(city.id)}
                    `}
                    onMouseEnter={() => setHoveredCity(city.id)}
                  />
                ))}
              </g>
            </svg>

            {/* Dinamik Tooltip */}
            {hoveredCity && rabiesData[hoveredCity] && (
              <div
                className="absolute z-20 bg-popover/95 backdrop-blur text-popover-foreground p-4 rounded-lg shadow-2xl pointer-events-none border border-border w-64 transition-transform duration-75 ease-out"
                style={{
                  left: tooltip.x,
                  top: tooltip.y,
                  transform: `translate(${tooltip.dirX === 'left' ? '-100%' : '0'}, ${tooltip.dirY === 'top' ? '-110%' : '20px'})`,
                  marginLeft: tooltip.dirX === 'right' ? '15px' : '0',
                  marginRight: tooltip.dirX === 'left' ? '15px' : '0',
                }}
              >
                <div className="flex justify-between items-center border-b border-border pb-2 mb-2">
                  <span className="font-bold text-lg">
                    {paths.find(p => p.id === hoveredCity)?.name}
                  </span>
                  {rabiesData[hoveredCity].riskLevel === "high" && <Badge variant="destructive" className="text-[10px] h-5">RİSKLİ</Badge>}
                </div>

                <div className="space-y-1 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Risk Durumu:</span>
                    <span className={`font-medium ${rabiesData[hoveredCity].riskLevel === "high" ? "text-red-400" :
                      rabiesData[hoveredCity].riskLevel === "medium" ? "text-orange-400" : "text-emerald-400"
                      }`}>
                      {rabiesData[hoveredCity].riskLevel === "high" ? "Yüksek" :
                        rabiesData[hoveredCity].riskLevel === "medium" ? "Orta" : "Düşük"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Doğrulanmış Vaka:</span>
                    <span className="font-mono font-bold">
                      {rabiesData[hoveredCity].confirmedCases === 0 ? "Veri Yok" : rabiesData[hoveredCity].confirmedCases}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Riskli Temas:</span>
                    <span className="font-mono">
                      {rabiesData[hoveredCity].riskContactCount === 0 ? "Veri Yok" : rabiesData[hoveredCity].riskContactCount}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
