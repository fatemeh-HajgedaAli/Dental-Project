import { Calendar, Clock } from "lucide-react";

export default function BlogMeta({
  date = "۱۰ تیر ۱۴۰۵",
  readTime = "۵ دقیقه مطالعه",
}) {
  return (
    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
      {/* تاریخ انتشار */}
      <div className="flex items-center gap-2">
        <Calendar className="w-4 h-4 text-cyan-300" />
        <span>{date}</span>
      </div>

      {/* زمان مطالعه */}
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-cyan-300" />
        <span>{readTime}</span>
      </div>
    </div>
  );
}
