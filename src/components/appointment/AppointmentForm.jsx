import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AppointmentHeader from "./appoinmentForm/AppointmentHeader";
import AppointmentFields from "./appoinmentForm/AppointmentFields";
import AppointmentActions from "./appoinmentForm/AppointmentActions";

import { services } from "./appoinmentForm/appointment.constants";
import { validateAppointment } from "./appoinmentForm/appointment.validation";

export default function AppointmentForm({ form, sendEmail }) {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const validation = validateAppointment({
      name: data.get("name")?.trim(),

      phone: data.get("phone")?.trim(),

      email: data.get("email")?.trim(),

      date: data.get("date"),
    });

    setErrors(validation);

    if (!Object.keys(validation).length) {
      try {
        await sendEmail();

        toast.success("نوبت شما ثبت شد 🦷 به زودی با شما تماس می‌گیریم", {
          duration: 4000,
          style: {
            direction: "rtl",
            borderRadius: "16px",
            fontWeight: "bold",
          },
        });

        e.target.reset();
      } catch {
        toast.error("ارسال درخواست ناموفق بود");
      }
    }
  };

  return (
    <section
      dir="rtl"
      className="
      w-full
      flex
      justify-center
      px-4
      "
    >
      <div
        className="
      w-full
      max-w-md
      p-6
      "
      >
        <AppointmentHeader />

        <form ref={form} onSubmit={submitHandler} className="space-y-3">
          <AppointmentFields errors={errors} services={services} />

          <AppointmentActions onBack={() => navigate("/")} />
        </form>
      </div>
    </section>
  );
}
