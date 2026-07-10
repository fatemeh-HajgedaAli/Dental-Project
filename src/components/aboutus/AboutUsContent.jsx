import { motion } from "framer-motion";

export default function AboutUsContent() {
  return (
    <div dir="rtl" className="flex flex-col gap-8 w-full">
      {/* اضافه کردن پوسته شیشه‌ای ملایم برای ادغام شدن با مرز فک زیرین */}
      <div className="text-right space-y-5 max-w-xl mx-auto lg:mx-0 w-full bg-white/30 lg:bg-white/10 lg:backdrop-blur-[2px] p-2 lg:p-6 rounded-3xl border border-transparent lg:border-white/20 transition-all">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-white/90 backdrop-blur-md px-4 py-1 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          <span className="text-[11px] font-black tracking-wider text-sky-800">
            DIGITAL IMPLANT
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
          کاشت دندان مایکرو-دیجیتال <br />
          <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
            با دقت صدم میلی‌متر
          </span>
        </h2>

        {/* Description */}
        <p className="text-sm text-slate-500 leading-7 sm:leading-8">
          در کلینیک ما، ساختار استخوان فک شما با اسکنرهای سه بعدی شبیه‌سازی شده
          و قطعه ایمپلنت با زاویه و عمق کاملاً مهندسی‌شده قرار می‌گیرد؛ به طوری
          که کمترین فشار به بافت‌های مجاور وارد شده و بلافاصله فرآیند جوش خوردن
          استخوان آغاز می‌گردد.
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="flex items-center gap-2 bg-white/70 border border-sky-100 p-3 rounded-xl shadow-sm">
            <span className="text-sky-600 font-bold">✓</span>
            <span className="text-xs font-bold text-slate-700">
              جراحی میکروسکوپی
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white/70 border border-sky-100 p-3 rounded-xl shadow-sm">
            <span className="text-sky-600 font-bold">✓</span>
            <span className="text-xs font-bold text-slate-700">
              تراز صدم میلی‌متری
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
