import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-accent/30 shadow-sm hover:shadow-md transition-all duration-300",
      className
    )}>
      <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0">
        <div className="text-accent-foreground">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="font-heading font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
