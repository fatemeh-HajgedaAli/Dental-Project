export default function BlogContent({ post }) {
  if (!post) return null;

  return (
    <article className="w-full">
      {/* چکیده مقاله (Excerpt) */}
      {post.excerpt && (
        <p className="mt-8 text-lg leading-relaxed text-slate-300 font-medium">
          {post.excerpt}
        </p>
      )}

      {/*  (Divider) */}
      <div
        className="my-10 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
        role="separator"
      />

      {/*  (Article Content) */}
      <div className="whitespace-pre-line text-base leading-loose text-slate-300 space-y-4">
        {post.content}
      </div>
    </article>
  );
}
