import React from 'react';
import { BookOpen, Video, FileText, ExternalLink, FolderOpen } from 'lucide-react';

export const Resources: React.FC = () => {
  const resources = [
    {
      type: 'Artigo',
      title: 'A Importância da Tecnologia na Saúde Veterinária',
      description: 'Como a telemedicina está mudando o atendimento pet.',
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      link: '#',
    },
    {
      type: 'Vídeo',
      title: 'Tutorial: Usando o App de Adoção',
      description: 'Guia passo a passo para encontrar seu novo amigo.',
      icon: <Video className="h-6 w-6 text-red-500" />,
      link: '#',
    },
    {
      type: 'E-book',
      title: 'Manual do Adotante Responsável',
      description: 'Tudo que você precisa saber antes de adotar.',
      icon: <BookOpen className="h-6 w-6 text-green-500" />,
      link: '#',
    },
    {
      type: 'Link',
      title: 'Projeto Ruas',
      description: 'Referência em assistência social e tecnologia.',
      icon: <ExternalLink className="h-6 w-6 text-purple-500" />,
      link: 'https://www.projetoruas.org.br/',
    },
  ];

  return (
    <section id="recursos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-10">
            <div className="bg-teal-100 p-3 rounded-lg mr-4">
                <FolderOpen className="h-8 w-8 text-teal-700" />
            </div>
            <div>
                <h2 className="text-3xl font-bold text-gray-900">
                    Acervo Digital
                </h2>
                <p className="text-gray-500">
                    Sub-pastas: Conteúdos educativos e materiais de apoio
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer bg-gray-50 hover:bg-white group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-gray-50 transition-colors">
                  {resource.icon}
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800">
                  {resource.type}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                {resource.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 h-10">
                {resource.description}
              </p>
              <a href={resource.link} className="text-sm font-medium text-teal-600 hover:text-teal-500 flex items-center">
                Acessar conteúdo <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};