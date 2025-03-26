
import React, { useEffect, useRef } from 'react';
import { MapPin, Mail, Phone, Instagram } from 'lucide-react';

const ContactSection = () => {
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
    <section id="contato" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto opacity-0 reveal-item">
          Entre em Contato
        </h2>
        
        <div className="flex flex-col lg:flex-row mt-12 gap-8">
          <div className="lg:w-1/2 opacity-0 reveal-item">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-brand-red mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Localização</h4>
                    <p className="text-gray-600">São Paulo - SP</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-brand-red mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <p className="text-gray-600">
                      <a 
                        href={whatsappLink}
                        target="_blank"
                        className="hover:text-brand-red transition-colors"
                      >
                        (11) 98838-6740
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-brand-red mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">E-mail</h4>
                    <p className="text-gray-600">
                      <a 
                        href="mailto:sesautomacao@gmail.com"
                        className="hover:text-brand-red transition-colors"
                      >
                        sesautomacao@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Instagram className="text-brand-red mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Instagram</h4>
                    <p className="text-gray-600">
                      <a 
                        href="https://instagram.com/ssautomacao"
                        target="_blank"
                        className="hover:text-brand-red transition-colors"
                      >
                        @ssautomacao
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 opacity-0 reveal-item">
            <div className="rounded-lg overflow-hidden h-full min-h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467688.8959921863!2d-46.925306170857!3d-23.68153121809698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1660144378720!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                className="border-0 min-h-[300px]" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
