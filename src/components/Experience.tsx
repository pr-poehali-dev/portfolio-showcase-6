import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
  icon: string;
}

const experiences: ExperienceItem[] = [
  {
    period: "2022 — настоящее время",
    title: "Старший библиотекарь",
    company: "Национальная библиотека",
    description:
      "Руководство отделом редких книг и рукописей, курирование выставок и создание цифровых копий исторических документов.",
    skills: [
      "Архивирование",
      "Реставрация",
      "Цифровизация",
      "Исследовательская работа",
    ],
    icon: "BookOpen",
  },
  {
    period: "2020 — 2022",
    title: "Редактор электронных изданий",
    company: 'Издательский дом "Литера"',
    description:
      "Разработка электронных версий книг с интерактивными элементами и оптимизация для различных устройств чтения.",
    skills: ["Вёрстка", "TypeScript", "E-Publishing", "Типографика"],
    icon: "Edit",
  },
  {
    period: "2018 — 2020",
    title: "Шрифтовой дизайнер",
    company: 'Студия "Буквица"',
    description:
      "Создание оригинальных кириллических шрифтов для цифровых изданий и фирменных стилей компаний.",
    skills: [
      "Типографика",
      "Каллиграфия",
      "Шрифтовой дизайн",
      "Adobe Creative Suite",
    ],
    icon: "Type",
  },
];

const skills = [
  { name: "Оцифровка редких изданий", level: 95 },
  { name: "Разработка электронных книг", level: 90 },
  { name: "Каллиграфия", level: 88 },
  { name: "Реставрация документов", level: 95 },
  { name: "Исследование рукописей", level: 85 },
  { name: "Шрифтовой дизайн", level: 92 },
];

const Experience = () => {
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
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    visibleItems.includes(index)
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                >
                  <div className="absolute -left-[29px] bg-background rounded-full p-1 border-2 border-primary">
                    <Icon name={job.icon} size={16} className="text-primary" />
                  </div>

                  <div className="bg-background rounded-lg shadow-sm p-6 card-hover">
                    <span className="text-sm font-medium text-primary/80 block mb-2">
                      {job.period}
                    </span>
                    <h4 className="text-xl font-bold mb-1">{job.title}</h4>
                    <p className="text-accent font-medium text-sm mb-3">
                      {job.company}
                    </p>
                    <p className="text-foreground/70 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-muted px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-foreground/70">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width:
                            visibleItems.length > 0 ? `${skill.level}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <Card className="bg-background/50 shadow-sm card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/20 p-3 rounded-full mb-4">
                    <Icon name="Award" className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Образование</h4>
                  <p className="text-foreground/70 text-sm">
                    Магистр компьютерных наук
                    <br />
                    Технический университет
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/50 shadow-sm card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/20 p-3 rounded-full mb-4">
                    <Icon name="Languages" className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Языки</h4>
                  <p className="text-foreground/70 text-sm">
                    Русский (родной)
                    <br />
                    Английский (свободно)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
