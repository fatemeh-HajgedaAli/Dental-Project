
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import teethBg from "../assets/images/dental/FAQbg.jpg";

import { POSTS } from "../components/blogdetails/blog.data";

import BlogHero from "../components/blogdetails/BlogHero";
import BlogMeta from "../components/blogdetails/BlogMeta";
import BlogContent from "../components/blogdetails/BlogContent";
import RelatedPosts from "../components/blogdetails/RelatedPosts";
import BackToTipsButton from "../components/blogdetails/BackToTipsButton";

import Preloader from "../pages/Preloader";

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

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
          relative
          flex
          min-h-screen
          items-center
          justify-center
          overflow-hidden
          bg-[#263e46]
          px-5
        "
      >
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#8bbcc8]/10 blur-[130px]" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#c3a46b]/10 blur-[130px]" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-md text-center"
        >
          <div className="mb-5 text-5xl">🦷</div>

          <h1 className="font-peyda text-3xl font-extrabold text-white">
            مقاله پیدا نشد
          </h1>

          <p className="mt-4 text-sm leading-7 text-white/55">
            مقاله موردنظر شما وجود ندارد یا ممکن است حذف شده باشد.
          </p>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="
              mt-7
              rounded-full
              border
              border-[#c3a46b]/40
              px-7
              py-3
              text-sm
              text-[#f1e6d2]
              transition
              duration-300
              hover:bg-[#c3a46b]
              hover:text-[#263e46]
            "
          >
            بازگشت به صفحه اصلی
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      {isLoading && (
        <Preloader
          loadingText="در حال آماده‌سازی مقاله برای شما..."
          onComplete={() => setIsLoading(false)}
        />
      )}

      <section
        dir="rtl"
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#263e46]
          py-6
          sm:py-10
          lg:py-14
        "
        style={{
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(38, 62, 70, 0.82),
            rgba(38, 62, 70, 0.96)
          ), url(${teethBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Soft background light */}
        <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[#8bbcc8]/10 blur-[150px]" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#c3a46b]/10 blur-[150px]" />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <BackToTipsButton />

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isLoading ? 0 : 1,
              y: isLoading ? 20 : 0,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
            className="
              mt-5
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-[#263e46]/70
              shadow-[0_25px_80px_rgba(0,0,0,0.3)]
              backdrop-blur-xl
              sm:rounded-[2rem]
            "
          >
            <BlogHero post={post} />

            <div className="p-5 sm:p-8 md:p-10 lg:p-12">
              <BlogMeta post={post} />

              <BlogContent post={post} />
            </div>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isLoading ? 0 : 1,
              y: isLoading ? 15 : 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="mt-10"
          >
            <RelatedPosts currentId={post.id} />
          </motion.div>
        </div>
      </section>
    </>
  );
}

