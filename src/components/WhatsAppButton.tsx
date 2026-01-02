import { Button } from "@/components/ui/button";
import whatsappLogo from "@/assets/whatsapp-logo.png";

const WhatsAppButton = () => {
  const phoneNumber = "+971568962512";
  const message = "Hello! I'm interested in your cargo services.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-xl hover:scale-110 transition-transform animate-pulse-glow">
        <img src={whatsappLogo} alt="WhatsApp" className="w-full h-full object-cover" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
