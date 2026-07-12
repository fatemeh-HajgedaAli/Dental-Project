import React from "react";
import { selectStyle } from "./appointmentstyle";

export default function AppointmentSelect({ options }) {
  return (
    <div className="relative">
      <select name="service" className={selectStyle} defaultValue="">
        <option value="" disabled>
          انتخاب نوع خدمات
        </option>

        {options.map((item, index) => (
          <option
            key={index}
            value={item}
            className="
            bg-white
            text-blue-800
            font-medium
            "
          >
            {item}
          </option>
        ))}
      </select>

      <div
        className="
        pointer-events-none
        absolute
        left-5
        top-1/2
        -translate-y-1/2
        text-cyan-500
        "
      >
        ▼
      </div>
    </div>
  );
}
