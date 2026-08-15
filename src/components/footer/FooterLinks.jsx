import { footerLinks } from "../../pages/main/homeLinks";

export default function FooterLinks() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div dir="rtl">
      <h3 className="mb-6 text-base font-black text-white">دسترسی سریع</h3>

      <ul className="space-y-3 text-sm text-slate-400">
        {footerLinks.map((link) => (
          <li key={link.to}>
            <button
              type="button"
              onClick={() => handleScroll(link.to)}
              className="
                group
                flex
                items-center
                gap-2
                text-right
                transition-all
                duration-300
                hover:translate-x-[-4px]
                hover:text-cyan-400
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-slate-600
                  transition-all
                  duration-300
                  group-hover:bg-cyan-400
                  group-hover:scale-125
                "
              />

              {link.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
