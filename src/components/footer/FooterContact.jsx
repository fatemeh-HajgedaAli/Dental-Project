import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import { clinicInfo } from "../../pages/main/homeLinks";
import { toPersianDigits } from "../../utlis/number";

export default function FooterContact() {
  return (
    <div>
      <h3 className="mb-6 text-base font-black text-dark">ارتباط با کلینیک</h3>

      <div className="space-y-5">
        {/* Address */}
        <ContactItem icon={<MapPin />}>
          <p className="text-sm leading-7 text-text-muted">
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
              text-text
              transition-colors
              hover:text-primary-dark
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
              text-text-muted
              transition-colors
              hover:text-primary-dark
              sm:text-sm
            "
          >
            {clinicInfo.email}
          </a>
        </ContactItem>
      </div>

      {/* Social */}
      <div className="mt-6 flex gap-3">
        <SocialButton
          href="https://instagram.com/Dr_Zohreh_Safdarian"
          ariaLabel="اینستاگرام کلینیک"
        >
          <FaInstagram className="h-4 w-4" />
        </SocialButton>

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
          bg-primary-light
          text-primary-dark
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
        border-border
        bg-white
        text-text-muted
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-accent/40
        hover:bg-accent
        hover:text-white
        hover:shadow-lg
        hover:shadow-accent/20
      "
    >
      {children}
    </a>
  );
}
