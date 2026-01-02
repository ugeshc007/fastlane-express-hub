import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Send, Package, MapPin, Weight, Ruler, CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Quote = () => {
  const { toast } = useToast();
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    originCountry: "",
    originCity: "",
    destinationCountry: "",
    destinationCity: "",
    weight: "",
    dimensions: "",
    cargoType: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build WhatsApp message with all form data
    const serviceLabels: Record<string, string> = {
      air: t("services.air"),
      sea: t("services.sea"),
      land: t("services.land"),
      express: t("services.express"),
    };
    
    const cargoLabels: Record<string, string> = {
      general: t("quote.generalCargo"),
      fragile: t("quote.fragile"),
      perishable: t("quote.perishable"),
      hazardous: t("quote.hazardous"),
      vehicles: t("quote.vehicles"),
      other: t("quote.other"),
    };
    
    const message = `
📦 *New Quote Request*

👤 *Contact Information*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
${formData.company ? `• Company: ${formData.company}` : ''}

🚚 *Shipment Details*
• Service Type: ${serviceLabels[formData.serviceType] || formData.serviceType}
• Cargo Type: ${cargoLabels[formData.cargoType] || formData.cargoType}

📍 *Origin*
• ${formData.originCity}, ${formData.originCountry}

📍 *Destination*
• ${formData.destinationCity}, ${formData.destinationCountry}

⚖️ *Cargo Specifications*
• Weight: ${formData.weight}
${formData.dimensions ? `• Dimensions: ${formData.dimensions}` : ''}
${formData.description ? `\n📝 *Additional Details*\n${formData.description}` : ''}
    `.trim();
    
    // WhatsApp number (same as WhatsAppButton)
    const phoneNumber = "971501234567";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: t("quote.successTitle"),
      description: isRTL ? "سيتم فتح واتساب مع تفاصيل طلبك" : "WhatsApp will open with your quote details",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t("quote.title").split(" ").slice(0, -1).join(" ")} <span className="text-accent">{t("quote.title").split(" ").slice(-1)}</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              {t("quote.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div>
                  <h2 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-accent-foreground text-sm font-bold">1</div>
                    {t("quote.contactInfo")}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("quote.name")} *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder={isRTL ? "محمد أحمد" : "John Doe"}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">{t("quote.company")}</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder={isRTL ? "اسم شركتك" : "Your Company"}
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("quote.email")} *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("quote.phone")} *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+971 XX XXX XXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Shipment Details */}
                <div>
                  <h2 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-accent-foreground text-sm font-bold">2</div>
                    {t("quote.shipmentDetails")}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>{t("quote.serviceType")} *</Label>
                      <Select 
                        value={formData.serviceType} 
                        onValueChange={(value) => setFormData({...formData, serviceType: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={t("quote.selectService")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="air">{t("services.air")}</SelectItem>
                          <SelectItem value="sea">{t("services.sea")}</SelectItem>
                          <SelectItem value="land">{t("services.land")}</SelectItem>
                          <SelectItem value="express">{t("services.express")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>{t("quote.cargoType")} *</Label>
                      <Select 
                        value={formData.cargoType} 
                        onValueChange={(value) => setFormData({...formData, cargoType: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={t("quote.selectCargo")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">{t("quote.generalCargo")}</SelectItem>
                          <SelectItem value="fragile">{t("quote.fragile")}</SelectItem>
                          <SelectItem value="perishable">{t("quote.perishable")}</SelectItem>
                          <SelectItem value="hazardous">{t("quote.hazardous")}</SelectItem>
                          <SelectItem value="vehicles">{t("quote.vehicles")}</SelectItem>
                          <SelectItem value="other">{t("quote.other")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Origin & Destination */}
                <div>
                  <h2 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-accent-foreground text-sm font-bold">3</div>
                    {t("quote.originDest")}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-foreground font-medium">
                        <MapPin className="w-4 h-4 text-accent" />
                        {t("quote.originLabel")}
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="originCountry">{t("quote.country")} *</Label>
                          <Input
                            id="originCountry"
                            name="originCountry"
                            placeholder={isRTL ? "مثال: الإمارات" : "e.g., UAE"}
                            value={formData.originCountry}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="originCity">{t("quote.city")} *</Label>
                          <Input
                            id="originCity"
                            name="originCity"
                            placeholder={isRTL ? "مثال: دبي" : "e.g., Dubai"}
                            value={formData.originCity}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-foreground font-medium">
                        <MapPin className="w-4 h-4 text-accent" />
                        {t("quote.destLabel")}
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="destinationCountry">{t("quote.country")} *</Label>
                          <Input
                            id="destinationCountry"
                            name="destinationCountry"
                            placeholder={isRTL ? "مثال: الهند" : "e.g., India"}
                            value={formData.destinationCountry}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="destinationCity">{t("quote.city")} *</Label>
                          <Input
                            id="destinationCity"
                            name="destinationCity"
                            placeholder={isRTL ? "مثال: مومباي" : "e.g., Mumbai"}
                            value={formData.destinationCity}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cargo Specifications */}
                <div>
                  <h2 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-accent-foreground text-sm font-bold">4</div>
                    {t("quote.cargoSpecs")}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="weight" className="flex items-center gap-2">
                        <Weight className="w-4 h-4 text-muted-foreground" />
                        {t("quote.weight")} *
                      </Label>
                      <Input
                        id="weight"
                        name="weight"
                        type="text"
                        placeholder={isRTL ? "مثال: 50 كجم" : "e.g., 50 kg"}
                        value={formData.weight}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dimensions" className="flex items-center gap-2">
                        <Ruler className="w-4 h-4 text-muted-foreground" />
                        {t("quote.dimensions")}
                      </Label>
                      <Input
                        id="dimensions"
                        name="dimensions"
                        placeholder={isRTL ? "مثال: 100 × 50 × 50" : "e.g., 100 x 50 x 50"}
                        value={formData.dimensions}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    <Label htmlFor="description">{t("quote.additionalDetails")}</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder={t("quote.additionalPlaceholder")}
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <Button type="submit" variant="accent" size="xl" className="w-full">
                  <Send className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t("quote.submit")}
                </Button>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    {t("quote.response2hrs")}
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    {t("quote.noHiddenFees")}
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    {t("quote.free100")}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Quote;
