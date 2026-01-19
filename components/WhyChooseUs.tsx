interface WhyChooseUsProps {
  onGetStarted: () => void;
}
import React from "react";
import { CheckCircle2, Zap } from "lucide-react";

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onGetStarted }) => {
  const benefits = [
    "Personalized tender strategies tailored to your niche",
    "End-to-end support from discovery to award",
    "Deep expertise in Government & GeM portal rules",
    "OEM direct access and onboarding help",
    "Proven track record with 6000+ clients",
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="reveal bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] rounded-[3.5rem] p-12 lg:p-24 text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(30,27,75,0.4)]">
          {/* Animated Background Energy Beam */}
          <div
            className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-orange-500/10 to-transparent skew-x-12 animate-shimmer pointer-events-none"
            style={{ animationDuration: "4s" }}
          />

          {/* Abstract background decorative elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px] float-slow" />

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            {/* Left Content Side */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="overflow-hidden">
                  <h4 className="text-orange-400 font-black tracking-[0.4em] uppercase text-xs inline-block animate-reveal-text">
                    Why Choose Us
                  </h4>
                </div>

                <h2
                  className="text-4xl md:text-6xl font-black leading-[1.1] stagger-item animate-slide-left"
                  style={{ animationDelay: "0.2s" }}
                >
                  Fueling Your Business <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
                    Growth Through Tenders
                  </span>
                </h2>

                <p
                  className="text-indigo-100/80 text-xl leading-relaxed font-medium max-w-xl stagger-item animate-slide-left"
                  style={{ animationDelay: "0.4s" }}
                >
                  We combine industry-leading expertise with a passion for
                  client success, ensuring your business stays ahead of the
                  competition in the complex government landscape.
                </p>
              </div>

              <div
                className="flex items-center space-x-6 stagger-item"
                style={{ animationDelay: "0.6s" }}
              >
                <button
                  onClick={onGetStarted}
                  className="group relative bg-white text-indigo-900 px-10 py-5 rounded-full font-black text-lg hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center space-x-3"
                >
                  <span>Start Winning Today⚡️</span>
                </button>

                <div className="hidden sm:block">
                  <p className="text-orange-400 font-black text-2xl">92%</p>
                  <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">
                    Client Success Rate
                  </p>
                </div>
              </div>
            </div>

            {/* Right Benefits Card */}
            <div
              className="animate-perspective"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="bg-white/10 backdrop-blur-2xl p-8 lg:p-12 rounded-[3rem] border border-white/20 shadow-2xl relative group overflow-hidden">
                {/* Internal Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />

                <div className="relative z-10 space-y-8">
                  {benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-5 group/item transition-all duration-500 hover:translate-x-3 stagger-item animate-elastic"
                      style={{ animationDelay: `${1.0 + idx * 0.15}s` }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg group-hover/item:rotate-[360deg] transition-transform duration-700">
                        <CheckCircle2
                          size={20}
                          className="text-white"
                          strokeWidth={3}
                        />
                      </div>
                      <div className="space-y-1 pt-1">
                        <p className="font-black text-lg lg:text-xl text-white group-hover/item:text-orange-300 transition-colors">
                          {benefit}
                        </p>
                        <div className="w-0 h-px bg-orange-400/50 group-hover/item:w-full transition-all duration-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
