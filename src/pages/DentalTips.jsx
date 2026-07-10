import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Reveal from "./Reveal";
import { POSTS } from "../data/blog.data";

export default function DentalTips() {
  return (
    <section
      id="tips"
      className="
      py-24
      md:py-32
      bg-white
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-5
        md:px-8
        "
      >
        <Reveal
          className="
          text-center
          max-w-2xl
          mx-auto
          "
        >
          <p
            className="
            text-[#1E88E5]
            font-semibold
            tracking-[0.2em]
            uppercase
            text-xs
            mb-4
            "
          >
            مقالات دندانپزشکی
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#0A0F14]
            tracking-tight
            "
          >
            نکات مهم برای لبخندی سالم‌تر
          </h2>

          <p
            className="
            mt-5
            text-[#1F2937]/70
            text-lg
            "
          >
            توصیه‌های تخصصی تیم ما برای مراقبت بهتر از دندان‌ها بین جلسات درمان.
          </p>
        </Reveal>

        <div
          className="
          mt-16
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >
          {POSTS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08}>
              <article
                className="
                group
                h-full
                rounded-3xl
                overflow-hidden
                bg-white
                border
                border-gray-100
                shadow-sm
                hover:shadow-2xl
                hover:shadow-blue-500/10
                hover:-translate-y-2
                transition-all
                duration-500
                flex
                flex-col
                "
              >
                {/* Image */}

                <div
                  className="
                  overflow-hidden
                  aspect-[3/2]
                  "
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                    "
                  />
                </div>

                <div
                  className="
                  p-6
                  flex
                  flex-col
                  flex-1
                  "
                >
                  <span
                    className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-[#1E88E5]
                    "
                  >
                    {p.category}
                  </span>

                  <h3
                    className="
                    mt-2
                    text-lg
                    font-bold
                    text-[#0A0F14]
                    leading-snug
                    "
                  >
                    {p.title}
                  </h3>

                  <p
                    className="
                    mt-2
                    text-sm
                    text-[#1F2937]/65
                    leading-relaxed
                    flex-1
                    "
                  >
                    {p.excerpt}
                  </p>

                  <Link
                    to={`/blog/${p.slug}`}
                    className="
                    mt-4
                    inline-flex
                    items-center
                    gap-1.5
                    text-sm
                    font-semibold
                    text-[#1E88E5]
                    group-hover:gap-2.5
                    transition-all
                    "
                  >
                    مطالعه مقاله
                    <ArrowRight
                      className="
                      w-4
                      h-4
                      "
                    />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
