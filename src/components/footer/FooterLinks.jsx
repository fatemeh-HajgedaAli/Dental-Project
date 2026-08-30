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
      <h3 className="mb-6 text-base font-black text-dark">دسترسی سریع</h3>

      <ul className="space-y-3 text-sm text-text-muted">
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
                hover:text-primary-dark
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-primary-light
                  transition-all
                  duration-300
                  group-hover:bg-accent
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
