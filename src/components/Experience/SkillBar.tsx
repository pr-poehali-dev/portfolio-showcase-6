
import React from "react";

interface SkillBarProps {
  name: string;
  level: number;
  isVisible: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, isVisible }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-foreground/70">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${level}%` : "0%",
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
