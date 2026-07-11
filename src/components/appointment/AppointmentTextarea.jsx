import React from "react";

export default function AppointmentTextarea() {
  return (
    <textarea
      name="message"
      rows="2"
      placeholder="چطور می‌توانیم به شما کمک کنیم؟"
      className="
w-full
rounded-xl
border
border-gray-200
bg-gray-50
p-3
text-sm
resize-none
outline-none
focus:bg-white
focus:ring-4
focus:ring-blue-100
"
    />
  );
}
