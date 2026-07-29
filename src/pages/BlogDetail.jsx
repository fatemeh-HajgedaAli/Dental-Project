import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

// Image
import teethBg from "../assets/images/dental/FAQbg.jpg";

// Data
import { POSTS } from "../components/blogdetails/blog.data";

// Components
import BlogHero from "../components/blogdetails/BlogHero";
import BlogMeta from "../components/blogdetails/BlogMeta";
import BlogContent from "../components/blogdetails/BlogContent";
import RelatedPosts from "../components/blogdetails/RelatedPosts";
import BackToTipsButton from "../components/blogdetails/BackToTipsButton";
import Preloader from "../pages/Preloader";

export default function BlogDetail() {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading when slug changes
  useEffect(() => {
    setIsLoading(true);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [slug]);

  // Find current post
  const post = POSTS.find((item) => item.slug === slug);

  // Post Not Found
  if (!post) {
    return (
      <section
        dir="rtl"
        className="min-h-screen flex items-center justify-center bg-[#020617] text-white"
      >
        <h1 className="text-2xl sm:text-3xl font-black">مقاله پیدا نشد</h1>
      </section>
    );
  }

  return (
    <>
      {/* Blog Preloader */}
      {isLoading && (
        <Preloader
          loadingText="در حال آماده‌سازی مقاله برای شما..."
          onComplete={() => setIsLoading(false)}
        />
      )}

      {/* Main Blog Section */}
      <section
        dir="rtl"
        className="relative min-h-screen overflow-hidden py-6 sm:py-10 lg:py-16 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${teethBg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#020617]/75 backdrop-blur-[2px]" />

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-[#020617]/60 to-[#020617]/90 pointer-events-none" />

        {/* Top Right Glow */}
        <div className="absolute -top-40 -right-40 w-[350px] sm:w-[450px] lg:w-[550px] h-[350px] sm:h-[450px] lg:h-[550px] rounded-full bg-cyan-500/10 blur-[140px] lg:blur-[180px] pointer-events-none" />

        {/* Bottom Left Glow */}
        <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-full bg-sky-500/10 blur-[140px] pointer-events-none" />

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackToTipsButton />

          {/* Blog Article */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] border border-white/10 bg-[#020617]/45 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,.45)]"
          >
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/[0.06] via-transparent to-cyan-500/[0.03]" />

            {/* Blog Hero */}
            <div className="relative z-10">
              <BlogHero post={post} />
            </div>

            {/* Blog Content */}
            <div className="relative z-10 p-5 sm:p-8 md:p-10 lg:p-12">
              <BlogMeta />
              <BlogContent post={post} />
            </div>
          </motion.article>

          {/* Related Posts */}
          <div className="relative z-10">
            <RelatedPosts currentId={post.id} />
          </div>
        </div>
      </section>
    </>
  );
}
