import { CheckCircle2, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

const points = [
  {
    code: "LI4",
    name: "He Gu",
    image: "/assets/generated/acupuncture-li4-hand.dim_600x500.jpg",
    location: "Back of the hand, between the thumb and index finger",
    benefits: [
      "Relieves headaches & migraines",
      "Reduces pain & inflammation",
      "Boosts immune system",
    ],
  },
  {
    code: "ST36",
    name: "Zu San Li",
    image: "/assets/generated/acupuncture-st36-leg.dim_600x500.jpg",
    location: "Outer leg, just below the knee",
    benefits: [
      "Strengthens digestion",
      "Boosts energy & vitality",
      "Supports immune function",
    ],
  },
  {
    code: "GV20",
    name: "Bai Hui",
    image: "/assets/generated/acupuncture-gv20-head.dim_600x500.jpg",
    location: "Crown of the head, at the midpoint",
    benefits: [
      "Calms the mind",
      "Relieves dizziness & headaches",
      "Lifts mental clarity",
    ],
  },
  {
    code: "PC6",
    name: "Nei Guan",
    image: "/assets/generated/acupuncture-pc6-wrist.dim_600x500.jpg",
    location: "Inner wrist, two finger-widths above the crease",
    benefits: [
      "Reduces nausea & anxiety",
      "Calms palpitations",
      "Relieves chest tightness",
    ],
  },
  {
    code: "LV3",
    name: "Tai Chong",
    image: "/assets/generated/acupuncture-lv3-foot.dim_600x500.jpg",
    location: "Top of the foot, between big toe and second toe",
    benefits: [
      "Relieves stress & irritability",
      "Supports liver health",
      "Reduces menstrual pain",
    ],
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
      { threshold: 0.1 },
    );
    const cards = el.querySelectorAll(".reveal");
    for (const card of cards) observer.observe(card);
    return () => observer.disconnect();
  }, [ref]);
}

export default function AcupuncturePoints() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      id="acupuncture-points"
      ref={sectionRef}
      data-ocid="acupuncture.section"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Organic blob LEFT — sage green */}
      <svg
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-[480px] h-[480px] opacity-[0.07] pointer-events-none select-none"
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M240 18 C340 -5 445 68 460 175 C475 282 420 395 325 432 C230 470 90 455 32 368 C-26 281 -8 145 58 76 C124 7 140 41 240 18 Z"
          fill="#2d6a4f"
        />
      </svg>

      {/* Organic blob RIGHT — light green tint */}
      <svg
        className="absolute -right-44 top-1/2 -translate-y-1/2 w-[440px] h-[440px] opacity-[0.09] pointer-events-none select-none"
        viewBox="0 0 440 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M220 14 C315 -8 415 60 432 168 C449 276 395 388 303 425 C211 462 72 446 18 360 C-36 274 -12 138 56 70 C124 2 125 36 220 14 Z"
          fill="#74c69d"
        />
      </svg>

      {/* Decorative needle motif — subtle background */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 80%, rgba(116,198,157,0.06) 0%, transparent 50%),
                            radial-gradient(circle at 75% 20%, rgba(45,106,79,0.05) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span
            className="inline-block text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: "#2d6a4f" }}
          >
            Healing Touch Points
          </span>
          <h2
            className="font-display text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#2c3e50" }}
          >
            Key Acupuncture Points
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto font-body leading-relaxed"
            style={{ color: "rgba(44,62,80,0.65)" }}
          >
            These carefully selected meridian points are the foundation of our
            treatments — each unlocking the body's natural ability to heal,
            restore balance, and relieve pain.
          </p>
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div
              className="h-px flex-1 max-w-24"
              style={{ backgroundColor: "rgba(45,106,79,0.3)" }}
            />
            <svg
              viewBox="0 0 20 20"
              className="w-4 h-4"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="10" cy="10" r="4" fill="#2d6a4f" fillOpacity="0.25" />
              <circle cx="10" cy="10" r="2" fill="#2d6a4f" />
            </svg>
            <div
              className="h-px flex-1 max-w-24"
              style={{ backgroundColor: "rgba(45,106,79,0.3)" }}
            />
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {points.map((point, i) => (
            <article
              key={point.code}
              className="reveal card-lift flex flex-col rounded-2xl overflow-hidden"
              style={{
                transitionDelay: `${i * 90}ms`,
                backgroundColor: "#ffffff",
                border: "1px solid rgba(116,198,157,0.35)",
                boxShadow:
                  "0 2px 16px rgba(45,106,79,0.07), 0 1px 4px rgba(45,106,79,0.05)",
              }}
              data-ocid={`acupuncture.item.${i + 1}`}
            >
              {/* Image */}
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={point.image}
                  alt={`${point.name} (${point.code}) acupuncture point`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                {/* Point code badge */}
                <span
                  className="absolute top-3 left-3 text-xs font-bold font-body uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: "#2d6a4f",
                    color: "#ffffff",
                    letterSpacing: "0.08em",
                  }}
                >
                  {point.code}
                </span>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-4 gap-3">
                {/* Point name */}
                <h3
                  className="font-display text-base font-bold leading-snug"
                  style={{ color: "#2c3e50" }}
                >
                  {point.name}
                </h3>

                {/* Location */}
                <p
                  className="font-body text-xs flex items-start gap-1.5 leading-snug"
                  style={{ color: "rgba(44,62,80,0.58)" }}
                >
                  <MapPin
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: "#74c69d" }}
                    aria-hidden="true"
                  />
                  {point.location}
                </p>

                {/* Divider */}
                <div
                  className="w-8 h-px"
                  style={{ backgroundColor: "rgba(116,198,157,0.5)" }}
                />

                {/* Benefits */}
                <ul className="flex flex-col gap-1.5">
                  {point.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 font-body text-xs leading-snug"
                      style={{ color: "rgba(44,62,80,0.72)" }}
                    >
                      <CheckCircle2
                        className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                        style={{ color: "#2d6a4f" }}
                        aria-hidden="true"
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="flex items-center justify-center gap-2 mt-16 reveal">
          {[0, 1, 2, 3, 4].map((dot) => (
            <div
              key={dot}
              className="rounded-full"
              style={{
                width: dot === 2 ? "32px" : "8px",
                height: "4px",
                backgroundColor: dot === 2 ? "#2d6a4f" : "rgba(45,106,79,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
