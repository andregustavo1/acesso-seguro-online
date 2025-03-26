
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
          <span className={cn(
            "text-2xl font-bold bg-clip-text",
            scrolled 
              ? "text-transparent bg-gradient-to-r from-brand-red to-brand-blue" 
              : "text-brand-red"
          )}>
            S&S<span className={scrolled ? "text-brand-black" : "text-white"}>Automação</span>
          </span>
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
