"use client";

import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { items, subtotal, removeItem, clearCart } = useCartStore();
  const router = useRouter();

  if (items.length === 0)
    return (
      <main className="container py-12 text-center">
        <h1 className="text-3xl font-bold text-[var(--brand-primary)] mb-3">
          Your Cart is Empty 🛒
        </h1>
        <p className="text-gray-500 mb-5">
          Add some delicious food from our menu.
        </p>
        <button
          className="btn-primary px-6 py-3"
          onClick={() => router.push("/menu")}
        >
          Go to Menu
        </button>
      </main>
    );

  return (
    <main className="container py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-[var(--brand-primary)]">
        Your Cart
      </h1>

      <div className="space-y-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center border-b pb-4"
          >
            <div className="flex items-center gap-4">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
              )}
              <div>
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500 capitalize">
                  {item.tray} Tray
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold">${item.price.toFixed(2)}</p>
              <button
                className="text-sm text-red-500 hover:underline mt-1"
                onClick={() => removeItem(item.id, item.tray)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center mt-6">
          <h2 className="text-xl font-semibold">Total:</h2>
          <span className="text-2xl font-bold text-[var(--brand-primary)]">
            ${subtotal().toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between mt-8">
          <button onClick={clearCart} className="btn-outline px-6 py-3">
            Clear Cart
          </button>
          <button
            onClick={() => router.push("/checkout")}
            className="btn-primary px-6 py-3"
          >
            Proceed to Checkout →
          </button>
        </div>
      </div>
    </main>
  );
}
