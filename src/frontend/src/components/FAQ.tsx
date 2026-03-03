import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

const faqs = [
  {
    question: "What is acupressure therapy?",
    answer:
      "Acupressure is an ancient healing technique based on Traditional Chinese Medicine. It involves applying firm pressure to specific points on the body to relieve pain, reduce stress, and restore the body's natural energy flow. These points lie along pathways called meridians, and stimulating them promotes balance and healing throughout the body.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    question: "Is acupressure painful?",
    answer:
      "No. While you may feel mild pressure or a temporary tingling sensation at certain points, acupressure is generally comfortable and relaxing. Most patients find it deeply soothing. Our practitioner always adjusts the pressure level based on your individual comfort and sensitivity.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    question: "How many sessions are needed?",
    answer:
      "It depends on the condition and individual health. Many patients experience noticeable relief after just 3–5 sessions. Chronic conditions such as long-term back pain or arthritis may require 10–15 sessions for lasting results. An initial consultation helps Madhabji design the right treatment plan for you.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    question: "What conditions can acupressure treat?",
    answer:
      "Acupressure is effective for a wide range of conditions including back pain, neck pain, joint pain, migraines, stress, anxiety, digestive issues, insomnia, fatigue, and many other chronic conditions. It can also be used for general wellness and preventive health maintenance.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    question: "Is it safe for all ages?",
    answer:
      "Yes, acupressure is safe for people of all ages — from children to the elderly. The treatment is gentle and non-invasive, and it is customized based on individual needs and specific health conditions. We take extra care with young children, pregnant women, and elderly patients.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    question: "Do you offer Ayurvedic medicines alongside therapy?",
    answer:
      "Yes! We provide authentic Ayurvedic herbal medicines that complement our therapy sessions for faster and longer-lasting healing results. All medicines are sourced from trusted, natural formulations. Madhabji will recommend the appropriate Ayurvedic remedies based on your specific health needs after a thorough consultation.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2a9 9 0 0 1 9 9c0 6-9 13-9 13S3 17 3 11a9 9 0 0 1 9-9z" />
        <circle cx="12" cy="11" r="3" />
      </svg>
    ),
  },
];

function FAQItem({
  question,
  answer,
  icon,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="overflow-hidden transition-all duration-200"
      style={{
        borderRadius: "16px",
        border: isOpen ? "1px solid rgba(45,106,79,0.4)" : "1px solid #e8e4d9",
        boxShadow: isOpen ? "0 4px 16px rgba(45,106,79,0.10)" : "none",
      }}
      data-ocid={`faq.item.${index + 1}`}
    >
      <button
        type="button"
        className="w-full flex items-center gap-4 px-5 py-4 text-left transition-colors"
        style={{ backgroundColor: "white" }}
        onClick={onToggle}
        aria-expanded={isOpen}
        data-ocid={`faq.toggle.${index + 1}`}
      >
        {/* Circular icon on the left */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: "#2d6a4f" }}
        >
          <div className="w-5 h-5">{icon}</div>
        </div>

        {/* Question text */}
        <span
          className="flex-1 font-bold text-[16px] font-body leading-snug transition-colors"
          style={{ color: isOpen ? "#2d6a4f" : "#2c3e50" }}
        >
          {question}
        </span>

        {/* Chevron on right */}
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}
          style={{ color: isOpen ? "#2d6a4f" : "rgba(44,62,80,0.35)" }}
        />
      </button>

      <div
        ref={contentRef}
        className="accordion-content"
        style={{
          maxHeight: isOpen
            ? `${contentRef.current?.scrollHeight ?? 400}px`
            : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div
          className="px-6 py-5 border-t"
          style={{
            backgroundColor: "rgba(244,241,235,0.5)",
            borderColor: "#e8e4d9",
          }}
        >
          <p
            className="font-body text-[15px] leading-relaxed"
            style={{ color: "rgba(44,62,80,0.72)" }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: "#2d6a4f" }}
          >
            Got Questions?
          </span>
          <h2
            className="font-display text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#2c3e50" }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-lg font-body"
            style={{ color: "rgba(44,62,80,0.65)" }}
          >
            Everything you need to know about acupressure and Ayurvedic
            treatments.
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

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              icon={faq.icon}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
              index={i}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-12 text-center rounded-2xl p-8"
          style={{
            backgroundColor: "#f4f1eb",
            border: "1px solid #e8e4d9",
          }}
        >
          <p
            className="font-body mb-4"
            style={{ color: "rgba(44,62,80,0.65)" }}
          >
            Still have questions? We're happy to help.
          </p>
          <a
            href="tel:6397866895"
            className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-xl shadow-green hover:opacity-90 transition-opacity text-white"
            style={{ backgroundColor: "#2d6a4f" }}
            data-ocid="faq.primary_button"
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
