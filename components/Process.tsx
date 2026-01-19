
import React from 'react';

const steps = [
  { id: '01', title: 'Identify Opportunities', desc: 'Scan and discovery of relevant tenders.', animation: 'animate-slide-left' },
  { id: '02', title: 'Review Requirements', desc: 'Deep dive into eligibility and documentation.', animation: 'animate-scale' },
  { id: '03', title: 'Prepare Documents', desc: 'Drafting, gathering and validation.', animation: 'animate-slide-right' },
  { id: '04', title: 'Quality Assurance', desc: 'Rigorous check against portal rules.', animation: 'animate-slide-left' },
  { id: '05', title: 'Submit Bids', desc: 'Final portal submission management.', animation: 'animate-scale' },
  { id: '06', title: 'Post-Submission', desc: 'Follow-up and negotiation support.', animation: 'animate-slide-right' }
];

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="reveal flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-xl space-y-4">
            <h4 className="text-purple-600 font-black uppercase tracking-[0.3em] text-xs stagger-item" style={{ animationDelay: '0.1s' }}>Our Workflow</h4>
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight stagger-item" style={{ animationDelay: '0.2s' }}>How It Works — <span className="text-blue-600">Step by Step</span></h2>
            </div>
          </div>
          <div className="text-gray-400 font-bold uppercase tracking-widest text-sm border-b-2 border-gray-100 pb-2 stagger-item" style={{ animationDelay: '0.3s' }}>
            Proven process for consistent success
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 relative reveal">
          {/* Decorative Animated Path - Desktop only */}
          <svg className="hidden lg:block absolute top-1/2 left-0 w-full h-1 -z-10 opacity-10" viewBox="0 0 1200 4">
            <line x1="0" y1="2" x2="1200" y2="2" stroke="currentColor" strokeWidth="4" strokeDasharray="12 12" className="text-blue-600" />
          </svg>
          
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white p-10 rounded-[2.5rem] border border-gray-50 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 group overflow-hidden ${step.animation}`}
              style={{ animationDelay: `${0.1 + (idx * 0.15)}s` }}
            >
              {/* Animated Background Pulse */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full transition-transform duration-700 group-hover:scale-[3] opacity-0 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl mb-8 transform group-hover:scale-110 group-hover:-rotate-6 transition-all shadow-xl shadow-blue-200">
                  {step.id}
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-500 font-medium leading-relaxed">
                  {step.desc}
                </p>
                
                {/* Interactive Indicator */}
                <div className="mt-8 h-1 w-0 bg-blue-600 rounded-full transition-all duration-700 group-hover:w-full opacity-0 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
