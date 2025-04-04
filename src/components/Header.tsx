
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 90,
        behavior: 'smooth'
      });
    }
  };

  const whatsappLink = "https://wa.me/5511988386740?text=Olá,%20gostaria%20de%20informações%20sobre%20os%20serviços%20da%20S%26S%20Automação.";

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled 
          ? "bg-white bg-opacity-95 shadow-md backdrop-blur-sm py-3" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center animate-fade-in">
          <img 
            src="/lovable-uploads/674419b7-7686-4383-b5e1-e19b05d7eb17.png" 
            alt="S&S Automação" 
            className={cn(
              "h-14 transition-all duration-300", // Increased from h-10 to h-14
              scrolled ? "brightness-0" : ""
            )}
          />
        </div>
        
        <nav className="hidden md:flex space-x-6 animate-fade-in">
          <button 
            onClick={() => scrollToSection('sobre')}
            className={cn(
              "hover:text-brand-red transition-colors",
              scrolled ? "text-brand-black" : "text-white"
            )}
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('diferenciais')}
            className={cn(
              "hover:text-brand-red transition-colors",
              scrolled ? "text-brand-black" : "text-white"
            )}
          >
            Diferenciais
          </button>
          <button 
            onClick={() => scrollToSection('servicos')}
            className={cn(
              "hover:text-brand-red transition-colors",
              scrolled ? "text-brand-black" : "text-white"
            )}
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('processo')}
            className={cn(
              "hover:text-brand-red transition-colors",
              scrolled ? "text-brand-black" : "text-white"
            )}
          >
            Processo
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className={cn(
              "hover:text-brand-red transition-colors",
              scrolled ? "text-brand-black" : "text-white"
            )}
          >
            Contato
          </button>
        </nav>
        
        <a 
          href={whatsappLink}
          target="_blank"
          className="bg-brand-red hover:bg-red-600 text-white py-1.5 px-3 rounded-md transition-all hover:scale-105 shadow-sm animate-fade-in text-sm"
        >
          Contate-nos
        </a>
      </div>
    </header>
  );
};

export default Header;
