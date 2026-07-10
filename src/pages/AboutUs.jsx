import AboutBackground from "../components/aboutus/AboutBackground";
import AboutUsContent from "../components/aboutus/AboutUsContent";
import AboutImplant from "../components/aboutus/aboutusParts/AboutImplant";

export default function AboutUs() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent py-20 lg:py-28">
      {/* ۱. لود کردن بک‌گراند نئونی و افکت نویز */}
      <AboutBackground />

      {/* ۲. کانتینر اصلی مهارکننده لایه‌ها */}
      <div
        className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-12 gap-8 lg:gap-4 items-center"
        dir="rtl"
      >
        {/* بخش متنی معرفی (۵ ستون در دسکتاپ) */}
        <div className="col-span-12 lg:col-span-5 w-full z-20">
          <AboutUsContent />
        </div>

        {/* ⚡ خط جداکننده لیزری و مدرن وسط دو بخش */}
        <div className="hidden lg:flex col-span-1 h-[450px] items-center justify-center relative z-20">
          <div className="w-[1px] h-3/4 bg-gradient-to-b from-transparent via-sky-200 to-transparent relative">
            {/* نقطه پالس درخشان */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-sky-500 rounded-full shadow-[0_0_12px_#0ea5e9] animate-ping" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-sky-500 rounded-full" />
          </div>
        </div>

        {/* بخش دندان و ایمپلنت متحرک (۶ ستون در دسکتاپ) */}
        <div className="col-span-12 lg:col-span-6 w-full flex justify-center items-center z-10">
          <AboutImplant />
        </div>
      </div>
    </section>
  );
}
