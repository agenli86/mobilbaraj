import React, { useState } from 'react';
import { Phone, MessageCircle, Star, ShieldCheck, Clock, Truck } from 'lucide-react';
import { Campaign } from '../types';

const DEFAULT_CAMPAIGNS: Campaign[] = [
  {
    id: '1',
    title: 'Erken Rezervasyon',
    description: '%20 İndirim fırsatını kaçırmayın!',
    colorFrom: 'blue-500',
    colorTo: 'blue-600',
    buttonText: 'Detaylı Bilgi'
  },
  {
    id: '2',
    title: 'Şehirler Arası',
    description: 'Sigortalı taşımacılık hizmeti.',
    colorFrom: 'orange-500',
    colorTo: 'red-500',
    buttonText: 'Teklif Al'
  }
];

const HomePage: React.FC = () => {
  const [campaigns] = useState<Campaign[]>(DEFAULT_CAMPAIGNS);

  const handleCall = () => {
    window.location.href = 'tel:+905374092406';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/905374092406', '_blank');
  };

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <div className="bg-red-600 text-white p-6 rounded-b-3xl shadow-md relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Baraj Nakliyat</h1>
          <p className="text-red-100 text-lg">Adana'nın En Güvenilir<br/>Evden Eve Nakliyatı</p>
        </div>
        
        {/* Decorative Circles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-20 -left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
      </div>

      <div className="p-6 -mt-8 relative z-20">
        <div className="bg-white p-4 rounded-xl shadow-lg flex justify-between gap-4">
          <button 
            onClick={handleCall}
            className="flex-1 bg-red-600 active:bg-red-700 text-white py-3 px-4 rounded-lg flex flex-col items-center justify-center gap-2 transition-transform active:scale-95"
          >
            <Phone size={24} />
            <span className="font-semibold">Hemen Ara</span>
          </button>
          
          <button 
            onClick={handleWhatsApp}
            className="flex-1 bg-green-500 active:bg-green-600 text-white py-3 px-4 rounded-lg flex flex-col items-center justify-center gap-2 transition-transform active:scale-95"
          >
            <MessageCircle size={24} />
            <span className="font-semibold">WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Announcements */}
      <div className="px-6 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Kampanyalar & Duyurular</h2>
        <div className="flex flex-col gap-4">
          {campaigns.map((camp) => (
            <div 
              key={camp.id}
              className={`w-full bg-gradient-to-r from-${camp.colorFrom} to-${camp.colorTo} rounded-xl p-5 text-white shadow-md`}
            >
              <h3 className="font-bold text-lg mb-1">{camp.title}</h3>
              <p className="text-sm opacity-90">{camp.description}</p>
              <div className={`mt-3 inline-block bg-white/90 text-black text-xs font-bold px-3 py-1 rounded-full`}>
                {camp.buttonText}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-6 pb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Neden Biz?</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-2">
              <ShieldCheck size={20} />
            </div>
            <h4 className="font-semibold text-gray-800 text-sm">Sigortalı Taşıma</h4>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-2">
              <Clock size={20} />
            </div>
            <h4 className="font-semibold text-gray-800 text-sm">Zamanında Teslim</h4>
          </div>

           <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-2">
              <Star size={20} />
            </div>
            <h4 className="font-semibold text-gray-800 text-sm">Uzman Ekip</h4>
          </div>
          
           <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-2">
              <Truck size={20} />
            </div>
            <h4 className="font-semibold text-gray-800 text-sm">Geniş Araç Filosu</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;