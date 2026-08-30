import React from "react";
import officeVideo from "../../assets/images/videos/office.mp4";
import { FaTooth } from "react-icons/fa";

export default function Gallery() {
  return (
    <section
      className="
        relative isolate overflow-hidden
        bg-[#F6F3EC]
        px-4 py-16
        sm:px-5 sm:py-20
        md:px-8 md:py-24
        lg:px-12 lg:py-28
        xl:py-32
      "
    >
      {/* ================= BACKGROUND ================= */}

      {/* Main soft green glow */}
      <div
        className="
          pointer-events-none absolute
          -right-32 -top-20
          h-[300px] w-[300px]
          rounded-full
          bg-[#DCE7E0]/40
          blur-[90px]

          sm:-right-40 sm:-top-24
          sm:h-[420px] sm:w-[420px]

          md:-right-48 md:-top-32
          md:h-[520px] md:w-[520px]
          md:bg-[#DCE7E0]/45
          md:blur-[110px]

          lg:-right-52 lg:-top-40
          lg:h-[650px] lg:w-[650px]
          lg:bg-[#DCE7E0]/50
          lg:blur-[130px]
        "
      />

      {/* Warm secondary glow */}
      <div
        className="
          pointer-events-none absolute
          -left-32 bottom-10
          h-[260px] w-[260px]
          rounded-full
          bg-[#E7DCC8]/25
          blur-[90px]

          sm:-left-40
          sm:h-[360px] sm:w-[360px]

          md:-left-48 md:bottom-0
          md:h-[480px] md:w-[480px]
          md:bg-[#E7DCC8]/35
          md:blur-[110px]

          lg:-left-56 lg:-bottom-32
          lg:h-[620px] lg:w-[620px]
          lg:bg-[#E7DCC8]/40
          lg:blur-[140px]
        "
      />

      {/* Very subtle center light */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-[260px] w-[260px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/30
          blur-[100px]

          md:h-[420px] md:w-[420px]
          md:bg-white/40

          lg:h-[600px] lg:w-[600px]
          lg:bg-white/50
          lg:blur-[150px]
        "
      />

      {/* ================= DENTAL WATERMARK ================= */}

      <svg
        viewBox="0 0 200 240"
        className="
          pointer-events-none absolute
          right-5 -top-4
          h-[300px] w-[250px]
          text-[#7E9C8F]/[0.16]
          sm:-right-16 sm:-top-10
          sm:h-[380px] sm:w-[320px]
          md:-right-20 md:-top-14
          md:h-[480px] md:w-[400px]
          md:text-[#7E9C8F]/[0.17]
          lg:-right-10 lg:-top-3
          lg:h-[420px] lg:w-[420px]
          lg:text-[#7E9C8F]/[0.15]
          xl:-right-6
          xl:h-[300px] xl:w-[480px]
        "
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M100 8c-24 0-38 14-52 14-16 0-30-10-38-4-9 7-6 24 0 40 5 14 4 26 6 44 2 20 8 38 16 60 6 16 12 34 22 34 12 0 12-30 14-48 1-10 4-18 12-18s11 8 12 18c2 18 2 48 14 48 10 0 16-18 22-34 8-22 14-40 16-60 2-18 1-30 6-44 6-16 9-33 0-40-8-6-22 4-38 4-14 0-28-14-52-14Z"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        {/* HEADER */}

        <div
          className="
            mb-8
            flex flex-col gap-5

            sm:mb-10

            md:mb-10
            md:flex-row
            md:items-end
            md:justify-between
            md:gap-8

            lg:mb-12
          "
        >
          <div>
            <span
              className="
                mb-3
                flex items-center gap-2
                font-['Space_Grotesk']
                text-[10px]
                font-medium
                tracking-[0.3em]
                text-[#A9885A]

                sm:text-xs
                md:mb-4
              "
            >
              <span className="h-px w-5 bg-[#A9885A] sm:w-6" />
              OUR CLINIC
            </span>

            <h2
              className="
                font-['Vazirmatn']
                text-2xl
                font-extrabold
                leading-[1.2]
                tracking-tight
                text-[#1A1D1B]

                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                xl:text-[56px]
              "
            >
              فضایی برای
              <span className="mr-2 font-medium text-[#7E9C8F] sm:mr-3">
                آرامش شما
              </span>
            </h2>

            {/* Smile curve */}
            <svg
              width="100"
              height="14"
              viewBox="0 0 120 16"
              className="mt-3 text-[#A9885A] sm:mt-4 sm:w-[120px]"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 2c20 14 96 14 116 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p
            className="
              max-w-sm
              text-right
              font-['Vazirmatn']
              text-xs
              leading-7
              text-neutral-500

              sm:text-sm

              md:max-w-md
              lg:max-w-sm
            "
          >
            محیطی آرام، مدرن و حرفه‌ای که تجربه‌ی درمان را برای شما متفاوت
            می‌کند.
          </p>
        </div>

        {/* ================= VIDEO ================= */}

        <div
          className="
            group relative
            h-[420px]
            w-full
            overflow-hidden
            rounded-[12px]
            bg-[#101410]
            shadow-[0_25px_70px_-30px_rgba(26,29,27,0.55)]

            sm:h-[500px]
            sm:rounded-[14px]

            md:h-[600px]

            lg:h-[720px]
            lg:rounded-[16px]
            lg:shadow-[0_35px_100px_-35px_rgba(26,29,27,0.55)]

            xl:h-[760px]
          "
        >
          <video
            src={officeVideo}
            autoPlay
            muted
            loop
            playsInline
            className="
              absolute inset-0
              h-full w-full
              object-cover
              saturate-[0.92]
              contrast-[1.03]
              brightness-[0.92]
              transition-transform
              duration-[7000ms]
              ease-out
              motion-reduce:transition-none
              motion-reduce:group-hover:scale-100
              group-hover:scale-[1.06]
            "
          />

          {/* Bottom readability gradient */}
          <div
            className="
              pointer-events-none absolute
              inset-x-0 bottom-0
              h-[50%]
              bg-gradient-to-t
              from-[#0B0F0D]/90
              via-[#0B0F0D]/25
              to-transparent

              md:h-[45%]
            "
          />

          {/* TOP LABEL */}

          <div
            className="
              absolute
              left-4 top-4
              flex items-center gap-2
              text-white

              sm:left-6 sm:top-6

              md:left-8 md:top-8
              md:gap-3
            "
          >
            <span
              className="
                flex
                h-8 w-8
                items-center justify-center
                rounded-full
                border border-white/25
                bg-white/10
                backdrop-blur-xl

                sm:h-10 sm:w-10
              "
            >
              <FaTooth className="text-xs sm:text-sm" />
            </span>

            <span
              className="
                font-['Space_Grotesk']
                text-[9px]
                tracking-[0.12em]
                text-white/85

                sm:text-xs
                sm:tracking-[0.15em]
              "
            >
              DR. ZOHREH SAFDARIAN
            </span>
          </div>

          {/* LIVE */}

          <div
            className="
              absolute
              right-4 top-4
              flex items-center gap-2
              rounded-full
              border border-white/20
              bg-black/25
              px-2.5 py-1
              backdrop-blur-xl

              sm:right-6 sm:top-6
              sm:px-3 sm:py-1.5

              md:right-8 md:top-8
            "
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B7CDC1] opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#B7CDC1]" />
            </span>

            <span
              className="
                font-['Space_Grotesk']
                text-[9px]
                tracking-[0.15em]
                text-white/70

                sm:text-[10px]
                sm:tracking-[0.2em]
              "
            >
              LIVE
            </span>
          </div>

          {/* MAIN CONTENT */}

          <div
            className="
              absolute
              bottom-6 right-5
              max-w-[90%]
              text-right text-white
              sm:bottom-8 sm:right-6
              md:bottom-12
              md:right-10
              md:max-w-2xl
              lg:right-14
            "
          >
            <h3
              className="
                font-['Vazirmatn']
                text-2xl
                font-bold
                leading-tight

                sm:text-3xl

                md:text-5xl

                lg:text-6xl
              "
            >
              جایی برای
              <br />
              <span className="font-medium text-[#B7CDC1]">آرامش و اعتماد</span>
            </h3>

            <p
              className="
                mt-3
                max-w-md
                font-['Vazirmatn']
                text-xs
                leading-6
                text-white/60

                sm:mt-4
                sm:text-sm

                md:mt-5
                md:text-base
                md:leading-7
              "
            >
              هر جزئیات در این فضا با هدف ایجاد تجربه‌ای آرام، حرفه‌ای و متفاوت
              طراحی شده است.
            </p>
          </div>

          {/* PLAY */}

          <button
            type="button"
            aria-label="پخش ویدیوی مطب"
            className="
              absolute
              right-1/2
              top-1/2
              flex
              translate-x-1/2
              -translate-y-1/2
              opacity-0
              transition-all
              duration-700
              group-hover:opacity-100
              focus-visible:opacity-100
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white/70
            "
          >
            <div
              className="
                flex
                h-14 w-14
                items-center justify-center
                rounded-full
                border border-white/30
                bg-white/10
                backdrop-blur-xl
                shadow-2xl

                sm:h-16 sm:w-16
              "
            >
              <span className="ml-1 text-base text-white sm:text-lg">▶</span>
            </div>
          </button>
        </div>

        {/* ================= FLOATING CARD ================= */}

        <div
          className="
            relative z-20
            -mt-5
            mr-3
            ml-auto
            w-[calc(100%-1.5rem)]
            max-w-sm
            rounded-[10px]
            border border-[#DDD8CC]
            bg-[#FBF9F5]
            p-5
            shadow-[0_25px_60px_-25px_rgba(26,29,27,0.35)]
            transition-all
            duration-500
            hover:-translate-y-2
            sm:-mt-10
            sm:mr-5
            sm:p-6
            md:-mt-12
            md:mr-8
            lg:-mt-10
            lg:mr-44
            lg:max-w-[400px]
            lg:p-7
          "
        >
          {/* Card label */}

          <div className="mb-4 flex items-center justify-between">
            <span
              className="
                font-['Space_Grotesk']
                text-[9px]
                font-medium
                tracking-[0.18em]
                text-[#A9885A]

                sm:text-[10px]
              "
            >
              THE CLINIC
            </span>

            <span className="h-px w-10 bg-[#D8D1C4] sm:w-14" />
          </div>

          <p
            className="
              font-['Vazirmatn']
              text-xs
              leading-7
              text-[#1A1D1B]

              sm:text-sm
            "
          >
            در مطب دکتر زهره صفدریان، هر جزئیات با هدف ایجاد تجربه‌ای آرام و
            متفاوت برای شما طراحی شده است.
          </p>

          {/* Trust signals */}

          <div
            className="
              mt-5
              grid grid-cols-2
              border-t border-[#E4DFD5]
              pt-4

              font-['Vazirmatn']
              text-[10px]
              text-[#5B6660]

              sm:text-xs
            "
          >
            <div className="border-l border-[#E4DFD5] text-right">
              <span className="block text-[9px] text-[#A9885A]">
                EXPERIENCE
              </span>
              <span className="mt-1 block">+۱۲ سال تجربه</span>
            </div>

            <div className="pr-4 text-right sm:pr-5">
              <span className="block text-[9px] text-[#A9885A]">PATIENTS</span>
              <span className="mt-1 block">+۲۰۰۰ بیمار</span>
            </div>
          </div>

          {/* Card footer */}

          <div
            className="
              mt-4
              flex items-center
              justify-between
              border-t border-[#E4DFD5]
              pt-4
            "
          >
            <span
              className="
                font-['Space_Grotesk']
                text-[9px]
                tracking-[0.15em]
                text-[#A9885A]

                sm:text-[10px]
              "
            >
              EXPLORE THE SPACE
            </span>

            <span className="text-sm text-[#7E9C8F] transition-transform duration-300 hover:-translate-x-1">
              ←
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
