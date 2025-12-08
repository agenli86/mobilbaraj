import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Truck, Calculator, CheckSquare, Phone } from 'lucide-react';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Ana Sayfa', icon: Home },
    { path: '/services', label: 'Hizmetler', icon: Truck },
    { path: '/quote', label: 'Teklif Al', icon: Calculator },
    { path: '/checklist', label: 'Liste', icon: CheckSquare },
    { path: '/contact', label: 'İletişim', icon: Phone },
  ];

  return (
    <nav className="absolute bottom-0 w-full bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${
                isActive ? 'text-red-600' : 'text-gray-500 hover:text-red-400'
              }`}
            >
              <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] mt-1 font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;