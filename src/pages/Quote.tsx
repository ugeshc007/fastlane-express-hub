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
import { 
  Send, Package, MapPin, Weight, Ruler, CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Quote = () => {
  const { toast } = useToast();
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
    toast({
      title: "Quote Request Submitted!",
      description: "Our team will contact you within 2 hours with a detailed quote.",
    });
    setFormData({
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
              Get a <span className="text-accent">Free Quote</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              Fill out the form below and receive a detailed shipping quote within 2 hours. No hidden fees, transparent pricing.
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
                    Contact Information
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
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
                      <Label htmlFor="phone">Phone Number *</Label>
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
                    Shipment Details
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Service Type *</Label>
                      <Select 
                        value={formData.serviceType} 
                        onValueChange={(value) => setFormData({...formData, serviceType: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="air">Air Cargo</SelectItem>
                          <SelectItem value="sea">Sea Cargo</SelectItem>
                          <SelectItem value="land">Land Transport</SelectItem>
                          <SelectItem value="express">Express Delivery</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Cargo Type *</Label>
                      <Select 
                        value={formData.cargoType} 
                        onValueChange={(value) => setFormData({...formData, cargoType: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select cargo type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Cargo</SelectItem>
                          <SelectItem value="fragile">Fragile Items</SelectItem>
                          <SelectItem value="perishable">Perishable Goods</SelectItem>
                          <SelectItem value="hazardous">Hazardous Materials</SelectItem>
                          <SelectItem value="vehicles">Vehicles</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Origin & Destination */}
                <div>
                  <h2 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-accent-foreground text-sm font-bold">3</div>
                    Origin & Destination
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-foreground font-medium">
                        <MapPin className="w-4 h-4 text-accent" />
                        Origin
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="originCountry">Country *</Label>
                          <Input
                            id="originCountry"
                            name="originCountry"
                            placeholder="e.g., UAE"
                            value={formData.originCountry}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="originCity">City *</Label>
                          <Input
                            id="originCity"
                            name="originCity"
                            placeholder="e.g., Dubai"
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
                        Destination
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="destinationCountry">Country *</Label>
                          <Input
                            id="destinationCountry"
                            name="destinationCountry"
                            placeholder="e.g., India"
                            value={formData.destinationCountry}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="destinationCity">City *</Label>
                          <Input
                            id="destinationCity"
                            name="destinationCity"
                            placeholder="e.g., Mumbai"
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
                    Cargo Specifications
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="weight" className="flex items-center gap-2">
                        <Weight className="w-4 h-4 text-muted-foreground" />
                        Approximate Weight (kg) *
                      </Label>
                      <Input
                        id="weight"
                        name="weight"
                        type="text"
                        placeholder="e.g., 50 kg"
                        value={formData.weight}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dimensions" className="flex items-center gap-2">
                        <Ruler className="w-4 h-4 text-muted-foreground" />
                        Dimensions (L x W x H cm)
                      </Label>
                      <Input
                        id="dimensions"
                        name="dimensions"
                        placeholder="e.g., 100 x 50 x 50"
                        value={formData.dimensions}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    <Label htmlFor="description">Additional Details</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Tell us more about your shipment requirements, special handling instructions, or any questions..."
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <Button type="submit" variant="accent" size="xl" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Request Free Quote
                </Button>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Response within 2 hours
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    No hidden fees
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    100% Free
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
