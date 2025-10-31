import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { REACTORS_DATA } from '../constants';
import Accordion from '../components/Accordion';
import { ImageWithSource } from '../types';

const Watermark: React.FC<{ sourceName: string; sourceUrl?: string; className?: string }> = ({ sourceName, sourceUrl, className }) => {
    const content = (
        <span className={`absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs p-1 rounded z-10 ${className}`}>
            {sourceName}
        </span>
    );

    if (sourceUrl) {
        return (
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:opacity-80 transition-opacity">
                {content}
            </a>
        );
    }
    return content;
};


const ReactorPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const reactor = REACTORS_DATA.find(r => r.id === id);
  const [selectedImage, setSelectedImage] = useState<ImageWithSource | null>(null);

  if (!reactor || reactor.gallery.length === 0) {
    return <Navigate to="/" replace />;
  }
  
  const mainImage = reactor.gallery[0];
  const galleryImages = reactor.gallery.slice(1);

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-5xl font-black text-ipen-yellow-400 mb-2">{reactor.name}</h1>
        <p className="text-xl text-ipen-gray">{reactor.fullName}</p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-2 p-4 bg-ipen-blue-800 rounded-lg shadow-xl">
            <div 
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(mainImage)}
            >
                <img 
                    src={mainImage.src} 
                    alt={`Vista principal do reator ${reactor.name}`} 
                    className="w-full h-auto object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                />
                {mainImage.sourceName && (
                    <Watermark sourceName={mainImage.sourceName} sourceUrl={mainImage.sourceUrl} />
                )}
            </div>
        </div>
        <div className="lg:col-span-3 space-y-4">
          {reactor.sections.map((section, index) => (
            <Accordion key={index} title={section.title} startOpen={index === 0}>
              {Array.isArray(section.content) ? (
                <ul className="list-disc list-inside space-y-2">
                  {section.content.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              ) : (
                <p>{section.content}</p>
              )}
            </Accordion>
          ))}
        </div>
      </section>

      {galleryImages.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-ipen-yellow-400 mb-4">Galeria de Imagens</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.src} 
                  alt={`Imagem ${index + 2} do reator ${reactor.name}`} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" 
                />
                {img.sourceName && (
                    <Watermark sourceName={img.sourceName} sourceUrl={img.sourceUrl} />
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Modal for displaying the enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Imagem ampliada"
        >
          <div 
            className="relative" 
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on the image container
          >
            <img 
              src={selectedImage.src} 
              alt="Imagem ampliada" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg" 
            />
             {selectedImage.sourceName && (
                <Watermark sourceName={selectedImage.sourceName} sourceUrl={selectedImage.sourceUrl} />
            )}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 bg-ipen-blue-900/80 text-white rounded-full p-2 hover:bg-ipen-blue-800 transition-colors"
              aria-label="Fechar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReactorPage;