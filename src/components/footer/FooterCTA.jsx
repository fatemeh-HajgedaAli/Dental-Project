import { Sparkles } from "lucide-react";

export default function FooterCTA({ onOpenModal }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-blue-600/20 p-6 sm:p-8 lg:p-10">
      {/* Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-right">
        {/* Text */}
        <div>
          <div className="mb-3 flex items-center justify-center gap-2 md:justify-start">
            <Sparkles className="h-4 w-4 text-cyan-400" />

            <span className="text-xs font-bold tracking-widest text-cyan-400">
              Dr.Zohreh Safdarian
            </span>
          </div>

          <h2 className="text-2xl font-black leading-tight text-white sm:text-3xl">
            لبخند زیبای شما،
            <span className="text-cyan-400"> اولویت ماست.</span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
            برای دریافت مشاوره تخصصی و رزرو نوبت، همین حالا درخواست خود را ثبت
            کنید.
          </p>
        </div>

        {/* CTA SECTION */}
        <div className="relative mt-9">
          <button
            type="button"
           onClick={() => {
  console.log("FOOTER BUTTON CLICKED");
  console.log(onOpenModal);
  onOpenModal?.();
}}
            className="
                  group relative w-full sm:w-auto min-w-[250px] overflow-hidden rounded-2xl
                  bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500
                  px-7 py-4 text-white font-extrabold
                  shadow-[0_15px_35px_rgba(37,99,235,0.3)]
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(6,182,212,0.4)]
                  active:translate-y-0
                "
          >
            {/* Button Shine Effect */}
            <span className="absolute inset-y-0 -left-20 w-12 rotate-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[120%]" />

            <span className="relative flex items-center justify-center gap-3">
              <span>تکمیل فرم و رزرو نوبت</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 border border-white/20 transition-all duration-300 group-hover:bg-white/25">
              </span>
            </span>
          </button>
        </div>

        <p className="mt-4 text-[11px] md:text-xs text-slate-400 font-medium">
          ثبت درخواست شما کمتر از یک دقیقه زمان می‌برد.
        </p>
      </div>
    </div>
  );
}
