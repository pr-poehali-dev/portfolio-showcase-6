
import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import ExperienceItem from "./ExperienceItem";
import SkillBar from "./SkillBar";
import StatCard from "./StatCard";
import { experiences, skills } from "./experienceData";

const Experience: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timeoutIds: NodeJS.Timeout[] = [];
          experiences.forEach((_, index) => {
            const timeoutId = setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, 300 * index);
            timeoutIds.push(timeoutId);
          });

          return () => {
            timeoutIds.forEach((id) => clearTimeout(id));
          };
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-muted" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            Мой профессиональный путь
          </h2>
          <p className="text-foreground/70 text-lg">
            Опыт, навыки и профессиональный рост в сфере дизайна и разработки
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 inline-flex items-center gap-2">
              <Icon name="Briefcase" className="text-primary" />
              Опыт работы
            </h3>

            <div className="relative pl-6 border-l-2 border-primary/30 space-y-10">
              {experiences.map((job, index) => (
                <ExperienceItem
                  key={index}
                  {...job}
                  isVisible={visibleItems.includes(index)}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 inline-flex items-center gap-2">
              <Icon name="BarChart3" className="text-primary" />
              Навыки и технологии
            </h3>

            <Card className="shadow-sm">
              <CardContent className="p-6 space-y-6">
                {skills.map((skill, index) => (
                  <SkillBar
                    key={index}
                    name={skill.name}
                    level={skill.level}
                    isVisible={visibleItems.length > 0}
                  />
                ))}
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <StatCard icon="Award" title="Образование">
                Магистр компьютерных наук
                <br />
                Технический университет
              </StatCard>

              <StatCard icon="Languages" title="Языки">
                Русский (родной)
                <br />
                Английский (свободно)
              </StatCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
