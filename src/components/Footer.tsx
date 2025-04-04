
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-gray py-12 text-gray-300">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <div className="mb-3">
              <img 
                src="/lovable-uploads/674419b7-7686-4383-b5e1-e19b05d7eb17.png" 
                alt="S&S Automação" 
                className="h-12" 
              />
            </div>
            <p className="max-w-xs text-gray-400">
              Soluções completas em segurança eletrônica, automação e controle de acesso.
            </p>
            <div className="mt-4 text-sm">
              <p>Nossas equipes são certificadas pelos fabricantes e possuem as certificações:</p>
              <p className="font-semibold mt-1">NR10, NR35, NR6, NR1</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#sobre" className="hover:text-brand-red transition-colors">Sobre Nós</a></li>
                <li><a href="#diferenciais" className="hover:text-brand-red transition-colors">Diferenciais</a></li>
                <li><a href="#servicos" className="hover:text-brand-red transition-colors">Serviços</a></li>
                <li><a href="#processo" className="hover:text-brand-red transition-colors">Processo</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Serviços</h3>
              <ul className="space-y-2">
                <li><a href="#servicos" className="hover:text-brand-red transition-colors">Instalação</a></li>
                <li><a href="#servicos" className="hover:text-brand-red transition-colors">Manutenção</a></li>
                <li><a href="#servicos" className="hover:text-brand-red transition-colors">Monitoramento</a></li>
                <li><a href="#servicos" className="hover:text-brand-red transition-colors">Portões Automáticos</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
              <ul className="space-y-2">
                <li><a href="https://wa.me/5511988386740" target="_blank" className="hover:text-brand-red transition-colors">(11) 98838-6740</a></li>
                <li><a href="mailto:sesautomacao@gmail.com" className="hover:text-brand-red transition-colors">sesautomacao@gmail.com</a></li>
                <li><a href="https://instagram.com/sesautomacao" target="_blank" className="hover:text-brand-red transition-colors">@sesautomacao</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            © 2025 S&S Automação. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
