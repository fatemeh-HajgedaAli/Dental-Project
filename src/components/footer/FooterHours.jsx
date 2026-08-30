import { Clock3 } from "lucide-react";
import { workingHours } from "../../pages/main/homeLinks";

export default function FooterHours() {
  return (
    <div>
      <h3 className="mb-6 text-base font-black text-dark">ساعات کاری</h3>

      <div
        className="
          rounded-2xl
          border
          border-border
          bg-surface
          p-4
          shadow-sm
        "
      >
        <div className="mb-4 flex items-center gap-2 text-primary-dark">
          <Clock3 className="h-4 w-4" />

          <span className="text-xs font-bold">ساعات پذیرش</span>
        </div>

        <div className="space-y-3 text-xs">
          {workingHours.map((item, index) => (
            <div key={item.day}>
              <div className="flex items-center justify-between gap-3">
                <span className="text-text-muted">{item.day}</span>

                <span
                  className={
                    item.closed
                      ? "font-bold text-danger"
                      : "font-bold text-text"
                  }
                >
                  {item.time}
                </span>
              </div>

              {index < workingHours.length - 1 && (
                <div className="mt-3 h-px bg-border-soft" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
