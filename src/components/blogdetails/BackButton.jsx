//       بازگشت به مقالات

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
// start
export default function BackButton() {
  // jsx
  return (
    <Link
      to="/#tips"
      className="
inline-flex
items-center
gap-2
mb-10
text-sm
font-bold
text-cyan-400
hover:text-white
transition-all
duration-300
      "
    >
      <ArrowRight
        className="
        w-4
        h-4
        "
      />
      بازگشت به مقالات
    </Link>
  );
}
// finish