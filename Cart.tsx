import React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

export default function Cart() {
  const { items, total, removeItem, updateQuantity } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="glass-effect rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Your Cart</h2>
      
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 bg-dark-100 rounded-lg">
            <div className="flex-1">
              <h3 className="text-white font-medium">{item.name}</h3>
              <p className="text-sm text-gray-400">₹{item.price} each</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                  className="p-1 hover:bg-gray-700 rounded"
                >
                  <Minus className="h-4 w-4 text-gray-400" />
                </button>
                <span className="text-white w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 hover:bg-gray-700 rounded"
                >
                  <Plus className="h-4 w-4 text-gray-400" />
                </button>
              </div>
              
              <button
                onClick={() => removeItem(item.id)}
                className="p-1 hover:bg-gray-700 rounded"
              >
                <X className="h-5 w-5 text-red-400" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-700">
        <div className="flex justify-between items-center text-lg font-semibold">
          <span className="text-gray-300">Total</span>
          <span className="text-primary">₹{total}</span>
        </div>
        
        <button className="w-full btn-primary mt-4">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}