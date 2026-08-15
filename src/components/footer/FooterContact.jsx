import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import { clinicInfo } from "../../pages/main/homeLinks";
import { toPersianDigits } from "../../utlis/number";

export default function FooterContact() {
  return (
    <div>
      <h3 className="mb-6 text-base font-black">ارتباط با کلینیک</h3>

      <div className="space-y-5">
        {/* Address */}
        <ContactItem icon={<MapPin />}>
          <p className="text-sm leading-7 text-slate-400">
            {clinicInfo.address}
          </p>
        </ContactItem>

        {/* Phone */}
        <ContactItem icon={<Phone />}>
          <a
            href={`tel:${clinicInfo.phone}`}
            dir="ltr"
            className="
              text-sm
              font-semibold
              text-slate-300
              transition-colors
              hover:text-cyan-400
            "
          >
            {toPersianDigits(clinicInfo.phone)}
          </a>
        </ContactItem>

        {/* Email */}
        <ContactItem icon={<Mail />}>
          <a
            href={`mailto:${clinicInfo.email}`}
            className="
              text-xs
              text-slate-400
              transition-colors
              hover:text-cyan-400
              sm:text-sm
            "
          >
            {clinicInfo.email}
          </a>
        </ContactItem>
      </div>

      {/* Social Media */}
      <div className="mt-6 flex gap-3">
        {/* Instagram */}
        <SocialButton
          href="https://instagram.com/Dr_Zohreh_Safdarian"
          ariaLabel="اینستاگرام کلینیک"
        >
          <FaInstagram className="h-4 w-4" />
        </SocialButton>

        {/* WhatsApp */}
        <SocialButton
          href="https://wa.me/989336155769"
          ariaLabel="واتساپ کلینیک"
        >
          <FaWhatsapp className="h-4 w-4" />
        </SocialButton>
      </div>
    </div>
  );
}

function ContactItem({ icon, children }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-cyan-400/10
          text-cyan-400
          [&>svg]:h-4
          [&>svg]:w-4
        "
      >
        {icon}
      </div>

      {children}
    </div>
  );
}

function SocialButton({ href, ariaLabel, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        border
        border-white/10
        bg-white/5
        text-slate-400
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-cyan-400
        hover:text-white
        hover:shadow-lg
        hover:shadow-cyan-500/20
      "
    >
      {children}
    </a>
  );
}
