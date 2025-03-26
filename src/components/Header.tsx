
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
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-red to-brand-blue">
            S&S<span className="text-brand-black">Automação</span>
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-6 animate-fade-in">
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-brand-black hover:text-brand-red transition-colors"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('diferenciais')}
            className="text-brand-black hover:text-brand-red transition-colors"
          >
            Diferenciais
          </button>
          <button 
            onClick={() => scrollToSection('servicos')}
            className="text-brand-black hover:text-brand-red transition-colors"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('processo')}
            className="text-brand-black hover:text-brand-red transition-colors"
          >
            Processo
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="text-brand-black hover:text-brand-red transition-colors"
          >
            Contato
          </button>
        </nav>
        
        <a 
          href={whatsappLink}
          target="_blank"
          className="bg-brand-red hover:bg-red-600 text-white py-2 px-4 rounded-md transition-all hover:scale-105 shadow-sm animate-fade-in"
        >
          Solicitar Orçamento
        </a>
      </div>
    </header>
  );
};

export default Header;
