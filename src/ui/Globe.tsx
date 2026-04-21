"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const size = 600;
    let phi = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio, 2),
      width: size * Math.min(window.devicePixelRatio, 2),   // 👈
      height: size * Math.min(window.devicePixelRatio, 2),  // 👈
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 40000,
      mapBrightness: 8,
      baseColor: [0.8, 0.8, 0.8],
      markerColor: [1, 0, 0],
      glowColor: [1, 1, 1],
      markers: [
        { location: [40.4168, -3.7038], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => globe.destroy();
  }, []);

  return (
    <div style={{ width: 600, height: 600 }}>
      <canvas
        ref={canvasRef}
        width={600}     // 👈 atributo HTML, no solo CSS
        height={600}    // 👈 atributo HTML, no solo CSS
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
}