import React from 'react';
import { Users, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="quem-somos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Sobre a Iniciativa
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Projeto Social do IFCE Campus Iguatu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-teal-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <Users className="h-6 w-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Quem Somos</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Estudantes da disciplina de Projetos Sociais, do curso de Graduação em Ciências da
              Computação do Instituto Federal do Ceará – IFCE/Iguatu.
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Target className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Objetivo</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Divulgar e dar apoio aos Projetos Sociais da disciplina, com foco específico no desenvolvimento de soluções tecnológicas para o bem-estar animal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};