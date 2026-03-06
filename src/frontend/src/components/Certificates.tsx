import { useEffect, useRef, useState } from "react";

const certificates = [
  {
    title: "Thai Massage Therapy",
    issuer: "Thai Healing Massage Academy",
    image: "/assets/uploads/IMG_6324-1.png",
    year: "2007",
  },
  {
    title: "Reflexology Foot Massage (60 Hours)",
    issuer: "Thai Traditional Medical Services Society",
    image: "/assets/uploads/IMG_6326-1.png",
    year: "2014",
  },
  {
    title: "SEC RIA Permission",
    issuer: "U.S. Securities and Exchange Commission",
    image: "/assets/uploads/IMG_6325-1.jpeg",
    year: "2025",
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
    const items = el.querySelectorAll(".reveal");
    for (const item of items) observer.observe(item);
    return () => observer.disconnect();
  }, [ref]);
}

export default function Certificates() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#fff" }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(116,198,157,0.07) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(201,169,125,0.07) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span
            className="inline-block text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: "#2d6a4f" }}
          >
            Credentials &amp; Recognition
          </span>
          <h2
            id="k27dqm"
            className="font-display text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#2c3e50" }}
          >
            Certificates
          </h2>
          <p
            className="text-lg max-w-xl mx-auto font-body"
            style={{ color: "rgba(44,62,80,0.65)" }}
          >
            Backed by professional training and recognized qualifications in
            acupuncture, Ayurveda, and holistic wellness.
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

        {/* Certificate grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <button
              key={cert.title}
              type="button"
              className="reveal group cursor-pointer text-left w-full"
              style={{ transitionDelay: `${i * 100}ms` }}
              data-ocid={`certificates.item.${i + 1}`}
              onClick={() => setLightbox(i)}
              aria-label={`View ${cert.title}`}
            >
              {/* Card */}
              <div
                className="rounded-2xl overflow-hidden shadow-card border transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1"
                style={{ borderColor: "rgba(116,198,157,0.3)" }}
              >
                {/* Certificate image */}
                <div
                  className="relative overflow-hidden bg-gray-50"
                  style={{ aspectRatio: "600/420" }}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3 shadow-lg">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#2d6a4f"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5" style={{ backgroundColor: "#fff" }}>
                  <div className="flex items-start gap-3">
                    {/* Award icon */}
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: "#d8f3dc" }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#2d6a4f"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="font-display text-[15px] font-bold leading-snug mb-1"
                        style={{ color: "#2c3e50" }}
                      >
                        {cert.title}
                      </h3>
                      <p
                        className="text-xs font-body"
                        style={{ color: "rgba(44,62,80,0.6)" }}
                      >
                        {cert.issuer}
                      </p>
                      <span
                        className="inline-block mt-2 text-xs font-bold px-2.5 py-0.5 rounded-full"
                        style={{
                          backgroundColor: "#d8f3dc",
                          color: "#2d6a4f",
                        }}
                      >
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <dialog
          open
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 w-full h-full max-w-none m-0"
          data-ocid="certificates.modal"
          aria-label="Certificate preview"
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              data-ocid="certificates.close_button"
              className="absolute -top-10 right-0 text-white/80 hover:text-white transition-colors font-bold text-sm flex items-center gap-1"
              onClick={() => setLightbox(null)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Close
            </button>
            <img
              src={certificates[lightbox].image}
              alt={certificates[lightbox].title}
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-bold text-lg">
                {certificates[lightbox].title}
              </p>
              <p className="text-white/70 text-sm mt-1">
                {certificates[lightbox].issuer} · {certificates[lightbox].year}
              </p>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}
