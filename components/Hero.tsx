import React from 'react';
import { Heart, Smartphone, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-teal-800 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover mix-blend-multiply filter opacity-40"
          src="https://picsum.photos/1920/1080?random=1&grayscale"
          alt="Tecnologia e Pets"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-700 bg-opacity-50 text-teal-100 text-sm font-semibold mb-6 backdrop-blur-sm border border-teal-500">
          <span className="mr-2">🚀</span> Inovação no IFCE Iguatu
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl">
          Bem-vindo ao <br className="hidden md:block" />
          <span className="text-teal-300">Pet Tech</span>
        </h1>
        <p className="mt-6 text-xl text-teal-50 max-w-3xl font-light leading-relaxed">
          Transformando o cuidado animal através da tecnologia. 
          Aplicativos, IoT e plataformas voltadas à saúde, adoção e bem-estar dos seus melhores amigos.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projeto"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-teal-800 bg-white hover:bg-teal-50 shadow-lg transition-transform hover:-translate-y-1"
          >
            Nossas Soluções
            <Smartphone className="w-5 h-5 ml-2" />
          </a>
          <a
            href="#ia"
            className="inline-flex items-center justify-center px-8 py-4 border border-teal-300 text-base font-bold rounded-lg text-white bg-transparent hover:bg-teal-700/50 backdrop-blur-sm transition-transform hover:-translate-y-1"
          >
            Testar IA Veterinária
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};