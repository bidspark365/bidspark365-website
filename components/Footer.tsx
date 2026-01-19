import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#05070a] text-white pt-32 pb-12 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px] float-slow pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-24 reveal">
          {/* Brand */}
          <div className="space-y-10 stagger-item">
            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500 blur-xl opacity-0 group-hover:opacity-40 transition-opacity rounded-full" />
                <img
                  src="/assets/logo.png"
                  alt="BidSpark365"
                  className="h-20 relative z-20 transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div>
                <span className="text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  BidSpark365
                </span>
                <span className="block text-[10px] uppercase font-black tracking-[0.3em] text-orange-500 mt-1">
                  Global Experts
                </span>
              </div>
            </div>

            <p className="text-gray-400 font-medium text-lg max-w-xs">
              India's leading consultancy empowering businesses to master the
              government marketplace with precision and scale.
            </p>

            {/* ✅ SOCIAL ICONS RESTORED */}
            <div className="flex space-x-4">
              {[
                // {
                //   Icon: Facebook,
                //   href: "#",
                //   color: "hover:text-blue-500 hover:border-blue-500/50",
                // },
                // {
                //   Icon: Twitter,
                //   href: "#",
                //   color: "hover:text-sky-400 hover:border-sky-400/50",
                // },
                {
                  Icon: MessageCircle,
                  href: "https://wa.me/917488757834",
                  color: "hover:text-green-600 hover:border-green-600/50",
                },
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/bidspark365/",
                  color: "hover:text-pink-500 hover:border-pink-500/50",
                },
              ].map(({ Icon, href, color }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center transition-all duration-500 transform hover:-translate-y-2 hover:bg-white/10 ${color}`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="stagger-item">
            <h4 className="text-xl font-black mb-10">Company</h4>
            <ul className="space-y-4">
              {[
                { label: "Home", href: "/#home" },
                { label: "About Us", href: "/#about" },
                { label: "Our Services", href: "/#services" },
                { label: "OEM Program", href: "/#oem" },
                { label: "Testimonials", href: "/#testimonials" },
              ].map(({ label, href }) => (
                <li key={label} className="group">
                  <a
                    href={href}
                    className="text-gray-400 hover:text-white flex items-center font-bold text-lg"
                  >
                    <ArrowRight
                      size={16}
                      className="mr-3 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-500"
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="stagger-item">
            <h4 className="text-xl font-black mb-10">Contact</h4>
            <ul className="space-y-8">
              <li className="flex items-start space-x-5">
                <MapPin className="text-blue-500" />
                <span className="text-gray-400">
                  1st Floor, Balaji Enclave, DB Road, Katras, Dhanbad, Jharkhand
                </span>
              </li>
              <li className="flex items-center space-x-5">
                <Phone className="text-orange-500" />
                <span className="text-gray-400">+91-7488757834</span>
              </li>
              <li className="flex items-center space-x-5">
                <Mail className="text-purple-500" />
                <span className="text-gray-400">bidspark365@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="stagger-item">
            <h4 className="text-xl font-black mb-10">Newsletter</h4>
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem]">
              <p className="text-gray-400 font-bold mb-4">
                Join our network for direct tender updates.
              </p>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white font-bold outline-none"
              />
              <button className="mt-4 w-full bg-gradient-to-r from-orange-500 to-rose-600 py-4 rounded-2xl font-black">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 font-bold text-sm">
            © 2024 BidSpark365. All Rights Reserved.
          </p>

          <div className="flex space-x-10 text-sm font-bold text-gray-500">
            <a href="/privacy" className="hover:text-white relative group">
              Privacy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all" />
            </a>
            <a href="/terms" className="hover:text-white relative group">
              Terms
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
