import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, ExternalLink } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-full bg-white pb-20">
      {/* Map Placeholder */}
      <div className="h-64 bg-gray-200 relative w-full overflow-hidden">
        {/* Simulating a map iframe or image */}
        <div className="absolute inset-0 bg-[url('https://picsum.photos/800/600?grayscale')] bg-cover bg-center opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <div className="bg-white/90 p-3 rounded-full shadow-xl animate-bounce">
            <MapPin size={32} className="text-red-600" />
          </div>
        </div>
        <a 
          href="https://maps.google.com/?q=Çukurova+Adana" 
          target="_blank" 
          rel="noreferrer"
          className="absolute bottom-4 right-4 bg-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1 text-gray-700"
        >
          Haritada Aç <ExternalLink size={12} />
        </a>
      </div>

      <div className="flex-1 p-6 -mt-6 bg-white rounded-t-3xl relative z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">İletişim</h1>
        
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-1">
              <MapPin size={20} className="text-red-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">Adres</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Çukurova, Adana<br/>
                Türkiye
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-1">
              <Phone size={20} className="text-red-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">Telefon</h3>
              <p className="text-gray-600 text-sm font-semibold">0537 409 24 06</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-1">
              <Mail size={20} className="text-red-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">E-Posta</h3>
              <p className="text-gray-600 text-sm">info@barajnakliyat.com</p>
            </div>
          </div>

          <hr className="border-gray-100 my-4" />

          <div>
            <h3 className="font-bold text-gray-800 mb-4 text-center">Bizi Takip Edin</h3>
            <div className="flex justify-center gap-6">
              <button className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform">
                <Facebook size={24} />
              </button>
              <button className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform">
                <Instagram size={24} />
              </button>
              <button className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform">
                <Twitter size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;