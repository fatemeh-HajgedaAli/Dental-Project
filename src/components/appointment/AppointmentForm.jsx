import React, { useState } from "react";

import AppointmentInput from "./AppointmentInput";
import AppointmentSelect from "./AppointmentSelect";
import AppointmentTextarea from "./AppointmentTextarea";

import { services } from "./appointment.constants";
import { validateAppointment } from "./appointment.validation";

export default function AppointmentForm({ form, sendEmail, status }) {
  const [errors, setErrors] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const errors = validateAppointment({
      name: data.get("name")?.trim(),

      phone: data.get("phone")?.trim(),

      email: data.get("email")?.trim(),

      date: data.get("date"),
    });

    setErrors(errors);

    if (!Object.keys(errors).length) {
      sendEmail(e);
    }
  };

  return (
    <section
      dir="rtl"
      className="
      w-full
      flex
      items-center
      justify-center
      px-4
      "
    >
      <div
        className="
        w-full
        max-w-md
        shadow-cyan-100/40
        p-6
        "
      >
        {/* Header */}

        <div className="mb-5">
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

          <h1
            className="
            text-2xl
            font-black
            text-slate-900
            "
          >
            رزرو نوبت
          </h1>

          <p
            className="
            text-sm
            text-slate-500
            mt-2
            "
          >
            برای دریافت مشاوره، اطلاعات خود را وارد کنید.
          </p>
        </div>

        <form
          ref={form}
          onSubmit={submitHandler}
          className="
          space-y-3
          "
        >
          <AppointmentInput
            name="name"
            placeholder="نام و نام خانوادگی"
            error={errors.name}
          />

          <AppointmentInput
            name="phone"
            placeholder="شماره موبایل"
            maxLength="11"
            inputMode="numeric"
            error={errors.phone}
          />

          <AppointmentInput
            name="email"
            type="email"
            placeholder="ایمیل (اختیاری)"
            error={errors.email}
          />

          <AppointmentInput name="date" type="date" error={errors.date} />

          <AppointmentSelect options={services} />

          <AppointmentTextarea />

          <button
            type="submit"
            className="
            w-full
            mt-2
            py-3
            rounded-2xl
            bg-gradient-to-r
            from-cyan-600
            to-blue-600
            text-white
            font-bold
            shadow-lg
            shadow-cyan-200
            transition
            hover:-translate-y-0.5
            active:scale-95
            "
          >
            ثبت درخواست نوبت
          </button>

          {status && (
            <div
              className="
              rounded-xl
              bg-emerald-50
              text-emerald-600
              text-center
              text-sm
              font-medium
              py-2
              "
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
