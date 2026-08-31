import FooterCTA from "../components/footer/FooterCTA";
import FooterBrand from "../components/footer/FooterBrand";
import FooterLinks from "../components/footer/FooterLinks";
import FooterContact from "../components/footer/FooterContact";
import FooterHours from "../components/footer/FooterHours";
import FooterBottom from "../components/footer/FooterBottom";

export default function Footer({ onOpenModal }) {
  return (
    <footer
      dir="rtl"
      className="
        relative
        overflow-hidden
        bg-secondary
        text-text
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Primary ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-primary/10
          blur-[130px]
        "
      />

      {/* Gold ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-48
          -left-32
          h-[480px]
          w-[480px]
          rounded-full
          bg-accent/10
          blur-[140px]
        "
      />

      {/* Center soft glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[45%]
          h-[300px]
          w-[300px]
          -translate-x-1/2
          rounded-full
          bg-primary/5
          blur-[100px]
        "
      />

      {/* =========================================================
          CTA
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-4
          pt-10
          sm:px-6
          md:pt-16
          lg:px-8
        "
      >
        <FooterCTA onOpenModal={onOpenModal} />
      </div>

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-4
          py-14
          sm:px-6
          md:py-20
          lg:px-8
        "
      >
        {/* Divider */}
        <div
          className="
            mb-12
            h-px
            w-full
            bg-gradient-to-l
            from-transparent
            via-border
            to-transparent
          "
        />

        <div
          className="
            grid
            gap-10
            md:grid-cols-2
            lg:grid-cols-4
            lg:gap-8
          "
        >
          <FooterBrand />

          <FooterLinks />

          <FooterContact />

          <FooterHours />
        </div>
      </div>

      {/* =========================================================
          BOTTOM
      ========================================================= */}

      <div
        className="
          relative
          border-t
          border-border-soft
          bg-surface-soft/70
        "
      >
        <FooterBottom />
      </div>
    </footer>
  );
}
