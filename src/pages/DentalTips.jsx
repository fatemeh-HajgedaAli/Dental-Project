// Dental-Tips / Blogs
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Reveal from "./Reveal";
import { POSTS } from "../components/blogdetails/blog.data";
// start
export default function DentalTips() {
  const recentPosts = POSTS.slice(0, 6);
  // jsx
  return (
    <section id="tips" className="py-24 md:py-6 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* header */}
        <Reveal className="text-center max-w-2xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4 rounded-full border border-sky-200/60 bg-white/90 backdrop-blur-md px-4 py-1 shadow-sm">
            <span
              className="text-[11px] font-black tracking-[3px]
             text-sky-800"
            >
              DENTAL'S CONTENT{" "}
            </span>
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0F14] tracking-tight">
            نکات مهم برای لبخندی سالم‌تر
          </h2>

          <p className="mt-5 text-[#1F2937]/70 text-base md:text-lg">
            توصیه‌های تخصصی تیم ما برای مراقبت بهتر از دندان‌ها بین جلسات درمان.
          </p>
        </Reveal>

        {/* لیست کارت‌های مقالات */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08}>
              <article className="group h-full rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500 flex flex-col">
                <Link to={`/blog/${p.slug}`} className="flex flex-col h-full">
                  {/* تصویر مقاله */}
                  <div className="overflow-hidden aspect-[3/2] w-full">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* محتوای متنی */}
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#1E88E5]">
                      {p.category}
                    </span>

                    <h3 className="mt-2 text-lg font-bold text-[#0A0F14] leading-snug line-clamp-2 group-hover:text-[#1E88E5] transition-colors">
                      {p.title}
                    </h3>

                    <p className="mt-2 text-sm text-[#1F2937]/65 leading-relaxed flex-1 line-clamp-3">
                      {p.excerpt}
                    </p>

                    {/* دکمه ادامه‌ی مطلب */}
                    <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E88E5] group-hover:gap-2.5 transition-all">
                      <span>مطالعه مقاله</span>{" "}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    </div>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
// finish
