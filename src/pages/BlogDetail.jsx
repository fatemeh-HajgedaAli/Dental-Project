import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { POSTS } from "../components/blogdetails/blog.data";

import BlogHero from "../components/blogdetails/BlogHero";
import BlogMeta from "../components/blogdetails/BlogMeta";
import BlogContent from "../components/blogdetails/BlogContent";
import RelatedPosts from "../components/blogdetails/RelatedPosts";

import BackToTipsButton from "../components/blogdetails/BackToTipsButton";

export default function BlogDetail() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [slug]);

  const post = POSTS.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section
        dir="rtl"
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
        {/* بازگشت به بخش مقالات در Home */}
        <BackToTipsButton />

        {/* Blog Article */}
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

        {/* Related Posts */}
        <RelatedPosts currentId={post.id} />
      </div>
    </section>
  );
}
