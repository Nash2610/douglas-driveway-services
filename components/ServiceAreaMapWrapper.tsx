"use client";

import dynamic from "next/dynamic";

const ServiceAreaMap = dynamic(() => import("./ServiceAreaMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#7a7364",
        fontSize: 14,
      }}
    >
      Loading map…
    </div>
  ),
});

export default function ServiceAreaMapWrapper() {
  return <ServiceAreaMap />;
}
