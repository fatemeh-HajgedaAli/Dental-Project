import { Calendar, Clock } from "lucide-react";

export default function BlogMeta() {
  return (
    <div
      className="
      flex
      flex-wrap
      items-center
      gap-6

      text-sm

      text-slate-400
      "
    >
      {/* Date */}

      <div
        className="
        flex
        items-center
        gap-2
        "
      >
        <Calendar
          className="
          w-4
          h-4
          text-cyan-300
          "
        />

        <span>۱۰ تیر ۱۴۰۵</span>
      </div>

      {/* Reading Time */}

      <div
        className="
        flex
        items-center
        gap-2
        "
      >
        <Clock
          className="
          w-4
          h-4
          text-cyan-300
          "
        />

        <span>۵ دقیقه مطالعه</span>
      </div>
    </div>
  );
}
