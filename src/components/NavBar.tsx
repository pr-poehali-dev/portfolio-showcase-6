
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-playfair font-bold">Портфолио</a>
        
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Меню"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>
        
        <nav className={`md:flex items-center gap-8 ${isMobileMenuOpen ? 
          'absolute top-full left-0 right-0 bg-background p-4 shadow-md flex flex-col items-start gap-4' : 
          'hidden md:flex'}`}>
          <a href="#about" className="font-medium text-foreground/80 hover:text-foreground transition-colors">
            Обо мне
          </a>
          <a href="#experience" className="font-medium text-foreground/80 hover:text-foreground transition-colors">
            Опыт
          </a>
          <a href="#projects" className="font-medium text-foreground/80 hover:text-foreground transition-colors">
            Проекты
          </a>
          <a href="#contact" className="font-medium text-foreground/80 hover:text-foreground transition-colors">
            Контакты
          </a>
        </nav>
        
        <Button className="hidden md:flex" size="sm">
          Резюме <Icon name="FileText" className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export default NavBar;
