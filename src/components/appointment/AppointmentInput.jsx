import React from "react";
import { inputStyle } from "./appointmentstyle";

export default function AppointmentInput({
  name,
  type = "text",
  placeholder,
  error,
  ...props
}) {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={inputStyle}
        {...props}
      />

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}
