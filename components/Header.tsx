import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../constants";
import GetStartedModal from "./GetStartedModal";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openCalendly = () => {
    window.open(
      "https://calendly.com/bidspark365/30min",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-xl py-2"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-3 group">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <img
              src="/assets/logo2.jpg"
              alt="BidSpark365"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black">BidSpark365</span>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-orange-500">
              Grow Your Business
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="font-bold">
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setIsGetStartedOpen(true)}
            className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-8 py-3 rounded-full font-black"
          >
            GET STARTED
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white transition-all ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="p-6 space-y-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-black"
            >
              {item.label}
            </a>
          ))}

          {/* ✅ WORKING Calendly */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              openCalendly();
            }}
            className="bg-orange-500 text-white px-6 py-4 rounded-2xl font-black w-full"
          >
            Talk to an Expert
          </button>
        </div>
      </div>

      <GetStartedModal
        isOpen={isGetStartedOpen}
        onClose={() => setIsGetStartedOpen(false)}
      />
    </header>
  );
};

export default Header;
