import { motion } from "framer-motion";
import toothBtn from "../../assets/images/dental/teeth-png.png";

export default function BookingTarget() {
  return (
    <div
      className="
      relative
      flex
      flex-col
      items-center
      justify-center
      gap-4
      "
    >
      {/* مقصد دندان */}
      <motion.div
        layoutId="booking-tooth"
        className="
        w-24
        h-24
        rounded-full
        bg-sky-100
        border-2
        border-sky-300
        shadow-xl
        flex
        items-center
        justify-center
        "
      >
        <img
          src={toothBtn}
          alt="booking tooth"
          className="
          w-full
          h-full
          object-contain
          "
        />
      </motion.div>

      {/* متن رزرو */}

      <button
        className="
        px-8
        py-3
        rounded-xl
        bg-gradient-to-r
        from-sky-600
        to-cyan-500
        text-white
        font-bold
        shadow-lg
        hover:scale-105
        transition
        "
      >
        رزرو نوبت
      </button>
    </div>
  );
}
