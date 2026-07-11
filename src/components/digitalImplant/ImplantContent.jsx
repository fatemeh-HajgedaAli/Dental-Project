import { motion } from "framer-motion";
import { ShieldCheck, ScanFace, Sparkles, ArrowLeft } from "lucide-react";

export default function ImplantContent() {
  return (
    <div dir="rtl" className="relative w-full mt-10 lg:mt-5">
      {/* Gradient Blur */}
      <div className="absolute -top-2 right-10 w-100 h-100 rounded-full bg-sky-300/20 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-xl"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-white/90 backdrop-blur-md px-4 py-1 shadow-sm">
          <span className="text-[11px] font-black tracking-[3px] text-sky-800">
            DIGITAL IMPLANT
          </span>
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
        </div>

        {/* Title */}
        <h2 className="mt-6 text-6xl lg:text-6xl font-black
         leading-tight text-slate-900">
          آینده‌ی
          <br />
          <span className="relative inline-block mt-2">
            <span className="absolute inset-0 blur-2xl
             bg-sky-300/40 rounded-full"></span>

            <span className="relative bg-gradient-to-r from-sky-700
             via-cyan-500 to-sky-500 bg-clip-text 
             text-transparent">
              کاشت دندان
            </span>
          </span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-slate-500 leading-8 text-[14px]">
          با استفاده از اسکن سه‌بعدی، موقعیت استخوان فک با دقت فوق‌العاده تحلیل
          می‌شود و ایمپلنت دقیقاً در بهترین زاویه قرار می‌گیرد تا ماندگاری،
          زیبایی و سرعت ترمیم به حداکثر برسد.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="rounded-2xl border border-sky-100 bg-white/70 backdrop-blur-md p-5">
            <h3 className="text-3xl font-black text-sky-600">99%</h3>
            <p className="text-xs mt-1 text-slate-500">موفقیت درمان</p>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-white/70 backdrop-blur-md p-5">
            <h3 className="text-3xl font-black text-sky-600">3D</h3>
            <p className="text-xs mt-1 text-slate-500">اسکن دیجیتال</p>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-white/70 backdrop-blur-md p-5">
            <h3 className="text-3xl font-black text-sky-600">30m</h3>
            <p className="text-xs mt-1 text-slate-500">میانگین جراحی</p>
          </div>
        </div>

        {/* Features */}
        <div className="grid gap-2 mt-4 cursor-pointer">
          <motion.div
            whileHover={{ x: -6 }}
            className="flex items-center gap-4 rounded-2xl bg-white/70 border border-sky-100 p-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
              <ScanFace className="text-sky-600" size={22} />
            </div>

            <div>
              <h4 className="font-bold">اسکن سه‌بعدی استخوان</h4>
              <p className="text-sm text-slate-500">
                تعیین دقیق محل کاشت قبل از شروع درمان
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ x: -6 }}
            className="flex items-center gap-4 rounded-2xl bg-white/70 border border-sky-100 p-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
              <ShieldCheck className="text-cyan-600" size={22} />
            </div>

            <div>
              <h4 className="font-bold">جراحی کم تهاجمی</h4>
              <p className="text-sm text-slate-500">
                کاهش درد، خونریزی و زمان نقاهت
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ x: -6 }}
            className="flex items-center gap-4 rounded-2xl bg-white/70 border border-sky-100 p-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
              <Sparkles className="text-sky-600" size={22} />
            </div>

            <div>
              <h4 className="font-bold">نتیجه طبیعی</h4>
              <p className="text-sm text-slate-500">
                هماهنگی کامل با فرم لبخند و دندان‌های اطراف
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
