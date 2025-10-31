
import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  startOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, startOpen = false }) => {
  const [isOpen, setIsOpen] = useState(startOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-ipen-blue-700 rounded-lg overflow-hidden mb-4 bg-ipen-blue-800/50">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center text-left p-4 bg-ipen-blue-800 hover:bg-ipen-blue-700 transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold text-ipen-yellow-400">{title}</h3>
        <svg
          className={`w-6 h-6 text-ipen-light transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="p-4 border-t border-ipen-blue-700 text-ipen-gray">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
