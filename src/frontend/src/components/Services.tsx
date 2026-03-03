import { useEffect, useRef } from "react";

const services = [
  {
    title: "Acupressure Therapy",
    description:
      "Traditional pressure point therapy to restore energy flow and heal chronic conditions. Rooted in ancient Chinese healing wisdom.",
    icon: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-14"
        aria-hidden="true"
      >
        {/* Hand with pressure points */}
        <path
          d="M32 52V34a3 3 0 116 0v10"
          stroke="#2d6a4f"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M38 46V30a3 3 0 116 0v16"
          stroke="#2d6a4f"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M44 46V34a3 3 0 116 0v12"
          stroke="#2d6a4f"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M50 50V38a3 3 0 116 0v10c0 6-6 12-12 12h-2c-5 0-9-4-9-9v-3"
          stroke="#2d6a4f"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="35" cy="28" r="2.5" fill="#74c69d" />
        <circle cx="41" cy="25" r="2.5" fill="#74c69d" />
        <circle cx="47" cy="28" r="2.5" fill="#74c69d" />
        <circle cx="53" cy="33" r="2.5" fill="#74c69d" />
      </svg>
    ),
  },
  {
    title: "Ayurvedic Medicines",
    description:
      "Authentic Ayurvedic remedies and herbal medicines sourced from nature. Traditional formulations for holistic healing and wellness.",
    icon: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-14"
        aria-hidden="true"
      >
        {/* Mortar and pestle with herbs */}
        <ellipse
          cx="40"
          cy="58"
          rx="18"
          ry="6"
          stroke="#2d6a4f"
          strokeWidth="2.5"
          fill="#74c69d"
          fillOpacity="0.3"
        />
        <path
          d="M22 50 Q20 56 22 60 Q40 66 58 60 Q60 56 58 50"
          stroke="#2d6a4f"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <line
          x1="40"
          y1="50"
          x2="52"
          y2="28"
          stroke="#2d6a4f"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Leaf */}
        <path
          d="M28 38 C22 30 26 20 34 22 C34 22 32 32 28 38Z"
          fill="#74c69d"
          stroke="#2d6a4f"
          strokeWidth="2"
        />
        <path
          d="M28 38 L32 28"
          stroke="#2d6a4f"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="44"
          cy="28"
          r="4"
          fill="#74c69d"
          stroke="#2d6a4f"
          strokeWidth="2"
        />
        <circle
          cx="52"
          cy="22"
          r="3"
          fill="#74c69d"
          stroke="#2d6a4f"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Stress & Relaxation Therapy",
    description:
      "Holistic therapy to release stress, anxiety, and restore inner calm. A sanctuary of peace for your body, mind, and spirit.",
    icon: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-14"
        aria-hidden="true"
      >
        {/* Lotus flower */}
        <path
          d="M40 58 C34 52 28 46 28 38 C28 32 34 28 40 28 C46 28 52 32 52 38 C52 46 46 52 40 58Z"
          fill="#74c69d"
          fillOpacity="0.5"
          stroke="#2d6a4f"
          strokeWidth="2"
        />
        <path
          d="M28 40 C22 34 18 26 23 20 C26 17 32 17 34 22 C34 22 30 32 28 40Z"
          fill="#74c69d"
          fillOpacity="0.4"
          stroke="#2d6a4f"
          strokeWidth="2"
        />
        <path
          d="M52 40 C58 34 62 26 57 20 C54 17 48 17 46 22 C46 22 50 32 52 40Z"
          fill="#74c69d"
          fillOpacity="0.4"
          stroke="#2d6a4f"
          strokeWidth="2"
        />
        {/* Water lines */}
        <path
          d="M22 60 Q28 57 34 60 Q40 63 46 60 Q52 57 58 60"
          stroke="#2d6a4f"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
        <circle cx="40" cy="36" r="5" fill="#2d6a4f" opacity="0.8" />
        <circle cx="40" cy="36" r="2.5" fill="white" />
      </svg>
    ),
  },
];

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.12 },
    );
    const cards = el.querySelectorAll(".reveal");
    for (const card of cards) observer.observe(card);
    return () => observer.disconnect();
  }, [ref]);
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#f4f1eb" }}
    >
      {/* Organic blob LEFT — earthy beige */}
      <svg
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-[460px] h-[460px] opacity-30 pointer-events-none select-none"
        viewBox="0 0 460 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M230 20 C320 0 420 70 440 170 C460 270 410 380 320 420 C230 460 100 450 40 365 C-20 280 -10 150 50 80 C110 10 140 40 230 20 Z"
          fill="#c9a97d"
        />
      </svg>

      {/* Organic blob RIGHT — sage green */}
      <svg
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-20 pointer-events-none select-none"
        viewBox="0 0 420 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M210 15 C300 -5 400 65 420 170 C440 275 390 380 300 415 C210 450 80 435 25 350 C-30 265 -10 135 55 70 C120 5 120 35 210 15 Z"
          fill="#74c69d"
        />
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20 reveal">
          <span
            className="inline-block text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: "#2d6a4f" }}
          >
            What We Offer
          </span>
          <h2
            className="font-display text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#2c3e50" }}
          >
            Our Healing Services
          </h2>
          <p
            className="text-lg max-w-xl mx-auto font-body"
            style={{ color: "rgba(44,62,80,0.65)" }}
          >
            Ancient wisdom meets modern care. Each treatment is tailored to your
            unique needs, promoting deep healing from within.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div
              className="h-px flex-1 max-w-24"
              style={{ backgroundColor: "rgba(45,106,79,0.3)" }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#2d6a4f" }}
            />
            <div
              className="h-px flex-1 max-w-24"
              style={{ backgroundColor: "rgba(45,106,79,0.3)" }}
            />
          </div>
        </div>

        {/* Services: 3 circular badge icons in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="reveal flex flex-col items-center text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
              data-ocid={`services.item.${i + 1}`}
            >
              {/* Large circular icon badge */}
              <div
                className="w-[120px] h-[120px] rounded-full flex items-center justify-center mb-6 shadow-card"
                style={{
                  backgroundColor: "#d8f3dc",
                  border: "3px solid rgba(116,198,157,0.4)",
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="font-display text-lg font-bold uppercase tracking-wide mb-3"
                style={{ color: "#2c3e50" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="font-body leading-relaxed text-[15px]"
                style={{ color: "rgba(44,62,80,0.68)" }}
              >
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
