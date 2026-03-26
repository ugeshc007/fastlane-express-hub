import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon?: ReactNode;
  image?: string;
  title: string;
  description: string;
  link?: string;
  className?: string;
}

const ServiceCard = ({ icon, image, title, description, link, className }: ServiceCardProps) => {
  const Wrapper = link ? Link : "div";
  const wrapperProps = link ? { to: link } : {};

  return (
    <Wrapper {...wrapperProps as any} className={cn(
      "group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block",
      className
    )}>
      {image ? (
        <div className="relative h-40 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        </div>
      ) : icon ? (
        <div className="p-6 pb-0">
          <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
            <div className="text-accent group-hover:text-accent-foreground transition-colors">
              {icon}
            </div>
          </div>
        </div>
      ) : null}
      <div className="p-6">
        <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </Wrapper>
  );
};

export default ServiceCard;
