interface CTAProps {
  onGetStarted: () => void;
}

import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  MessageCircle,
  FileText,
  ArrowRight,
  Zap,
} from "lucide-react";

const CTA: React.FC<CTAProps> = ({ onGetStarted }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 25;
    const tiltY = (centerX - x) / 25;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="contact" className="py-40 bg-white relative overflow-hidden">
      {/* Immersive Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-orange-100/20 rounded-full blur-[160px] pointer-events-none animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className="reveal group"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={cardRef}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition:
                tilt.x === 0
                  ? "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
                  : "none",
            }}
            className="bg-[#0f172a] rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-[0_80px_160px_-30px_rgba(0,0,0,0.5)] border border-white/5"
          >
            {/* Supernova Background Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Spinning Energy Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-orange-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

              {/* Radial Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15)_0%,transparent_70%)] animate-pulse" />

              {/* Floating Sparks */}
              <div
                className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500/40 to-transparent animate-shimmer"
                style={{ left: "20%", animationDelay: "0s" }}
              />
              <div
                className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/40 to-transparent animate-shimmer"
                style={{ left: "50%", animationDelay: "1.5s" }}
              />
              <div
                className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500/40 to-transparent animate-shimmer"
                style={{ left: "80%", animationDelay: "0.7s" }}
              />
            </div>

            <div className="relative z-10 space-y-12 max-w-5xl mx-auto">
              {/* Kinetic Badge */}
              <div
                className="stagger-item flex justify-center"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="group/badge bg-orange-500/10 backdrop-blur-md border border-orange-500/30 px-8 py-3 rounded-full inline-flex items-center space-x-3 shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all hover:bg-orange-500/20">
                  <Zap
                    size={18}
                    className="text-orange-400 group-hover/badge:animate-bounce"
                  />
                  <span className="text-orange-100 font-black text-xs uppercase tracking-[0.4em]">
                    Partner with the Experts
                  </span>
                </div>
              </div>

              {/* High-Voltage Headline */}
              <div className="overflow-hidden">
                <h2
                  className="text-4xl md:text-8xl font-black leading-[0.95] tracking-tighter stagger-item animate-reveal-text"
                  style={{ animationDelay: "0.4s" }}
                >
                  Ready to Ignite Your <br />
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-500 to-orange-400 bg-[length:200%_auto] animate-shimmer">
                    Tender Success?
                  </span>
                </h2>
              </div>

              {/* Premium Description */}
              <p
                className="text-xl md:text-2xl text-gray-400 leading-relaxed font-medium max-w-3xl mx-auto stagger-item"
                style={{ animationDelay: "0.6s" }}
              >
                Don't let complex documentation hold your business back. Let our{" "}
                <span className="text-white font-bold">
                  award-winning specialists
                </span>{" "}
                handle the process while you focus on scaling your operations.
              </p>

              {/* Industrial-Strength Action Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-8 justify-center pt-8 stagger-item"
                style={{ animationDelay: "0.8s" }}
              >
                <button
  type="button"
  onClick={() =>
    window.open(
      "https://calendly.com/bidspark365/30min",
      "_blank",
      "noopener,noreferrer"
    )
  }
  className="group relative bg-gradient-to-r from-orange-500 to-rose-600 p-[2px] rounded-[2.5rem] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(249,115,22,0.4)]"
>
  <div className="bg-white px-12 py-7 rounded-[2.4rem] flex items-center justify-center space-x-4 group-hover:bg-transparent">
    <span className="text-orange-600 group-hover:text-white font-black text-2xl">
      Talk to an Expert
    </span>
  </div>
</button>


                <button
                  type="button"
                  onClick={onGetStarted}
                  className="group relative bg-white/5 border-2 border-white/10 backdrop-blur-xl px-12 py-7 rounded-[2.5rem] font-black text-2xl text-white transition-all hover:bg-white hover:text-black hover:scale-105 active:scale-95 flex items-center justify-center space-x-4"
                >
                  <FileText
                    size={28}
                    className="group-hover:rotate-12 transition-transform"
                  />
                  <span>Get a Free Quote</span>
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-20 transition-opacity" />
                </button>
              </div>

              {/* Status Indicator */}
              <div
                className="pt-12 flex items-center justify-center space-x-6 stagger-item opacity-50"
                style={{ animationDelay: "1.1s" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                    Support Active
                  </span>
                </div>
                <div className="w-px h-4 bg-white/20" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                  Global Inquiries Welcome
                </span>
              </div>
            </div>

            {/* Futuristic Corner Detailing */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-tl-full" />
            <div className="absolute top-12 right-12 text-white/5">
              <Sparkles size={120} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
