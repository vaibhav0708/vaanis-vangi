import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  tray: "half" | "full";
  price: number;
  image?: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, tray: string) => void;
  clearCart: () => void;
  subtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const exists = state.items.find(
            (i) => i.id === item.id && i.tray === item.tray
          );
          if (exists) return state;
          return { items: [...state.items, item] };
        }),

      removeItem: (id, tray) =>
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.id === id && i.tray === tray)
          ),
        })),

      clearCart: () => set({ items: [] }),

      subtotal: () => {
        const { items } = get();
        return items.reduce((sum, i) => sum + i.price, 0);
      },
    }),
    { name: "cart-storage" }
  )
);
