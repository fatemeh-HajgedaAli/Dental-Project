import ServiceCard from "./ServiceCard";
import { servicesData } from "./services.data";
import teeth from "../../assets/images/services/pngTeeth.png";

export default function DentalCarouselMobile() {
  const items = servicesData.slice(0, 5);

  // شعاع مدار برای موبایل (بهینه‌شده برای عرض اسکرین موبایل)
  const radius = 125;

  return (
    <section dir="rtl" className="relative w-full overflow-hidden py-10">
      {/* ⚡ ارتفاع ثابت و پوزیشن دقیق ریلیتیو برای محاسبات فرزندان */}
      <div className="relative h-[480px] w-full flex items-center justify-center">
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
        <div className="absolute z-20 flex items-center justify-center">
          <div className="absolute w-44 h-44 rounded-full bg-sky-400/20 blur-3xl animate-pulse" />
          <img
            src={teeth}
            alt="Dental"
            className="relative z-10 w-[180px] object-contain drop-shadow-[0_15px_30px_rgba(14,165,233,.25)]"
          />
        </div>

        {/* MOBILE ORBIT CARDS */}
        {items.map((service, index) => {
          // زاویه قوسی شکل زیر دندان مرکزی (۱۲۰ تا ۲۴۰ درجه)
          const angle = 180 + index * (180 / (items.length - 1));
          const rad = (angle * Math.PI) / 180;

          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <ServiceCard
              key={service.id}
              service={service}
              x={-x}
              y={y}
              scale={0.72}
              opacity={1}
              zIndex={30}
            />
          );
        })}
      </div>
    </section>
  );
}
