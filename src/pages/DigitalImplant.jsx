import AboutBackground from "../components/digitalImplant/ImplantBackground";
import AboutUsContent from "../components/digitalImplant/ImplantContent";
import AboutImplant from "../components/digitalImplant/ImplantImage";

export default function digitalImplant() {
  return (
    <section className="relative w-full 
    overflow-hidden bg-transparent">
  
      <AboutBackground />

      {/* ۲. main-container */}
      <div
        className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-12 gap-8 lg:gap-4 items-center"
        dir="rtl"
      >
        {/* text */}
        <div className="col-span-12 lg:col-span-5 w-full relative z-30">
          <AboutUsContent />
        </div>

        {/* ⚡ divider */}
        <div className="hidden lg:flex col-span-1 h-[550px] mr-[50px]
         items-center justify-center relative z-20">
          <div className="w-[1px] h-3/4 bg-gradient-to-b 
          from-transparent via-sky-200 to-transparent relative">
            {/* shine dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-sky-500 rounded-full shadow-[0_0_12px_#0ea5e9] animate-ping" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-sky-500 rounded-full" />
          </div>
        </div>

        {/* image */}
        <div className="col-span-12 lg:col-span-6 w-full flex justify-center items-center relative z-10 -mt-40 lg:mt-0">
          <AboutImplant />
        </div>
      </div>
    </section>
  );
}
