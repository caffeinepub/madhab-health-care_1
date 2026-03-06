import AcupuncturePoints from "@/components/AcupuncturePoints";
import BookingForm from "@/components/BookingForm";
import Certificates from "@/components/Certificates";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen font-body">
      <Toaster richColors position="top-center" />

      {/* Sticky navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <Services />
        <AcupuncturePoints />
        <Certificates />
        <Testimonials />
        <BookingForm />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp button */}
      <WhatsAppButton />
    </div>
  );
}
