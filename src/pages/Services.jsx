import Reveal from "./Reveal";
import DentalCarousel from "../components/services/DentalCarousel";
import BackgroundServices from "../components/services/BackgroundServices";

export default function Services() {
  return (
    <section id="services" className="" dir="rtl">
      <BackgroundServices>
        <DentalCarousel />
      </BackgroundServices>
    </section>
  );
}
