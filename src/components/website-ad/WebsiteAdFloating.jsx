import { useState } from "react";
import WebsiteAdCard from "./WebsiteAdCard";
import WebsiteAdTrigger from "./WebsiteAdTrigger";

export default function WebsiteAdFloating() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div dir="rtl" className="fixed bottom-5 left-5 z-[9999] font-sans">
      {isOpen && <WebsiteAdCard onClose={() => setIsOpen(false)} />}

      <WebsiteAdTrigger
        isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      />
    </div>
  );
}
