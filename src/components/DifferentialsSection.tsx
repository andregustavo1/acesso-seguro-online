
import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Camera, Bell, Zap } from 'lucide-react';

const DifferentialsSection = () => {
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
    <section id="diferenciais" className="section-padding bg-white" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto opacity-0 reveal-item">
          Nossos Diferenciais em Segurança
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-all hover:scale-105 opacity-0 reveal-item">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-red-50">
              <ShieldCheck size={32} className="text-brand-red" />
            </div>
            <h3 className="text-xl font-bold mb-3">Controle de Acesso</h3>
            <p className="text-gray-600">
              Sistemas avançados de controle de acesso para proteção de áreas restritas e monitoramento de entrada e saída.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-all hover:scale-105 opacity-0 reveal-item">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-red-50">
              <Camera size={32} className="text-brand-red" />
            </div>
            <h3 className="text-xl font-bold mb-3">CFTV</h3>
            <p className="text-gray-600">
              Circuito fechado de TV com câmeras HD e 4K, gravação em nuvem e acesso remoto via aplicativo móvel.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-all hover:scale-105 opacity-0 reveal-item">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-red-50">
              <Bell size={32} className="text-brand-red" />
            </div>
            <h3 className="text-xl font-bold mb-3">Alarmes</h3>
            <p className="text-gray-600">
              Sistemas de alarme com sensores de movimento, quebra de vidro e abertura, com notificações em tempo real.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-all hover:scale-105 opacity-0 reveal-item">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-red-50">
              <Zap size={32} className="text-brand-red" />
            </div>
            <h3 className="text-xl font-bold mb-3">Cerca Elétrica</h3>
            <p className="text-gray-600">
              Cercas elétricas industriais e residenciais, com monitoramento inteligente e baixo consumo de energia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
