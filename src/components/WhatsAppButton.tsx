import { Button } from "@/components/ui/button";
import whatsappLogo from "@/assets/whatsapp-logo.png";

const WhatsAppButton = () => {
  const phoneNumber = "+971XXXXXXX"; // Replace with actual number
  const message = "Hello! I'm interested in your cargo services.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button 
        variant="whatsapp" 
        size="icon"
        className="w-14 h-14 rounded-full animate-pulse-glow p-2"
      >
        <img src={whatsappLogo} alt="WhatsApp" className="w-8 h-8" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
