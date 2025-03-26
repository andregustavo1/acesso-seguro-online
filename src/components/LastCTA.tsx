
import React, { useEffect, useRef } from 'react';

const LastCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = sectionRef.current?.querySelectorAll('.reveal-item');
    childElements?.forEach((el) => observer.observe(el));

    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const whatsappLink = "https://wa.me/5511988386740?text=Olá,%20gostaria%20de%20informações%20sobre%20os%20serviços%20da%20S%26S%20Automação.";

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" ref={sectionRef}>
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-brand-red via-red-800 to-brand-black"
        style={{
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
        }}
      />
      
      <div className="container relative z-10 text-center">
        <div className="max-w-3xl mx-auto opacity-0 reveal-item">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Proteja o Que é Importante
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Não deixe a segurança do seu patrimônio para depois. Entre em contato agora e receba uma avaliação gratuita das suas necessidades de segurança.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            className="inline-block bg-white text-brand-red font-bold py-3 px-8 rounded-md transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg transform hover:-translate-y-1"
          >
            Fale com um Especialista
          </a>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default LastCTA;
