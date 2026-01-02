import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon?: ReactNode;
  image?: string;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, image, title, description, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "rounded-2xl bg-card border border-border hover:border-accent/30 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden",
      className
    )}>
      {image ? (
        <div className="relative h-32 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/70 to-transparent" />
        </div>
      ) : null}
      <div className={cn("p-5", image ? "" : "flex items-start gap-4")}>
        {!image && icon && (
          <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0">
            <div className="text-accent-foreground">
              {icon}
            </div>
          </div>
        )}
        <div>
          <h3 className="font-heading font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
