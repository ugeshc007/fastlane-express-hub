import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Search, Package, MapPin, Clock, CheckCircle, Truck, Plane, Ship
} from "lucide-react";

const Track = () => {
  const [searchParams] = useSearchParams();
  const { t, isRTL } = useLanguage();
  
  // Demo tracking data with translations
  const getDemoTracking = () => ({
    id: "UFC123456789",
    status: t("tracking.inTransit"),
    origin: isRTL ? "دبي، الإمارات" : "Dubai, UAE",
    destination: isRTL ? "مومباي، الهند" : "Mumbai, India",
    estimatedDelivery: "Dec 20, 2024",
    weight: "25 kg",
    type: t("services.air"),
    timeline: [
      { date: "Dec 15, 2024", time: "10:30 AM", status: isRTL ? "تم استلام الطرد" : "Package picked up", location: isRTL ? "دبي، الإمارات" : "Dubai, UAE", completed: true },
      { date: "Dec 15, 2024", time: "3:45 PM", status: isRTL ? "وصل إلى مرفق الفرز" : "Arrived at sorting facility", location: isRTL ? "مطار دبي، الإمارات" : "Dubai Airport, UAE", completed: true },
      { date: "Dec 16, 2024", time: "8:00 AM", status: isRTL ? "غادر من دبي" : "Departed from Dubai", location: isRTL ? "مطار دبي الدولي" : "Dubai International Airport", completed: true },
      { date: "Dec 16, 2024", time: "2:30 PM", status: isRTL ? "قيد النقل" : "In transit", location: isRTL ? "في الطريق إلى مومباي" : "En route to Mumbai", completed: true },
      { date: "Dec 17, 2024", time: isRTL ? "قريباً" : "TBD", status: isRTL ? "التخليص الجمركي" : "Customs clearance", location: isRTL ? "مطار مومباي، الهند" : "Mumbai Airport, India", completed: false },
      { date: "Dec 18, 2024", time: isRTL ? "قريباً" : "TBD", status: isRTL ? "خارج للتوصيل" : "Out for delivery", location: isRTL ? "مومباي، الهند" : "Mumbai, India", completed: false },
      { date: "Dec 20, 2024", time: isRTL ? "قريباً" : "TBD", status: isRTL ? "تم التسليم" : "Delivered", location: isRTL ? "مومباي، الهند" : "Mumbai, India", completed: false },
    ],
  });

  const [trackingNumber, setTrackingNumber] = useState(searchParams.get("id") || "");
  const [tracking, setTracking] = useState<ReturnType<typeof getDemoTracking> | null>(
    searchParams.get("id") ? getDemoTracking() : null
  );
  const [loading, setLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setTracking(getDemoTracking());
        setLoading(false);
      }, 1000);
    }
  };

  const getStatusIcon = (type: string) => {
    if (type === t("services.air")) return <Plane className="w-5 h-5" />;
    if (type === t("services.sea")) return <Ship className="w-5 h-5" />;
    return <Truck className="w-5 h-5" />;
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
              {t("tracking.title").split(" ").slice(0, -1).join(" ")} <span className="text-accent">{t("tracking.title").split(" ").slice(-1)}</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8">
              {t("tracking.subtitle")}
            </p>
            
            <form onSubmit={handleTrack} className={`flex flex-col sm:flex-row gap-3 max-w-xl mx-auto ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Input
                type="text"
                placeholder={t("tracking.placeholder")}
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1 h-14 text-base bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button type="submit" variant="hero" size="lg" disabled={loading} className="h-14">
                <Search className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {loading ? t("tracking.tracking") : t("tracking.button")}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Tracking Results */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {tracking ? (
            <div className="max-w-4xl mx-auto">
              {/* Status Card */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                      {getStatusIcon(tracking.type)}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t("tracking.number")}</p>
                      <p className="font-heading font-bold text-xl text-foreground">{tracking.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                    <span className="font-semibold text-accent">{tracking.status}</span>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">{t("tracking.origin")}</p>
                      <p className="font-medium text-foreground">{tracking.origin}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">{t("tracking.destination")}</p>
                      <p className="font-medium text-foreground">{tracking.destination}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">{t("tracking.estDelivery")}</p>
                      <p className="font-medium text-foreground">{tracking.estimatedDelivery}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">{t("tracking.weightType")}</p>
                      <p className="font-medium text-foreground">{tracking.weight} • {tracking.type}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <h2 className="font-heading font-bold text-xl text-foreground mb-8">{t("tracking.timeline")}</h2>
                <div className="space-y-0">
                  {tracking.timeline.map((event, index) => (
                    <div key={index} className={`relative ${isRTL ? 'pr-8' : 'pl-8'} pb-8 last:pb-0`}>
                      {/* Line */}
                      {index !== tracking.timeline.length - 1 && (
                        <div className={`absolute ${isRTL ? 'right-[11px]' : 'left-[11px]'} top-6 w-0.5 h-full ${event.completed ? 'bg-accent' : 'bg-border'}`} />
                      )}
                      {/* Dot */}
                      <div className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-1 w-6 h-6 rounded-full flex items-center justify-center ${
                        event.completed ? 'bg-accent' : 'bg-muted border-2 border-border'
                      }`}>
                        {event.completed && <CheckCircle className="w-4 h-4 text-accent-foreground" />}
                      </div>
                      {/* Content */}
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-sm text-muted-foreground">{event.date}</span>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{event.time}</span>
                        </div>
                        <p className={`font-medium ${event.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {event.status}
                        </p>
                        <p className="text-sm text-muted-foreground">{event.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center py-16">
              <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Package className="w-10 h-10 text-muted-foreground" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                {t("tracking.emptyTitle")}
              </h2>
              <p className="text-muted-foreground mb-2">
                {t("tracking.emptySubtitle")}
              </p>
              <p className="text-sm text-muted-foreground">
                {isRTL ? "جرب: " : "Try: "}<button onClick={() => { setTrackingNumber("UFC123456789"); }} className="text-accent hover:underline">UFC123456789</button> {t("tracking.demo")}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Track;
