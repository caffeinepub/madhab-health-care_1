import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Mathura",
    text: "After years of chronic back pain, just 5 sessions of acupressure therapy gave me relief. Madhabji is truly gifted. I can now move freely without any medication.",
    rating: 5,
    initials: "RK",
  },
  {
    name: "Sunita Devi",
    location: "Vrindavan",
    text: "The Ayurvedic medicines prescribed by Madhabji completely cured my digestion problems. Highly recommend! The treatment was gentle and results were long-lasting.",
    rating: 5,
    initials: "SD",
  },
  {
    name: "Arun Sharma",
    location: "Agra",
    text: "I was skeptical about acupressure, but the results were amazing. My migraines have almost disappeared after just a few sessions. Very professional and caring.",
    rating: 5,
    initials: "AS",
  },
  {
    name: "Priya Gupta",
    location: "Mathura",
    text: "Excellent stress relief therapy. Very calming environment and caring practitioner. Madhabji listened patiently and designed a treatment that truly helped me. Will visit again.",
    rating: 4,
    initials: "PG",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? "text-amber-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({
  initials,
  size = "md",
  dim = false,
}: {
  initials: string;
  size?: "sm" | "md" | "lg";
  dim?: boolean;
}) {
  const sizeClass =
    size === "lg"
      ? "w-16 h-16 text-base"
      : size === "sm"
        ? "w-10 h-10 text-xs"
        : "w-12 h-12 text-sm";
  return (
    <div
      className={`${sizeClass} rounded-full flex items-center justify-center font-bold font-body flex-shrink-0 transition-all duration-300`}
      style={{
        backgroundColor: dim ? "#a8d5bc" : "#2d6a4f",
        color: "white",
        opacity: dim ? 0.7 : 1,
      }}
    >
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const prevIdx = (current - 1 + total) % total;
  const nextIdx = (current + 1) % total;

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#f5f5f0" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: "#2d6a4f" }}
          >
            Patient Stories
          </span>
          <h2
            className="font-display text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#2c3e50" }}
          >
            What Our Patients Say
          </h2>
          <p
            className="text-lg font-body max-w-xl mx-auto"
            style={{ color: "rgba(44,62,80,0.65)" }}
          >
            Real experiences from real patients whose lives were transformed
            through natural healing.
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

        {/* Carousel */}
        <div className="relative flex items-center justify-center gap-4 lg:gap-8">
          {/* Previous avatar peek — left edge */}
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              data-ocid="testimonials.pagination_prev"
              className="transition-transform hover:scale-110"
            >
              <Avatar initials={testimonials[prevIdx].initials} dim />
            </button>
            <ChevronLeft
              className="w-5 h-5 opacity-40"
              style={{ color: "#2d6a4f" }}
            />
          </div>

          {/* Main testimonial card */}
          <div
            className="flex-1 rounded-3xl px-8 py-10 sm:px-12 sm:py-12 text-center shadow-card"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgba(45,106,79,0.12)",
              maxWidth: "640px",
            }}
          >
            {/* Quote mark */}
            <svg
              className="w-10 h-10 mx-auto mb-4 opacity-15"
              fill="currentColor"
              viewBox="0 0 48 48"
              style={{ color: "#2d6a4f" }}
              aria-hidden="true"
            >
              <path d="M12 22C8.69 22 6 24.69 6 28v6c0 3.31 2.69 6 6 6h2c3.31 0 6-2.69 6-6v-2c0-1.1-.9-2-2-2h-4v-2c0-2.21 1.79-4 4-4h1c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-1C14.24 20 12.5 20.76 12 22zm22 0c-3.31 0-6 2.69-6 6v6c0 3.31 2.69 6 6 6h2c3.31 0 6-2.69 6-6v-2c0-1.1-.9-2-2-2h-4v-2c0-2.21 1.79-4 4-4h1c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-1c-3.76 0-5.5.76-6 2z" />
            </svg>

            {/* Review text */}
            <p
              className="font-body leading-relaxed text-[16px] italic mb-8"
              style={{ color: "rgba(44,62,80,0.78)" }}
            >
              "{t.text}"
            </p>

            {/* Avatar + name + stars */}
            <div className="flex flex-col items-center gap-3">
              <Avatar initials={t.initials} size="lg" />
              <div>
                <p
                  className="font-bold font-body text-[15px]"
                  style={{ color: "#2c3e50" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-xs font-body flex items-center justify-center gap-1 mt-0.5"
                  style={{ color: "rgba(44,62,80,0.5)" }}
                >
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t.location}
                </p>
              </div>
              <StarRating rating={t.rating} />
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((testimonial, i) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="rounded-full transition-all duration-200"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    backgroundColor:
                      i === current ? "#2d6a4f" : "rgba(45,106,79,0.25)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Next avatar peek — right edge */}
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              data-ocid="testimonials.pagination_next"
              className="transition-transform hover:scale-110"
            >
              <Avatar initials={testimonials[nextIdx].initials} dim />
            </button>
            <ChevronRight
              className="w-5 h-5 opacity-40"
              style={{ color: "#2d6a4f" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
