import TeethLogo from "../assets/images/logos/LogoPng.png";
import DesktopMenu from "../components/navBar/DesktopMenu";
import MobileMenu from "../components/navBar/MobileMenu";

export default function Navbar() {
  return (
    <>
      <div className="relative z-50 
      hidden mt-4 lg:block top-2">
        {/* کانتینر اصلی با ارتفاع مشخص جهت در بر گرفتن کامل موج */}
        <div
          className="relative w-full h-[150px] 
          flex justify-between 
        items-start pt-2 px-10"
        >
          {/* پس‌زمینه موج SVG */}
          <div
            className="absolute inset-0 w-full h-full -z-10 
          pointer-events-none rounded-b-2xl overflow-hidden filter
           
           "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1040 320"
              preserveAspectRatio="none"
              className="w-full h-full block"
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,288L48,250.7C96,213,192,139,288,128C384,117,480,171,576,181.3C672,192,768,160,864,138.7C960,117,1056,107,1152,133.3C1248,160,1344,224,1392,256L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              />
            </svg>
          </div>

          {/* منوی اصلی در سمت راست/چپ بالا */}
          <div className="relative z-10 flex items-center pt-2">
            <DesktopMenu />
          </div>

          {/* لوگو در سمت راست/چپ بالا */}
          <div className="relative z-10 flex items-center -mt-6">
            <img
              src={TeethLogo}
              alt="Logo"
              className="w-30 object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <MobileMenu />
    </>
  );
}
