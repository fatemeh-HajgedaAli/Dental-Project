import { useState } from "react";
import { motion } from "framer-motion";
// icons
import { GiTooth } from "react-icons/gi";
// parts
import FAQItem from "../components/FAQ/FAQItem";
import { faqData } from "../components/FAQ/faqData";
// image
import faqBg from "../assets/images/dental/FAQbg.jpg";
// start
export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };
  // jsx
  return (
    <section
      className="
  relative
  overflow-hidden
  py-20
  px-5
  bg-gradient-to-b
  from-blue-900
  via-slate-950
  to-blue-950
  "
    >
      <img
        src={faqBg}
        alt=""
        className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    opacity-15
    pointer-events-none
    select-none
    "
      />

      <div className="absolute inset-0 bg-slate-950/70" />

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-20 top-20 w-72 h-72 rounded-full bg-cyan-400/10 blur-[130px]" />

        <div className="absolute right-20 bottom-20 w-80 h-80 rounded-full bg-sky-500/10 blur-[150px]" />
      </div>

      {/* Orbit Left */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
  absolute
  -top-40
  -left-40
  w-[420px]
  h-[420px]
  rounded-full
  border
  border-cyan-400/10
  "
      >
        <div className="absolute inset-0">
          <GiTooth
            className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2
      -translate-y-1/2
      text-cyan-300
      text-4xl
      drop-shadow-[0_0_20px_rgba(34,211,238,.8)]
      opacity-60
      "
          />
        </div>
      </motion.div>

      {/* Orbit Right */}

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
  absolute
  -bottom-48
  -right-48
  w-[520px]
  h-[520px]
  rounded-full
  border
  border-sky-300/10
  "
      >
        <div className="absolute inset-0">
          <GiTooth
            className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2
      -translate-y-1/2
      text-sky-300
      text-5xl
      drop-shadow-[0_0_20px_rgba(96,165,250,.8)]
      opacity-60
      "
          />
        </div>
      </motion.div>

      {/* Heading */}

      <div className="relative z-10 text-center mb-12">
        <h2
          className="
          text-4xl
          md:text-5xl
          font-black
          text-white
          "
        >
          سوالات متداول
        </h2>

        <div
          className="
          w-28
          h-1
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          via-sky-300
          to-cyan-400
          mx-auto
          mt-5
          shadow-[0_0_20px_rgba(34,211,238,.7)]
          "
        />

        <p className="text-slate-400 mt-4">
          پاسخ رایج‌ترین سوالات بیماران کلینیک
        </p>
      </div>

      {/* FAQ */}

      <div className="relative z-10 max-w-5xl mx-auto space-y-5">
        {faqData.map((item) => (
          <FAQItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openId === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </div>
    </section>
  );
}
