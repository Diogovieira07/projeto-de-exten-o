import React from 'react';
import { PawPrint } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center mb-4">
                <PawPrint className="h-6 w-6 text-teal-500 mr-2" />
                <span className="font-bold text-xl tracking-tight">
                  Pet<span className="text-teal-500">Tech</span>
                </span>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed">
               Conectando tecnologia e cuidado animal. Um projeto social dedicado a transformar vidas através da inovação digital.
             </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#quem-somos" className="hover:text-teal-400 transition-colors">Quem Somos</a></li>
                <li><a href="#projeto" className="hover:text-teal-400 transition-colors">Nossas Soluções</a></li>
                <li><a href="#galeria" className="hover:text-teal-400 transition-colors">Galeria</a></li>
                <li><a href="#ia" className="hover:text-teal-400 transition-colors">Assistente IA</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-lg font-semibold mb-4 text-white">Institucional</h4>
             <ul className="space-y-2 text-sm text-gray-400">
                <li>IFCE - Campus Iguatu</li>
                <li>Ciências da Computação</li>
                <li>Disciplina: Projetos Sociais</li>
             </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Receba novidades sobre tecnologia pet.</p>
            <div className="flex">
                <input type="email" placeholder="Seu email" className="bg-gray-800 border-none text-white px-4 py-2 rounded-l-md w-full focus:ring-1 focus:ring-teal-500 outline-none text-sm" />
                <button className="bg-teal-600 px-4 py-2 rounded-r-md hover:bg-teal-700 transition-colors text-sm font-medium">OK</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Pet Tech IFCE. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Professor Orientador: Cláudio Damasceno</p>
        </div>
      </div>
    </footer>
  );
};