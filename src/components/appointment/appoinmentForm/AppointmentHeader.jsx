export default function AppointmentHeader() {
  return (
    <div className="mb-6">
      <div
        className="
        inline-flex
        items-center
        gap-2
        bg-cyan-50
        text-cyan-700
        px-3
        py-1
        rounded-full
        text-xs
        font-bold
        mb-3
        "
      >
        🦷 کلینیک دندان‌پزشکی
      </div>

      <h1 className="text-2xl font-black text-slate-900">رزرو نوبت</h1>

      <p className="text-sm text-slate-500 mt-2">
        برای دریافت مشاوره، اطلاعات خود را وارد کنید.
      </p>
    </div>
  );
}
