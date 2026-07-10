export default function BlogHero({ post }) {
  return (
    <div
      className="
      relative
      aspect-[16/8]
      overflow-hidden
      "
    >
      {/* Main Image */}

      <img
        src={post.img}
        alt={post.title}
        className="
        w-full
        h-full
        object-cover
        transition
        duration-700
        "
      />

      {/* Dark Overlay */}

      <div
        className="
        absolute
        inset-0

        bg-gradient-to-t

        from-[#020617]

        via-[#020617]/40

        to-transparent
        "
      />

      {/* Content */}

      <div
        className="
        absolute
        bottom-0
        right-0
        left-0

        p-8
        md:p-12
        "
      >
        {/* Category */}

        <span
          className="
          inline-flex

          rounded-full

          border

          border-cyan-400/20

          bg-cyan-400/10

          backdrop-blur-xl

          px-4
          py-2

          text-xs

          font-bold

          text-cyan-300

          "
        >
          {post.category}
        </span>

        {/* Title */}

        <h1
          className="
          mt-5

          max-w-3xl

          text-3xl
          md:text-5xl

          font-black

          leading-tight

          text-white
          "
        >
          {post.title}
        </h1>
      </div>
    </div>
  );
}
