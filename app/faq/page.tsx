"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Do you offer catering for small gatherings or only large events?",
    answer:
      "We cater for all occasions — from intimate family dinners to large-scale weddings and corporate events. Tray orders are perfect for smaller gatherings.",
  },
  {
    question: "How far in advance should I place my order?",
    answer:
      "We recommend placing your order at least 3–5 days in advance for tray catering and 2 weeks for full-service catering to ensure availability.",
  },
  {
    question: "Do you provide delivery or pickup options?",
    answer:
      "Yes! We offer both delivery and pickup options within the Bay Area. Delivery fees vary based on distance — we’ll confirm exact details when you order.",
  },
  {
    question: "Can I customize the menu items or spice levels?",
    answer:
      "Absolutely. Every dish can be tailored to your taste — mild, medium, or spicy. You can also mix and match dishes to create your own catering spread.",
  },
  {
    question: "Are your dishes vegetarian or vegan-friendly?",
    answer:
      "Our entire menu is 100% vegetarian, prepared without eggs or meat. Many items can also be made vegan — please mention it while ordering.",
  },
  {
    question: "Do you offer tasting sessions before booking?",
    answer:
      "Yes! You can schedule a tasting appointment through our Contact page. Please allow 1–2 weeks’ notice for scheduling tastings.",
  },
  {
    question: "How do I confirm my order and make payment?",
    answer:
      "Once your menu and quantity are finalized, you can pay securely online through our checkout page or via WhatsApp confirmation link.",
  },
  {
    question: "Where are you located?",
    answer:
      "We’re based in Fremont, California. You can schedule pickups or in-person tastings at 5591 Hemlock Terrace, Fremont, CA.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <main
      className="min-h-screen bg-fixed bg-repeat bg-center"
      style={{
        backgroundImage: "url('/images/foods/doodle-bg.jpg')",
        backgroundSize: "contain",
      }}
    >
      {/* matching menu padding */}
      <div className="bg-gray-100/95 min-h-screen flex flex-col items-center py-12">
        <section className="max-w-5xl w-full mx-auto bg-white rounded-3xl shadow-md overflow-hidden p-10 md:p-16">
          <h1 className="text-4xl font-bold text-center text-[var(--brand-primary)] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Here’s everything you need to know about catering, trays, delivery, and
            events with Vaani’s Vangi. Still have questions?{" "}
            <a
              href="/contact"
              className="text-[var(--brand-accent)] underline hover:text-[var(--brand-primary)]"
            >
              Contact us!
            </a>
          </p>

          <div className="divide-y divide-gray-200">
            {faqs.map((faq, i) => (
              <div key={i} className="py-5">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="font-semibold text-lg text-[var(--brand-primary)]">
                    {faq.question}
                  </span>
                  {openIndex === i ? (
                    <FaChevronUp className="text-[var(--brand-secondary)]" />
                  ) : (
                    <FaChevronDown className="text-[var(--brand-secondary)]" />
                  )}
                </button>
                {openIndex === i && (
                  <p className="mt-3 text-gray-700 leading-relaxed bg-gray-50/60 p-4 rounded-lg">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
