import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "./services.data";
import teeth from "../../assets/images/services/pngTeeth.png";

export default function DentalCarousel() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const items = servicesData.slice(0, 5);

  const radius =
    width < 480 ? 100 : width < 640 ? 130 : width < 1024 ? 220 : 300;

  return (
    <section dir="rtl">
      <div
        className="
        max-w-[1250px]
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-12
        items-center
        gap-6
        "
      >
        {/* TEXT */}
        <div
          className="
          lg:col-span-4
          order-1
          text-center
          lg:text-right
          lg:-mr-10
          "
        >
          <div
            className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-sky-200
            bg-white/80
            backdrop-blur-xl
            px-5
            py-2
            shadow-lg
            "
          >
            <span
              className="
              w-2.5
              h-2.5
              rounded-full
              bg-sky-500
              animate-pulse
              "
            />

            <span
              className="
              text-[11px]
              md:text-sm
              font-bold
              tracking-[0.3em]
              text-sky-700
              uppercase
              "
            >
              Our Services
            </span>
          </div>

          <h1
            className="
            mt-6
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            font-black
            leading-none
            bg-gradient-to-l
            from-sky-500
            via-cyan-400
            to-sky-800
            bg-clip-text
            text-transparent
            drop-shadow-xl
            "
          >
            دندانپزشکی
          </h1>

          <h2
            className="
            mt-3
            text-xl
            md:text-3xl
            font-black
            text-sky-900
            "
          >
            دیجیتال و تخصصی
          </h2>

          <p
            className="
            mt-5
            text-xs
            md:text-base
            text-gray-400
            leading-7
            max-w-sm
            mx-auto
            lg:mx-0
            "
          >
            ارائه خدمات تخصصی دندانپزشکی با جدیدترین تکنولوژی روز دنیا، برای
            لبخندی سالم‌تر و زیباتر.
          </p>

          <div
            className="
            mt-5
            flex
            justify-center
            lg:justify-start
            gap-1
            "
          >
            <span className="w-14 h-1 rounded-full bg-sky-700" />
            <span className="w-8 h-1 rounded-full bg-sky-500" />
            <span className="w-4 h-1 rounded-full bg-sky-300" />
          </div>
        </div>

        {/* ORBIT */}
        <div
          className="
          lg:col-span-8
          order-2
          relative
          h-[360px]
          sm:h-[450px]
          md:h-[620px]
          flex
          items-center
          justify-center
          "
        >
          {/* OUTER RING */}
          <div
            className="
            absolute
            rounded-full
            border-2
            border-dashed
            border-sky-300/60
            "
            style={{
              width: radius * 2.5,
              height: radius * 2.5,
            }}
          />

          {/* INNER RING */}
          <div
            className="
            absolute
            rounded-full
            border
            border-dashed
            border-sky-200
            "
            style={{
              width: radius * 1.7,
              height: radius * 1.7,
            }}
          />

          {/* TEETH CENTER */}
          <div
            className="
  absolute
  z-30
  flex
  items-center
  justify-center
  -translate-x-20
  sm:-translate-x-20
  md:translate-x-28
  lg:-translate-x-40
  "
          >
            <img
              src={teeth}
              alt="teeth"
              className="
              w-40
              sm:w-56
              md:w-[420px]
              lg:w-[500px]
              object-contain
              drop-shadow-2xl
              "
            />
          </div>

          {/* CARDS */}
          {items.map((service, index) => {
            const start = width < 640 ? 130 : 135;
            const end = width < 640 ? 230 : 225;

            const angle = start + index * ((end - start) / (items.length - 1));

            const rad = (angle * Math.PI) / 180;

            const x = Math.cos(rad) * radius + (width < 640 ? 20 : 50);

            const y = Math.sin(rad) * radius;

            return (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                x={-x}
                y={y}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
