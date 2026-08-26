"use client";

import { useEffect } from "react";
import { CircleMarker, MapContainer, Popup, TileLayer, useMap } from "react-leaflet";

export type MapPlace = { id: string; lat: number; lng: number; name: string; phone?: string; address?: string };

function Recenter({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => { map.setView(center, 14); }, [center, map]);
  return null;
}

export default function OsmLocationMap({ center, places }: { center: [number, number]; places: MapPlace[] }) {
  return <MapContainer center={center} zoom={14} scrollWheelZoom className="h-full w-full" attributionControl>
    <Recenter center={center} />
    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <CircleMarker center={center} radius={9} pathOptions={{ color: "#fff", weight: 3, fillColor: "#dc2626", fillOpacity: 1 }}><Popup>Konumunuz</Popup></CircleMarker>
    {places.map((place) => <CircleMarker key={place.id} center={[place.lat, place.lng]} radius={7} pathOptions={{ color: "#dc2626", weight: 2, fillColor: "#fff", fillOpacity: 1 }}><Popup><strong>{place.name}</strong>{place.address && <><br />{place.address}</>}{place.phone && <><br /><a href={`tel:${place.phone}`}>{place.phone}</a></>}</Popup></CircleMarker>)}
  </MapContainer>;
}
