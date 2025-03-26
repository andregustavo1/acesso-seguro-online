
import React, { useEffect, useRef } from 'react';
import { MessageSquare, FileText, Wrench, Clock } from 'lucide-react';

const ProcessSection = () => {
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
    <section id="processo" className="section-padding bg-white" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto opacity-0 reveal-item">
          Como Trabalhamos
        </h2>
        
        <div className="relative mt-16">
          {/* Connecting Line */}
          <div className="absolute hidden md:block h-1 bg-gray-200 top-24 left-0 right-0 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center opacity-0 reveal-item">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-brand-blue text-white mb-4 z-10">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Consultoria</h3>
              <p className="text-gray-600 text-center">
                Realizamos uma análise detalhada das suas necessidades e do ambiente a ser protegido.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="relative flex flex-col items-center opacity-0 reveal-item">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-brand-blue text-white mb-4 z-10">
                <FileText size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Projeto</h3>
              <p className="text-gray-600 text-center">
                Desenvolvemos um projeto personalizado com as melhores soluções para seu caso.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="relative flex flex-col items-center opacity-0 reveal-item">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-brand-blue text-white mb-4 z-10">
                <Wrench size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Instalação</h3>
              <p className="text-gray-600 text-center">
                Nossa equipe técnica realiza a instalação dos equipamentos com máxima qualidade.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="relative flex flex-col items-center opacity-0 reveal-item">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-brand-blue text-white mb-4 z-10">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Suporte Contínuo</h3>
              <p className="text-gray-600 text-center">
                Oferecemos suporte técnico e manutenção preventiva para garantir o funcionamento dos sistemas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
