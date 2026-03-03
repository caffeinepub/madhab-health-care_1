import { useEffect, useRef } from "react";

const trustBadges = [
  {
    label: "Experienced Practitioner",
    sub: "Years of dedicated healing practice",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="22" fill="#d8f3dc" />
        <path
          d="M24 10l3.09 6.26L34 17.27l-5 4.87 1.18 6.88L24 25.77l-6.18 3.25L19 22.14l-5-4.87 6.91-1.01L24 10z"
          fill="#2d6a4f"
        />
        <path
          d="M18 34h12"
          stroke="#2d6a4f"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M21 38h6"
          stroke="#2d6a4f"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Natural Methods Only",
    sub: "No chemicals, no side effects",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="22" fill="#d8f3dc" />
        <path
          d="M24 36 C20 30 12 24 14 16 C16 10 22 10 24 14 C26 10 32 10 34 16 C36 24 28 30 24 36Z"
          fill="#74c69d"
          stroke="#2d6a4f"
          strokeWidth="1.5"
        />
        <path
          d="M24 14 L24 36"
          stroke="#2d6a4f"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M24 22 Q28 18 32 20"
          stroke="#2d6a4f"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M24 26 Q20 22 16 24"
          stroke="#2d6a4f"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
      </svg>
    ),
  },
  {
    label: "Hundreds Healed",
    sub: "A legacy of wellness & trust",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="22" fill="#d8f3dc" />
        <path
          d="M24 35 C24 35 12 27 12 19 C12 15 15.6 12 19.5 12 C21.6 12 24 14 24 14 C24 14 26.4 12 28.5 12 C32.4 12 36 15 36 19 C36 27 24 35 24 35Z"
          fill="#74c69d"
          stroke="#2d6a4f"
          strokeWidth="1.5"
        />
        <path
          d="M24 20v6M21 23h6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Personalized Care",
    sub: "Treatment tailored for you",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="22" fill="#d8f3dc" />
        <circle
          cx="24"
          cy="18"
          r="6"
          stroke="#2d6a4f"
          strokeWidth="2"
          fill="#74c69d"
          opacity="0.5"
        />
        <path
          d="M14 38 C14 31 34 31 34 38"
          stroke="#2d6a4f"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M28 20 Q32 18 34 22"
          stroke="#2d6a4f"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        <circle cx="33" cy="24" r="4" fill="#2d6a4f" opacity="0.15" />
        <path
          d="M31 24h4M33 22v4"
          stroke="#2d6a4f"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
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
    const elements = el.querySelectorAll(".reveal");
    for (const e of elements) observer.observe(e);
    return () => observer.disconnect();
  }, [ref]);
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="reveal">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-brand-green mb-3">
              About Us
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-text mb-6">
              About <span className="text-brand-green">Madhabdas Goswami</span>
            </h2>
            <div className="space-y-4 font-body text-brand-text/75 leading-relaxed text-[16px]">
              <p>
                Madhabdas Goswami is a dedicated wellness practitioner based in
                the holy town of Radhakund, Mathura. With years of experience in
                Acupressure Therapy and Ayurvedic healing, he has helped
                hundreds of patients reclaim their health naturally — without
                dependence on pharmaceutical drugs.
              </p>
              <p>
                His philosophy is simple:{" "}
                <em className="text-brand-green font-semibold">
                  the body has an innate capacity to heal itself
                </em>
                . By stimulating the right pressure points and using time-tested
                Ayurvedic formulations, he helps restore the body's natural
                energy flow and immunity.
              </p>
              <p>
                At Madhab Health Care, every treatment plan is deeply
                personalized. Whether you're struggling with chronic pain,
                digestive issues, stress, or simply seeking a path to better
                wellness — Madhabji provides compassionate, effective, and
                lasting care.
              </p>
            </div>

            {/* Signature line */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-brand-green flex items-center justify-center shadow-green flex-shrink-0">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-display font-bold text-brand-text text-lg">
                  Madhabdas Goswami
                </p>
                <p className="text-sm text-brand-text/60 font-body">
                  Acupressure &amp; Ayurvedic Practitioner
                </p>
                <p className="text-xs text-brand-green font-semibold mt-0.5">
                  Madhab Health Care, Radhakund
                </p>
              </div>
            </div>
          </div>

          {/* Right: Trust badges 2x2 grid */}
          <div
            className="grid grid-cols-2 gap-5 reveal"
            style={{ transitionDelay: "150ms" }}
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="bg-brand-beige rounded-2xl p-6 flex flex-col items-center text-center border border-brand-beige-dark/60 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-3">{badge.icon}</div>
                <h3 className="font-display font-bold text-brand-text text-[15px] leading-tight mb-1">
                  {badge.label}
                </h3>
                <p className="text-xs text-brand-text/60 font-body leading-snug">
                  {badge.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
