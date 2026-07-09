import DentalCarouselDesktop from "./DentalCarouselDesktop";
import DentalCarouselMobile from "./DentalCarouselMobile";

export default function DentalCarousel() {
  return (
    <section
      dir="rtl"
      className="relative w-full overflow-hidden py-12 lg:py-16 bg-transparent"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* ==================== 1. TEXT SECTION (Shared for Mobile & Desktop) ==================== */}
        {/* در دسکتاپ بخشی از گرید می‌شود و در موبایل به صورت مستقل در بالا قرار می‌گیرد */}
        <div className="grid grid-cols-12 items-center gap-6 lg:gap-10">
          <div className="col-span-12 md:col-span-5 lg:col-span-4 text-center md:text-right">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-sky-200/70 bg-white/70 backdrop-blur-xl px-5 py-2 shadow-lg">
              <span className="text-xs font-black tracking-[0.25em] text-sky-700">
                DIGITAL DENTISTRY
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
            </div>

            {/* Title */}
            <h1 className="mt-6 text-5xl lg:text-6xl xl:text-7xl font-black leading-none bg-gradient-to-l from-sky-600 via-cyan-400 to-blue-900 bg-clip-text text-transparent">
              دندانپزشکی
            </h1>

            {/* Subtitle */}
            <h2 className="mt-4 text-2xl lg:text-4xl font-black text-sky-950">
              دیجیتال و تخصصی
            </h2>

            {/* Description */}
            <p className="mt-5 text-sm lg:text-base leading-7 lg:leading-8 text-slate-500 max-w-md mx-auto md:mx-0">
              ارائه خدمات تخصصی دندانپزشکی با جدیدترین تکنولوژی روز دنیا، ترکیبی
              از دانش، تجربه و تجهیزات پیشرفته برای ساختن لبخندی سالم‌تر و
              زیباتر.
            </p>

            {/* Stats */}
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <div className="rounded-2xl bg-white/70 backdrop-blur-xl border border-sky-100 px-5 py-3 shadow-md">
                <strong className="block text-xl font-black text-sky-600">
                  +۱۰
                </strong>
                <span className="text-xs text-gray-500">سال تجربه</span>
              </div>

              <div className="rounded-2xl bg-white/70 backdrop-blur-xl border border-sky-100 px-5 py-3 shadow-md">
                <strong className="block text-xl font-black text-sky-600">
                  +۵۰۰۰
                </strong>
                <span className="text-xs text-gray-500">لبخند زیبا</span>
              </div>
            </div>
          </div>

          {/* ==================== 2. DESKTOP ORBIT ==================== */}
          {/* این بخش فقط در دسکتاپ و تبلت در کنار متن رندر می‌شود */}
          <div className="hidden md:block md:col-span-7 lg:col-span-8 ">
            <DentalCarouselDesktop />
          </div>
        </div>

        {/* ==================== 3. MOBILE ORBIT ==================== */}
        {/* این بخش فقط در موبایل، پایین متن‌ها رندر می‌شود */}
        <div className="md:hidden mt-8">
          <DentalCarouselMobile />
        </div>
      </div>
    </section>
  );
}
