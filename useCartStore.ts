import { create } from 'zustand';
import type { MenuItem } from '../types';

interface CartItem extends MenuItem {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  total: 0,
  addItem: (item) => {
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
          total: state.total + item.price,
        };
      }
      return {
        items: [...state.items, { ...item, quantity: 1 }],
        total: state.total + item.price,
      };
    });
  },
  removeItem: (itemId) => {
    set((state) => ({
      items: state.items.filter((i) => i.id !== itemId),
      total: state.items.reduce((acc, item) => 
        item.id === itemId ? acc : acc + item.price * item.quantity, 0
      ),
    }));
  },
  updateQuantity: (itemId, quantity) => {
    set((state) => ({
      items: state.items.map((i) =>
        i.id === itemId ? { ...i, quantity } : i
      ),
      total: state.items.reduce((acc, item) => 
        acc + item.price * (item.id === itemId ? quantity : item.quantity), 0
      ),
    }));
  },
  clearCart: () => set({ items: [], total: 0 }),
}));