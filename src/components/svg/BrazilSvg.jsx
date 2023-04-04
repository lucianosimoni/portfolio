import { useState } from "react";

export default function BrazilSvg() {
  const [viewBox, setViewBox] = useState("0 0 612 640");
  const strokeColor = "#14213d";
  const strokeWidth = "4";

  const handleSVGLoad = (event) => {
    const parentWidth = event.target.parentElement.offsetWidth;
    const parentHeight = event.target.parentElement.offsetHeight;
    setViewBox(`0 0 ${parentWidth} ${parentHeight}`);
  };

  return (
    <div className="h-full w-full relative">
      {/* BRAZIL MAP IMAGE */}
      <div className="absolute top-0 left-0 h-full w-full bg-cover bg-brazil" />

      {/* AMAZONAS SVG */}
      <svg
        onLoad={handleSVGLoad}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        className="text-palette-green drop-shadow-xl group overflow-visible"
      >
        <path
          d="M168.16257,48.681144l8.68,3.7-1.62,4.82l5.45,11.88-1.57,1.91l2.65,16.06-2.05,7.04l7.49,5.77l4.39,3.339996l2.36,1.04l1.01-10.899996l4.94-3.55l6.3,2.91l2.74,2.74l5.13-3.34-1.26-2.8l5.21-10.06l18.46-.61v0l.39,9.26l18.3,18.799996l7.87,2.78l8.34,7.17l2.23-.96l1.87,2.93-29.9,64.24-2.81,3.41l2.24,4.61l2.94,5.35v0l-2.57,6.24-2.62,15.09-49.06,1.05v0l-1.71-1.36-3.14,3.01-3.24-1.48-.68-2.88-3.31-3.55-5.12-4.65-12.94-1.07-9.26,13.58.24,1.46-6-.08-6.04,1.66-2.81,5.75-2-2.71-5.66,2.4-3.21,2.56-3.03-2.7-6.83.07-1.54,3.66-5.18,3.14v0l-28.509996-12.13-26.44-14.17-35.8-8.8-17.95-7.48v0l1.85-4.97l4.92-3.47l3.79-3.13-1.74-4.49l2.84-4.7l1.35-5.29l1.71-5.1l7-3.9l1.22-1.77l1.41-.11l5.19-3.66l3.93-.14l4.19-1.22l6.65-.75l3.02-3.65l5.2-.24l3.61,3.12l4.93-6.41l6.7-37.17-2.4-15.599996-7.04-5.62.2-11.51l9.14-2.35l5.17,1.44-1.56-5.51-1.72-1.14-7.87.01-.06-9.9l4.56-1.14l2.84.87l19.03.06-1.63-2l.95-1.93l6.01,2.99l3.519996-4.17l2.55-1.39l1.29.46l1.17,2.58l3.02,5.07-.06,6.94l3.2-.75l8.31,7.06l9.4-3.37l3.52,1.26-.18,3.92l8.03-8.01l11.59-4.82l4.09-7.34l11.79-3.21Z"
          title="Amazonas"
          fill="currentColor"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          className="text-palette-yellow cursor-pointer group-hover:drop-shadow-2xl group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-700"
        />
      </svg>
    </div>
  );
}
