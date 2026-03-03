import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    scrollTo(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/90 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-green flex items-center justify-center shadow-green group-hover:scale-105 transition-transform">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                aria-hidden="true"
              >
                <path
                  d="M20 6C14 6 8 10 8 18c0 5 3 8 6 10 1.5.8 3 1.3 4 1.5V36h4v-6.5c1-.2 2.5-.7 4-1.5 3-2 6-5 6-10 0-8-6-12-12-12z"
                  fill="white"
                  opacity="0.9"
                />
                <path
                  d="M20 10c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5z"
                  fill="white"
                  opacity="0.6"
                />
                <circle cx="20" cy="15" r="2.5" fill="#74c69d" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-brand-green text-lg leading-tight">
                Madhab Health Care
              </span>
              <span className="text-[11px] text-brand-green/70 font-body tracking-wide">
                Natural Healing · Mathura
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-[15px] font-semibold text-brand-text hover:text-brand-green transition-colors rounded-lg hover:bg-brand-green/8"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleNavClick("#booking")}
              className="hidden sm:flex items-center px-5 py-2.5 bg-brand-green text-white font-semibold text-sm rounded-full shadow-green hover:bg-brand-green-dark transition-all hover:scale-105 hover:shadow-lg"
            >
              Book Appointment
            </button>

            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-brand-text hover:text-brand-green hover:bg-brand-green/10 transition-colors"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 pb-4 border-t border-brand-beige-dark">
            <ul className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 text-[15px] font-semibold text-brand-text hover:text-brand-green hover:bg-brand-beige rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => handleNavClick("#booking")}
                  className="w-full px-4 py-3 bg-brand-green text-white font-bold text-sm rounded-xl shadow-green hover:bg-brand-green-dark transition-colors"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
