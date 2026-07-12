import { ArrowRight } from "lucide-react";

export default function AppointmentActions({ onBack }) {
  return (
    <>

      <button
        type="submit"
        className="
        w-full
        py-3
        rounded-2xl
        bg-gradient-to-r
        from-cyan-600
        to-blue-600
        text-white
        font-bold
        shadow-lg
        shadow-cyan-200
        hover:-translate-y-0.5
        active:scale-95
        transition
        "
      >
        ثبت درخواست نوبت
      </button>


      <button
        type="button"
        onClick={onBack}
        className="
        w-full
        flex
        items-center
        justify-center
        gap-2
        py-3
        rounded-2xl
        border
        border-cyan-200
        text-cyan-700
        font-bold
        bg-white/80
        hover:bg-cyan-50
        transition
        "
      >
        <ArrowRight className="w-5 h-5"/>
        بازگشت به صفحه اصلی
      </button>

    </>
  );
}
