import React from 'react';
import { Camera } from 'lucide-react';

export const Gallery: React.FC = () => {
  // Timestamp to force new images on reload
  const timestamp = Date.now();
  
  const images = [
    {
      // Fixed keyword: just 'veterinarian' is more reliable than 'veterinarian,dog'
      url: `https://loremflickr.com/800/600/veterinarian?random=1&t=${timestamp}`,
      title: "Cuidado Veterinário",
      desc: "Atenção especializada para saúde do seu pet"
    },
    {
      // Keyword: Cat
      url: `https://loremflickr.com/800/600/cat?random=2&t=${timestamp}`,
      title: "Monitoramento Felino",
      desc: "Soluções pensadas para o conforto dos gatos"
    },
    {
      // Keyword: Dog
      url: `https://loremflickr.com/800/600/dog?random=3&t=${timestamp}`,
      title: "Adoção e Felicidade",
      desc: "Encontrando lares amorosos para cada amigo"
    },
    {
      // Keyword: Sleeping Cat
      url: `https://loremflickr.com/800/600/cat,sleep?random=4&t=${timestamp}`,
      title: "Bem-estar em Casa",
      desc: "Tecnologia integrada ao dia a dia do animal"
    },
    {
      // Keyword: Dog and Human
      url: `https://loremflickr.com/800/600/dog,human?random=5&t=${timestamp}`,
      title: "Conexão Real",
      desc: "Fortalecendo o vínculo entre tutor e pet"
    },
    {
       // Keyword: Puppy
       url: `https://loremflickr.com/800/600/puppy?random=6&t=${timestamp}`,
       title: "Filhotes",
       desc: "Cuidado especial para os primeiros meses"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
            <div>
                <h2 className="text-3xl font-extrabold text-gray-900">Galeria Pet Tech</h2>
                <p className="mt-2 text-gray-500">Momentos que nos inspiram a inovar (Imagens dinâmicas).</p>
            </div>
            <div className="hidden md:flex bg-teal-50 p-3 rounded-full">
                <Camera className="h-6 w-6 text-teal-600" />
            </div>
        </div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {images.map((img, index) => (
             <div key={index} className="group relative h-72 w-full overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-gray-100">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl">{img.title}</h3>
                    <p className="text-gray-200 text-sm mt-1">{img.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};