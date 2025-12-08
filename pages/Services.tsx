import React, { useState } from 'react';
import { Truck, Box, ArrowUp, Building2, ChevronRight, X } from 'lucide-react';
import { ServiceItem } from '../types';

const servicesData: ServiceItem[] = [
  {
    id: '1',
    title: 'Evden Eve Nakliyat',
    description: 'Eşyalarınız özenle paketlenir ve yeni evinize taşınır.',
    iconName: 'home',
    details: 'Uzman ekibimizle evden eve nakliyat sürecini stresten uzak hale getiriyoruz. Mobilyaların sökümü, paketlenmesi, taşınması ve yeni evde kurulumu dahil anahtar teslim hizmet sunuyoruz. Tüm eşyalarınız taşıma sigortası kapsamındadır.'
  },
  {
    id: '2',
    title: 'Asansörlü Taşıma',
    description: 'Yüksek katlar için güvenli ve hızlı asansörlü taşıma.',
    iconName: 'lift',
    details: 'Mobil asansör sistemlerimizle 25. kata kadar dış cepheden taşıma yapabiliyoruz. Bu sayede bina merdivenleri ve asansörleri zarar görmez, eşyalarınız daha hızlı ve güvenli bir şekilde taşınır.'
  },
  {
    id: '3',
    title: 'Ofis Taşıma',
    description: 'İş yeriniz için profesyonel ve planlı taşıma çözümleri.',
    iconName: 'office',
    details: 'Ofis mobilyaları, elektronik cihazlar ve arşiv dosyalarınız özel ambalaj malzemeleri ile korunur. İş kaybı yaşamamanız için hafta sonu veya mesai saatleri dışında taşıma planlaması yapıyoruz.'
  },
  {
    id: '4',
    title: 'Şehirler Arası Nakliyat',
    description: 'Türkiye\'nin her yerine güvenli eşya transferi.',
    iconName: 'truck',
    details: 'Adana merkezli firmamız, Türkiye\'nin 81 iline profesyonel nakliyat hizmeti sunmaktadır. Geniş araç filomuz ve uzun yol deneyimli şoförlerimizle eşyalarınız tam zamanında teslim edilir.'
  }
];

const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'home': return <Box size={24} className="text-red-600" />;
      case 'lift': return <ArrowUp size={24} className="text-red-600" />;
      case 'office': return <Building2 size={24} className="text-red-600" />;
      case 'truck': return <Truck size={24} className="text-red-600" />;
      default: return <Box size={24} className="text-red-600" />;
    }
  };

  return (
    <div className="p-4 bg-gray-50 min-h-full">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 px-2">Hizmetlerimiz</h1>
      
      <div className="space-y-4">
        {servicesData.map((service) => (
          <div 
            key={service.id}
            onClick={() => setSelectedService(service)}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between active:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                {getIcon(service.iconName)}
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{service.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-1">{service.description}</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-300" />
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center pointer-events-none">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 pointer-events-auto backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="bg-white w-full max-w-md rounded-t-2xl sm:rounded-2xl p-6 pointer-events-auto relative transform transition-transform duration-300 ease-out animate-slide-up">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1"
            >
              <X size={24} />
            </button>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                {getIcon(selectedService.iconName)}
              </div>
              <h2 className="text-xl font-bold text-gray-800">{selectedService.title}</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                {selectedService.details}
              </p>
              
              <button 
                onClick={() => setSelectedService(null)}
                className="w-full bg-red-600 text-white font-medium py-3 rounded-xl mt-4 active:bg-red-700 transition-colors"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;