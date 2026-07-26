import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div
      dir="rtl"
      className="
        w-full
        flex
        flex-col
        items-end
        gap-8
        mt-8
        lg:mt-16
      "
    >
      {/* Title */}
      <div className="w-full text-right lg:mt-10 select-none">
        <motion.h1
          initial={{
            opacity: 0,
            x: 80,
            filter: "blur(12px)",
          }}
          animate={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            font-black
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            leading-[1.3]
            lg:leading-[1.2]
            tracking-tight
            text-slate-900
          "
        >
          {/* بخش اول متن همراه با استروک ملایم */}
          <span className="inline-block [text-shadow:_0_2px_10px_rgba(0,0,0,0.05)] [WebkitTextStroke:1px_rgba(15,23,42,0.1)]">
            لبخندی زیبا،
          </span>

          <br />

          {/* بخش هایلایت‌شده متحرک و درخشان */}
          <span
            className="
              relative
              inline-block
              mt-2
              pb-2
              font-black
              bg-gradient-to-l
              from-sky-600
              via-blue-600
              to-indigo-600
              bg-clip-text
              text-transparent
              
              /* تنظیمات استروک متن */
              [WebkitTextStroke:1.5px_rgba(2,132,199,0.3)]
              
              /* سایه درخشان (Glow Effect) */
              drop-shadow-[0_10px_20px_rgba(2,132,199,0.25)]
              
              /* هاله نور پس‌زمینه (Backdrop Glow) */
              before:absolute
              before:inset-0
              before:-z-10
              before:bg-gradient-to-r
              before:from-sky-400/20
              before:to-blue-600/20
              before:blur-2xl
              before:rounded-full
            "
          >
            آغاز یک زندگی بهتر
          </span>
        </motion.h1>
      </div>
    </div>
  );
}
