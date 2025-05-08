
import React from "react";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export interface ExperienceItemProps {
  period: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
  icon: string;
  isVisible: boolean;
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  period,
  title,
  company,
  description,
  skills,
  icon,
  isVisible,
  index,
}) => {
  return (
    <div
      className={`relative transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-8"
      }`}
    >
      <div className="absolute -left-[29px] bg-background rounded-full p-1 border-2 border-primary">
        <Icon name={icon} size={16} className="text-primary" />
      </div>

      <div className="bg-background rounded-lg shadow-sm p-6 card-hover">
        <span className="text-sm font-medium text-primary/80 block mb-2">
          {period}
        </span>
        <h4 className="text-xl font-bold mb-1">{title}</h4>
        <p className="text-accent font-medium text-sm mb-3">
          {company}
        </p>
        <p className="text-foreground/70 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <Badge 
              key={i} 
              variant="outline"
              className="bg-muted px-3 py-1 rounded-full text-xs font-medium"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
