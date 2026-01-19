
import React, { useState, useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';
import { STATS } from '../constants';

const AnimatedCounter = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const countRef = useRef<HTMLHeadingElement>(null);
  
  // Parse the number and the suffix (e.g., "1.8" and "L+")
  const numericPart = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
  const suffix = value.replace(/[0-9.]/g, '');
  const isFloat = value.includes('.');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds animation

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Cubic ease-out for a smoother finish
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
      const currentCount = numericPart * easeOut(progress);
      
      setDisplayValue(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericPart]);

  return (
    <h4 ref={countRef} className="text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-md">
      {isFloat ? displayValue.toFixed(1) : Math.floor(displayValue)}
      {suffix}
    </h4>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat, idx) => {
            const IconComponent = (Icons as any)[stat.icon];
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center space-y-4 group p-6 rounded-3xl transition-all duration-300 hover:bg-white/5"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-orange-500 to-rose-500 rounded-[2rem] text-white mb-2 shadow-lg shadow-orange-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                   <IconComponent size={36} strokeWidth={2.5} />
                </div>
                
                <AnimatedCounter value={stat.value} />
                
                <p className="text-orange-400 font-extrabold uppercase tracking-[0.2em] text-sm">
                  {stat.label}
                </p>
                
                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full opacity-50 group-hover:w-20 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
