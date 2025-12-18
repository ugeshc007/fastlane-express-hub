import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const TrackingBox = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();

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
          <h3 className="font-heading font-semibold text-lg text-foreground">{t("tracking.title")}</h3>
          <p className="text-sm text-muted-foreground">
            {isRTL ? "أدخل رقم التتبع أدناه" : "Enter your tracking number below"}
          </p>
        </div>
      </div>
      <form onSubmit={handleTrack} className={`flex flex-col sm:flex-row gap-3 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
        <Input
          type="text"
          placeholder={t("tracking.placeholder")}
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          className="flex-1 h-12 text-base"
        />
        <Button type="submit" variant="accent" size="lg" className="shrink-0">
          <Search className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
          {isRTL ? "تتبع الآن" : "Track Now"}
        </Button>
      </form>
    </div>
  );
};

export default TrackingBox;
