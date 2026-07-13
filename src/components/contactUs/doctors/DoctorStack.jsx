import { useState } from "react";
import DoctorCard from "./DoctorCard";

export default function DoctorStack({ doctors }) {
  const [items, setItems] = useState(doctors);

  function swipeNext() {
    setItems((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  }

  return (
    /* 
      تغییر مهم: اضافه کردن w-full و ایجاد یک لایه منعطف 
      تا فضای ۵۶۰ پیکسلی کاملاً در جریان اصلی صفحه (Layout) رزرو شود.
    */
    <div className="relative w-full max-w-sm h-[560px] mx-auto md:mx-0 flex items-center justify-center my-8">
      {items
        .slice(0, 3)
        .map((doctor, index) => ({ doctor, index }))
        .reverse()
        .map(({ doctor, index }) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            position={index}
            onSwipe={swipeNext}
          />
        ))}
    </div>
  );
}
