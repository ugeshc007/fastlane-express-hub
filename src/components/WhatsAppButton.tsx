import whatsappLogo from "@/assets/whatsapp-logo.png";
import { trackWhatsApp } from "@/lib/tracking";

const WhatsAppButton = () => {
  const phoneNumber = "+971551417563";
  const message = "Hello! I'm interested in your cargo services.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsApp("Floating Button")}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
    >
      <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-xl hover:scale-110 transition-transform animate-pulse-glow">
        <img src={whatsappLogo} alt="Chat with Ultra Fast Cargo on WhatsApp" className="w-full h-full object-cover" />
      </div>
    </a>
  );
};

export default WhatsAppButton;

