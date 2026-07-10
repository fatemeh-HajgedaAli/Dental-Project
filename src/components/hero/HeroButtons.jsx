import { useState } from "react";
import { useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom"; // این ابزار مشکل رندر فیکسد را ریشه‌کن می‌کند

import DentalButton from "./heroButton/DentalButton";
import ToothDraggable from "./heroButton/ToothDraggable";

export default function HeroButtons() {
  const { scrollY } = useScroll();
  const [showFloating, setShowFloating] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowFloating(latest > 50);
  });

  return (
    <>
      <div className="absolute grid grid-cols-1 lg:grid-cols-2 gap-4 mr-16">
        {/* دکمه ثابت هیرو */}
        <ToothDraggable isFloating={false} />

        {/* دکمه خدمات ما */}
        <DentalButton
          to="/services"
          variant="secondary"
          className="w-full lg:w-auto"
        >
          خدمات ما
        </DentalButton>
      </div>

      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {showFloating && <ToothDraggable isFloating={true} />}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
