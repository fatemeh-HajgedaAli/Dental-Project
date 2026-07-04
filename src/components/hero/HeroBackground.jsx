import HeroImage from "../../assets/images/dental/smileOne.png";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 md:left-auto md:right-0 w-full h-full z-0 overflow-hidden">
      {" "}
      <img
        src={HeroImage}
        alt="Hero Background"
        className="w-full h-full lg:w-[70%]  object-cover md:object-right object-center"
      />
      {/* Fade in desktop*/}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.92_0.03_248.48)] via-transparent to-transparent hidden md:block" />{" "}
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.85_0.02_248.06)] via-transparent to-transparent hidden md:block" />{" "}
      {/* Fade in desktop*/}
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.85_0.4_270.23)] via-[oklch(0.92_0.03_230.23/.35)] to-transparent" />
    </div>
  );
}
