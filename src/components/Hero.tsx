import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="inline-block bg-muted text-accent font-medium py-1 px-4 rounded-full text-sm animate-fade-in">
              <Icon name="Wave" className="inline-block mr-2 h-4 w-4" />{" "}
              Приветствую!
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight">
              От <span className="text-primary">древних книг</span> до цифровых
              изданий
            </h1>

            <p className="text-lg text-foreground/80 max-w-lg">
              Я специализируюсь на сохранении литературного наследия и создании
              современных электронных изданий, объединяя традиции с инновациями.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="rounded-full">
                Мои проекты <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Связаться <Icon name="Mail" className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="#"
                className="text-foreground/70 hover:text-accent transition-colors"
              >
                <Icon name="Github" size={22} />
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-accent transition-colors"
              >
                <Icon name="Linkedin" size={22} />
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-accent transition-colors"
              >
                <Icon name="Twitter" size={22} />
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-accent transition-colors"
              >
                <Icon name="Instagram" size={22} />
              </a>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ease-in-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute top-0 left-0 w-full h-full bg-primary/20 rounded-full filter blur-3xl"></div>
              <div className="relative z-10 hero-image">
                <img
                  src="https://cdn.poehali.dev/files/4b408377-8399-47af-b05c-63e41a7f1537.jpg"
                  alt="Творческий портрет"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 md:bottom-10 md:-right-10 bg-white shadow-lg rounded-lg p-3 animate-fade-up">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Icon name="Sparkles" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">5+ лет опыта</p>
                    <p className="text-sm text-foreground/70">
                      Успешных проектов
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
