import { ArrowUp } from "lucide-react";

export default function FooterBottom() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="border-t border-border-soft bg-surface-soft/70">
      <div
        className="
          relative
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-4
          px-4
          py-5
          text-center
          sm:px-6
          md:flex-row
          md:text-right
          lg:px-8
        "
      >
        {/* Copyright */}
        <p className="text-[11px] text-text-light sm:text-xs">
          © {new Date().getFullYear()} Dr.Zohreh Safdarian Dental Clinic
          {" — "}
          تمامی حقوق محفوظ است.
        </p>

        {/* Back To Top */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="بازگشت به بالا"
          className="
            absolute
            -top-11
            left-1/2
            flex
            h-10
            w-10
            -translate-x-1/2
            items-center
            justify-center
            rounded-full
            border
            border-accent/30
            bg-dark
            text-accent
            shadow-lg
            shadow-dark/20
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-accent
            hover:bg-accent
            hover:text-white
            hover:shadow-gold
            active:translate-y-0
            md:left-auto
            md:right-8
            md:translate-x-0
          "
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
