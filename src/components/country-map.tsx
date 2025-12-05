"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

// -- TİP TANIMLAMALARI --
type Feature = {
    type: string;
    properties: {
        id: string;
        name: string;
        [key: string]: any;
    };
    geometry: {
        type: "Polygon" | "MultiPolygon";
        coordinates: number[][][][] | number[][][];
    };
};

interface CountryMapProps {
    geoData: any;
    countryName: string;
    riskLevel: "high" | "medium" | "low" | "free";
}

export function CountryMap({ geoData, countryName, riskLevel }: CountryMapProps) {
    const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

    // Tooltip konfigürasyonu
    const [tooltip, setTooltip] = useState({
        x: 0,
        y: 0,
        dirX: "right",
        dirY: "top"
    });

    const containerRef = useRef<HTMLDivElement>(null);
    const width = 800;
    const height = 600;

    // -- 1. HARİTA HESAPLAMASI (PROJEKSİYON) --
    const paths = useMemo(() => {
        if (!geoData || !geoData.features) return [];

        const features = geoData.features as Feature[];
        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

        // Koordinat sınırlarını bul
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

        // En boy oranını koruyarak ölçekleme
        const dataWidth = maxX - minX;
        const dataHeight = maxY - minY;
        const scale = Math.min(width / dataWidth, height / dataHeight) * 0.9; // %90 doluluk

        // Ortalamak için offset
        const offsetX = (width - dataWidth * scale) / 2;
        const offsetY = (height - dataHeight * scale) / 2;

        const project = ([lon, lat]: [number, number]) => {
            const x = (lon - minX) * scale + offsetX;
            // Y eksenini ters çevir (SVG koordinat sistemi için)
            const y = height - ((lat - minY) * scale + offsetY);
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

        return features.map((feature, index) => ({
            id: feature.properties.id || `region-${index}`,
            name: feature.properties.name || "Bölge",
            d: createPath(feature.geometry.coordinates, feature.geometry.type),
        }));
    }, [geoData]);

    // -- 2. RENKLENDİRME --
    const getRegionColor = () => {
        switch (riskLevel) {
            case "high": return "fill-red-600 hover:fill-red-500 dark:fill-red-800 dark:hover:fill-red-700";
            case "medium": return "fill-orange-400 hover:fill-orange-300 dark:fill-orange-600 dark:hover:fill-orange-500";
            case "low": return "fill-yellow-400 hover:fill-yellow-300 dark:fill-yellow-600 dark:hover:fill-yellow-500";
            case "free": return "fill-green-500 hover:fill-green-400 dark:fill-green-700 dark:hover:fill-green-600";
            default: return "fill-slate-300 hover:fill-slate-400 dark:fill-slate-700 dark:hover:fill-slate-600";
        }
    };

    // -- 3. MOUSE HAREKETİ --
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const dirX = x > rect.width / 2 ? "left" : "right";
        const dirY = y < rect.height / 2 ? "bottom" : "top";

        setTooltip({ x, y, dirX, dirY });
    };

    if (paths.length === 0) {
        return (
            <div className="w-full h-64 flex items-center justify-center bg-muted/20 rounded-xl border border-border">
                <p className="text-muted-foreground">Harita verisi yüklenemedi.</p>
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            className="w-full h-full relative bg-muted/20 rounded-xl p-4 border border-border shadow-inner overflow-hidden group cursor-crosshair flex flex-col items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHoveredRegion(null)}
        >
            <div className="absolute top-4 left-4 z-10">
                <Badge variant="outline" className="bg-background/80 backdrop-blur">
                    {countryName} Haritası
                </Badge>
            </div>

            <svg
                viewBox={`0 0 ${width} ${height}`}
                className="w-full h-auto drop-shadow-lg"
                style={{ maxHeight: "600px" }}
            >
                <g className="transition-all duration-300 ease-in-out">
                    {paths.map((region) => (
                        <path
                            key={region.id}
                            id={region.id}
                            d={region.d}
                            className={`
                stroke-background stroke-[1px] transition-colors duration-200
                ${getRegionColor()}
              `}
                            onMouseEnter={() => setHoveredRegion(region.name)}
                        />
                    ))}
                </g>
            </svg>

            {/* TOOLTIP */}
            {hoveredRegion && (
                <div
                    className="absolute z-20 bg-popover/95 backdrop-blur text-popover-foreground px-3 py-2 rounded-lg shadow-xl pointer-events-none border border-border transition-transform duration-75 ease-out whitespace-nowrap"
                    style={{
                        left: tooltip.x,
                        top: tooltip.y,
                        transform: `translate(${tooltip.dirX === 'left' ? '-100%' : '0'}, ${tooltip.dirY === 'top' ? '-110%' : '20px'})`,
                        marginLeft: tooltip.dirX === 'right' ? '15px' : '0',
                        marginRight: tooltip.dirX === 'left' ? '15px' : '0',
                    }}
                >
                    <span className="font-bold text-sm">{hoveredRegion}</span>
                </div>
            )}
        </div>
    );
}
