"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = ["Home", "Men", "Women", "Collections", "Sale"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement Bar */}
      <div className="bg-red-600 text-white text-center py-2 text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase px-4">
        <span className="hidden sm:inline">Free Shipping Above ₹999 &nbsp;|&nbsp; </span>
        Use Code <span className="font-black">RRATH10</span>
        <span className="hidden sm:inline"> for Extra 10% Off</span>
        <span className="sm:hidden"> — 10% Off</span>
      </div>

      {/* Main Nav */}
      <nav className="bg-black/95 backdrop-blur-sm border-b border-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1">
              <span className="text-white font-black text-2xl tracking-tighter leading-none">
                RR
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 mb-0.5" />
            </div>
            <span className="text-gray-400 text-[10px] font-bold tracking-[0.3em] uppercase mt-0.5">
              Athleisure
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                  item === "Sale"
                    ? "text-red-500 hover:text-red-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              aria-label="Search"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Wishlist */}
            <button
              aria-label="Wishlist"
              className="hidden sm:block text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>

            {/* Cart */}
            <button
              aria-label="Cart"
              className="text-gray-400 hover:text-white transition-colors duration-200 relative"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              aria-label="Menu"
              className="md:hidden text-gray-400 hover:text-white transition-colors duration-200 ml-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-[#252525] px-6 py-4 flex flex-col gap-1">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`py-3 text-sm font-semibold uppercase tracking-wider border-b border-[#1a1a1a] ${
                  item === "Sale" ? "text-red-500" : "text-gray-300"
                }`}
              >
                {item}
              </Link>
            ))}
            <div className="pt-4 flex gap-6">
              <Link
                href="/account"
                className="text-xs text-gray-500 uppercase tracking-widest"
              >
                My Account
              </Link>
              <Link
                href="/wishlist"
                className="text-xs text-gray-500 uppercase tracking-widest"
              >
                Wishlist
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
