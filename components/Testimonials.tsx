import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!TESTIMONIALS.length) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm">
            Client Stories
          </h4>
          <h2 className="text-4xl font-black text-gray-900">
            What Our Clients Say
          </h2>
        </div>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto h-96">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className={`absolute inset-0 transition-all duration-1000 transform ${
                idx === currentIndex
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="bg-gray-50 rounded-[3rem] p-10 md:p-16 relative shadow-sm border border-gray-100">
                <Quote className="absolute top-10 left-10 text-orange-200 w-20 h-20 opacity-50" />

                <div className="relative z-10 text-center space-y-8">
                  <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed font-medium">
                    “{t.quote}”
                  </p>

                  <div className="flex flex-col items-center space-y-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                    />
                    <div>
                      <h5 className="text-gray-900 font-black text-lg">
                        {t.name}
                      </h5>
                      <p className="text-gray-500 font-semibold">
                        {t.company} • {t.industry}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-10 bg-orange-500'
                  : 'w-3 bg-gray-200'
              }`}
              aria-label={`Show testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
