"use client";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data } = useSession();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-[var(--brand-primary)]">
          Vanis Vangi
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-neutral-700">
          <Link href="/menu" className="hover:text-[var(--brand-primary)]">Menu</Link>
          <Link href="/about" className="hover:text-[var(--brand-primary)]">About</Link>
          <Link href="/contact" className="hover:text-[var(--brand-primary)]">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          {data?.user ? (
            <>
              <Link href="/account" className="btn-outline text-sm">Account</Link>
              <button onClick={() => signOut()} className="btn-primary text-sm">Logout</button>
            </>
          ) : (
            <button onClick={() => signIn()} className="btn-primary text-sm">Login</button>
          )}
          <Link href="/cart" aria-label="Cart" className="p-2 text-xl">🛒</Link>
        </div>
      </div>
    </header>
  );
}
