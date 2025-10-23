"use client";

export default function AboutPage() {
  return (
    <main
      className="min-h-screen bg-[url('/images/foods/doodle-bg.jpg')] bg-repeat bg-center bg-fixed"
      style={{ backgroundSize: "contain" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-20 bg-white/90 rounded-3xl shadow-[0_6px_18px_rgba(0,0,0,0.08)] backdrop-blur-sm">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[var(--brand-primary)] mb-4">
            About Vaani’s Vangi
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A celebration of authentic Indian flavors — handcrafted with love,
            tradition, and a touch of modern charm.
          </p>
        </section>

        {/* Story Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/images/foods/chef-vaani.jpg"
              alt="Chef Vaani cooking authentic Indian food"
              className="rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[var(--brand-primary)] mb-3">
              Our Story
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Vaani’s Vangi began in a small home kitchen with one simple belief:
              <strong> good food brings people together.</strong> What started
              as cooking for friends and family quickly turned into a passion
              for sharing traditional Indian dishes with a modern presentation.
              Every recipe on our menu carries a story — from family favorites
              passed down through generations to innovative creations inspired
              by everyday moments.
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold text-[var(--brand-primary)] mb-3">
              Our Philosophy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We believe food should nourish both body and soul.  
              That’s why we use only fresh, locally sourced ingredients and
              prepare everything in small batches.  
              Our dishes are 100% vegetarian and made without preservatives —
              blending homely warmth with global finesse.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/images/foods/vaanis-kitchen.jpg"
              alt="Vaani’s Kitchen"
              className="rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            />
          </div>
        </section>

        {/* Mission / Vision */}
        <section className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-[var(--brand-primary)] mb-4">
            Our Promise
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Whether you’re hosting a cozy dinner, a festival feast, or a grand
            celebration, we bring authentic flavors, punctual service, and
            heartfelt care to your table.  
            Every bite should feel like home — only better.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center">
          <a
            href="/contact"
            className="inline-block mt-6 px-6 py-3 rounded-full bg-[var(--brand-primary)] text-white font-medium shadow hover:bg-[var(--brand-accent)] transition"
          >
            Get in Touch
          </a>
          <p className="text-gray-500 text-sm mt-2">
            Let’s craft a delicious menu for your next celebration.
          </p>
        </section>
      </div>
    </main>
  );
}
