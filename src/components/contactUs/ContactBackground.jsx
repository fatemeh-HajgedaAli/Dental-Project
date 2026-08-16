import dentalClinicBg from "../../assets/images/denties/drSafdariyan.jpg";

export default function ContactBackground({ children }) {
  return (
    <section
      className="
        relative isolate overflow-hidden w-full flex items-center 
        justify-center
        min-h-[620px] sm:min-h-[650px] md:min-h-[620px] lg:min-h-[700px]
        bg-slate-100
      "
    >
      {/* Background Image */}
      <div
        className="
          absolute inset-0 -z-30 scale-[1.01]
          bg-cover bg-no-repeat bg-[right_40%] md:bg-center
        "
        style={{ backgroundImage: `url(${dentalClinicBg})` }}
      />

      {/* Overlay - Dark/Light Tint */}
      <div className="absolute inset-0 -z-20 bg-slate-900/10" />

      {/* Overlay - Blue Tint Gradient */}
      <div
        className="
          absolute inset-0 -z-10
          bg-gradient-to-b from-transparent via-transparent to-blue-50/10
          md:bg-gradient-to-r md:from-white/10 md:via-transparent md:to-blue-500/10
        "
      />

      {/* Decorative Soft Light Effect */}
      <div
        className="
          absolute -top-24 left-1/2 -translate-x-1/2 pointer-events-none
          w-[320px] h-[160px] rounded-full bg-white/10 blur-[70px]
          md:-top-32 md:w-[650px] md:h-[250px] md:blur-[100px]
        "
      />

      {/* Content Container */}
      <div className="relative z-10 w-full">{children}</div>

      {/* Section Transition Fade to White */}
      <div
        className="
          absolute bottom-0 left-0 right-0 pointer-events-none
          h-20 bg-gradient-to-t from-white via-white/20 to-transparent
          md:h-28 md:via-white/30
        "
      />
    </section>
  );
}
