import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product) => set((state) => ({ items: [...state.items, product] })),
      removeFromCart: (productId) => set((state) => ({ items: state.items.filter((item) => item.id !== productId) })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
    }
  )
);
