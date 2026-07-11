import React from "react";

import AppointmentForm from "../components/appointment/AppointmentForm";

export default function AppointmentPage({ form, sendEmail, status }) {
  return (
    <main
      dir="rtl"
      className="
      min-h-screen
      flex
      items-center
      justify-center

      bg-gradient-to-br
      from-cyan-50
      via-white
      to-blue-50

      px-4
      py-8
      "
    >
      <div
        className="
        w-full
        max-w-xl
        "
      >
        <AppointmentForm form={form} sendEmail={sendEmail} status={status} />
      </div>
    </main>
  );
}
