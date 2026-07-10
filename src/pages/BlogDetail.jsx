import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { POSTS } from "../components/blogdetails/blog.data";

import BackButton from "../components/blogdetails/BackButton";
import BlogHero from "../components/blogdetails/BlogHero";
import BlogMeta from "../components/blogdetails/BlogMeta";
import BlogContent from "../components/blogdetails/BlogContent";
import RelatedPosts from "../components/blogdetails/RelatedPosts";

export default function BlogDetail() {
  const { slug } = useParams();

  const post = POSTS.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section
        className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#020617]
        text-white
        "
      >
        <h1 className="text-3xl font-black">مقاله پیدا نشد</h1>
      </section>
    );
  }

  return (
    <section
      dir="rtl"
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#020617]
      py-24
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        -top-40
        right-0
        h-[500px]
        w-[500px]
        rounded-full
        bg-cyan-500/10
        blur-[180px]
        "
      />

      <div
        className="
        relative
        max-w-5xl
        mx-auto
        px-5
        "
      >
        <BackButton />

        <motion.article
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
          rounded-[2.5rem]
          overflow-hidden
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-3xl
          shadow-[0_30px_100px_rgba(0,0,0,.45)]
          "
        >
          <BlogHero post={post} />

          <div
            className="
            p-8
            md:p-12
            "
          >
            <BlogMeta />

            <BlogContent post={post} />
          </div>
        </motion.article>

        <RelatedPosts currentId={post.id} />
      </div>
    </section>
  );
}
