
import React from 'react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="reveal text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h4 className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs">Our Expertise</h4>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">Mastering the Art of Tendering</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 reveal">
          {SERVICES.map((service, idx) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <div 
                key={idx} 
                className="stagger-item group bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 border border-white hover:border-blue-50 transform hover:-translate-y-3"
                style={{animationDelay: `${idx * 0.15}s`}}
              >
                <div className={`${service.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-10 text-white transform group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                  <IconComponent size={36} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <ul className="space-y-4">
                  {service.description.map((point, pIdx) => (
                    <li key={pIdx} className="text-gray-500 text-sm font-semibold flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
