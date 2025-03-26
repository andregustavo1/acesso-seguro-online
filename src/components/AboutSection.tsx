
import React, { useEffect, useRef } from 'react';
import { Shield, Clock, Zap, Users } from 'lucide-react';

const AboutSection = () => {
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

  return (
    <section id="sobre" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 opacity-0 reveal-item">
            <div className="section-title">Especialistas em Segurança Eletrônica</div>
            <p className="text-gray-700 mb-6">
              A S&S Automação é especializada em soluções completas de segurança eletrônica, 
              oferecendo serviços de venda, instalação e manutenção de equipamentos de última geração 
              para proteção residencial e empresarial.
            </p>
            <p className="text-gray-700 mb-6">
              Nossa equipe é formada por profissionais altamente qualificados, 
              comprometidos em oferecer a melhor solução para cada cliente, 
              garantindo maior segurança e tranquilidade.
            </p>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="feature-card opacity-0 reveal-item">
              <Clock size={40} className="text-brand-red mb-4" />
              <h3 className="text-xl font-semibold mb-2">Atendimento 24h</h3>
              <p className="text-gray-600">
                Assistência técnica e suporte disponíveis 24 horas por dia, 7 dias por semana.
              </p>
            </div>
            
            <div className="feature-card opacity-0 reveal-item">
              <Zap size={40} className="text-brand-red mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tecnologia de Ponta</h3>
              <p className="text-gray-600">
                Utilizamos equipamentos de última geração e tecnologias avançadas de segurança.
              </p>
            </div>
            
            <div className="feature-card opacity-0 reveal-item">
              <Shield size={40} className="text-brand-red mb-4" />
              <h3 className="text-xl font-semibold mb-2">Projetos Personalizados</h3>
              <p className="text-gray-600">
                Desenvolvimento de soluções sob medida para cada cliente e necessidade.
              </p>
            </div>
            
            <div className="feature-card opacity-0 reveal-item">
              <Users size={40} className="text-brand-red mb-4" />
              <h3 className="text-xl font-semibold mb-2">Suporte Técnico Especializado</h3>
              <p className="text-gray-600">
                Equipe altamente qualificada para oferecer o melhor suporte e orientação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
