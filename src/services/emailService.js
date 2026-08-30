import emailjs from "@emailjs/browser";

export function sendAppointmentEmail(form) {
  return emailjs.sendForm(
    "service-dental",
    "template_dutaj33",
    form,
    "ZtvGsBQm9fDwDW87_",
  );
}
