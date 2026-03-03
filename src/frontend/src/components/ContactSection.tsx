const contactItems = [
  {
    id: "phone",
    icon: (
      <svg
        className="w-7 h-7 text-white"
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
    ),
    label: "Phone",
    links: [
      { href: "tel:6397866895", text: "+91 63978 66895" },
      { href: "tel:8420330685", text: "+91 84203 30685" },
    ],
  },
  {
    id: "email",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "Email",
    links: [
      {
        href: "mailto:madhabdas10008@gmail.com",
        text: "madhabdas10008@gmail.com",
      },
    ],
  },
  {
    id: "whatsapp",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    links: [{ href: "https://wa.me/916397866895", text: "Chat on WhatsApp" }],
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#2d6a4f" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-brand-green-light mb-3">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-white/70 font-body">
            We'd love to hear from you. Reach out through any channel below.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px bg-white/20 flex-1 max-w-24" />
            <div className="w-2 h-2 rounded-full bg-brand-green-light" />
            <div className="h-px bg-white/20 flex-1 max-w-24" />
          </div>
        </div>

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/15 hover:bg-white/15 transition-all duration-200 text-center card-lift"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-5">
                {item.icon}
              </div>
              <p className="font-body font-bold text-white/60 text-xs uppercase tracking-widest mb-3">
                {item.label}
              </p>
              <div className="space-y-1">
                {item.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={item.id === "whatsapp" ? "_blank" : undefined}
                    rel={
                      item.id === "whatsapp" ? "noopener noreferrer" : undefined
                    }
                    className="block font-bold text-white text-[16px] hover:text-brand-green-light transition-colors font-body"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Address banner */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/15 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg
              className="w-5 h-5 text-brand-green-light"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-white/60 text-sm font-bold uppercase tracking-widest font-body">
              Our Location
            </span>
          </div>
          <p className="text-white font-body text-lg font-semibold">
            Radha Madhav Colony, Near ITI College, Chatikara Road,
            <br className="hidden sm:block" />
            Radhakund, Mathura, Uttar Pradesh — 281504
          </p>
        </div>
      </div>
    </section>
  );
}
