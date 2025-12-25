"use client";

import dynamic from "next/dynamic";

const Snowfall = dynamic(() => import("react-snowfall"), {
  ssr: false,
});

export default function GlobalSnowfall() {
  const month = new Date().getMonth();

  if (month !== 11) return null;

  return (
    <Snowfall
      snowflakeCount={100}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
