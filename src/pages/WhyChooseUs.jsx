import { motion } from "framer-motion";
import WhyBadge from "../components/whychooseus/WhyBadge";
import WhyStats from "../components/whychooseus/WhyStats";
import { aboutData } from "../components/whychooseus/about.data";

export default function WhyChooseUs() {
  const { badge, title, description, stats } = aboutData;

  return (
    <section
      dir="rtl"
      className="
      relative
      overflow-hidden
  bg-gradient-to-b 
        from-blue-900 
        via-slate-950 
        to-blue-950
      py-12
      "
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-52 -left-44 h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-[170px]" />

        <div className="absolute top-10 right-[-120px] h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[180px]" />

        <div className="absolute bottom-[-150px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[170px]" />
      </div>

      {/* Grid Overlay */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        [background-image:linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)]
        [background-size:42px_42px]
      "
      />

      <div className="relative container mx-auto max-w-6xl px-6">
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
            <span
              className="
              bg-gradient-to-b
              from-white
              to-slate-400
              bg-clip-text
              text-transparent
            "
            >
              {title.first}
            </span>{" "}
            <span
              className="
              bg-gradient-to-r
              from-cyan-300
              via-sky-300
              to-blue-400
              bg-clip-text
              text-transparent
            "
            >
              {title.second}
            </span>
          </h2>

          {/* Description */}

          <p
            className="
            mt-8
            max-w-2xl
            text-center
            text-lg
            leading-8
            text-gray-400
            font-light
          "
          >
            {description}
          </p>

          {/* Divider */}

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            whileInView={{
              width: 180,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="
            my-16
            h-px
            bg-gradient-to-r
            from-transparent
            via-cyan-400/70
            to-transparent
          "
          />

          {/* Stats */}

          <WhyStats stats={stats} />
        </motion.div>
      </div>
    </section>
  );
}
