import React from "react";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Библиотека & Архив
            </h3>
            <p className="text-foreground/70 max-w-md mb-6">
              Соединяю опыт работы с древними рукописями и современными
              технологиями, чтобы сохранить литературное наследие и создать
              новый формат взаимодействия с книгами.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Github"
              >
                <Icon name="Github" size={20} />
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Icon name="Linkedin" size={20} />
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Icon name="Twitter" size={20} />
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Навигация</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Обо мне
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Опыт
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Проекты
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-foreground/70">
                <Icon name="Mail" size={16} />
                <span>email@example.com</span>
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <Icon name="MapPin" size={16} />
                <span>Москва, Россия</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Все права защищены
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm text-foreground/60 hover:text-primary transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-sm text-foreground/60 hover:text-primary transition-colors"
            >
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
