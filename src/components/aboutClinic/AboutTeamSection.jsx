import TeamImage from "../../assets/images/aboutUs/doctors-removebg-preview.png";

export default function AboutTeamSection({ children }) {
  return (
    <section
      className="
        relative
        flex
        flex-col
        items-center
        justify-center
        w-full
        min-h-[750px]
        py-20
        select-none
        overflow-hidden
      lg:top-[-200px]
      top-[-300px]
      "
      dir="rtl"
    >
      {/* Main Container - کانتینر مرجع برای هم‌ترازی پزشکان و متن منحنی */}
      <div
        className="
          relative
          flex
          items-center
          justify-center

          w-[330px]
          h-[330px]

          sm:w-[420px]
          sm:h-[420px]

          md:w-[520px]
          md:h-[520px]

          lg:w-[580px]
          lg:h-[580px]

          -translate-y-6
          md:-translate-y-12
        "
      >
        {/* ===============================
            Outer Animated Ring
        =============================== */}
        <div
          className="
            absolute
            inset-0
            rounded-full
            border-1
            border-dashed
            border-sky-700
            animate-[spin_260s_linear_infinite]
            pointer-events-none
            z-0
          "
        />

        {/* Second Glow Ring */}
        <div
          className="
            absolute
            inset-6
            rounded-full
            border
            border-sky-300/15
            pointer-events-none
            z-0
          "
        />

        {/* ===============================
            Premium Glass Image Frame (فریم مستقل پزشکان با افکت شناور)
        =============================== */}
        <div
          className="
            absolute
            bottom-0
            inset-x-0
            z-10
            flex
            justify-center
            px-3
            /* اتصال انیمیشن شناور به فریم تصویر */
            animate-[floatHero_15s_ease-in-out_infinite]
          
          "
        >
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-t-[100px]
              sm:rounded-t-[120px]
              md:rounded-t-[150px]
              border
              border-white/70
              bg-gradient-to-b
              from-white/95
              via-sky-50/80
              to-sky-100/40
              backdrop-blur-2xl
              transition-all
              duration-700
              hover:border-sky-300/60
              group
            "
          >
            {/* Top Reflection */}
            <div
              className="
                absolute
                inset-x-0
                top-0
                h-32
                bg-gradient-to-b
                from-white/60
                to-transparent
                z-10
                pointer-events-none
              "
            />

            {/* Left Aura */}
            <div
              className="
                absolute
                -left-24
                top-10
                w-72
                h-72
                rounded-full
                bg-cyan-300/25
                blur-[100px]
                animate-pulse
              "
            />

            {/* Right Aura */}
            <div
              className="
                absolute
                -right-24
                top-20
                w-72
                h-72
                rounded-full
                bg-sky-300/25
                blur-[100px]
                animate-pulse
              "
            />

            {/* Center Light */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[500px]
                h-[180px]
                rounded-full
                bg-cyan-200/20
                blur-[120px]
              "
            />

            {/* Grid Texture */}
            <div
              className="
                absolute
                inset-0
                opacity-[0.06]
                pointer-events-none
                mix-blend-overlay
              "
              style={{
                backgroundImage: `
                  linear-gradient(rgba(14,165,233,.4) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(14,165,233,.4) 1px, transparent 1px)
                `,
                backgroundSize: "36px 36px",
              }}
            />

            {/* Doctor Image */}
            <div
              className="
    group
    relative
    w-full
    h-full
    flex
    items-center
    justify-center
    overflow-hidden
  "
            >
              {/* Ambient Aura پشت پزشکان */}
              <div
                className="
      absolute
      inset-0
      z-0

      bg-gradient-to-t
      from-cyan-400/20
      via-sky-300/10
      to-transparent

      blur-3xl

      opacity-40

      transition-all
      duration-1000

      group-hover:opacity-90
      group-hover:scale-110
    "
              />

              {/* نسخه Glow Image */}
              <img
                src={TeamImage}
                alt=""
                className="
      absolute
      inset-0

      z-10

      w-full
      h-full

      object-contain
      object-bottom

      scale-100

      opacity-0

      blur-[30px]

      saturate-150

      transition-all
      duration-1000
      ease-out

      group-hover:opacity-60
      group-hover:scale-[1.08]
      group-hover:blur-[35px]
    "
              />

              {/* تصویر اصلی */}
              <img
                src={TeamImage}
                alt="Clinic Team"
                className="
      relative

      z-20

      w-full
      h-full

      object-contain
      object-bottom


      /* حالت پایه */
      saturate-[0.85]
      contrast-[1.05]
      brightness-[0.98]


      transition-all
      duration-1000
      ease-[cubic-bezier(.16,1,.3,1)]


      /* Hover Premium */
      group-hover:saturate-125
      group-hover:contrast-[1.1]
      group-hover:brightness-[1.05]

      group-hover:scale-[1.035]


      group-hover:drop-shadow-[0_30px_60px_rgba(14,165,233,.35)]
    "
              />

              {/* Glass Reflection روی تصویر */}
              <div
                className="
      absolute
      inset-0

      z-30

      pointer-events-none

      bg-gradient-to-r
      from-transparent
      via-white/20
      to-transparent

      -translate-x-full

      transition-transform
      duration-[1200ms]

      group-hover:translate-x-full
    "
              />

              {/* Bottom Cinematic Fade */}
              <div
                className="
      absolute
      bottom-0
      inset-x-0

      h-32

      z-40

      bg-gradient-to-t
      from-sky-50
      via-sky-50/40
      to-transparent

      pointer-events-none
    "
              />
            </div>

            {/* Moving Shine Effect (حرکت اتوماتیک لاین نوری روی کارت شیشه‌ای) */}
            <div
              className="
                absolute
                -left-full
                top-0
                h-full
                w-1/2
                -rotate-12
                bg-gradient-to-r
                from-transparent
                via-white/40
                to-transparent
                blur-xl
                pointer-events-none
                z-30
                animate-[shineHero_8s_ease-in-out_infinite]
              "
            />

            {/* Inside Frame Glass Reflection Highlight */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-white/20
                via-transparent
                to-transparent
                pointer-events-none
                z-30
              "
            />
          </div>
        </div>

        {/* Children (گالری دایره‌ای یا المان‌های کاستوم شما) */}
        <div className="absolute inset-0 z-10">{children}</div>
      </div>

      {/* انیمیشن‌های CSS سفارشی و بهینه‌سازی شده */}
      <style>
        {`
          @keyframes floatHero {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-12px);
            }
          }

          @keyframes shineHero {
            0% {
              left: -150%;
            }
            50%, 100% {
              left: 150%;
            }
          }
        `}
      </style>
    </section>
  );
}
