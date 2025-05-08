
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Электронная коммерция",
    description: "Многофункциональная платформа электронной коммерции с адаптивным дизайном и интеграцией платежных систем.",
    image: "https://cdn.poehali.dev/files/dff972ab-6848-4cd1-8a32-de266056003d.jpg",
    category: "Веб-дизайн",
    tags: ["E-commerce", "React", "Node.js"],
    link: "#"
  },
  {
    id: 2,
    title: "Мобильное приложение",
    description: "Стильное приложение с анимированным интерфейсом, отслеживанием активности и визуализацией данных.",
    image: "https://cdn.poehali.dev/files/16b385f8-9b50-487e-ba8e-15b30fac3925.jpg",
    category: "Мобильный дизайн",
    tags: ["UI/UX", "Flutter", "Firebase"],
    link: "#"
  },
  {
    id: 3,
    title: "Дизайн-система",
    description: "Комплексная дизайн-система для масштабирования и поддержания согласованности всех цифровых продуктов.",
    image: "https://cdn.poehali.dev/files/4b408377-8399-47af-b05c-63e41a7f1537.jpg",
    category: "Дизайн-система",
    tags: ["Figma", "Component Library", "Documentation"],
    link: "#"
  },
  {
    id: 4,
    title: "Корпоративный сайт",
    description: "Современный корпоративный сайт с интерактивными элементами и оптимизированным пользовательским опытом.",
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=500",
    category: "Веб-дизайн",
    tags: ["Corporate", "UI Design", "Animation"],
    link: "#"
  },
];

const categories = ["Все", "Веб-дизайн", "Мобильный дизайн", "Дизайн-система"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "Все"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Мои проекты</h2>
          <p className="text-foreground/70 text-lg">
            Подборка моих лучших работ, демонстрирующих профессиональные навыки и творческий подход
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border-0 shadow-md card-hover"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{
                    transform: hoveredProject === project.id ? "scale(1.05)" : "scale(1)"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-80" />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {project.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-muted px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-primary">
                  Подробнее <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button>
            Смотреть все проекты <Icon name="ExternalLink" className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
