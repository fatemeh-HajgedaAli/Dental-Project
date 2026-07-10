import { Link } from "react-router-dom";
import { POSTS } from "./blog.data";

export default function RelatedPosts({ currentId }) {
  const relatedPosts = POSTS.filter((item) => item.id !== currentId).slice(
    0,
    3,
  );

  return (
    <section
      className="
      mt-20
      "
    >
      <h2
        className="
        mb-8

        text-2xl

        font-black

        text-white
        "
      >
        مقالات مرتبط
      </h2>

      <div
        className="
        grid

        md:grid-cols-3

        gap-6
        "
      >
        {relatedPosts.map((item) => (
          <Link
            key={item.id}
            to={`/blog/${item.slug}`}
            className="
              group

              overflow-hidden

              rounded-3xl

              border

              border-white/10

              bg-white/[0.04]

              backdrop-blur-xl

              transition-all

              duration-500

              hover:-translate-y-2

              "
          >
            {/* Image */}

            <div
              className="
                overflow-hidden
                aspect-video
                "
            >
              <img
                src={item.img}
                alt={item.title}
                className="
                  w-full

                  h-full

                  object-cover

                  transition

                  duration-700

                  group-hover:scale-110

                  "
              />
            </div>

            <div
              className="
                p-5
                "
            >
              <span
                className="
                  text-xs

                  font-bold

                  text-cyan-300
                  "
              >
                {item.category}
              </span>

              <h3
                className="
                  mt-3

                  text-sm

                  font-bold

                  leading-7

                  text-white

                  group-hover:text-cyan-200

                  transition
                  "
              >
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
