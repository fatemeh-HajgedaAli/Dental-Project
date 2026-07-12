import React from "react";
import { inputStyle } from "./appointmentstyle";

export default function AppointmentTextarea() {
  return (
    <textarea
      name="message"
      rows="4"
      placeholder="توضیحات یا درخواست شما..."
      className={`${inputStyle} resize-none`}
    />
  );
}
