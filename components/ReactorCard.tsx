
import React from 'react';
import { Link } from 'react-router-dom';
import { Reactor } from '../types';

interface ReactorCardProps {
  reactor: Reactor;
}

const ReactorCard: React.FC<ReactorCardProps> = ({ reactor }) => {
  return (
    <div className="bg-ipen-blue-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
      <img className="w-full h-56 object-cover" src={reactor.imageUrl} alt={`Imagem do reator ${reactor.name}`} />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-ipen-yellow-400 mb-2">{reactor.name}</h3>
        <p className="text-ipen-gray mb-4">{reactor.tagline}</p>
        <Link 
          to={`/reator/${reactor.id}`} 
          className="inline-block bg-ipen-yellow-500 text-ipen-blue-900 font-bold py-2 px-4 rounded hover:bg-ipen-yellow-400 transition-colors duration-300"
        >
          Ver Mais
        </Link>
      </div>
    </div>
  );
};

export default ReactorCard;
