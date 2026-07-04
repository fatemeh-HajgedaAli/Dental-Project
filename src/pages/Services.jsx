import Reveal from "./Reveal";
import DentalCarousel from "../components/services/DentalCarousel";

export default function Services() {
  return (
    <section id="services" className="mt-5  " dir="rtl">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-sky-500 font-semibold tracking-[0.2em] text-2xl mb-4">
            خدمات ما
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-sky-700">
            مراقبتی ویژه برای هر لبخند
          </h2>

          <p className="mt-5 text-gray-500 text-sm leading-8">
            از چکاپ‌های دوره‌ای گرفته تا طراحی لبخند، تمامی خدمات با جدیدترین
            تجهیزات و توسط تیم متخصص ارائه می‌شوند.
          </p>
        </Reveal>

        <DentalCarousel />
      </div>
    </section>
  );
}
