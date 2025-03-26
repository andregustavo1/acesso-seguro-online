
import React from 'react';

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5511988386740?text=Olá,%20gostaria%20de%20informações%20sobre%20os%20serviços%20da%20S%26S%20Automação.";
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-20">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/wmremove-transformed.jpeg")',
        }}
      />
      
      <div className="container px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-3xl animate-fade-in delay-100">
          <div className="bg-brand-red h-1 w-20 mb-6"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Segurança Inteligente para Seu Patrimônio
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Soluções Completas em Automação e Segurança Eletrônica
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            className="inline-block bg-brand-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
