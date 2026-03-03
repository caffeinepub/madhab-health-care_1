import { useActor } from "@/hooks/useActor";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const services = [
  "Acupressure Therapy",
  "Acupressure Massage",
  "Ayurvedic Medicines",
  "Natural Pain Relief Treatment",
  "Stress & Body Relaxation Therapy",
];

const today = new Date().toISOString().split("T")[0];

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

export default function BookingForm() {
  const { actor, isFetching } = useActor();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10)
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    if (!form.service) newErrors.service = "Please select a service.";
    if (!form.preferredDate)
      newErrors.preferredDate = "Please choose a preferred date.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (!actor) {
      toast.error("System not ready. Please try again in a moment.");
      return;
    }

    setIsSubmitting(true);
    try {
      await actor.submitBooking(
        form.name.trim(),
        form.phone.trim(),
        form.email.trim() || null,
        form.service,
        form.preferredDate,
        form.message.trim() || null,
      );
      setSubmitted(true);
      setForm(initialForm);
      toast.success(
        "Appointment request submitted! We'll confirm via WhatsApp soon.",
      );
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl border font-body text-[15px] text-brand-text bg-white placeholder-brand-text/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green";

  const inputClass = (field: keyof FormState) =>
    `${inputBase} ${
      errors[field]
        ? "border-red-400 bg-red-50"
        : "border-brand-beige-dark hover:border-brand-green/50"
    }`;

  return (
    <section
      id="booking"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#eaf6ef" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: "#2d6a4f" }}
          >
            Schedule a Visit
          </span>
          <h2
            className="font-display text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#2c3e50" }}
          >
            APPOINTMENT REQUEST
          </h2>
          <p
            className="font-body text-lg"
            style={{ color: "rgba(44,62,80,0.65)" }}
          >
            Take the first step toward natural healing. Fill in your details
            below.
          </p>
        </div>

        {/* Success state */}
        {submitted ? (
          <div
            className="rounded-3xl shadow-card p-10 text-center"
            style={{
              backgroundColor: "white",
              border: "1px solid rgba(45,106,79,0.2)",
              maxWidth: "560px",
              margin: "0 auto",
            }}
            data-ocid="booking.success_state"
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-green"
              style={{ backgroundColor: "#2d6a4f" }}
            >
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3
              className="font-display text-2xl font-bold mb-3"
              style={{ color: "#2c3e50" }}
            >
              Appointment Requested!
            </h3>
            <p
              className="font-body mb-8"
              style={{ color: "rgba(44,62,80,0.65)" }}
            >
              Thank you for reaching out. Madhabji will confirm your appointment
              via call or WhatsApp within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 font-bold rounded-xl shadow-green hover:opacity-90 transition-opacity text-white"
              style={{ backgroundColor: "#2d6a4f" }}
            >
              Book Another Appointment
            </button>
          </div>
        ) : (
          /* TWO-COLUMN LAYOUT */
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
            {/* LEFT column (40%) — Map + Address */}
            <div className="lg:col-span-2 space-y-5">
              {/* Google Maps embed */}
              <div
                className="rounded-2xl overflow-hidden shadow-card"
                style={{ border: "1px solid rgba(45,106,79,0.15)" }}
              >
                <iframe
                  title="Madhab Health Care Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.2!2d77.4171!3d27.4001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39737b0e8f3bb5e3%3A0x8e6e3e4e3e3e3e3e!2sRadhakund%2C%20Mathura%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1698000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Address text below map */}
              <div
                className="rounded-2xl p-6 space-y-3"
                style={{
                  backgroundColor: "white",
                  border: "1px solid rgba(45,106,79,0.12)",
                }}
              >
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p
                      className="font-bold font-body text-sm"
                      style={{ color: "#2c3e50" }}
                    >
                      Madhab Health Care
                    </p>
                    <p
                      className="font-body text-sm leading-relaxed mt-1"
                      style={{ color: "rgba(44,62,80,0.65)" }}
                    >
                      Radha Madhav Colony, Radhakund,
                      <br />
                      Mathura, U.P. 281504
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 flex-shrink-0"
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
                    className="font-body text-sm hover:underline"
                    style={{ color: "#2d6a4f" }}
                  >
                    +91 63978 66895
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT column (60%) — Form fields */}
            <div
              className="lg:col-span-3 rounded-3xl shadow-card p-8"
              style={{
                backgroundColor: "white",
                border: "1px solid rgba(45,106,79,0.1)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block text-sm font-bold mb-1.5 font-body"
                    style={{ color: "#2c3e50" }}
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    placeholder="e.g. Ramesh Kumar"
                    className={inputClass("name")}
                    value={form.name}
                    onChange={set("name")}
                    autoComplete="name"
                    data-ocid="booking.input"
                  />
                  {errors.name && (
                    <p
                      className="text-red-500 text-xs mt-1 font-body"
                      data-ocid="booking.error_state"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="booking-email"
                    className="block text-sm font-bold mb-1.5 font-body"
                    style={{ color: "#2c3e50" }}
                  >
                    Email Address{" "}
                    <span
                      className="font-normal"
                      style={{ color: "rgba(44,62,80,0.5)" }}
                    >
                      (optional)
                    </span>
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    placeholder="your@email.com"
                    className={inputClass("email")}
                    value={form.email}
                    onChange={set("email")}
                    autoComplete="email"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="booking-service"
                    className="block text-sm font-bold mb-1.5 font-body"
                    style={{ color: "#2c3e50" }}
                  >
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="booking-service"
                    className={inputClass("service")}
                    value={form.service}
                    onChange={set("service")}
                    data-ocid="booking.select"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p
                      className="text-red-500 text-xs mt-1 font-body"
                      data-ocid="booking.error_state"
                    >
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Preferred Time */}
                <div>
                  <label
                    htmlFor="booking-time"
                    className="block text-sm font-bold mb-1.5 font-body"
                    style={{ color: "#2c3e50" }}
                  >
                    Preferred Time{" "}
                    <span
                      className="font-normal"
                      style={{ color: "rgba(44,62,80,0.5)" }}
                    >
                      (optional)
                    </span>
                  </label>
                  <input
                    id="booking-time"
                    type="text"
                    placeholder="e.g. Morning 10:00 AM"
                    className={inputClass("preferredTime")}
                    value={form.preferredTime}
                    onChange={set("preferredTime")}
                  />
                </div>

                {/* Preferred Date */}
                <div>
                  <label
                    htmlFor="booking-date"
                    className="block text-sm font-bold mb-1.5 font-body"
                    style={{ color: "#2c3e50" }}
                  >
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    className={inputClass("preferredDate")}
                    value={form.preferredDate}
                    onChange={set("preferredDate")}
                    min={today}
                    data-ocid="booking.select"
                  />
                  {errors.preferredDate && (
                    <p
                      className="text-red-500 text-xs mt-1 font-body"
                      data-ocid="booking.error_state"
                    >
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="booking-phone"
                    className="block text-sm font-bold mb-1.5 font-body"
                    style={{ color: "#2c3e50" }}
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    placeholder="10-digit mobile number"
                    className={inputClass("phone")}
                    value={form.phone}
                    onChange={set("phone")}
                    autoComplete="tel"
                    maxLength={15}
                  />
                  {errors.phone && (
                    <p
                      className="text-red-500 text-xs mt-1 font-body"
                      data-ocid="booking.error_state"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="booking-message"
                    className="block text-sm font-bold mb-1.5 font-body"
                    style={{ color: "#2c3e50" }}
                  >
                    Message{" "}
                    <span
                      className="font-normal"
                      style={{ color: "rgba(44,62,80,0.5)" }}
                    >
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="booking-message"
                    rows={4}
                    placeholder="Describe your symptoms or any special requests..."
                    className={`${inputClass("message")} resize-none`}
                    value={form.message}
                    onChange={set("message")}
                    data-ocid="booking.textarea"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting || isFetching}
                  data-ocid="booking.submit_button"
                  className="w-full py-4 font-bold text-lg rounded-xl shadow-green transition-all duration-200 hover:opacity-90 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 uppercase tracking-wide text-white"
                  style={{ backgroundColor: "#2d6a4f" }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "SUBMIT"
                  )}
                </button>

                {/* Confirmation note */}
                <p
                  className="text-center text-sm font-body flex items-center justify-center gap-1.5 mt-2"
                  style={{ color: "rgba(44,62,80,0.55)" }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: "#2d6a4f" }}
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  We will confirm your appointment via call/WhatsApp within 24
                  hours.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
