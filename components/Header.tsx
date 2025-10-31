import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavLinks: React.FC<{ className?: string }> = ({ className }) => (
  <>
    <NavLink to="/" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-ipen-blue-700 text-white' : 'text-ipen-light hover:bg-ipen-blue-700 hover:text-white'}`} end>Home</NavLink>
    <NavLink to="/reator/iea-r1" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-ipen-blue-700 text-white' : 'text-ipen-light hover:bg-ipen-blue-700 hover:text-white'}`}>IEA-R1</NavLink>
    <NavLink to="/reator/mb-01" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-ipen-blue-700 text-white' : 'text-ipen-light hover:bg-ipen-blue-700 hover:text-white'}`}>IPEN/MB-01</NavLink>
    <NavLink to="/glossario" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-ipen-blue-700 text-white' : 'text-ipen-light hover:bg-ipen-blue-700 hover:text-white'}`}>Glossário</NavLink>
    <NavLink to="/comparativo" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-ipen-blue-700 text-white' : 'text-ipen-light hover:bg-ipen-blue-700 hover:text-white'}`}>Comparativo</NavLink>
  </>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-ipen-blue-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl">
              <span className="text-ipen-yellow-400">IPEN</span> Reatores
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLinks />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-ipen-blue-700 inline-flex items-center justify-center p-2 rounded-md text-ipen-gray hover:text-white hover:bg-ipen-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ipen-blue-900 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <NavLinks />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;