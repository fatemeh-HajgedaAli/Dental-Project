function Counter({ value }) {
  return <span dir="rtl">{value}</span>;
}

export default function WhyStats({ stats = [] }) {
  return (
    <div
      className="
      grid
      grid-cols-3
      gap-2
      w-full
      lg:max-w-xl
      mx-auto
      my-4
      "
    >
      {stats.map((item) => (
        <div
          key={item.id}
          className="
          group
          relative
          w-30
          h-30
          lg:w-40
          lg:h-30
          lg:-top-8
          overflow-hidden
          rounded-xl
          border
          border-white/15
          py-4
          lg:py-0
          text-center
          shadow-[0_25px_70px_rgba(0,0,0,.35)]
          "
        >
          {/* Border Glow */}
          <div
            className="
            absolute
            inset-0
            rounded-xl
            border
            border-cyan-400/0
            "
          />

          {/* Top Line */}
          <div
            className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-cyan-300/60
            to-transparent
            "
          />

          {/* Number */}
          <h3
            className="
            relative
            z-10
            pt-2
            lg:pt-8
            text-xl
            font-black
            tracking-tight
            text-transparent
            bg-gradient-to-b
            from-white
            via-cyan-200
            to-cyan-400
            bg-clip-text
            "
          >
            <Counter value={item.number} />
          </h3>

          {/* Divider */}
          <div
            className="
            mx-auto
            mt-2
            mb-2
            h-px
            w-20
            bg-gradient-to-r
            from-transparent
            via-cyan-400/40
            to-transparent
            "
          />

          {/* Title */}
          <p
            className="
            relative
            z-10
            text-xs
            leading-7
            font-medium
            tracking-wide
            text-slate-300
            "
          >
            {item.title}
          </p>

          {/* Bottom Glow */}
          <div
            className="
            absolute
            inset-x-0
            bottom-0
            h-20
            bg-gradient-to-t
            from-cyan-500/5
            to-transparent
            "
          />
        </div>
      ))}
    </div>
  );
}
