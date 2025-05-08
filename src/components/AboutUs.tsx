
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  experience: string;
  photo: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Волкова Марина Васильевна",
    position: "Нейродефектолог, логопед",
    experience: "Стаж 25+ лет",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500",
    description: 
      "Специалист высшей квалификационной категории. Работает с детьми с речевыми нарушениями, задержкой развития и особенностями развития нервной системы.",
  },
  {
    id: 2,
    name: "Иванова Елена Александровна",
    position: "Детский психолог",
    experience: "Стаж 15+ лет",
    photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=500",
    description:
      "Практикующий психолог с обширным опытом работы с детьми. Специализируется на коррекции поведенческих нарушений и эмоциональной сферы.",
  },
  {
    id: 3,
    name: "Соколов Дмитрий Игоревич",
    position: "Методист развивающих программ",
    experience: "Стаж 10+ лет",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500",
    description:
      "Разработчик авторских методик по развитию речи и обучению чтению. Автор нескольких учебных пособий для детей дошкольного возраста.",
  }
];

const AboutUs = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            О нас
          </h2>
          <p className="text-foreground/70 text-lg">
            Наша команда профессионалов поможет вашему ребенку преодолеть трудности в развитии речи и познавательных навыков
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="border-0 shadow-md overflow-hidden card-hover">
              <div className="relative">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{member.experience}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-foreground/70 mb-4">
                  {member.description}
                </p>
                <div className="flex space-x-3 mt-4">
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    <Icon name="Mail" size={18} />
                  </a>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    <Icon name="Phone" size={18} />
                  </a>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    <Icon name="Linkedin" size={18} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted rounded-xl p-8 mt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-playfair">Наша миссия</h3>
              <p className="text-foreground/70 mb-4">
                Мы помогаем детям преодолеть речевые и когнитивные барьеры, раскрыть их потенциал и подготовить к успешному обучению в школе. 
              </p>
              <p className="text-foreground/70">
                Наш центр использует комплексный подход, сочетающий традиционные методики и современные технологии для достижения наилучших результатов.
              </p>
              
              <div className="flex items-center gap-6 mt-6">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-primary">500+</span>
                  <span className="text-sm text-foreground/70">Детей прошли программы</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-primary">15+</span>
                  <span className="text-sm text-foreground/70">Лет опыта</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-primary">30+</span>
                  <span className="text-sm text-foreground/70">Методик обучения</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-primary/20 absolute inset-0 rounded-xl transform rotate-3"></div>
              <img 
                src="https://cdn.poehali.dev/files/16b385f8-9b50-487e-ba8e-15b30fac3925.jpg" 
                alt="Наша работа" 
                className="relative z-10 rounded-xl shadow-lg w-full h-auto transform -rotate-2 transition-transform duration-500 hover:rotate-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
