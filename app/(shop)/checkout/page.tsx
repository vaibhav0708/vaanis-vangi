"use client";

import { useCartStore } from "@/store/cartStore";
import { useState, useMemo } from "react";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCartStore();

  // guest fields
  const [firstName, setFirstName] = useState("");
  const [lastName,  setLastName]  = useState("");
  const [email,     setEmail]     = useState("");
  const [phone,     setPhone]     = useState("");

  const [whenDate, setWhenDate] = useState("");
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">("delivery");
  const [addressText, setAddressText] = useState("");
  const [rewardToUse, setRewardToUse] = useState(0);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const minDateTime = useMemo(
    () => new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().slice(0,16),
    []
  );

  async function placeOrder() {
    if (!firstName || !lastName || !email || !phone || !whenDate) {
      setMessage("⚠️ Please fill all required fields.");
      return;
    }
    if (deliveryType === "delivery" && !addressText) {
      setMessage("⚠️ Please provide delivery address.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const payload = {
        userId: null, // later: real user id
        subtotalCents: Math.round(subtotal() * 100),
        totalCents: Math.round(subtotal() * 100),
        deliveryType,
        whenDate,
        addressText: deliveryType === "delivery" ? addressText : null,
        notes: items.map(i => `${i.name} (${i.tray}) $${i.price}`).join(", "),
        rewardUsed: rewardToUse,
        customerFirstName: firstName,
        customerLastName: lastName,
        customerEmail: email,
        customerPhone: phone,
      };

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setMessage(`✅ Order placed! ID: ${data.order.id}. We'll contact you soon.`);
        clearCart();
      } else {
        setMessage(data.error || "❌ Could not place order.");
      }
    } catch (e) {
      console.error(e);
      setMessage("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return <main className="p-10 text-center">Your cart is empty.</main>;
  }

  return (
    <div
      className="flex flex-col min-h-screen bg-fixed bg-repeat bg-center"
      style={{ backgroundImage: "url('/images/foods/doodle-bg.jpg')" }}
    >
      <div className="flex-grow flex justify-center items-start md:items-center px-4 py-8 md:py-12 bg-gray-100/95">
        <main className="w-full max-w-4xl bg-white rounded-3xl shadow-md p-8 md:p-10 space-y-8">
          <h1 className="text-4xl font-bold text-[var(--brand-primary)] text-center">Checkout</h1>

          {/* Guest details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="font-medium">First Name*</span>
              <input className="input" value={firstName} onChange={e=>setFirstName(e.target.value)} />
            </label>
            <label className="block">
              <span className="font-medium">Last Name*</span>
              <input className="input" value={lastName} onChange={e=>setLastName(e.target.value)} />
            </label>
            <label className="block">
              <span className="font-medium">Email*</span>
              <input type="email" className="input" value={email} onChange={e=>setEmail(e.target.value)} />
            </label>
            <label className="block">
              <span className="font-medium">Phone*</span>
              <input className="input" value={phone} onChange={e=>setPhone(e.target.value)} />
            </label>
          </div>

          {/* Event & delivery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="font-medium">Event Date & Time*</span>
              <input
                type="datetime-local"
                className="input"
                min={minDateTime}
                value={whenDate}
                onChange={(e)=>setWhenDate(e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">* Orders must be placed at least 15 days in advance.</p>
            </label>
            <label className="block">
              <span className="font-medium">Delivery Type*</span>
              <select
                className="input"
                value={deliveryType}
                onChange={(e)=>setDeliveryType(e.target.value as "delivery" | "pickup")}
              >
                <option value="delivery">Delivery</option>
                <option value="pickup">Pickup</option>
              </select>
            </label>
            {deliveryType === "delivery" && (
              <label className="md:col-span-2 block">
                <span className="font-medium">Delivery Address*</span>
                <textarea className="input" rows={2} value={addressText} onChange={(e)=>setAddressText(e.target.value)} />
              </label>
            )}
          </div>

          {/* Rewards + summary */}
          <div className="flex justify-between items-center border-t pt-6">
            <div className="flex items-center gap-3">
              <label className="font-medium">Use Reward Points:</label>
              <input
                type="number"
                className="input w-24"
                value={rewardToUse}
                onChange={(e)=>setRewardToUse(Number(e.target.value) || 0)}
              />
            </div>
            <div className="text-xl font-semibold">
              Subtotal: <span className="text-[var(--brand-primary)]">${subtotal().toFixed(2)}</span>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button className="btn-outline" onClick={clearCart} disabled={loading}>Clear Cart</button>
            <button className="btn-primary" onClick={placeOrder} disabled={loading}>
              {loading ? "Placing..." : "Place Order"}
            </button>
          </div>

          {message && (
            <div className={`text-center font-medium ${message.startsWith("✅") ? "text-green-700" : "text-red-700"}`}>
              {message}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
