
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface StatCardProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, children }) => {
  return (
    <Card className="bg-background/50 shadow-sm card-hover">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="bg-primary/20 p-3 rounded-full mb-4">
          <Icon name={icon} className="h-6 w-6 text-primary" />
        </div>
        <h4 className="font-bold text-lg mb-2">{title}</h4>
        <p className="text-foreground/70 text-sm">
          {children}
        </p>
      </CardContent>
    </Card>
  );
};

export default StatCard;
