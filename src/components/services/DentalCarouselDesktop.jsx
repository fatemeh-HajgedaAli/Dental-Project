import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "./services.data";
import teeth from "../../assets/images/services/pngTeeth.png";

export default function DentalCarouselDesktop() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const items = servicesData.slice(0, 5);
  const radius = width < 1024 ? 200 : width < 1280 ? 250 : 300;

  return (
    <div
      className="relative w-full h-[600px]
       lg:h-[700px]  -mt-7
    flex items-center justify-center
     overflow-hidden "
    >
      {/* BACK GLOW */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

      {/* OUTER ORBIT */}
      <div
        className="absolute rounded-full border-2 border-dashed border-sky-600/40 animate-[spin_45s_linear_infinite]"
        style={{ width: radius * 2.3, height: radius * 2.3 }}
      />

      {/* INNER ORBIT */}
      <div
        className="absolute rounded-full border-6 border-dashed border-sky-200/60 animate-[spin_30s_linear_infinite_reverse]"
        style={{ width: radius * 1.5, height: radius * 1.5 }}
      />

      {/* CENTER TOOTH */}
      <div
        className="absolute z-20 flex items-center 
      justify-center -left-1 top-18"
      >
        <div
          className="absolute w-52 h-52 lg:w-72 lg:h-72 
        rounded-full bg-sky-400/20 blur-3xl animate-pulse"
        />
        <img
          src={teeth}
          alt="Dental"
          className="relative z-10 w-64 -top-12
          lg:w-[360px] xl:w-[400px] object-contain 
          drop-shadow-[0_25px_40px_rgba(14,165,233,.25)]
           transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* SERVICE CARDS */}
      {items.map((service, index) => {
        const angle = 130 + index * (140 / (items.length - 1));
        const rad = (angle * Math.PI) / 200;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;

        return (
          <ServiceCard
            key={service.id}
            service={service}
            x={-x}
            y={y}
            scale={width < 1024 ? 0.9 : 1}
            opacity={1}
            zIndex={10}
          />
        );
      })}
    </div>
  );
}
