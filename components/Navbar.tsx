"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data } = useSession();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Section: Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-neutral-700">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-[var(--brand-primary)] font-semibold border-b-2 border-[var(--brand-primary)] pb-1"
                    : "hover:text-[var(--brand-primary)]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Center Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-[var(--brand-primary)]"
        >
          VAANI'S VANGI
        </Link>

        {/* Right Section: Auth + Cart */}
        <div className="flex items-center gap-3">
          {data?.user ? (
            <>
              <Link href="/account" className="btn-outline text-sm">
                Account
              </Link>
              <button onClick={() => signOut()} className="btn-primary text-sm">
                Logout
              </button>
            </>
          ) : (
            <button onClick={() => signIn()} className="btn-primary text-sm">
              Login
            </button>
          )}
          <Link href="/cart" aria-label="Cart" className="p-2 text-xl">
            🛒
          </Link>
        </div>
      </div>
    </header>
  );
}
