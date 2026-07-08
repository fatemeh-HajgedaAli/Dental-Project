import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

import DentalButton from "./heroButton/DentalButton";
import FloatingAppointmentButton from "./heroButton/FloatingAppointmentButton";

import toothBtn from "../../assets/images/dental/teeth-png.png";

export default function HeroButtons() {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(false);
  const [startWobble, setStartWobble] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const show = latest > 150;

    setVisible(show);

    if (!show) {
      setStartWobble(false);
    }
  });

  return (
    <>
      {!visible && (
        <DentalButton to="/appointment" image={toothBtn}>
          رزرو نوبت
        </DentalButton>
      )}

      <DentalButton to="/services" variant="secondary">
        خدمات ما
      </DentalButton>

      <FloatingAppointmentButton
        visible={visible}
        startWobble={startWobble}
        setStartWobble={setStartWobble}
      />
    </>
  );
}
