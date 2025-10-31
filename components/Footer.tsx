
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ipen-blue-800 border-t border-ipen-blue-700">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-ipen-gray">
        <p className="text-sm">© 2025 Instituto de Pesquisas Energéticas e Nucleares – IPEN/CNEN-SP.</p>
        <p className="text-xs mt-2">Projeto desenvolvido por Hussein Moussa no âmbito da disciplina Fundamentos de Tecnologia Nuclear – Reatores.</p>
      </div>
    </footer>
  );
};

export default Footer;