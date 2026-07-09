import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "./services.data";
import teeth from "../../assets/images/services/pngTeeth.png";

export default function DentalCarousel() {
  const [width, setWidth] = useState(1024);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };

    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
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
text-center
lg:text-right
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
text-xs
md:text-sm
font-bold
tracking-widest
text-sky-700
"
            >
              Our Services
            </span>
          </div>

          <h1
            className="
mt-6
text-5xl
md:text-7xl
font-black
leading-none
bg-gradient-to-l
from-sky-500
via-cyan-400
to-sky-800
bg-clip-text
text-transparent
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
text-sm
md:text-base
text-gray-400
leading-7
"
          >
            ارائه خدمات تخصصی دندانپزشکی با جدیدترین تکنولوژی روز دنیا، برای
            لبخندی سالم‌تر و زیباتر.
          </p>
        </div>

        {/* ORBIT */}

        <div
          className="
lg:col-span-8
relative
h-[420px]
md:h-[600px]
flex
items-center
justify-center
overflow-hidden
"
        >
          {/* rings */}

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

          {/* center tooth */}

          <div
            className="
absolute
z-20
flex
items-center
justify-center
"
          >
            <img
              src={teeth}
              alt="teeth"
              className="
w-40
sm:w-56
md:w-[420px]
object-contain
drop-shadow-2xl
"
            />
          </div>

          {/* cards */}

          {items.map((service, index) => {
            const angle = 130 + index * (100 / (items.length - 1));

            const rad = (angle * Math.PI) / 180;

            const x = Math.cos(rad) * radius;

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
