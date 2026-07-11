import React from "react";
import { inputStyle } from "./appointmentstyle";

export default function AppointmentSelect({ options, error }) {
  return (
    <div>
      <select name="service" className={inputStyle}>
        <option value="services">انتخاب خدمات</option>

        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}
