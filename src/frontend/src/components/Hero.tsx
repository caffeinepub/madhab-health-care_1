function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Solid dark green background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #1b4332 100%)",
        }}
        aria-hidden="true"
      />

      {/* Organic blob LEFT — earthy tan/beige */}
      <svg
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-25 pointer-events-none select-none"
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M260 30 C350 10 460 80 490 180 C520 280 480 400 390 450 C300 500 160 490 90 410 C20 330 10 200 60 120 C110 40 170 50 260 30 Z"
          fill="#c9a97d"
        />
      </svg>

      {/* Organic blob RIGHT — soft sage green */}
      <svg
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-[480px] h-[480px] opacity-20 pointer-events-none select-none"
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M240 20 C340 0 440 70 460 180 C480 290 430 400 340 445 C250 490 120 470 60 380 C0 290 10 160 70 90 C130 20 140 40 240 20 Z"
          fill="#74c69d"
        />
      </svg>

      {/* Main centered content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-44">
        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Heal Naturally.
          <br />
          <span style={{ color: "#74c69d" }}>Live Fully.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/85 font-body leading-relaxed mb-10 max-w-xl mx-auto">
          Expert Acupressure Therapy &amp; Ayurvedic Treatment in Radhakund,
          Mathura. Rediscover your body's natural healing ability under the care
          of experienced practitioner{" "}
          <strong className="text-white font-bold">Madhabdas Goswami</strong>.
        </p>

        {/* Single CTA button */}
        <button
          type="button"
          onClick={() => scrollTo("booking")}
          data-ocid="hero.primary_button"
          className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white font-bold text-lg rounded-full shadow-hero hover:bg-brand-beige hover:scale-105 transition-all duration-200"
          style={{ color: "#2d6a4f" }}
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
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Book an Appointment
        </button>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-14">
          {[
            "Natural Methods",
            "Experienced Practitioner",
            "Hundreds Healed",
          ].map((label) => (
            <div key={label} className="flex items-center gap-2 text-white/80">
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{ color: "#74c69d" }}
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
