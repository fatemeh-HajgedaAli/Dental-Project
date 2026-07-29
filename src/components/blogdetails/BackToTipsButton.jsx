import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BackToTipsButton() {
  const navigate = useNavigate();

  const handleBackToTips = () => {
    navigate("/");

    setTimeout(() => {
      const tipsSection = document.getElementById("tips");

      if (tipsSection) {
        tipsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <button
      onClick={handleBackToTips}
      className="
        group
        inline-flex
        items-center
        gap-2
        mb-10
        text-sm
        font-bold
        text-cyan-400
        transition-all
        duration-300
        hover:text-white
      "
    >
      <ArrowRight
        className="
          h-4
          w-4
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      />

      <span>بازگشت به مقالات</span>
    </button>
  );
}
