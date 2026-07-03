// backGround
import HeroImage from "../../assets/images/dental/onePng.png";
import HeroContent from "./HeroContent";
// start
export default function HeroBackground() {
  return (
    <>
      <div className="relative w-full h-full overflow-hidden">
        {" "}
        {/* Image Background */}
        <img
          src={HeroImage}
          alt="Hero Background"
          className="w-full h-full object-cover scale-105"
        />
        
      </div>
    </>
  );
}
// finish