import { ArrowUp } from "lucide-react";

export default function FooterBottom() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="border-t border-white/10">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-center sm:px-6 md:flex-row md:text-right lg:px-8">
        <p className="text-[11px] text-slate-500 sm:text-xs">
          © {new Date().getFullYear()} Dr.Zohreh Safdarian Dental Clinic
          {" — "}
          تمامی حقوق محفوظ است.
        </p>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="بازگشت به بالا"
          className="absolute -top-11 lg:-top-18 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center 
          justify-center rounded-full border border-white/10 bg-slate-900 text-cyan-400 shadow-xl 
          transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-white md:left-auto
           md:right-8 md:translate-x-0"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
