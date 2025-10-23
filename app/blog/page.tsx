"use client";

import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: "diwali-feast",
    title: "The Magic of a Diwali Feast ✨",
    excerpt:
      "How we blend traditional Gujarati flavors with festive warmth to make your celebrations sparkle — from Undhiyu to Gulab Jamun.",
    image: "/images/foods/diwali-thali.jpg",
    date: "October 2025",
  },
  {
    id: "spice-story",
    title: "The Story of Spices in Indian Cooking",
    excerpt:
      "From cardamom to cumin, discover how spices shape aroma, color, and the soul of every Indian dish — and how we source ours freshly ground.",
    image: "/images/foods/spices.jpg",
    date: "September 2025",
  },
  {
    id: "tray-catering-guide",
    title: "Your Guide to Ordering the Perfect Tray 🍱",
    excerpt:
      "Planning a party? Here’s how to choose between half and full trays, plus portion tips to feed your guests perfectly.",
    image: "/images/foods/tray-catering.jpg",
    date: "August 2025",
  },
];

export default function BlogPage() {
  return (
    <main
      className="min-h-screen bg-[url('/images/foods/doodle-bg.jpg')] bg-repeat bg-center bg-fixed"
      style={{ backgroundSize: "contain" }}
    >
      <div className="bg-gray-100/95 min-h-screen flex flex-col items-center py-12">
        <section className="max-w-6xl w-full mx-auto bg-white rounded-3xl shadow-md p-10 md:p-16">
          <h1 className="text-4xl font-bold text-center text-[var(--brand-primary)] mb-6">
            Vani’s Vangi Blog
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Stories, recipes, and moments from our kitchen — where every dish
            has a heart, and every gathering begins with flavor.
          </p>

          {/* Blog grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.1)] transition bg-white flex flex-col"
              >
                <div className="relative h-52 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <time className="text-sm text-gray-500">{post.date}</time>
                  <h2 className="text-lg font-semibold mt-2 text-[var(--brand-primary)]">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="mt-4 inline-block self-start text-[var(--brand-accent)] font-medium hover:text-[var(--brand-primary)]"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
