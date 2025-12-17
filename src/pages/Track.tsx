import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { 
  Search, Package, MapPin, Clock, CheckCircle, Truck, Plane, Ship
} from "lucide-react";

// Demo tracking data
const demoTracking = {
  id: "UFC123456789",
  status: "In Transit",
  origin: "Dubai, UAE",
  destination: "Mumbai, India",
  estimatedDelivery: "Dec 20, 2024",
  weight: "25 kg",
  type: "Air Cargo",
  timeline: [
    { date: "Dec 15, 2024", time: "10:30 AM", status: "Package picked up", location: "Dubai, UAE", completed: true },
    { date: "Dec 15, 2024", time: "3:45 PM", status: "Arrived at sorting facility", location: "Dubai Airport, UAE", completed: true },
    { date: "Dec 16, 2024", time: "8:00 AM", status: "Departed from Dubai", location: "Dubai International Airport", completed: true },
    { date: "Dec 16, 2024", time: "2:30 PM", status: "In transit", location: "En route to Mumbai", completed: true },
    { date: "Dec 17, 2024", time: "TBD", status: "Customs clearance", location: "Mumbai Airport, India", completed: false },
    { date: "Dec 18, 2024", time: "TBD", status: "Out for delivery", location: "Mumbai, India", completed: false },
    { date: "Dec 20, 2024", time: "TBD", status: "Delivered", location: "Mumbai, India", completed: false },
  ],
};

const Track = () => {
  const [searchParams] = useSearchParams();
  const [trackingNumber, setTrackingNumber] = useState(searchParams.get("id") || "");
  const [tracking, setTracking] = useState<typeof demoTracking | null>(
    searchParams.get("id") ? demoTracking : null
  );
  const [loading, setLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setTracking(demoTracking);
        setLoading(false);
      }, 1000);
    }
  };

  const getStatusIcon = (type: string) => {
    switch (type) {
      case "Air Cargo":
        return <Plane className="w-5 h-5" />;
      case "Sea Cargo":
        return <Ship className="w-5 h-5" />;
      default:
        return <Truck className="w-5 h-5" />;
    }
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
              Track Your <span className="text-accent">Shipment</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8">
              Enter your tracking number to get real-time updates on your cargo.
            </p>
            
            <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Enter tracking number (e.g., UFC123456789)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1 h-14 text-base bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button type="submit" variant="hero" size="lg" disabled={loading} className="h-14">
                <Search className="w-5 h-5 mr-2" />
                {loading ? "Tracking..." : "Track"}
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
                      <p className="text-sm text-muted-foreground">Tracking Number</p>
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
                      <p className="text-xs text-muted-foreground">Origin</p>
                      <p className="font-medium text-foreground">{tracking.origin}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">Destination</p>
                      <p className="font-medium text-foreground">{tracking.destination}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">Est. Delivery</p>
                      <p className="font-medium text-foreground">{tracking.estimatedDelivery}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">Weight / Type</p>
                      <p className="font-medium text-foreground">{tracking.weight} • {tracking.type}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <h2 className="font-heading font-bold text-xl text-foreground mb-8">Shipment Timeline</h2>
                <div className="space-y-0">
                  {tracking.timeline.map((event, index) => (
                    <div key={index} className="relative pl-8 pb-8 last:pb-0">
                      {/* Line */}
                      {index !== tracking.timeline.length - 1 && (
                        <div className={`absolute left-[11px] top-6 w-0.5 h-full ${event.completed ? 'bg-accent' : 'bg-border'}`} />
                      )}
                      {/* Dot */}
                      <div className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center ${
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
                Track Your Package
              </h2>
              <p className="text-muted-foreground mb-2">
                Enter your tracking number above to see the current status of your shipment.
              </p>
              <p className="text-sm text-muted-foreground">
                Try: <button onClick={() => { setTrackingNumber("UFC123456789"); }} className="text-accent hover:underline">UFC123456789</button> (demo)
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
