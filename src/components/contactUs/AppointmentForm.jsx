import React from "react";

export default function AppointmentForm({ form, sendEmail, status }) {
  return (
    <div className="w-full max-w-xl mx-auto" dir="rtl">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
        تماس با ما
      </h1>

      <p className="text-gray-500 mb-8 text-sm md:text-base leading-relaxed">
        برای رزرو نوبت و شروع مسیر داشتن لبخندی زیبا، اطلاعات خود را وارد کنید.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-6 bg-white p-6 md:p-10 rounded-3xl shadow-xl shadow-blue-100/40 border border-gray-100"
      >
        <div>
          <input
            name="name"
            type="text"
            placeholder="نام و نام خانوادگی"
            className="w-full border border-gray-200 rounded-xl p-3.5 bg-gray-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="phone"
            type="text"
            placeholder="شماره تماس"
            className="w-full border border-gray-200 rounded-xl p-3.5 bg-gray-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="ایمیل (اختیاری)"
            className="w-full border border-gray-200 rounded-xl p-3.5 bg-gray-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="date"
            type="date"
            className="w-full border border-gray-200 rounded-xl p-3.5 bg-gray-50/50 text-gray-500 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
          />

          <select
            name="service"
            className="w-full border border-gray-200 rounded-xl p-3.5 bg-gray-50/50 text-gray-600 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none appearance-none"
          >
            <option value="">انتخاب خدمات</option>
            <option value="general">دندان‌پزشکی عمومی</option>
            <option value="implant">ایمپلنت دندان</option>
            <option value="orthodontics">ارتودنسی</option>
            <option value="whitening">سفید کردن دندان</option>
          </select>
        </div>

        <div>
          <textarea
            name="message"
            rows="4"
            placeholder="چطور می‌توانیم به شما کمک کنیم؟"
            className="w-full border border-gray-200 rounded-xl p-3.5 bg-gray-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-200 transform active:scale-[0.99]"
        >
          رزرو نوبت
        </button>

        {status && (
          <p className="text-center text-sm font-medium text-blue-600 mt-2 bg-blue-50 py-2 rounded-lg">
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
