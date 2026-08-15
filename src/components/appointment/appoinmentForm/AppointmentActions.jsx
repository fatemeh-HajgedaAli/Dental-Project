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
    </>
  );
}
