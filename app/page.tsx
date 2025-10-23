import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const dishes = [
    {
      name: "Undhiyu",
      description: "Gujarati winter delicacy.",
      image: "/images/foods/Undhiyu.jpg",
    },
    {
      name: "Paneer Lababdar",
      description: "Creamy paneer in spiced gravy.",
      image: "/images/foods/Paneer-Lababdar.jpg",
    },
    {
      name: "Gujarati Daal",
      description: "Sweet & tangy comfort food.",
      image: "/images/foods/Gujarati-Daal.jpg",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-[var(--brand-bg)] text-[var(--text-main)]">
      {/* === HERO SECTION === */}
      <section className="bg-[var(--brand-secondary)] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-28 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Celebrate Every Occasion <br className="hidden md:block" /> with
            Authentic Taste
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto">
            Delicious home-style Indian catering made with love. From small
            gatherings to grand celebrations — we’ve got your menu covered.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            {/* Explore Menu Button (dark filled) */}
            <Link
              href="/menu"
              className="bg-[var(--brand-primary)] text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-[var(--brand-secondary)] hover:scale-105 active:scale-95 transition-transform duration-300"
            >
              Explore Menu
            </Link>

            {/* Book a Flavor Session Button (accent highlight) */}
            <Link
              href="/bookings"
              className="border-2 border-[var(--brand-accent)] text-[var(--brand-accent)] font-semibold px-8 py-3 rounded-full hover:bg-[var(--brand-accent)] hover:text-[var(--brand-primary)] hover:scale-105 active:scale-95 transition-transform duration-300 shadow-sm"
            >
              Book a Flavor Session
            </Link>
          </div>

        </div>
      </section>

      {/* === FEATURED MENU === */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--brand-primary)]">
          Customer Favorites
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <div key={dish.name} className="card text-center group">
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-[var(--brand-primary)]">
                  {dish.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === CALL TO ACTION === */}
      <section className="text-center py-24 bg-[var(--brand-primary)] text-white">
        <h2 className="text-4xl font-bold mb-3">
          Make Your Next Event Delicious
        </h2>
        <p className="text-lg mb-8 text-gray-300">
          We cater weddings, birthdays, and corporate gatherings.
        </p>

        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-[var(--brand-primary)] rounded-full font-semibold shadow-md hover:bg-[var(--brand-accent)] hover:text-black hover:scale-105 active:scale-95 transition-transform duration-300"
        >
          Contact Us
        </Link>
      </section>

    </main>
  );
}
