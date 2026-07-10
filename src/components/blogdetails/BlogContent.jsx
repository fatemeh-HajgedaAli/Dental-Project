export default function BlogContent({ post }) {
  return (
    <div>
      {/* Excerpt */}

      <p
        className="
        mt-8

        text-lg

        leading-9

        text-slate-300
        "
      >
        {post.excerpt}
      </p>

      {/* Divider */}

      <div
        className="
        my-10

        h-px

        bg-gradient-to-r

        from-transparent

        via-cyan-400/30

        to-transparent
        "
      />

      {/* Article Content */}

      <div
        className="
        whitespace-pre-line

        text-base

        leading-10

        text-slate-300
        "
      >
        {post.content}
      </div>
    </div>
  );
}
