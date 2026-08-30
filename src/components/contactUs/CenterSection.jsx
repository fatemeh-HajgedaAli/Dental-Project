import React from "react";
import {
  ArrowLeft,
  CalendarCheck2,
  Clock3,
  ShieldCheck,
  Sparkles,
  Phone,
  CheckCircle2,
} from "lucide-react";

// --- Sub-components for cleaner structure ---

const TrustCard = ({ icon: Icon, title, desc }) => (
  <div className="group/item flex items-center gap-4 rounded-2xl border border-[#DCE6EB] bg-[#F5F9FB]/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6B9DBA]/30 hover:bg-white hover:shadow-[0_15px_30px_-15px_rgba(54,91,110,0.15)]">
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6B9DBA]/10 text-[#5F94B1] transition-transform duration-300 group-hover/item:scale-110">
      <Icon className="h-5 w-5" />
    </span>
    <div>
      <p className="font-['Vazirmatn'] text-sm font-bold text-[#27343B]">
        {title}
      </p>
      <p className="mt-0.5 font-['Vazirmatn'] text-[11px] text-[#89969D]">
        {desc}
      </p>
    </div>
  </div>
);

const ToothSvg = () => (
  <svg viewBox="0 0 200 240" className="h-full w-full" fill="none">
    <defs>
      <linearGradient
        id="toothGradient"
        x1="30"
        y1="20"
        x2="170"
        y2="220"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="45%" stopColor="#EAF5F8" />
        <stop offset="75%" stopColor="#C9E0E7" />
        <stop offset="100%" stopColor="#8DB5C3" />
      </linearGradient>

      <linearGradient id="toothHighlight" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </linearGradient>
    </defs>

    <path
      d="M100 8c-24 0-38 14-52 14-16 0-30-10-38-4-9 7-6 24 0 40 5 14 4 26 6 44 2 20 8 38 16 60 6 16 12 34 22 34 12 0 12-30 14-48 1-10 4-18 12-18s11 8 12 18c2 18 2 48 14 48 10 0 16-18 22-34 8-22 14-40 16-60 2-18 1-30 6-44 6-16 9-33 0-40-8-6-22 4-38 4-14 0-28-14-52-14Z"
      fill="url(#toothGradient)"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeOpacity="0.65"
    />

    <path
      d="M63 31c-14 5-25 1-34 6-6 4-3 15 2 28"
      stroke="url(#toothHighlight)"
      strokeWidth="10"
      strokeLinecap="round"
      opacity="0.8"
    />

    <path
      d="M50 61c-5 18-1 44 8 68"
      stroke="#FFFFFF"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.25"
    />
  </svg>
);

// --- Main Component ---

