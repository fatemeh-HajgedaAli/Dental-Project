import { Link } from "react-router-dom";
import { POSTS } from "./blog.data";

export default function RelatedPosts({ currentId, category }) {
  const sameCategoryPosts = POSTS.filter(
    (item) => item.id !== currentId && item.category === category,
  );

  const otherPosts = POSTS.filter(
    (item) => item.id !== currentId && item.category !== category,
  );

  const relatedPosts = [...sameCategoryPosts, ...otherPosts].slice(0, 3);

  if (!relatedPosts.length) return null;

  return (
    <section className="mt-20">
      <h2 className="mb-8 text-2xl font-black text-white">مقالات مرتبط</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {relatedPosts.map((item) => (
          <Link
            key={item.id}
            to={`/blog/${item.slug}`}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col"
          >
            {/* تصویر کارت */}
            <div className="overflow-hidden aspect-video w-full">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* محتوای کارت */}
            <div className="p-5 flex flex-col flex-grow justify-between">
              <div>
                <span className="text-xs font-bold text-cyan-300">
                  {item.category}
                </span>

                <h3 className="mt-3 text-sm font-bold leading-7 text-white transition-colors duration-200 group-hover:text-cyan-200 line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
