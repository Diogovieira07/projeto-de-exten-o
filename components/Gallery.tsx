import React from 'react';
import { Camera } from 'lucide-react';

export const Gallery: React.FC = () => {
  const images = [
    {
      // Vet with dog
      url: "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=800&auto=format&fit=crop",
      title: "Cuidado Profissional",
      desc: "Tecnologia a serviço da medicina veterinária"
    },
    {
      // Cat eyes
      url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop",
      title: "Olhar Felino",
      desc: "Monitoramento comportamental inteligente"
    },
    {
      // Dogs playing
      url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop",
      title: "Socialização",
      desc: "Apps para encontros e brincadeiras em parques"
    },
    {
      // Dog tech/smart
      url: "https://images.unsplash.com/photo-1587559070757-f72a388edbba?q=80&w=800&auto=format&fit=crop",
      title: "Pets Conectados",
      desc: "Wearables e coleiras inteligentes (IoT)"
    },
    {
      // Cat and human
      url: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=800&auto=format&fit=crop",
      title: "Laços Fortes",
      desc: "Aproximando tutores e seus companheiros"
    },
    {
      // Cute Puppy
      url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop",
      title: "Novos Começos",
      desc: "Facilitando a adoção responsável"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
            <div>
                <h2 className="text-3xl font-extrabold text-gray-900">Galeria Pet Tech</h2>
                <p className="mt-2 text-gray-500">Momentos que nos inspiram a inovar.</p>
            </div>
            <div className="hidden md:flex bg-teal-50 p-3 rounded-full">
                <Camera className="h-6 w-6 text-teal-600" />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
           {/* Custom Masonry-like Grid */}
           <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl shadow-md cursor-pointer">
                <img src={images[0].url} alt={images[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl">{images[0].title}</h3>
                    <p className="text-gray-200 text-sm">{images[0].desc}</p>
                </div>
           </div>

           <div className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer">
                <img src={images[1].url} alt={images[1].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg">{images[1].title}</h3>
                    <p className="text-gray-200 text-xs">{images[1].desc}</p>
                </div>
           </div>

           <div className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer">
                <img src={images[2].url} alt={images[2].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg">{images[2].title}</h3>
                    <p className="text-gray-200 text-xs">{images[2].desc}</p>
                </div>
           </div>

           <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl shadow-md cursor-pointer">
                <img src={images[3].url} alt={images[3].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg">{images[3].title}</h3>
                    <p className="text-gray-200 text-xs">{images[3].desc}</p>
                </div>
           </div>
           
           <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl shadow-md cursor-pointer">
                <img src={images[4].url} alt={images[4].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg">{images[4].title}</h3>
                    <p className="text-gray-200 text-xs">{images[4].desc}</p>
                </div>
           </div>

             <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl shadow-md cursor-pointer">
                <img src={images[5].url} alt={images[5].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl">{images[5].title}</h3>
                    <p className="text-gray-200 text-sm">{images[5].desc}</p>
                </div>
           </div>
        </div>
      </div>
    </section>
  );
};