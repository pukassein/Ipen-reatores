import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section 
        className="relative text-white text-center py-20 sm:py-32 rounded-lg overflow-hidden bg-cover bg-center" 
        style={{ backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.8)), url('/hero.jpg')` }}
      >
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black mb-4 animate-fade-in-down">
            Reatores de Pesquisa do IPEN
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-ipen-light animate-fade-in-up">
            Conheça os dois principais reatores do IPEN, suas estruturas, aplicações e a importância para a ciência no Brasil.
          </p>
          <div className="space-x-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Link to="/reator/iea-r1" className="bg-ipen-yellow-500 text-ipen-blue-900 font-bold py-3 px-6 rounded-md hover:bg-ipen-yellow-400 transition-colors duration-300 text-lg">
              IEA-R1
            </Link>
            <Link to="/reator/mb-01" className="bg-ipen-yellow-500 text-ipen-blue-900 font-bold py-3 px-6 rounded-md hover:bg-ipen-yellow-400 transition-colors duration-300 text-lg">
              IPEN/MB-01
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-ipen-yellow-400 mb-4">Visão Geral</h2>
        <p className="max-w-4xl mx-auto text-center text-ipen-gray mb-12">
          O Instituto de Pesquisas Energéticas e Nucleares (IPEN) é uma referência na área nuclear no Brasil, operando dois reatores de pesquisa fundamentais para o desenvolvimento científico e tecnológico do país. Esses reatores não geram eletricidade, mas são ferramentas poderosas para a produção de materiais radioativos para a medicina, pesquisa em diversas áreas do conhecimento e formação de recursos humanos especializados.
        </p>
      </section>
    </div>
  );
};

export default HomePage;