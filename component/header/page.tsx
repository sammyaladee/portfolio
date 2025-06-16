"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative bg-black text-white p-6 mb-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">A O S</div>

        {/* Hamburger Icon: Always visible */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Hamburger Menu: Show on all screen sizes when open */}
      {menuOpen && (
        <nav className="mt-4 flex flex-col gap-4 bg-black px-2 py-4 rounded shadow-lg">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Services</Link>
          <Link href="/portfolio" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Portfolio</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Contact</Link>
        </nav>
      )}
    </header>
  );
}
