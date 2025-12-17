import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ icon, title, description, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "group bg-card rounded-2xl p-6 border border-border hover:border-accent/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
      className
    )}>
      <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
        <div className="text-accent group-hover:text-accent-foreground transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
