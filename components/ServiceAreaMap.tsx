"use client";

import { MapContainer, TileLayer, Circle, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Centered on a general midpoint of the service area (NOT a home address).
// A ~28km radius circle is used to show coverage as a zone, not a pin.
const CENTER: [number, number] = [50.4452, -104.55];
const RADIUS_METERS = 28000;

const TOWNS: { name: string; pos: [number, number] }[] = [
  { name: "Regina", pos: [50.4452, -104.6189] },
  { name: "White City", pos: [50.4508, -104.4614] },
  { name: "Emerald Park", pos: [50.4256, -104.4681] },
  { name: "Pilot Butte", pos: [50.4636, -104.4331] },
];

export default function ServiceAreaMap() {
  return (
    <MapContainer
      center={CENTER}
      zoom={10}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle
        center={CENTER}
        radius={RADIUS_METERS}
        pathOptions={{ color: "#c99600", fillColor: "#e8b400", fillOpacity: 0.18, weight: 2 }}
      />
      {TOWNS.map((t) => (
        <Circle
          key={t.name}
          center={t.pos}
          radius={900}
          pathOptions={{ color: "#37493c", fillColor: "#37493c", fillOpacity: 0.6, weight: 1 }}
        >
          <Tooltip permanent direction="top" offset={[0, -6]} className="map-town-label">
            {t.name}
          </Tooltip>
        </Circle>
      ))}
    </MapContainer>
  );
}


