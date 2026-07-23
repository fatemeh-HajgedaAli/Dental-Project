// main-Blog
export default function BlogHero({ post }) {
  if (!post) return null;
// jsx
  return (
    <header className="relative aspect-[16/10] sm:aspect-[16/8] w-full overflow-hidden rounded-2xl">
      {/* تصویر اصلی مقاله */}
      <img
        src={post?.img}
        alt={post?.title || "تصویر مقاله"}
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
      />

      {/* اورلی تیره برای خوانایی بهتر متن */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent"
        aria-hidden="true"
      />

      {/* محتوا (دسته‌بندی و عنوان) */}
      <div className="absolute bottom-0 inset-x-0 p-6 md:p-12 flex flex-col items-start gap-4">
        {/* دسته‌بندی */}
        {post?.category && (
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl px-4 py-2 text-xs font-bold text-cyan-300">
            {post.category}
          </span>
        )}

        {/* عنوان مقاله */}
        <h1 className="max-w-3xl text-2xl sm:text-3xl md:text-5xl font-black leading-tight text-white drop-shadow-sm">
          {post?.title}
        </h1>
      </div>
    </header>
  );
}
