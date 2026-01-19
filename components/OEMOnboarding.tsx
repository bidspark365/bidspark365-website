
import React, { useState, useRef } from 'react';
import { Factory, CheckSquare, Users, Globe, Settings, Cpu, Shield } from 'lucide-react';

const OEMOnboarding: React.FC = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 20;
    const tiltY = (centerX - x) / 20;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="oem" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Blueprint Grid Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      
      {/* Floating Industrial Elements */}
      <div className="absolute top-20 right-10 text-emerald-100 animate-pulse hidden lg:block">
        <Settings size={120} strokeWidth={1} />
      </div>
      <div className="absolute bottom-20 left-10 text-blue-100 float-slow hidden lg:block">
        <Cpu size={100} strokeWidth={1} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Visual Side with Enhanced Animation */}
          <div 
            className="order-2 lg:order-1 relative reveal"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={containerRef}
          >
            <div 
              style={{ 
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: tilt.x === 0 ? 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
              }}
              className="relative z-10 animate-mask rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group cursor-crosshair"
            >
              <div className="zoom-animation">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" 
                  alt="OEM Manufacturing" 
                  className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>

              {/* Vertical Scanning Beam Animation */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_rgba(52,211,153,0.8)] animate-[scan_4s_linear_infinite]" 
                  style={{ 
                    animation: 'scan 4s linear infinite',
                  }} 
                />
              </div>
              
              {/* Technical Overlay HUD */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute top-10 left-10 w-24 h-24 border-t-2 border-l-2 border-emerald-500/50 rounded-tl-2xl" />
                <div className="absolute bottom-10 right-10 w-24 h-24 border-b-2 border-r-2 border-emerald-500/50 rounded-br-2xl" />
                
                {/* Floating Tech Dots */}
                <div className="absolute top-1/4 right-10 flex flex-col space-y-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>

              {/* Internal Glass Overlay */}
              <div className="absolute inset-0 bg-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>

            {/* Floating Perspective Badge */}
            <div 
              className="absolute -bottom-10 -right-4 lg:-right-10 bg-white p-10 rounded-[2.5rem] shadow-2xl z-20 border-l-[12px] border-emerald-500 animate-perspective"
              style={{ 
                animationDelay: '1.2s',
                transform: `perspective(1000px) rotateX(${tilt.x * 0.5}deg) rotateY(${tilt.y * 0.5}deg) translateZ(50px)`
              }}
            >
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                  <p className="text-emerald-600 font-black text-xs uppercase tracking-[0.3em]">Live Status</p>
                </div>
                <p className="text-gray-900 font-black text-2xl leading-tight">Direct OEM<br />Gateway</p>
                <div className="pt-4 border-t border-gray-100 mt-2">
                   <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">Optimized for Industry 4.0</p>
                </div>
              </div>
            </div>

            {/* Orbiting Decor */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-emerald-500/20 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
          </div>

          {/* Content Side (UNCHANGED CONTENT) */}
          <div className="order-1 lg:order-2 space-y-12 reveal">
            <div className="space-y-6">
              <div className="overflow-hidden">
                <h4 className="text-emerald-600 font-black tracking-[0.4em] uppercase text-xs inline-block animate-reveal-text" style={{ animationDelay: '0.2s' }}>
                  For Manufacturers & OEMs
                </h4>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] stagger-item animate-elastic" style={{ animationDelay: '0.4s' }}>
                  Your Direct Link to <br /> 
                  <span className="text-emerald-600 inline-block">Govt Procurement</span>
                </h2>
                <div className="w-40 h-2.5 bg-emerald-500/20 rounded-full overflow-hidden stagger-item" style={{ animationDelay: '0.5s' }}>
                  <div className="w-1/2 h-full bg-emerald-500 rounded-full animate-shimmer" />
                </div>
              </div>

              <p className="text-gray-500 text-xl leading-relaxed font-medium stagger-item animate-slide-right" style={{ animationDelay: '0.6s' }}>
                We bridge the complex gap between industrial shop floors and government boardrooms. Our OEM program ensures you bypass intermediaries, securing direct contracts with PSUs and Central Ministries.
              </p>
            </div>

            <div className="grid gap-5">
               {[
                 { icon: <Factory size={24} />, text: 'Vendor registration & qualification audits', color: 'bg-emerald-50 text-emerald-600' },
                 { icon: <Globe size={24} />, text: 'GeM portal catalog & pricing optimization', color: 'bg-blue-50 text-blue-600' },
                 { icon: <CheckSquare size={24} />, text: 'Technical compliance & eligibility checks', color: 'bg-purple-50 text-purple-600' },
                 { icon: <Users size={24} />, text: 'Dedicated account support for Govt bids', color: 'bg-amber-50 text-amber-600' }
               ].map((item, idx) => (
                 <div 
                   key={idx} 
                   className="group flex items-center space-x-6 bg-white p-5 rounded-[2rem] shadow-sm border border-gray-100 hover:border-emerald-200 transition-all duration-700 animate-perspective stagger-item hover:shadow-xl hover:-translate-y-1"
                   style={{ animationDelay: `${0.8 + (idx * 0.2)}s` }}
                 >
                   <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-1000 shadow-inner`}>
                     {item.icon}
                   </div>
                   <p className="font-black text-gray-800 text-lg leading-snug group-hover:text-emerald-700 transition-colors">{item.text}</p>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </div>
      
      {/* Required CSS for the scan animation */}
      <style>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
};

export default OEMOnboarding;
