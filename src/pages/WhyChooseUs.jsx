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

      {/* 🪐 افکت مدار چرخشی سه بعدی (Orbit Effect Overlay) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden">
        {/* مدار اول - زاویه‌دار و چرخش ساعتگرد */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          className="absolute w-[600px] h-[220px] rounded-full border border-cyan-500/15 [transform:rotateX(70deg)_rotateY(-15deg)]"
        >
          {/* سیارک متحرک روی مدار */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
        </motion.div>

        {/* مدار دوم - معکوس و چرخش پادساعتگرد با ابعاد بزرگتر */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
          className="absolute w-[800px] h-[300px] rounded-full border border-sky-400/10 [transform:rotateX(65deg)_rotateY(20deg)]"
        >
          {/* سیارک دوم */}
          <div className="absolute bottom-0 left-1/4 w-1.5 h-1.5 rounded-full bg-sky-300 shadow-[0_0_8px_#7dd3fc]" />
        </motion.div>
      </div>

      {/* Aurora Background (کمپلکس نوری پس‌زمینه برای عمق دادن به مدارها) */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-52 -left-44 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[170px]" />
        <div className="absolute bottom-[-150px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-sky-500/5 blur-[170px]" />
      </div>

      {/* کانتینر محتوا */}
      <div className="relative container mx-auto max-w-6xl px-6 z-20">
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
            className="my-6 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"
          />

          {/* Stats */}
          <WhyStats stats={stats} />
        </motion.div>
      </div>
    </section>
  );
}
