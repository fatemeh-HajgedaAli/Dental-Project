import { useEffect, useState } from "react";
import {
  motion,
  animate,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useNavigate } from "react-router-dom";

import toothBtn from "../../../assets/images/dental/toothBtn.png";
import { IoMdArrowDropright } from "react-icons/io";

export default function ToothDraggable({ isFloating }) {
  const navigate = useNavigate();

  const x = useMotionValue(0);

  const [isActive, setIsActive] = useState(false);

  const rotate = useTransform(x, [0, 150], [0, 360]);

  const iconScale = useTransform(x, [0, 150], [1, 1.15]);

  const textOpacity = useTransform(x, [0, 90], [1, 0]);

  const textX = useTransform(x, [0, 90], [0, -20]);

  const blurValue = useTransform(x, [0, 100], [0, 5]);

  const textBlur = useMotionTemplate`
    blur(${blurValue}px)
  `;

  const hintOpacity = useTransform(x, [0, 60, 120], [0.6, 1, 0]);

  useEffect(() => {
    x.set(0);
  }, [isFloating, x]);

  const handleDragEnd = async (_, info) => {
    setIsActive(false);

    if (info.offset.x > 100) {
      await animate(x, 150, {
        duration: 0.15,
      });

      navigate("/appointment");
    } else {
      animate(x, 0, {
        type: "spring",
        stiffness: 450,
        damping: 30,
      });
    }
  };

  return (
    <motion.div
      initial={
        isFloating
          ? {
              opacity: 0,
              scale: 0.85,
              y: 40,
            }
          : false
      }
      animate={
        isFloating
          ? {
              opacity: 1,
              scale: 1,
              y: 0,
            }
          : false
      }
      whileHover={{
        scale: 1.04,
      }}
      className={`
relative
overflow-hidden
h-14
w-[235px]
rounded-full
flex
items-center
border
border-white/20
backdrop-blur-xl
shadow-xl

${isFloating ? "fixed bottom-10 left-4 z-[999999]" : "hidden lg:flex"}

bg-gradient-to-r
from-blue-900
via-sky-650
to-blue-900
`}
    >
      {/* shine */}

      <motion.div
        animate={{
          x: ["-120%", "120%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
        className="
absolute
inset-0
bg-gradient-to-r
from-transparent
via-white/10
to-transparent
skew-x-12
"
      />

      {/* arrows */}

      <motion.div
        style={{
          opacity: hintOpacity,
        }}
        className="
absolute
left-12
flex

"
      >
        {[1, 2, 3].map((i) => (
          <IoMdArrowDropright
            key={i}
            className="
text-sky-200
animate-pulse
"
          />
        ))}
      </motion.div>

      {/* text */}

      <motion.span
        style={{
          opacity: textOpacity,
          x: textX,
          filter: textBlur,
        }}
        className="
absolute
right-5
text-white
font-semibold
text-sm
"
      >
        بکشید برای رزرو نوبت
      </motion.span>

      {/* draggable */}

      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 150,
        }}
        dragElastic={0.08}
        style={{
          x,
        }}
        onDragStart={() => setIsActive(true)}
        onDragEnd={handleDragEnd}
        className="
absolute
left-1
top-1
bottom-1
aspect-square
rounded-full
bg-white
flex
items-center
justify-center
cursor-grab
z-20
shadow-lg
"
      >
        <motion.img
          src={toothBtn}
          alt="tooth"
          draggable={false}
          style={{
            rotate,
            scale: iconScale,
          }}
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
w-7
h-7
object-contain
"
        />
      </motion.div>
    </motion.div>
  );
}
