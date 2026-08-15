import { FaTooth } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
// start
export default function FooterBrand() {
  return (
    <div>
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 shadow-lg shadow-cyan-500/20">
          <span className="text-xl font-black">
            <FaTooth />
          </span>
        </div>

        <div>
          <h3 className="text-lg font-black">Dr.Zohreh Safdarian</h3>

          <p className="text-[10px] font-medium tracking-wider text-cyan-400">
            DENTAL CLINIC
          </p>
        </div>
      </div>
    </div>
  );
}

function SocialButton({ children }) {
  return (
    <a
      href="#"
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500/10 hover:text-cyan-400"
    >
      {children}
    </a>
  );
}
