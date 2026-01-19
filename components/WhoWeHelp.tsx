
import React from 'react';
import { Factory, Rocket, Store, Briefcase } from 'lucide-react';

const WhoWeHelp: React.FC = () => {
  const segments = [
    {
      icon: <Factory size={32} />,
      title: 'OEMs & Manufacturers',
      desc: 'Working directly with PSUs and government departments to secure bulk orders.',
      color: 'blue',
      delay: '0.1s'
    },
    {
      icon: <Rocket size={32} />,
      title: 'MSMEs & Startups',
      desc: 'Guidance through compliance and bidding to compete on a level playing field.',
      color: 'orange',
      delay: '0.25s'
    },
    {
      icon: <Store size={32} />,
      title: 'Traders & Service Providers',
      desc: 'Optimizing product and service listings on the GeM portal for maximum visibility.',
      color: 'emerald',
      delay: '0.4s'
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Contractors & Suppliers',
      desc: 'Assistance with technical and financial documentation for civil and industrial projects.',
      color: 'purple',
      delay: '0.55s'
    }
  ];

  return (
    <section id="who-we-help" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-orange-100/50 rounded-full blur-[100px] -z-0 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="reveal text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="overflow-hidden">
            <h4 className="text-orange-600 font-black tracking-[0.5em] uppercase text-xs inline-block animate-reveal-text">
              Our Expertise
            </h4>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight stagger-item">
            Who We Help
          </h2>
          <p className="text-gray-500 text-xl font-medium leading-relaxed stagger-item">
            We provide specialized support across various business models to ensure success in the government procurement ecosystem.
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full stagger-item"></div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 reveal">
          {segments.map((item, idx) => (
            <div 
              key={idx}
              className="stagger-item group bg-white p-10 rounded-[3rem] border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-4"
              style={{ animationDelay: item.delay }}
            >
              {/* Dynamic Icon Container */}
              <div className={`
                w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-all duration-700 shadow-xl relative overflow-hidden
                ${item.color === 'blue' ? 'bg-blue-600 text-white' : ''}
                ${item.color === 'orange' ? 'bg-orange-500 text-white' : ''}
                ${item.color === 'emerald' ? 'bg-emerald-500 text-white' : ''}
                ${item.color === 'purple' ? 'bg-purple-600 text-white' : ''}
                group-hover:scale-110 group-hover:rotate-[15deg]
              `}>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                <span className="relative z-10">{item.icon}</span>
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-4 transition-colors duration-500 group-hover:text-blue-600">
                {item.title}
              </h3>
              
              <p className="text-gray-500 font-semibold leading-relaxed text-base">
                {item.desc}
              </p>

              {/* Bottom Interactive Bar */}
              <div className={`
                mt-8 h-1.5 w-0 rounded-full transition-all duration-700 group-hover:w-full
                ${item.color === 'blue' ? 'bg-blue-600' : ''}
                ${item.color === 'orange' ? 'bg-orange-500' : ''}
                ${item.color === 'emerald' ? 'bg-emerald-500' : ''}
                ${item.color === 'purple' ? 'bg-purple-600' : ''}
              `} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
