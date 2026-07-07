// کامپوننت چرخ‌دنده خدمات (DentalCarousel.jsx)
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "./services.data";
import teeth from "../../assets/images/services/teethPng-services.png";

export default function DentalCarousel() {
  const [rotation, setRotation] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (hover) return;

    const timer = setInterval(() => {
      setRotation((p) => p - 0.3); // سرعت چرخش ملایم‌تر
    }, 30);

    return () => clearInterval(timer);
  }, [hover]);

  const total = servicesData.length;

  // تنظیم دقیق ابعاد مدار و چرخش برای انطباق کامل
  const radiusX = 350; // شعاع افقی چرخش
  const radiusY = 130; // شعاع عمودی چرخش

  return (
    <div
      className="w-full flex justify-center items-center min-h-[300px] bg-white relative select-none  "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* 3D container */}
      <div
        className="relative w-[800px] h-[500px] flex items-center justify-center"
        style={{ perspective: 1200 }}
      >
        {/* ۱. teeth center (Center Hub) */}

        <div className="absolute z-40 w-40 h-40 bg-sky-100  rounded-full  border-4 border-sky-700 flex flex-col items-center justify-center  p-4 text-center">
          <div className="">
            <img
              src={teeth}
              alt="teeth"
              className="w-60 h-40 obiect-contain mb-10"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center  backdrop-blur-[1px] w-full h-full rounded-full p-2 bottom-15">
            <span className="text-[10px] font-bold text-sky-700 uppercase tracking-widest drop-shadow-sm">
              Dental Care
            </span>

            <h3 className="text-xs font-black text-gray-900 mt-0.5 drop-shadow-sm">
              خدمات تخصصی
            </h3>
          </div>
        </div>
        {/* orbit */}
        <div
          className="absolute border-2 border-dashed border-sky-200/80 rounded-[50%] pointer-events-none z-10"
          style={{
            width: radiusX * 2,
            height: radiusY * 2,
          }}
        />

        {/* ۳. رندر داینامیک کارت‌ها */}
        {servicesData.map((service, index) => {
          const angle = ((360 / total) * index + rotation) * (Math.PI / 180);

          // محاسبه موقعیت دقیق بر اساس مرکز کانتینر
          const x = Math.cos(angle) * radiusX;
          const y = Math.sin(angle) * radiusY;

          const sin = Math.sin(angle);

          // محاسبات دقیق پرسپکتیو
          const scale = 0.8 + (sin + 1) * 0.12;
          const opacity = 0.45 + (sin + 1) * 0.27;
          const zIndex = Math.round((sin + 1) * 20);

          return (
            <ServiceCard
              key={service.id || index}
              service={service}
              x={x}
              y={y}
              scale={scale}
              opacity={opacity}
              zIndex={zIndex}
            />
          );
        })}
      </div>
    </div>
  );
}
