"use client";
import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
  const { items, removeItem, clearCart } = useCartStore();

  const total = items.reduce((acc, i) => acc + i.price, 0);

  if (items.length === 0)
    return (
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold text-[var(--brand-primary)] mb-4">
          Your Cart is Empty 🛒
        </h1>
        <p className="text-gray-600">Add some trays to start your order!</p>
      </main>
    );

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold text-[var(--brand-primary)] mb-10 text-center">
        Your Cart
      </h1>
      <ul className="space-y-6">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600 text-sm capitalize">
                  {item.tray} tray
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">${item.price}</p>
              <button
                onClick={() => removeItem(item.id, item.tray)}
                className="text-sm text-red-500 hover:underline mt-1"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="text-right mt-8">
        <p className="text-xl font-bold">Total: ${total}</p>
        <button
          onClick={clearCart}
          className="bg-[var(--brand-primary)] text-white px-6 py-3 rounded-full mt-4 hover:bg-opacity-90"
        >
          Clear Cart
        </button>
      </div>
    </main>
  );
}
