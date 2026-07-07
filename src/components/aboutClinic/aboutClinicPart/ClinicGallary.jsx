// data
import { clinicGallaryData } from "./clinic.data";

// start
export default function ClinicGallary({ items, onHover, onLeave }) {
  return (
    <div className="absolute -bottom-20 inset-x-0 w-full z-50 px-4">
      <div className="flex items-center justify-center
       gap-3 md:gap-4 max-w-lg mx-auto">
        {items.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => onHover(item.background)}
            onMouseLeave={onLeave}
            className="
              relative w-50 h-36  md:w-42 md:h-36
              rounded-2xl overflow-hidden border-2 border-white
               shadow-lg transition-all duration-300 
               hover:-translate-y-2 hover:scale-105
              cursor-pointer group
            "
          >
            <img
              src={item.thumb} // ⚡ اصلاح شد: استفاده از thumb به جای image
              alt={`Clinic Gallery ${item.id}`}
              className="w-full h-full object-cover 
               transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent 
            transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
