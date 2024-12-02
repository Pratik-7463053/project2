import React from 'react';
import { Clock, Plus } from 'lucide-react';
import type { MenuItem } from '../types';
import { useCartStore } from '../store/useCartStore';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="glass-effect rounded-xl overflow-hidden card-hover">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
            <p className="text-sm text-gray-400 mt-1">{item.description}</p>
          </div>
          <span className="text-primary font-semibold">₹{item.price}</span>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-400">
            <Clock className="h-4 w-4 mr-1" />
            <span>{item.preparationTime} mins</span>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs ${
            item.isVegetarian 
              ? 'bg-green-900/50 text-green-400'
              : 'bg-red-900/50 text-red-400'
          }`}>
            {item.isVegetarian ? 'Veg' : 'Non-Veg'}
          </span>
        </div>

        <button
          onClick={() => addItem(item)}
          className="mt-4 w-full flex items-center justify-center space-x-2 btn-primary"
        >
          <Plus className="h-4 w-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}