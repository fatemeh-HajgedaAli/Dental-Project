import { motion } from "framer-motion";
import WhyBadge from "../components/whychooseus/WhyBadge";
import WhyStats from "../components/whychooseus/WhyStats";
import { aboutData } from "../components/whychooseus/about.data";

// تصویر اسکن و شبکه دندان را اینجا ایمپورت کن
import whyChooseBg from "../assets/images/dental/whyChooseImage.jpg";

export default function WhyChooseUs() {
  const { badge, title, description, stats } = aboutData;

  return (
    <section
      dir="rtl"
      className="
        relative
        overflow-hidden
        bg-slate-950
        py-6
        h-[350px]
        lg:h-[450px]
      "
    >
      {/* ⚡  (Border-T Line Shine) */}
      <div
        className="absolute top-0 inset-x-0 h-[4px] w-full overflow-hidden 
      pointer-events-none z-30"
      >
        <div
          className="w-full h-full bg-gradient-to-r from-transparent 
        via-cyan-600/80 via-sky-200 to-transparent animate-pulse"
        />
        <div
          className="absolute inset-0 w-[40%] h-full bg-gradient-to-r 
          from-transparent via-cyan-400 to-transparent blur-[6px]"
          style={{
            animation: "lineShine 4s linear infinite",
          }}
        />
      </div>

      {/* 🌌 black-layer-bg */}
      <div
        className="absolute inset-0 z-0 select-none 
      pointer-events-none overflow-hidden"
      >
        <img
          src={whyChooseBg}
          alt="Dental X-ray Grid Background"
          className="w-full h-full object-cover
           opacity-200 mix-blend-screen scale-105"
        />
        {/* dark-filter */}
        <div
          className="absolute inset-0 bg-gradient-to-b 
        from-slate-350/50 via-slate-450/20 to-slate-950"
        />
        <div
          className="absolute inset-0
         bg-[radial-gradient(circle_at_center,transparent_20%,#020617_85%)]"
        />
      </div>

      {/* کانتینر محتوا */}
      <div className="relative container mx-auto max-w-6xl px-2  z-20">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(20px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
          }}
          className="flex flex-col items-center"
        >
          <WhyBadge icon={badge.icon} title={badge.title} />

          {/* Title */}
          <h2
            className="
              mt-8
              max-w-3xl
              text-center
              text-4xl
              md:text-6xl
              font-black
              leading-tight
              tracking-[-0.04em]
            "
          >
            <span className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
              {title.first}
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              {title.second}
            </span>
          </h2>

          {/* Divider */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 180, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="my-2 lg:my-10 h-px bg-gradient-to-r from-transparent via-cyan-400/90 to-transparent"
          />

          {/* Stats */}
          <WhyStats stats={stats} />
        </motion.div>
      </div>
    </section>
  );
}
