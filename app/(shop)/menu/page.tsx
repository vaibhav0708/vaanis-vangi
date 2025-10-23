"use client";

import { useState, useEffect } from "react";
import { MENU_ITEMS } from "@/data/menuItems";

export default function MenuPage() {
  const categories = Array.from(new Set(MENU_ITEMS.map((i) => i.category)));
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTray, setSelectedTray] = useState<Record<string, string>>({}); // 🟢 moved up here

  useEffect(() => {
    const saved = localStorage.getItem("selectedCategory");
    setSelectedCategory(saved || categories[0]);
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      localStorage.setItem("selectedCategory", selectedCategory);
    }
  }, [selectedCategory]);

  if (!selectedCategory) {
    return <div className="p-6 text-center">Loading menu...</div>;
  }

  const handleSelectTray = (id: string, value: string) => {
    setSelectedTray((prev) => ({ ...prev, [id]: value }));
  };

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div
      className="min-h-screen bg-fixed bg-repeat bg-center"
      style={{ backgroundImage: "url('/images/foods/doodle-bg.jpg')" }}
    >
      <div className="bg-gray-100/95 min-h-screen flex flex-col items-center py-12">
        <main className="max-w-7xl w-full mx-auto bg-white rounded-3xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-4">
          {/* Sidebar */}
          <aside className="md:col-span-1 border-r border-gray-200 bg-gray-50 p-8">
            <h2 className="text-2xl font-bold mb-6 text-[var(--brand-primary)]">
              Flavors of India
            </h2>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition font-medium ${
                      selectedCategory === cat
                        ? "bg-[var(--brand-primary)] text-white"
                        : "hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Items */}
          <section className="md:col-span-3 p-8">
            <h2 className="text-3xl font-bold text-[var(--brand-primary)] mb-8 border-b pb-2">
              {selectedCategory}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div key={item.id} className="card text-center p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {item.description || "Delicious and freshly prepared."}
                  </p>

                  <select
                    value={selectedTray[item.id] || ""}
                    onChange={(e) => handleSelectTray(item.id, e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
                  >
                    <option value="">Select Tray</option>
                    {item.prices.half && (
                      <option value="half">
                        Half Tray - ${item.prices.half}
                      </option>
                    )}
                    {item.prices.full && (
                      <option value="full">
                        Full Tray - ${item.prices.full}
                      </option>
                    )}
                  </select>

                  <button
                    className="btn-primary w-full"
                    onClick={() => {
                      const tray = selectedTray[item.id] as "half" | "full";
                      if (!tray) {
                        alert("Please select a tray size first!");
                        return;
                      }
                      alert(`${item.name} (${tray} tray) added to cart!`);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
