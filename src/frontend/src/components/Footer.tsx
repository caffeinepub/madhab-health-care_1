import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "#ffffff",
        borderColor: "#e8e4d9",
      }}
    >
      {/* Main single-row bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* LEFT — Phone */}
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ color: "#2d6a4f" }}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a
              href="tel:6397866895"
              className="font-body text-sm font-semibold hover:underline"
              style={{ color: "#2c3e50" }}
              data-ocid="footer.link"
            >
              Call: +91 63978 66895
            </a>
          </div>

          {/* CENTER — WhatsApp green button */}
          <a
            href="https://wa.me/916397866895"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-white transition-all hover:scale-105 hover:opacity-90 shadow-green"
            style={{ backgroundColor: "#25d366" }}
            data-ocid="footer.primary_button"
          >
            <SiWhatsapp className="w-4 h-4" />
            Message Us
          </a>

          {/* RIGHT — Email + social icons */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:madhabdas10008@gmail.com"
              className="font-body text-sm hover:underline hidden sm:block"
              style={{ color: "rgba(44,62,80,0.65)" }}
              data-ocid="footer.link"
            >
              madhabdas10008@gmail.com
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  backgroundColor: "rgba(45,106,79,0.1)",
                  color: "#2d6a4f",
                }}
                data-ocid="footer.link"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  backgroundColor: "rgba(45,106,79,0.1)",
                  color: "#2d6a4f",
                }}
                data-ocid="footer.link"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Caffeine attribution bar */}
      <div
        className="border-t py-3 text-center"
        style={{ borderColor: "#f0ede6" }}
      >
        <p
          className="text-xs font-body"
          style={{ color: "rgba(44,62,80,0.4)" }}
        >
          © {year} Madhab Health Care. Built with ❤️ using{" "}
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: "#2d6a4f" }}
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
