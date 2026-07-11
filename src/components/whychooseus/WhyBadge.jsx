import { motion } from "framer-motion";

export default function WhyBadge({ icon: Icon, title }) {
  return (
    <div className="flex justify-center w-full mb-2">
      {/* Shiny Sweep */}

      {/* Soft Glow */}
      <div
        className="absolute inset-0 rounded-full
       bg-cyan-400/5 opacity-0 group-hover:opacity-100
        transition-opacity duration-500"
      />

      {/* Text */}
      {/* Badge */}
      <div
        className=" inline-flex items-center gap-3
       rounded-full border border-sky-200/70 bg-white/80 
       backdrop-blur-xl px-4 py-2.5 shadow-[0_10px_30px_rgba(14,165,233,.08)] "
      >
        <span
          className="text-xs  md:text-sm  font-bold
          tracking-[0.35em]  text-sky-700  uppercase  "
        >
          {title}{" "}
        </span>
        <span
          className="h-2.5  w-2.5  rounded-full 
         bg-sky-500  animate-pulse  
         shadow-[0_0_15px_rgba(14,165,233,.8)]  "
        />
      </div>
    </div>
  );
}
