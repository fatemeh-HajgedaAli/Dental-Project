import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export async function sendAppointmentEmail(form) {
  if (!form) {
    throw new Error("Appointment form is required");
  }

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error("EmailJS environment variables are missing");
  }

  const response = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
    publicKey: PUBLIC_KEY,
  });

  if (response.status !== 200) {
    throw new Error("EmailJS failed to send email");
  }

  return response;
}
