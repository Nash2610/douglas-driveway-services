// "use client";

// import { MapContainer, TileLayer, Circle, Tooltip } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// // Centered on a general midpoint of the service area (NOT a home address).
// // A ~28km radius circle is used to show coverage as a zone, not a pin.
// const CENTER: [number, number] = [50.4452, -104.55];
// const RADIUS_METERS = 28000;

// const TOWNS: { name: string; pos: [number, number] }[] = [
//   { name: "Regina", pos: [50.4452, -104.6189] },
//   { name: "White City", pos: [50.4508, -104.4614] },
//   { name: "Emerald Park", pos: [50.4256, -104.4681] },
//   { name: "Pilot Butte", pos: [50.4636, -104.4331] },
// ];

// export default function ServiceAreaMap() {
//   return (
//     <MapContainer
//       center={CENTER}
//       zoom={10}
//       scrollWheelZoom={false}
//       style={{ height: "100%", width: "100%" }}
//     >
//       <TileLayer
//         attribution='&copy; OpenStreetMap contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Circle
//         center={CENTER}
//         radius={RADIUS_METERS}
//         pathOptions={{ color: "#c99600", fillColor: "#e8b400", fillOpacity: 0.18, weight: 2 }}
//       />
//       {TOWNS.map((t) => (
//         <Circle
//           key={t.name}
//           center={t.pos}
//           radius={900}
//           pathOptions={{ color: "#37493c", fillColor: "#37493c", fillOpacity: 0.6, weight: 1 }}
//         >
//           <Tooltip permanent direction="top" offset={[0, -6]} className="map-town-label">
//             {t.name}
//           </Tooltip>
//         </Circle>
//       ))}
//     </MapContainer>
//   );
// }


"use client";

import { MapContainer, TileLayer, Polygon, Circle, Tooltip, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const TOWNS: { name: string; pos: [number, number]; dir: "top" | "bottom" | "left" | "right"; offset: [number, number] }[] = [
  { name: "Regina",       pos: [50.4452, -104.6189], dir: "left",   offset: [-8, 0]  },
  { name: "White City",   pos: [50.4508, -104.4614], dir: "right",  offset: [8, 0]   },
  { name: "Emerald Park", pos: [50.4256, -104.4681], dir: "bottom", offset: [0, 8]   },
  { name: "Pilot Butte",  pos: [50.4636, -104.4331], dir: "top",    offset: [0, -8]  },
  { name: "Moose Jaw",    pos: [50.3934, -105.5347], dir: "left",   offset: [-8, 0]  },
  { name: "Qu'Appelle",   pos: [50.5195, -103.8849], dir: "right",  offset: [8, 0]   },
];

function generateEllipse(
  centerLat: number,
  centerLng: number,
  latRadius: number,
  lngRadius: number,
  points = 64
): [number, number][] {
  const coords: [number, number][] = [];
  for (let i = 0; i < points; i++) {
    const angle = (i / points) * 2 * Math.PI;
    coords.push([
      centerLat + latRadius * Math.sin(angle),
      centerLng + lngRadius * Math.cos(angle),
    ]);
  }
  return coords;
}

const ELLIPSE = generateEllipse(50.42, -104.62, 0.55, 0.95);

function FitToTowns() {
  const map = useMap();
  useEffect(() => {
    const bounds = L.latLngBounds(TOWNS.map((t) => t.pos));
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [map]);
  return null;
}

export default function ServiceAreaMap() {
  return (
    <MapContainer
      center={[50.4452, -104.6189]}
      zoom={9}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <FitToTowns />
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polygon
        positions={ELLIPSE}
        pathOptions={{
          color: "#c99600",
          fillColor: "#e8b400",
          fillOpacity: 0.15,
          weight: 2.5,
          dashArray: "6 4",
        }}
      />
      {TOWNS.map((t) => (
        <Circle
          key={t.name}
          center={t.pos}
          radius={900}
          pathOptions={{
            color: "#37493c",
            fillColor: "#37493c",
            fillOpacity: 0.7,
            weight: 1,
          }}
        >
          <Tooltip permanent direction={t.dir} offset={t.offset}>
            {t.name}
          </Tooltip>
        </Circle>
      ))}
    </MapContainer>
  );
}


