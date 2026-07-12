import { useRef } from "react";
import emailjs from "@emailjs/browser";

import AppointmentForm from "../components/appointment/AppointmentForm";

export default function AppointmentPage() {
  const form = useRef();

  const sendEmail = async () => {
    await emailjs.sendForm(
      "service_99h29dc",
      "template_4njs3uh",
      form.current,
      {
        publicKey: "niek4yXrjZOVSz3HS",
      },
    );
  };

  return (
    <main
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
      "
    >
      <AppointmentForm form={form} sendEmail={sendEmail} />
    </main>
  );
}
