import React, { useState } from "react";
import EmergensiIcons from "./EmergensiIcons";
import EmergencyModals from "./EmergencyModals";

export default function EmergencySection() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <div>
        <EmergensiIcons setActiveModal={setActiveModal} />
        <EmergencyModals
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
      </div>
    </>
  );
}
