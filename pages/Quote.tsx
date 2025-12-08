import React, { useState, useRef } from 'react';
import { MapPin, Calendar, Camera, X, Check } from 'lucide-react';
import { QuoteFormState } from '../types';

const QuotePage: React.FC = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    phone: ''
  });
  const [images, setImages] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Local Simulation
      const newQuote: QuoteFormState = {
        id: Date.now().toString(),
        fromAddress: formData.from,
        toAddress: formData.to,
        date: formData.date,
        phone: formData.phone,
        images: images,
        timestamp: new Date().toLocaleString('tr-TR')
      };
      
      // Store to local storage just for simulation feel
      const existingQuotes = JSON.parse(localStorage.getItem('baraj_quotes') || '[]');
      localStorage.setItem('baraj_quotes', JSON.stringify([newQuote, ...existingQuotes]));
      
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network request

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ from: '', to: '', date: '', phone: '' });
        setImages([]);
      }, 3000);

    } catch (error) {
      console.error('Error submitting quote:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 text-center animate-fade-in">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
          <Check size={40} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Talebiniz Alındı!</h2>
        <p className="text-gray-600">Teklifiniz başarıyla oluşturuldu. En kısa sürede size dönüş yapacağız.</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-50 min-h-full pb-24">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 px-2">Hemen Teklif Al</h1>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 space-y-4">
          
          {/* Inputs */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase ml-1">Nereden</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-red-500" size={20} />
              <input
                type="text"
                name="from"
                required
                value={formData.from}
                onChange={handleInputChange}
                placeholder="Mevcut Adres / İlçe"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase ml-1">Nereye</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-green-500" size={20} />
              <input
                type="text"
                name="to"
                required
                value={formData.to}
                onChange={handleInputChange}
                placeholder="Yeni Adres / İlçe"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase ml-1">Taşınma Tarihi</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-blue-500" size={20} />
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors text-gray-700"
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase ml-1">Telefon</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400 font-bold">+90</span>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="5XX XXX XX XX"
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
          </div>

        </div>

        {/* Camera Section */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
          <label className="text-sm font-bold text-gray-800 mb-3 block">Eşya Fotoğrafları (İsteğe Bağlı)</label>
          <p className="text-xs text-gray-500 mb-4">Daha net bir fiyat teklifi için eşyalarınızın fotoğrafını çekip ekleyin.</p>
          
          <div className="flex flex-wrap gap-3">
            {images.map((img, index) => (
              <div key={index} className="relative w-20 h-20 rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <img src={img} alt="Upload" className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-0 right-0 bg-red-600 text-white p-0.5 rounded-bl-lg"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
            
            <button
              type="button"
              onClick={handleCameraClick}
              className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-400 transition-colors"
            >
              <Camera size={24} />
              <span className="text-[10px] font-bold mt-1">Ekle</span>
            </button>
          </div>
          
          {/* Hidden File Input */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-md transition-all ${
            isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 active:bg-red-700 active:scale-98'
          }`}
        >
          {isSubmitting ? 'Gönderiliyor...' : 'Teklif İste'}
        </button>
      </form>
    </div>
  );
};

export default QuotePage;