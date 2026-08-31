
import PhoneIcon from "./PhoneIcon";
import TelegramIcon from "./TelegramIcon";

export default function WebsiteAdCard({ onClose }) {
  return (
    <div
      dir="rtl"
      className="
        absolute
        bottom-[72px]
        left-0
        w-[310px]
        overflow-hidden
        rounded-[26px]
        border
        border-white/20
        bg-[#f8fbfc]/90
        p-5
        shadow-[0_25px_80px_rgba(20,45,55,0.28)]
        backdrop-blur-2xl
        animate-in
        fade-in
        slide-in-from-bottom-4
        duration-300
        sm:w-[350px]
      "
    >
      {/* Top Accent */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-[#c3a46b]
          to-transparent
        "
      />

      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          bg-[#8bbcc8]/15
          blur-[60px]
        "
      />

      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="بستن"
        className="
          absolute
          left-3
          top-3
          z-20
          flex
          h-7
          w-7
          items-center
          justify-center
          rounded-full
          border
          border-slate-200
          bg-white/70
          text-slate-400
          transition
          duration-300
          hover:bg-slate-900
          hover:text-white
          active:scale-90
        "
      >
        ×
      </button>

      {/* Brand */}
      <div className="relative flex items-center gap-3">
        <div
          className="
            relative
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-2xl
            bg-[#17262c]
            font-mono
            text-xs
            font-black
            text-[#8bbcc8]
            shadow-lg
          "
        >
          <span className="absolute inset-0 bg-gradient-to-br from-[#8bbcc8]/20 to-[#c3a46b]/10" />

          <span className="relative">
            {"</>"}
          </span>
        </div>

        <div>
          <span
            className="
              block
              text-[9px]
              font-semibold
              tracking-[0.18em]
              text-slate-400
            "
          >
            WEB DEVELOPMENT
          </span>

          <span className="mt-0.5 block text-[15px] font-black tracking-wide text-[#263e46]">
            ASK<span className="text-[#719fa9]">.DEV</span>
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Title */}
      <h3 className="text-lg font-extrabold leading-8 text-[#263e46]">
        وب‌سایت حرفه‌ای،
        <span className="block text-[#719fa9]">
          برای یک برند حرفه‌ای
        </span>
      </h3>

      {/* Description */}
      <p className="mt-2 text-[11px] font-medium leading-6 text-slate-500">
        طراحی و توسعه وب‌سایت‌های مدرن، سریع و اختصاصی
        متناسب با هویت برند و نیاز کسب‌وکار شما.
      </p>

      {/* Actions */}
      <div className="mt-5 space-y-2.5">
        {/* Telegram */}
        <a
          href="https://t.me/Ask_cod"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ارتباط در تلگرام"
          className="
            group
            flex
            items-center
            justify-between
            rounded-2xl
            bg-[#263e46]
            p-3
            text-white
            shadow-lg
            shadow-[#263e46]/15
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-[#314e58]
            hover:shadow-xl
            active:scale-[0.98]
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                bg-white/10
                text-[#8bbcc8]
                transition
                group-hover:bg-[#8bbcc8]/15
              "
            >
              <TelegramIcon />
            </span>

            <div>
              <span className="block text-[9px] text-white/45">
                مشاوره و سفارش
              </span>

              <span className="mt-0.5 block text-xs font-bold">
                گفتگو در تلگرام
              </span>
            </div>
          </div>

          <span className="text-base text-[#c3a46b] transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
        </a>

        {/* Phone */}
        <a
          href="tel:+989351680236"
          aria-label="تماس مستقیم"
          className="
            group
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-slate-200
            bg-white/70
            p-3
            text-[#263e46]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-[#8bbcc8]/40
            hover:bg-white
            active:scale-[0.98]
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                bg-[#8bbcc8]/10
                text-[#719fa9]
                transition
                group-hover:scale-105
              "
            >
              <PhoneIcon />
            </span>

            <div>
              <span className="block text-[9px] text-slate-400">
                تماس مستقیم
              </span>

              <span
                dir="ltr"
                className="mt-0.5 block text-xs font-bold"
              >
                0935 168 0236
              </span>
            </div>
          </div>

          <span className="text-[#719fa9] transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
        </a>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/50" />

          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>

        <span className="text-[9px] font-medium text-slate-400">
          آماده شروع یک پروژه حرفه‌ای
        </span>
      </div>
    </div>
  );
}