export default function CenterSection({ onOpenModal }) {
  const handleCall = () => {
    window.location.href = "tel:03153238027";
  };

  const trustItems = [
    {
      icon: Clock3,
      title: "پاسخگویی سریع",
      desc: "هماهنگی در کوتاه‌ترین زمان",
    },
    {
      icon: ShieldCheck,
      title: "مشاوره تخصصی",
      desc: "بررسی دقیق نیاز شما",
    },
  ];

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#F4F8FB] px-4 py-16 sm:px-6 md:px-10 md:py-24 lg:px-20 lg:py-32">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#6B9DBA]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#B9D7E8]/20 blur-[120px]" />

      {/* Decorative Background Tooth SVG */}
      <svg
        viewBox="0 0 200 240"
        className="pointer-events-none absolute -left-24 -top-20 h-[430px] w-[360px] text-[#6B9DBA]/[0.06] md:h-[560px] md:w-[470px]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M100 8c-24 0-38 14-52 14-16 0-30-10-38-4-9 7-6 24 0 40 5 14 4 26 6 44 2 20 8 38 16 60 6 16 12 34 22 34 12 0 12-30 14-48 1-10 4-18 12-18s11 8 12 18c2 18 2 48 14 48 10 0 16-18 22-34 8-22 14-40 16-60 2-18 1-30 6-44 6-16 9-33 0-40-8-6-22 4-38 4-14 0-28-14-52-14Z"
          stroke="currentColor"
          strokeWidth="2.5"
        />
      </svg>

      {/* Grid Pattern Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(#8DA7B7_1px,transparent_1px),linear-gradient(90deg,#8DA7B7_1px,transparent_1px)] [background-size:90px_90px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />

      {/* Main Content Container */}
      <div className="relative mx-auto max-w-7xl">
        {/* Top Tagline */}
        <div className="mb-7 flex items-center gap-4 px-1">
          <span className="h-px w-10 bg-[#6B9DBA]" />
          <span className="font-['Space_Grotesk'] text-[10px] font-semibold tracking-[0.28em] text-[#5B8198]">
            YOUR SMILE · YOUR TIME
          </span>
        </div>

        {/* Main Glass Card */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#D7E3EA] bg-white/75 shadow-[0_40px_120px_-45px_rgba(46,82,104,0.22)] backdrop-blur-2xl transition-all duration-500">
          <div className="pointer-events-none absolute inset-3 rounded-[2rem] border border-white/80" />
          <div className="pointer-events-none absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full bg-[#6B9DBA]/10 blur-[100px]" />

          <div className="relative z-10 grid lg:grid-cols-[1fr_0.78fr]">
            {/* Left Content Area */}
            <div className="p-7 sm:p-9 md:p-12 lg:p-16">
              {/* Badge */}
              <div className="mb-8 flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#6B9DBA]/25 bg-[#6B9DBA]/10 px-4 py-2 font-['Vazirmatn'] text-xs font-bold text-[#42677D] shadow-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6B9DBA] text-white shadow-md">
                    <CalendarCheck2 className="h-4 w-4" />
                  </span>
                  رزرو آنلاین نوبت
                </div>

                <span className="hidden font-['Space_Grotesk'] text-[10px] tracking-[0.18em] text-[#9AAEB9] sm:block">
                  APPOINTMENT
                </span>
              </div>

              {/* Title Section */}
              <div className="max-w-2xl">
                <p className="mb-3 font-['Vazirmatn'] text-sm font-medium text-[#82929C]">
                  تجربه‌ای متفاوت از مراقبت دندان
                </p>

                <h2 className="font-['Vazirmatn'] text-[2.25rem] font-black leading-[1.35] tracking-tight text-[#17242C] sm:text-5xl lg:text-[3.5rem]">
                  لبخند شما،
                  <span className="mt-2 block font-medium text-[#5F94B1]">
                    با دقت طراحی می‌شود.
                  </span>
                </h2>

                <div className="mt-7 flex items-center gap-3">
                  <span className="h-px w-20 bg-[#7FA9BE]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7FA9BE]" />
                </div>
              </div>

              {/* Description */}
              <p className="mt-7 max-w-xl font-['Vazirmatn'] text-sm leading-8 text-[#5D6970] md:text-base">
                برای دریافت مشاوره تخصصی درباره{" "}
                <span className="font-bold text-[#5F94B1]">
                  طرح لبخند، ایمپلنت و خدمات زیبایی دندان
                </span>
                ، فرم درخواست نوبت را تکمیل کنید. تیم مطب پس از بررسی درخواست،
                برای هماهنگی با شما تماس خواهد گرفت.
              </p>

              {/* Trust Cards */}
              <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {trustItems.map((item) => (
                  <TrustCard key={item.title} {...item} />
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="group/btn relative flex min-h-[62px] w-full items-center justify-between overflow-hidden rounded-2xl bg-[#17242C] px-5 py-4 font-['Vazirmatn'] font-extrabold text-white shadow-[0_18px_40px_-15px_rgba(23,36,44,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#20333E] hover:shadow-[0_25px_55px_-15px_rgba(23,36,44,0.55)] active:translate-y-0"
                >
                  <span className="absolute inset-y-0 -left-20 w-16 rotate-12 bg-white/10 blur-md transition-all duration-700 group-hover/btn:left-[120%]" />
                  <span className="relative">تکمیل فرم رزرو</span>
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#91B7C9]/30 bg-[#6B9DBA]/20">
                    <ArrowLeft className="h-5 w-5 text-[#BBD8E5] transition-transform duration-300 group-hover/btn:-translate-x-1.5" />
                  </span>
                </button>
              </div>

              {/* Sub-text */}
              <div className="mt-4 flex items-center gap-2 font-['Vazirmatn'] text-xs text-[#8B979D]">
                <Sparkles className="h-3.5 w-3.5 text-[#6B9DBA]" />
                کمتر از یک دقیقه برای ثبت درخواست
              </div>
            </div>

            {/* Right Visual 3D Showcase */}
            <div className="relative min-h-[390px] overflow-hidden border-t border-[#DCE6EB] bg-gradient-to-br from-[#172C38] via-[#23495A] to-[#5E8EA5] lg:min-h-[620px] lg:border-r lg:border-t-0">
              {/* Lights & Grids */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#BCE5F3]/20 blur-[80px]" />
              <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#78AFC5]/30 blur-[100px]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)] [background-size:70px_70px]" />

              <div className="absolute left-8 top-7 font-['Space_Grotesk'] text-[8rem] font-light leading-none text-white/[0.06] lg:text-[10rem]">
                01
              </div>

              {/* 3D Tooth Spheres */}
              <div className="absolute left-1/2 top-[47%] -translate-x-1/2 -translate-y-1/2">
                <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BCE5F3]/10 blur-3xl" />

                <div className="relative flex h-60 w-60 items-center justify-center rounded-full border border-white/15 bg-white/[0.045] shadow-[0_0_100px_rgba(176,220,235,0.14)] backdrop-blur-md sm:h-64 sm:w-64 lg:h-72 lg:w-72">
                  <div className="absolute inset-6 rounded-full border border-white/10" />

                  <div className="relative -rotate-6 drop-shadow-[0_25px_25px_rgba(0,0,0,0.3)]">
                    <div className="h-36 w-36 sm:h-40 sm:w-40 lg:h-44 lg:w-44">
                      <ToothSvg />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute right-7 top-7 flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#BCE5F3] opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D8F3FA]" />
                </span>
                <span className="font-['Space_Grotesk'] text-[9px] tracking-[0.15em] text-white/80">
                  PREMIUM CARE
                </span>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-7 left-7 right-7 lg:bottom-10 lg:left-10 lg:right-10">
                <div className="mb-4 h-px w-14 bg-[#BBDCE8]" />
                <p className="font-['Vazirmatn'] text-base font-medium leading-8 text-white sm:text-lg">
                  لبخندی که با{" "}
                  <span className="text-[#BFE5F0]">دقت و ظرافت</span> طراحی
                  می‌شود.
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#BBDCE8]" />
                  <span className="font-['Space_Grotesk'] text-[9px] tracking-[0.18em] text-white/50">
                    DR. ZOHREH SAFDARIAN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-6 flex flex-col gap-3 px-2 font-['Space_Grotesk'] text-[9px] tracking-[0.16em] text-[#8999A2] sm:flex-row sm:items-center sm:justify-between">
          <span>PERSONALIZED DENTAL CARE</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6B9DBA]" />
            ONLINE APPOINTMENT
          </span>
        </div>
      </div>
    </section>
  );
}
