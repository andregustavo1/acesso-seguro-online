
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
        <h1 className="text-6xl font-bold mb-4 text-brand-red">404</h1>
        <p className="text-2xl text-gray-800 mb-6">Página não encontrada</p>
        <p className="text-gray-600 mb-8">
          Desculpe, a página que você está procurando não existe ou foi removida.
        </p>
        <a 
          href="/" 
          className="bg-brand-red text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors inline-block"
        >
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};

export default NotFound;
