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
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Glows */}

      <div className="pointer-events-none absolute -top-40 right-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-180px] left-[-120px] h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[140px]" />

      {/* CTA */}

      <div className="relative mx-auto max-w-7xl px-4 pt-12 sm:px-6 md:pt-16 lg:px-8">
        <FooterCTA onOpenModal={onOpenModal} />
      </div>

      {/* Main Footer */}

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <FooterBrand />

          <FooterLinks />

          <FooterContact />

          <FooterHours />
        </div>
      </div>

      {/* Bottom */}

      <FooterBottom />
    </footer>
  );
}
