
import React from 'react';
import { Target, ShieldCheck, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Varied Image Animations */}
          <div className="grid grid-cols-2 gap-6 reveal">
            <div className="space-y-6">
               <img 
                 src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&w=600&auto=format&fit=crop" 
                 className="rounded-[3rem] shadow-2xl w-full h-72 object-cover animate-slide-left transition-transform duration-700 hover:scale-105 border-4 border-white" 
                 alt="Consulting" 
                 style={{ animationDelay: '0.2s' }}
               />
               <img 
                 src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop" 
                 className="rounded-[3rem] shadow-2xl w-full h-56 object-cover animate-rotate-up transition-transform duration-700 hover:scale-105 border-4 border-white" 
                 alt="Government Building" 
                 style={{ animationDelay: '0.6s' }}
               />
            </div>
            <div className="space-y-6 pt-16">
               <img 
                 src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop" 
                 className="rounded-[3rem] shadow-2xl w-full h-56 object-cover animate-rotate-down transition-transform duration-700 hover:scale-105 border-4 border-white" 
                 alt="Team Work" 
                 style={{ animationDelay: '0.4s' }}
               />
               <img 
                 src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop" 
                 className="rounded-[3rem] shadow-2xl w-full h-72 object-cover animate-slide-right transition-transform duration-700 hover:scale-105 border-4 border-white" 
                 alt="Analysis" 
                 style={{ animationDelay: '0.8s' }}
               />
            </div>
          </div>

          {/* Advanced Text Entry */}
          <div className="space-y-12 reveal">
            <div className="space-y-8">
              <div className="overflow-hidden">
                <h4 className="text-orange-600 font-black tracking-[0.5em] uppercase text-xs inline-block animate-reveal-text" style={{ animationDelay: '0.2s' }}>
                  About BidSpark365
                </h4>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] stagger-item animate-elastic" style={{ animationDelay: '0.4s' }}>
                  Empowering Businesses <br /> 
                  <span className="text-blue-600 inline-block">to Navigate Bidding</span>
                </h2>
                <div className="w-32 h-2 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full stagger-item" style={{ animationDelay: '0.6s' }}></div>
              </div>

              <p className="text-gray-500 text-xl leading-relaxed font-medium stagger-item animate-slide-right" style={{ animationDelay: '0.8s' }}>
                BidSpark365 is a trusted partner helping businesses navigate government tendering and participate with confidence. We provide end-to-end support—from registration and documentation to submission and post-submission follow-up.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                { 
                  icon: <Target className="text-blue-600" size={28} />, 
                  title: 'Our Mission', 
                  desc: 'To empower SMEs by simplifying the complex world of government procurement.',
                  color: 'bg-blue-50',
                  anim: 'animate-slide-left'
                },
                { 
                  icon: <Award className="text-purple-600" size={28} />, 
                  title: 'Operational Excellence', 
                  desc: 'Maintaining the highest standards of bid preparation and compliance management.',
                  color: 'bg-purple-50',
                  anim: 'animate-scale'
                },
                { 
                  icon: <ShieldCheck className="text-emerald-600" size={28} />, 
                  title: 'Trusted Partner', 
                  desc: 'A track record of thousands of successful submissions and happy clients.',
                  color: 'bg-emerald-50',
                  anim: 'animate-slide-right'
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center space-x-8 group p-6 rounded-[2rem] hover:bg-gray-50 transition-all duration-500 stagger-item ${item.anim}`} 
                  style={{ animationDelay: `${1.0 + (idx * 0.2)}s` }}
                >
                  <div className={`${item.color} p-5 rounded-[1.5rem] shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-black text-gray-900 text-xl mb-1 group-hover:text-blue-600 transition-colors">{item.title}</h5>
                    <p className="text-gray-500 font-semibold text-base leading-snug max-w-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
