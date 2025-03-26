
import React, { useEffect, useRef } from 'react';
import { Wrench, ShieldCheck, Eye, Lock } from 'lucide-react';

const ServicesSection = () => {
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
    <section id="servicos" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto opacity-0 reveal-item">
          Soluções Completas de Segurança
        </h2>
        
        <div className="mt-12 space-y-6">
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden opacity-0 reveal-item">
            <div className="flex items-center justify-center p-6 md:p-8 bg-brand-red md:w-1/4">
              <ShieldCheck size={48} className="text-white" />
            </div>
            <div className="flex-1 p-6 md:p-8">
              <h3 className="text-xl font-bold mb-2">Instalação</h3>
              <p className="text-gray-600 mb-4">
                Instalação profissional de sistemas de segurança eletrônica, incluindo CFTV, alarmes, 
                cercas elétricas e sistemas de controle de acesso, com garantia de qualidade.
              </p>
              <a href={whatsappLink} target="_blank" className="text-brand-red hover:text-brand-blue font-medium transition-colors">
                Solicitar orçamento →
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden opacity-0 reveal-item">
            <div className="flex items-center justify-center p-6 md:p-8 bg-brand-red md:w-1/4">
              <Wrench size={48} className="text-white" />
            </div>
            <div className="flex-1 p-6 md:p-8">
              <h3 className="text-xl font-bold mb-2">Manutenção</h3>
              <p className="text-gray-600 mb-4">
                Serviços de manutenção preventiva e corretiva para todos os sistemas de segurança, 
                garantindo o funcionamento contínuo e eficiente dos equipamentos.
              </p>
              <a href={whatsappLink} target="_blank" className="text-brand-red hover:text-brand-blue font-medium transition-colors">
                Solicitar orçamento →
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden opacity-0 reveal-item">
            <div className="flex items-center justify-center p-6 md:p-8 bg-brand-red md:w-1/4">
              <Eye size={48} className="text-white" />
            </div>
            <div className="flex-1 p-6 md:p-8">
              <h3 className="text-xl font-bold mb-2">Monitoramento</h3>
              <p className="text-gray-600 mb-4">
                Soluções de monitoramento 24 horas que permitem acompanhar em tempo real 
                a segurança do seu imóvel através de aplicativos móveis e centrais de monitoramento.
              </p>
              <a href={whatsappLink} target="_blank" className="text-brand-red hover:text-brand-blue font-medium transition-colors">
                Solicitar orçamento →
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden opacity-0 reveal-item">
            <div className="flex items-center justify-center p-6 md:p-8 bg-brand-red md:w-1/4">
              <Lock size={48} className="text-white" />
            </div>
            <div className="flex-1 p-6 md:p-8">
              <h3 className="text-xl font-bold mb-2">Portões Automáticos</h3>
              <p className="text-gray-600 mb-4">
                Instalação e manutenção de portões automáticos residenciais e industriais, 
                com sistemas de controle remoto, biometria e integração com sistemas de segurança.
              </p>
              <a href={whatsappLink} target="_blank" className="text-brand-red hover:text-brand-blue font-medium transition-colors">
                Solicitar orçamento →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
