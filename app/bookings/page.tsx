"use client";

import { useState } from "react";

export default function FlavorSessionPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "1-2",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main
      className="min-h-screen bg-[url('/images/foods/doodle-bg.jpg')] bg-repeat bg-center bg-fixed"
      style={{ backgroundSize: "contain" }}
    >
      <div className="bg-gray-100/95 min-h-screen flex flex-col items-center py-12">
        <section className="max-w-3xl w-full mx-auto bg-white rounded-3xl shadow-md p-10 md:p-16">
          {/* Header */}
          <h1 className="text-4xl font-bold text-center text-[var(--brand-primary)] mb-4">
            Book a Flavor Session
          </h1>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            Experience our authentic dishes before your big event.  
            Book a private tasting at our Fremont kitchen — we’ll help you pick the perfect menu for your celebration.
          </p>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
                  placeholder="+1 012 345 6789"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Guests
              </label>
              <select
                name="guests"
                value={form.guests}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
              >
                <option value="1-2">1–2 people</option>
                <option value="3-4">3–4 people</option>
                <option value="5+">5 or more</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notes / Preferred Dishes
              </label>
              <textarea
                name="notes"
                rows={3}
                value={form.notes}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
                placeholder="Tell us what you’d like to try..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--brand-primary)] text-white font-semibold py-3 rounded-full shadow hover:bg-[var(--brand-accent)] transition"
            >
              Submit Request
            </button>
          </form>

          {/* Info Section */}
          <div className="mt-12 text-center text-gray-700">
            <h2 className="text-xl font-semibold text-[var(--brand-primary)] mb-2">
              Location
            </h2>
            <p>
              Fremont, California <br />
              (Exact address shared after confirmation)
            </p>

            <h2 className="text-xl font-semibold text-[var(--brand-primary)] mt-8 mb-2">
              Contact
            </h2>
            <p>
              📞 <a href="tel:+15105906701" className="text-[var(--brand-accent)]">+1 (510) 590-6701</a> <br />
              💬{" "}
              <a
                href="https://wa.me/15105906701"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-accent)]"
              >
                Chat on WhatsApp
              </a>{" "}
              <br />
              ✉️ <a href="mailto:hello@vanisvangi.com" className="text-[var(--brand-accent)]">
                hello@vanisvangi.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
