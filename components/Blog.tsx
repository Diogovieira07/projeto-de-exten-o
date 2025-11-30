import React from 'react';
import { Calendar, ArrowRight, Rss } from 'lucide-react';

export const Blog: React.FC = () => {
  const posts = [
    {
      category: "Inovação",
      date: "12 Out, 2023",
      title: "Como a IoT está revolucionando os abrigos de animais",
      excerpt: "Sensores inteligentes ajudam a manter a temperatura ideal e monitoram a saúde de centenas de animais simultaneamente.",
      image: "https://picsum.photos/400/250?random=201"
    },
    {
      category: "Saúde",
      date: "05 Nov, 2023",
      title: "Telemedicina Veterinária: Regulamentação e Futuro",
      excerpt: "Entenda como as novas normas permitem consultas remotas para triagem e acompanhamento de tratamentos.",
      image: "https://picsum.photos/400/250?random=202"
    },
    {
      category: "Adoção",
      date: "28 Nov, 2023",
      title: "App 'Pet Tech' alcança 1000 adoções no Ceará",
      excerpt: "Nossa plataforma piloto conectou famílias e pets em tempo recorde graças ao algoritmo de compatibilidade.",
      image: "https://picsum.photos/400/250?random=203"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <span className="text-teal-600 font-bold tracking-wider uppercase text-sm">Atualizações</span>
                <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Blog Pet Tech</h2>
            </div>
            <a href="#" className="hidden md:inline-flex items-center text-teal-600 font-semibold hover:text-teal-700">
                Ver todas as notícias <ArrowRight className="ml-2 h-4 w-4" />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                <article key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col h-full border border-gray-100">
                    <div className="h-48 overflow-hidden">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                            <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full font-semibold">{post.category}</span>
                            <div className="flex items-center text-gray-400 text-xs">
                                <Calendar className="h-3 w-3 mr-1" />
                                {post.date}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug hover:text-teal-600 cursor-pointer transition-colors">
                            {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 flex-grow">
                            {post.excerpt}
                        </p>
                        <a href="#" className="inline-flex items-center text-teal-600 font-medium hover:text-teal-800 text-sm mt-auto">
                            Ler mais <ArrowRight className="ml-1 h-3 w-3" />
                        </a>
                    </div>
                </article>
            ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
             <a href="#" className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700">
                Ver todas as notícias <ArrowRight className="ml-2 h-4 w-4" />
            </a>
        </div>
      </div>
    </section>
  );
};