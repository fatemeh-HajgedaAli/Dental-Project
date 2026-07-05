import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "./services.data";
import teeth from "../../assets/images/services/teethPng-services.png";

export default function DentalCarousel() {
  const [rotation, setRotation] = useState(0);
  const [hover, setHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // بررسی سایز صفحه برای تنظیم ابعاد مدار
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // اجرای اولیه
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (hover) return;

    const timer = setInterval(() => {
      setRotation((p) => p - 0.3); // سرعت چرخش ملایم‌تر
    }, 30);

    return () => clearInterval(timer);
  }, [hover]);

  const total = servicesData.length;

  // تنظیم داینامیک ابعاد مدار بر اساس موبایل یا دسکتاپ
  const radiusX = isMobile ? 140 : 350; // شعاع افقی در موبایل کمتر شده
  const radiusY = isMobile ? 70 : 130; // شعاع عمودی در موبایل کمتر شده

  return (
    <div
      className="w-full flex justify-center items-center min-h-[400px] md:min-h-[500px] bg-white relative select-none overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={() => setHover(true)} // پشتیبانی از لمس در موبایل
      onTouchEnd={() => setHover(false)}
    >
      {/* 3D container */}
      <div
        className="relative w-full max-w-[340px] md:max-w-[800px] h-[400px] md:h-[500px] flex items-center justify-center"
        style={{ perspective: 1200 }}
      >
        {/* ۱. teeth center (Center Hub) */}
        <div className="absolute z-40 w-24 h-24 md:w-40 md:h-40 bg-sky-100 rounded-full border-4 border-sky-700 flex flex-col items-center justify-center p-2 md:p-4 text-center">
          <div className="flex items-center justify-center">
            <img
              src={teeth}
              alt="teeth"
              className="w-28 h-20 md:w-60 md:h-40 object-contain mb-4 md:mb-10"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center backdrop-blur-[1px] w-full h-full rounded-full p-1 bottom-6 md:bottom-15">
            <span className="text-[7px] md:text-[10px] font-bold text-sky-700 uppercase tracking-widest drop-shadow-sm">
              Dental Care
            </span>
            <h3 className="text-[10px] md:text-xs font-black text-gray-900 mt-0.5 drop-shadow-sm">
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
