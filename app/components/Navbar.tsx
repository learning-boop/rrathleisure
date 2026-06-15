"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = ["Home", "Men", "Women", "Collections", "Sale"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement Bar — teal to match logo */}
      <div
        className="text-white text-center py-2 text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase px-4"
        style={{ background: "#1d6b7a" }}
      >
        <span className="hidden sm:inline">Free Shipping Above ₹999 &nbsp;|&nbsp; </span>
        Use Code <span className="font-black">RRATH10</span>
        <span className="hidden sm:inline"> for Extra 10% Off</span>
        <span className="sm:hidden"> — 10% Off</span>
      </div>

      {/* Main Nav — dark teal background */}
      <nav
        className="backdrop-blur-sm border-b"
        style={{ background: "rgba(6,20,24,0.97)", borderColor: "#0f2e35" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

          {/* Logo Image */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/RR_Logo.webp"
              alt="RR Athleisure"
              width={48}
              height={48}
              className="h-10 sm:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                  item === "Sale"
                    ? "font-bold"
                    : "text-gray-300 hover:text-white"
                }`}
                style={item === "Sale" ? { color: "#4db8cc" } : undefined}
                onMouseEnter={
                  item !== "Sale"
                    ? (e) => ((e.target as HTMLElement).style.color = "#7dcfdb")
                    : undefined
                }
                onMouseLeave={
                  item !== "Sale"
                    ? (e) => ((e.target as HTMLElement).style.color = "")
                    : undefined
                }
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Wishlist */}
            <button
              aria-label="Wishlist"
              className="hidden sm:block text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            {/* Cart */}
            <button
              aria-label="Cart"
              className="text-gray-400 hover:text-white transition-colors duration-200 relative"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span
                className="absolute -top-2 -right-2 text-white text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center"
                style={{ background: "#1d6b7a" }}
              >
                2
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              aria-label="Menu"
              className="md:hidden text-gray-400 hover:text-white transition-colors duration-200 ml-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden border-t px-6 py-4 flex flex-col gap-1"
            style={{ background: "#050f12", borderColor: "#0f2e35" }}
          >
            {navLinks.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm font-semibold uppercase tracking-wider border-b"
                style={{
                  color: item === "Sale" ? "#4db8cc" : "#d1d5db",
                  borderColor: "#0f2e35",
                }}
              >
                {item}
              </Link>
            ))}
            <div className="pt-4 flex gap-6">
              <Link href="/account" className="text-xs text-gray-500 uppercase tracking-widest">
                My Account
              </Link>
              <Link href="/wishlist" className="text-xs text-gray-500 uppercase tracking-widest">
                Wishlist
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
