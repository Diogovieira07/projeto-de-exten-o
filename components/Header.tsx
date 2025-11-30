import React, { useState } from 'react';
import { Menu, X, PawPrint } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Quem Somos', href: '#quem-somos' },
    { name: 'Soluções', href: '#projeto' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Blog', href: '#blog' },
    { name: 'Assistente IA', href: '#ia' },
    { name: 'Recursos', href: '#recursos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="bg-teal-600 p-1.5 rounded-lg mr-2">
              <PawPrint className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight">
              Pet<span className="text-teal-600">Tech</span>
            </span>
          </div>
          
          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-teal-600 px-2 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-teal-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};