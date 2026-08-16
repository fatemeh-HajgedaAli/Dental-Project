import { ArrowLeft, Sparkles } from "lucide-react";

export default function FooterCTA() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-blue-950/80 to-slate-950 p-6 shadow-2xl shadow-blue-950/30 transition-all duration-500 hover:border-cyan-400/20 sm:p-8 lg:p-10">
      {/* Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />

      <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-blue-600/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-right">
        {/* Text */}
        <div className="max-w-2xl">
          {/* Doctor */}
          <div className="mb-4 flex items-center justify-center gap-2 md:justify-start">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/10">
              <Sparkles className="h-4 w-4 text-cyan-400" />
            </span>

            <span className="text-xs font-bold tracking-[0.2em] text-cyan-400">
              Dr. Zohreh Safdarian
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
            لبخند زیبای شما،
            <span className="block text-cyan-400">اولویت ماست.</span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            برای دریافت مشاوره تخصصی و رزرو نوبت، همین حالا درخواست خود را ثبت
            کنید و اولین قدم را برای داشتن لبخندی زیباتر بردارید.
          </p>
        </div>

        {/* CTA Button */}
        <button
          type="button"
          onClick={scrollToContact}
          className="group/btn flex shrink-0 items-center gap-3 rounded-2xl bg-cyan-400 px-6 py-4 text-sm font-black text-slate-950 shadow-lg shadow-cyan-400/20 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-400/30 active:translate-y-0"
        >
          <span>رزرو نوبت</span>

          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950/10 transition-transform duration-300 group-hover/btn:-translate-x-1">
            <ArrowLeft className="h-4 w-4" />
          </span>
        </button>
      </div>
    </div>
  );
}
