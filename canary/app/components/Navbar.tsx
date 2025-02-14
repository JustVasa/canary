"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-4 py-4 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-[rgba(0,0,0,0.7)] text-white shadow-md py-2" // Zmenší padding při scrollování
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center sm:ml-0 ml-[-20px]">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={isScrolled ? 200 : 270} // Zmenší logo při scrollování
            height={isScrolled ? 110 : 150} // Zmenší výšku loga při scrollování
            className="mr-2 transition-all duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <div
          className={`text-xl hidden md:flex space-x-6 font-poppins text-white transition-all duration-300 ${
            isScrolled ? "justify-center items-center" : "mt-8"
          } mr-8`}
        >
          <Link href="/" className="hover:opacity-70">
            ÚVOD
          </Link>
          <Link href="/services" className="hover:opacity-70">
            SLUŽBY
          </Link>
          <Link href="/services" className="hover:opacity-70">
            CENÍK
          </Link>
          <Link href="/reference" className="hover:opacity-70">
            O NÁS
          </Link>
          <Link href="/reference" className="hover:opacity-70">
            KONTAKT
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden focus:outline-none z-50 relative ${isScrolled ? "top-0" : "top-4"}`}
        >
          <div
            className={`w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white mb-1 transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-[rgba(0,0,0,0.9)] text-white flex flex-col items-center justify-center space-y-6 text-2xl font-semibold transform transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }` }
      >
        <Link href="/" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
          ÚVOD
        </Link>
        <Link href="/contact" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
          SLUŽBY
        </Link>
        <Link href="/reference" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
          CENÍK
        </Link>
        <Link href="/reference" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
          O NÁS
        </Link>
        <Link href="/reference" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
          KONTAKT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
