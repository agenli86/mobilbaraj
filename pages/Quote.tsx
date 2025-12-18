import React, { useState } from 'react';
import { MapPin, Calendar, Check, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const QuotePage: React.FC = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS Şablon parametreleri
      const templateParams = {
        from_address: formData.from,
        to_address: formData.to,
        move_date: formData.date,
        phone: formData.phone,
      };

      // Senin verdiğin anahtarları buraya ekledim abi
      await emailjs.send(
        'service_44u8p04',      // Service ID
        'template_canh2h5',    // Template ID
        templateParams,
        'AngTN1a2zi85nlwD4'    // Public Key
      );

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ from: '', to: '', date: '', phone: '' });
      }, 3000);

    } catch (error) {
      console.error('Hata oluştu:', error);
      alert("Teklif gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
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
        <p className="text-gray-600">Teklif talebiniz başarıyla e-posta olarak gönderildi. En kısa sürede size dönüş yapacağız.</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-50 min-h-full pb-24">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 px-2">Hemen Teklif Al</h1>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 space-y-4">
          
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
              <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="05XX XXX XX XX"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
          </div>

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
