import { useState } from "react";
import WebsiteAdCard from "../components/website-ad/WebsiteAdCard";
import WebsiteAdTrigger from "../components/website-ad/WebsiteAdTrigger";

export default function WebsiteAdFloating() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAd = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div dir="rtl" className="fixed bottom-5 left-5 z-[9999] font-sans">
      {isOpen && <WebsiteAdCard onClose={() => setIsOpen(false)} />}

      <WebsiteAdTrigger isOpen={isOpen} onClick={toggleAd} />
    </div>
  );
}
