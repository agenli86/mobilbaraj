import React, { useState, useEffect } from 'react';
import { CheckSquare, Square, Trash2, Plus, Check } from 'lucide-react';
import { ChecklistItem } from '../types';

const DEFAULT_ITEMS: ChecklistItem[] = [
  { id: '1', text: 'Elektrik aboneliğini kapat', isCompleted: false },
  { id: '2', text: 'Su vanasını kapat', isCompleted: false },
  { id: '3', text: 'Değerli eşyaları ayır', isCompleted: false },
  { id: '4', text: 'Kolileri etiketle', isCompleted: false },
  { id: '5', text: 'Buzdolabını boşalt ve fişini çek', isCompleted: false },
  { id: '6', text: 'Apartman yönetimine haber ver', isCompleted: false },
];

const ChecklistPage: React.FC = () => {
  const [items, setItems] = useState<ChecklistItem[]>([]);
  const [newItemText, setNewItemText] = useState('');

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('baraj_checklist');
    if (saved) {
      setItems(JSON.parse(saved));
    } else {
      setItems(DEFAULT_ITEMS);
    }
  }, []);

  // Save to local storage whenever items change
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem('baraj_checklist', JSON.stringify(items));
    }
  }, [items]);

  const toggleItem = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    ));
  };

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemText.trim()) return;
    
    const newItem: ChecklistItem = {
      id: Date.now().toString(),
      text: newItemText,
      isCompleted: false
    };
    
    setItems([...items, newItem]);
    setNewItemText('');
  };

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const completedCount = items.filter(i => i.isCompleted).length;
  const progress = items.length > 0 ? (completedCount / items.length) * 100 : 0;

  return (
    <div className="p-4 bg-gray-50 min-h-full flex flex-col h-full">
      <div className="flex justify-between items-end mb-6 px-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Taşınma Listesi</h1>
          <p className="text-sm text-gray-500 mt-1">{completedCount}/{items.length} Tamamlandı</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-full h-3 mb-6 mx-2 overflow-hidden shadow-inner">
        <div 
          className="h-full bg-red-600 transition-all duration-500 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Input */}
      <form onSubmit={addItem} className="mb-6 flex gap-2">
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          placeholder="Yeni görev ekle..."
          className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 shadow-sm"
        />
        <button 
          type="submit"
          className="bg-red-600 text-white p-3 rounded-xl shadow-sm active:bg-red-700"
        >
          <Plus size={24} />
        </button>
      </form>

      {/* List */}
      <div className="space-y-3 pb-24">
        {items.map(item => (
          <div 
            key={item.id}
            className={`flex items-center p-4 bg-white rounded-xl shadow-sm border transition-all ${
              item.isCompleted ? 'border-green-200 bg-green-50' : 'border-gray-100'
            }`}
          >
            <button 
              onClick={() => toggleItem(item.id)}
              className={`mr-4 shrink-0 transition-colors ${item.isCompleted ? 'text-green-500' : 'text-gray-300 hover:text-red-400'}`}
            >
              {item.isCompleted ? <CheckSquare size={24} /> : <Square size={24} />}
            </button>
            
            <span 
              className={`flex-1 text-sm font-medium ${
                item.isCompleted ? 'text-gray-400 line-through' : 'text-gray-800'
              }`}
              onClick={() => toggleItem(item.id)}
            >
              {item.text}
            </span>
            
            <button 
              onClick={() => deleteItem(item.id)}
              className="text-gray-300 hover:text-red-500 p-2 ml-2"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
        
        {items.length === 0 && (
          <div className="text-center py-10 text-gray-400">
            Listeniz boş. Görev eklemeye başlayın!
          </div>
        )}
      </div>
    </div>
  );
};

export default ChecklistPage;