import { Clock3 } from "lucide-react";
import { workingHours } from "../../pages/main/homeLinks";

export default function FooterHours() {
  return (
    <div>
      <h3 className="mb-6 text-base font-black">ساعات کاری</h3>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <div className="mb-4 flex items-center gap-2 text-cyan-400">
          <Clock3 className="h-4 w-4" />

          <span className="text-xs font-bold">ساعات پذیرش</span>
        </div>

        <div className="space-y-3 text-xs">
          {workingHours.map((item, index) => (
            <div key={item.day}>
              <div className="flex items-center justify-between gap-3">
                <span className="text-slate-500">{item.day}</span>

                <span
                  className={
                    item.closed
                      ? "font-bold text-red-400"
                      : "font-bold text-slate-300"
                  }
                >
                  {item.time}
                </span>
              </div>

              {index < workingHours.length - 1 && (
                <div className="mt-3 h-px bg-white/5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
