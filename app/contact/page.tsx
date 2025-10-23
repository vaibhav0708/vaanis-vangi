"use client";

import { FaWhatsapp, FaMapMarkerAlt, FaClock, FaUserTie } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-center py-20 bg-[var(--brand-primary)] text-white">
        <h1 className="text-5xl font-bold mb-4">Let’s Plan Your Perfect Event!</h1>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Whether it's a wedding, birthday, or corporate lunch — we’ll make it delicious and memorable.
        </p>
      </section>

      {/* WhatsApp CTA */}
      <section className="text-center py-16 bg-green-50">
        <h2 className="text-3xl font-semibold mb-6 text-green-800">
          Chat Directly With Our Team on WhatsApp 💬
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Get instant answers, menu suggestions, and event recommendations without waiting for emails.  
          Our catering experts are just a tap away.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=15105906701&text=Hi%20Vani's%20Vangi!%20I'd%20love%20to%20inquire%20about%20your%20catering%20menu."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-medium transition"
        >
          <FaWhatsapp size={26} />
          Chat on WhatsApp
        </a>
      </section>

      {/* Info Cards */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 py-20">
        <div className="p-8 text-center bg-white shadow-md rounded-xl border">
          <FaMapMarkerAlt className="mx-auto text-[var(--brand-primary)] mb-4" size={30} />
          <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
          <p className="text-gray-600">Address</p>
        </div>

        <div className="p-8 text-center bg-white shadow-md rounded-xl border">
          <FaClock className="mx-auto text-[var(--brand-primary)] mb-4" size={30} />
          <h3 className="font-semibold text-lg mb-2">Hours</h3>
          <p className="text-gray-600">Mon – Sat: 10AM – 8PM</p>
          <p className="text-gray-600">Sunday: Closed</p>
        </div>

        <div className="p-8 text-center bg-white shadow-md rounded-xl border">
          <FaUserTie className="mx-auto text-[var(--brand-primary)] mb-4" size={30} />
          <h3 className="font-semibold text-lg mb-2">Customer Care</h3>
          <p className="text-gray-600">Email: abc@vanisvangi.com</p>
          <p className="text-gray-600">Phone: +1 (510) 590-6701</p>
        </div>
      </section>

      {/* Embedded Map */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <iframe
          src="https://www.google.com/maps?q=5591 Hemlock Ter, Fremont, CA,+CA&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="rounded-2xl shadow-lg"
        ></iframe>
      </section>
    </main>
  );
}
