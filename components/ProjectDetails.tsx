import React from 'react';
import { Activity, Home, Smartphone, Settings, Cpu, ShieldCheck } from 'lucide-react';

export const ProjectDetails: React.FC = () => {
  return (
    <section id="projeto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm">Inovação e Cuidado</span>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ecossistema Pet Tech
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Nossa missão é desenvolver soluções integradas para modernizar a relação entre tutores, veterinários e animais.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
            <div className="bg-teal-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                <Smartphone className="h-7 w-7 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Apps de Adoção</h3>
            <p className="text-gray-600 leading-relaxed">
              Plataformas que conectam abrigos e ONGs a pessoas interessadas em adotar, utilizando algoritmos de 'match' para encontrar o lar ideal.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
             <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <Activity className="h-7 w-7 text-blue-600" />
             </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Saúde Digital</h3>
            <p className="text-gray-600 leading-relaxed">
              Prontuários eletrônicos universais e sistemas de telemetria para monitorar sinais vitais de animais em tempo real.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
             <div className="bg-purple-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                <Settings className="h-7 w-7 text-purple-600" />
             </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">IoT e Wearables</h3>
            <p className="text-gray-600 leading-relaxed">
              Coleiras inteligentes com GPS, alimentadores automáticos programáveis e bebedouros que monitoram o consumo de água.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
             <div className="bg-green-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                <Home className="h-7 w-7 text-green-600" />
             </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Lar Inteligente</h3>
            <p className="text-gray-600 leading-relaxed">
              Automação residencial focada em pets, permitindo monitoramento por câmeras e controle de temperatura ambiente.
            </p>
          </div>

           <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
             <div className="bg-orange-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                <Cpu className="h-7 w-7 text-orange-600" />
             </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">IA Aplicada</h3>
            <p className="text-gray-600 leading-relaxed">
              Utilização de Inteligência Artificial para pré-diagnósticos visuais e análise comportamental preventiva.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
             <div className="bg-red-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                <ShieldCheck className="h-7 w-7 text-red-600" />
             </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Segurança de Dados</h3>
            <p className="text-gray-600 leading-relaxed">
              Proteção das informações dos tutores e histórico médico dos animais com criptografia de ponta a ponta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};