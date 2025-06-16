import About from "@/app/about/page";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 mb-6 text-white">
      {/* Logo */}
      <div className="text-xl font-bold">A O S</div>

      {/* Navigation */}
      <nav className="flex gap-16">
        <Link href="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-400 transition">
          About
        </Link>
        <Link href="/services" className="hover:text-blue-400 transition">
          Services
        </Link>
        <Link href="/portfolio" className="hover:text-blue-400 transition">
          Portfolio
        </Link>
        <Link href="/contact" className="hover:text-blue-400 transition">
          Contact
        </Link>
      </nav>
    </header>
  );
}
