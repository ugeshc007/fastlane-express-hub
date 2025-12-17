import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TrackingBox = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const navigate = useNavigate();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      navigate(`/track?id=${trackingNumber}`);
    }
  };

  return (
    <div className="bg-card rounded-2xl shadow-xl p-6 md:p-8 border border-border">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
          <Package className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-lg text-foreground">Track Your Shipment</h3>
          <p className="text-sm text-muted-foreground">Enter your tracking number below</p>
        </div>
      </div>
      <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="text"
          placeholder="Enter tracking number (e.g., UFC123456789)"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          className="flex-1 h-12 text-base"
        />
        <Button type="submit" variant="accent" size="lg" className="shrink-0">
          <Search className="w-5 h-5 mr-2" />
          Track Now
        </Button>
      </form>
    </div>
  );
};

export default TrackingBox;
