"use client";

import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCartStore();
  const [whenDate, setWhenDate] = useState("");
  const [deliveryType, setDeliveryType] = useState("delivery");
  const [whatsappTo, setWhatsappTo] = useState("");
  const [rewardToUse, setRewardToUse] = useState(0);

  async function pay() {
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: items.map((i) => ({
          productId: i.id,
          quantity: 1, // since your store doesn’t have quantity yet
        })),
        whenDate,
        deliveryType,
        whatsappTo,
        rewardToUse,
      }),
    });

    const { url } = await res.json();
    window.location.href = url;
  }

  if (items.length === 0)
    return <main className="container py-10">Cart is empty.</main>;

  return (
    <main className="container py-10 space-y-6">
      <h1 className="text-3xl font-bold mb-4 text-[var(--brand-primary)]">
        Checkout
      </h1>

      <div className="card p-6 space-y-3 bg-white shadow-md rounded-xl">
        <label className="block">
          <span className="font-medium">When:</span>
          <input
            type="datetime-local"
            className="border rounded-md p-2 ml-2"
            value={whenDate}
            onChange={(e) => setWhenDate(e.target.value)}
          />
        </label>

        <label className="block">
          <span className="font-medium">Delivery Type:</span>
          <select
            className="border rounded-md p-2 ml-2"
            value={deliveryType}
            onChange={(e) => setDeliveryType(e.target.value)}
          >
            <option value="delivery">Delivery</option>
            <option value="pickup">Pickup</option>
          </select>
        </label>

        <label className="block">
          <span className="font-medium">WhatsApp Phone:</span>
          <input
            className="border rounded-md p-2 ml-2"
            placeholder="+1 510 585 6519"
            value={whatsappTo}
            onChange={(e) => setWhatsappTo(e.target.value)}
          />
        </label>

        <label className="block">
          <span className="font-medium">Use Reward Points:</span>
          <input
            type="number"
            className="border rounded-md p-2 ml-2 w-24"
            value={rewardToUse}
            onChange={(e) => setRewardToUse(Number(e.target.value) || 0)}
          />
        </label>
      </div>

      <div className="flex justify-between items-center mt-6">
        <div className="text-xl font-semibold text-gray-800">
          Subtotal: <span className="text-[var(--brand-primary)]">${subtotal().toFixed(2)}</span>
        </div>
        <div className="flex gap-3">
          <button
            onClick={clearCart}
            className="btn-outline text-sm bg-white"
          >
            Clear Cart
          </button>
          <button onClick={pay} className="btn-primary text-sm">
            Pay with Card
          </button>
        </div>
      </div>
    </main>
  );
}
