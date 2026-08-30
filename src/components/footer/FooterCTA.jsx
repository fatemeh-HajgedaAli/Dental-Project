import { ArrowLeft, Phone, Sparkles } from "lucide-react";

export default function FooterCTA() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-accent/20
        bg-gradient-to-br
        from-dark
        via-dark-soft
        to-dark
        p-6
        shadow-dental-lg
        transition-all
        duration-500
        hover:border-accent/40
        sm:p-8
        lg:p-10
      "
    >
      {/* Gold Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-accent/15
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-accent/25
        "
      />

      {/* Primary Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          -left-20
          h-48
          w-48
          rounded-full
          bg-primary/10
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-between
          gap-8
          text-center
          md:flex-row
          md:text-right
        "
      >
        {/* Text */}
        <div className="max-w-2xl">
          <div
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-2
              md:justify-start
            "
          >
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-accent/15
              "
            >
              <Sparkles className="h-4 w-4 text-accent" />
            </span>

            <span
              className="
                text-xs
                font-bold
                tracking-[0.2em]
                text-accent
              "
            >
              Dr. Zohreh Safdarian
            </span>
          </div>

          <h2
            className="
              text-2xl
              font-black
              leading-tight
              text-white
              sm:text-3xl
              lg:text-4xl
            "
          >
            لبخند زیبای شما،
            <span className="block text-accent">اولویت ماست.</span>
          </h2>

          <p
            className="
              mt-4
              max-w-xl
              text-sm
              leading-7
              text-white/60
              sm:text-base
            "
          >
            برای دریافت مشاوره تخصصی و رزرو نوبت، می‌توانید مستقیماً با مطب تماس
            بگیرید یا فرم درخواست نوبت را تکمیل کنید.
          </p>
        </div>

        {/* Actions */}
        <div
          className="
            flex
            w-full
            shrink-0
            flex-col
            gap-3
            sm:w-auto
            sm:flex-row
          "
        >
          {/* Call */}
          <a
            href="tel:03153238027"
            className="
              group/call
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-5
              py-4
              text-sm
              font-bold
              text-white
              backdrop-blur-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-accent/30
              hover:bg-white/10
              active:translate-y-0
            "
          >
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-xl
                bg-accent/15
                transition-transform
                duration-300
                group-hover/call:scale-110
              "
            >
              <Phone className="h-4 w-4 text-accent" />
            </span>

            <span dir="ltr">۰۳۱.۵۳۲۳۸۰۲۷</span>
          </a>

          {/* Appointment */}
          <button
            type="button"
            onClick={scrollToContact}
            className="
              group/form
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-accent
              px-6
              py-4
              text-sm
              font-black
              text-white
              shadow-lg
              shadow-accent/20
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-accent-dark
              hover:shadow-xl
              hover:shadow-accent/30
              active:translate-y-0
            "
          >
            <span>تکمیل فرم نوبت</span>

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-xl
                bg-white/15
                transition-transform
                duration-300
                group-hover/form:-translate-x-1
              "
            >
              <ArrowLeft className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
