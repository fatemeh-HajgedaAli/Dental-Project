import { FaTooth } from "react-icons/fa";

export default function FooterBrand() {
  return (
    <div>
      <div className="mb-5 flex items-center gap-3">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-accent
            to-accent-dark
            text-white
            shadow-lg
            shadow-accent/20
          "
        >
          <span className="text-xl font-black">
            <FaTooth />
          </span>
        </div>

        <div>
          <h3 className="text-lg font-black text-dark">Dr.Zohreh Safdarian</h3>

          <p className="text-[10px] font-medium tracking-wider text-accent">
            DENTAL CLINIC
          </p>
        </div>
      </div>
    </div>
  );
}
