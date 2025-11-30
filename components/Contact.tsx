import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Side */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Fale Conosco</h2>
            <p className="text-lg text-gray-600 mb-8">
              Tem alguma dúvida sobre o projeto ou quer contribuir com nossas soluções digitais? Entre em contato com a equipe.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-teal-600 mt-1" />
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">Email</p>
                  <p className="text-gray-500">contato@solucoesdigitaispet.ifce.edu.br</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-teal-600 mt-1" />
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">WhatsApp / Telefone</p>
                  <p className="text-gray-500">(88) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-teal-600 mt-1" />
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">Endereço</p>
                  <p className="text-gray-500">IFCE - Campus Iguatu<br/>Rodovia Iguatu/Várzea Alegre, km 05</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome completo</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm p-3 border"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm p-3 border"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm p-3 border"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <button
                type="button"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};