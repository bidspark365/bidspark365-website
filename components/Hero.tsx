import React from "react";
import { Play, ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-white"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[65%] h-full bg-blue-50/40 transform skew-x-12 translate-x-1/4 -z-10 rounded-l-[300px] transition-all duration-1000" />

      {/* Animated Orbs */}
      <div className="absolute top-[15%] left-[-5%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -z-10 float-slow" />
      <div className="absolute bottom-[5%] right-[5%] w-[400px] h-[400px] bg-orange-100/40 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute top-[40%] right-[30%] w-32 h-32 bg-purple-100/50 rounded-full blur-[60px] -z-10 float-animation" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-10 reveal active">
            {/* Badge */}
            <div
              className="inline-flex items-center space-x-3 px-6 py-2.5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-gray-900 rounded-full text-xs font-black uppercase tracking-[0.2em] border border-gray-100 stagger-item"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
              <span className="opacity-80">
                India's Leading Tender Consultancy
              </span>
            </div>

            {/* Hero Headline - Fixed for sentence flow */}
            <div className="overflow-hidden">
              <h1
                className="text-4xl md:text-6xl lg:text-[4.8rem] font-black text-gray-900 leading-[1.1] tracking-tight stagger-item"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="inline-block animate-reveal-text mr-3">
                  End-to-End Tender &{" "}
                </span>
                <span
                  className="inline-block animate-reveal-text text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500"
                  style={{ animationDelay: "0.4s" }}
                >
                  Bid Management Solutions
                </span>
              </h1>
            </div>

            <p
              className="text-lg md:text-xl lg:text-2xl text-gray-500 max-w-2xl leading-relaxed stagger-item font-medium border-l-4 border-orange-500 pl-6"
              style={{ animationDelay: "0.6s" }}
            >
              End-to-end tender, GeM portal, and OEM onboarding solutions
              designed to help you work directly with Government departments,
              PSUs, and municipal corporations.
            </p>

            {/* Action Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center gap-6 pt-4 stagger-item"
              style={{ animationDelay: "0.8s" }}
            >
              <button
                type="button"
                onClick={() =>
                  window.open(
                    "https://calendly.com/bidspark365/30min",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                className="w-full sm:w-auto group pulse-btn relative overflow-hidden bg-gray-900 text-white px-10 py-5 rounded-full font-black text-lg transition-all shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 flex items-center justify-center space-x-3"
              >
                <span className="relative z-10">Get Free Consultation</span>
                <ArrowRight
                  size={22}
                  className="relative z-10 group-hover:translate-x-2 transition-transform"
                />
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto group pulse-btn relative overflow-hidden bg-gray-900 text-white px-10 py-5 rounded-full font-black text-lg transition-all shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 flex items-center justify-center space-x-3"
              >
                <span className="relative z-10">Explore Services</span>
                <ArrowRight
                  size={22}
                  className="relative z-10 group-hover:translate-x-2 transition-transform"
                />
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>

            {/* Social Proof */}
            <div
              className="flex items-center space-x-8 pt-6 stagger-item"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="relative transition-transform hover:-translate-y-3 cursor-pointer"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?u=${i + 15}`}
                      className="w-12 h-12 rounded-full border-4 border-white shadow-xl"
                      alt="Client"
                    />
                  </div>
                ))}
              </div>
              <div className="h-10 w-px bg-gray-200 hidden sm:block"></div>
              <div>
                <p className="text-xl font-black text-gray-900 leading-none">
                  6,000+
                </p>
                <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mt-1">
                  Verified Partners
                </p>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative reveal active h-full pt-12 lg:pt-0">
            <div className="relative z-10 rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-[0_80px_150px_-30px_rgba(0,0,0,0.2)] transform hover:rotate-1 transition-transform duration-1000">
              <div className="zoom-animation">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop"
                  alt="Professional Consultation"
                  className="w-full h-[450px] lg:h-[600px] object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-transparent mix-blend-multiply" />
            </div>

            {/* Floating Badges */}
            <div className="absolute top-[5%] -left-8 lg:-left-12 bg-white p-5 lg:p-6 rounded-3xl shadow-2xl z-20 float-animation border border-blue-50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-blue-500 uppercase tracking-widest leading-none mb-1">
                    Compliance
                  </p>
                  <p className="text-base lg:text-lg font-black text-gray-900 leading-none">
                    ISO Certified
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 right-0 lg:-right-8 bg-white/95 backdrop-blur-2xl p-6 lg:p-8 rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl z-20 border border-white/50 float-slow">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="text-orange-600" size={28} />
                </div>
                <div className="text-center">
                  <span className="text-4xl lg:text-5xl font-black text-gray-900 leading-none tracking-tighter block">
                    92.4%
                  </span>
                  <span className="text-orange-500 font-black text-[10px] tracking-[0.3em] uppercase mt-2 block">
                    Tender Win Rate
                  </span>
                </div>
              </div>
            </div>

            {/* Particle Grid */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 -z-10 grid grid-cols-6 gap-3 opacity-15">
              {[...Array(18)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${i % 3 === 0 ? "bg-orange-500" : "bg-blue-600"}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
