import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],

  // ADD ITEM
  addToCart: (item, qty = 1) => {
    const cart = get().cart;

    const exists = cart.find((i) => i.id === item.id);

    if (exists) {
      // Increase qty
      return set({
        cart: cart.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + qty } : i
        ),
      });
    }

    // Add new item
    set({
      cart: [...cart, { ...item, qty }],
    });
  },

  // REMOVE ITEM COMPLETELY
  removeFromCart: (id) =>
    set({
      cart: get().cart.filter((i) => i.id !== id),
    }),

  // INCREASE QTY
  increaseQty: (id) =>
    set({
      cart: get().cart.map((i) =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i
      ),
    }),

  // DECREASE QTY
  decreaseQty: (id) =>
    set({
      cart: get().cart
        .map((i) =>
          i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i
        )
        .filter((i) => i.qty > 0),
    }),

  // CLEAR CART
  clearCart: () => set({ cart: [] }),

  // TOTAL PRICE
  totalPrice: () =>
    get()
      .cart.reduce((sum, item) => sum + item.price * item.qty, 0),

  // TOTAL ITEMS
  totalItems: () =>
    get().cart.reduce((sum, item) => sum + item.qty, 0),
}));
