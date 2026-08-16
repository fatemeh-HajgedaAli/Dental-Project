import dentalClinicLg from "../../assets/images/denties/drSafdarianLg.jfif";
import dentalClinicSm from "../../assets/images/denties/drSafdariyanSm.jpg";

export default function ContactBackground({ children }) {
  return (
    <section
      className="
        relative isolate flex w-full items-center justify-center
        overflow-hidden
        min-h-[620px]
        bg-slate-100
        sm:min-h-[650px]
        md:min-h-[620px]
        lg:min-h-[700px]
      "
    >
      {/* ================= MOBILE BACKGROUND ================= */}
      <div
        className="
          absolute inset-0 -z-30
          block
          bg-cover
          bg-no-repeat
          bg-center
          md:hidden
        "
        style={{
          backgroundImage: `url(${dentalClinicSm})`,
        }}
      />

      {/* ================= DESKTOP BACKGROUND ================= */}
      <div
        className="
          absolute inset-0 -z-30
          hidden
          bg-cover
          bg-no-repeat
          bg-right
          md:block
        "
        style={{
          backgroundImage: `url(${dentalClinicLg})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 -z-20 bg-slate-900/10" />

      {/* Blue Gradient */}
      <div
        className="
          absolute inset-0 -z-10
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-blue-50/10

          md:bg-gradient-to-r
          md:from-white/10
          md:via-transparent
          md:to-blue-500/10
        "
      />

      {/* Soft Light */}
      <div
        className="
          pointer-events-none
          absolute
          -top-24
          left-1/2
          h-[160px]
          w-[320px]
          -translate-x-1/2
          rounded-full
          bg-white/10
          blur-[70px]

          md:-top-32
          md:h-[250px]
          md:w-[650px]
          md:blur-[100px]
        "
      />

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>

      {/* Bottom Fade */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-20
          bg-gradient-to-t
          from-white
          via-white/20
          to-transparent

          md:h-28
          md:via-white/30
        "
      />
    </section>
  );
}
