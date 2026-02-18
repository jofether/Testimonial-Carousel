import React, { useState } from 'react';

function StarIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO, InnovateTech",
      company: "InnovateTech",
      text: "This product completely transformed how we manage our projects. The intuitive interface meant our team was productive from day one. We've seen a 40% improvement in our delivery speed.",
      rating: 5,
      avatar: "SC",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Lead Developer, CloudStack",
      company: "CloudStack",
      text: "The API documentation is phenomenal. Crystal clear examples, comprehensive guides, and the support team responds within hours. This is how software should be documented.",
      rating: 5,
      avatar: "MJ",
      gradient: "from-emerald-400 to-green-600"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Design Director, Creative Studio",
      company: "Creative Studio",
      text: "The design system is absolutely gorgeous. Every component is thoughtfully crafted, accessibility is baked in, and it scales beautifully. It's been a game-changer for our design-to-development workflow.",
      rating: 5,
      avatar: "ER",
      gradient: "from-purple-400 to-pink-600"
    },
    {
      id: 4,
      name: "David Patel",
      role: "Product Manager, DataViz Corp",
      company: "DataViz Corp",
      text: "ROI was immediate. Within the first week, we recovered costs. Within a month, we were operating at double the efficiency. The automation features alone are worth every penny.",
      rating: 5,
      avatar: "DP",
      gradient: "from-orange-400 to-red-600"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "CTO, SecureNet Solutions",
      company: "SecureNet Solutions",
      text: "Security and reliability are paramount for us. This platform exceeded our expectations with enterprise-grade features, flawless uptime, and they take compliance seriously. Highly recommended.",
      rating: 5,
      avatar: "LT",
      gradient: "from-indigo-400 to-blue-600"
    },
    {
      id: 6,
      name: "James Wu",
      role: "Founder, StartupHub",
      company: "StartupHub",
      text: "Perfect for growing teams. It scales effortlessly from 10 users to thousands. The pricing is transparent, no surprise fees, and the customer success team genuinely cares about your success.",
      rating: 5,
      avatar: "JW",
      gradient: "from-cyan-400 to-blue-600"
    }
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* HEADER */}
      <header className="pt-8 pb-16 text-center">
        <div className="mb-4">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
            <p className="text-blue-300 text-sm font-semibold tracking-wide">TRUSTED BY INDUSTRY LEADERS</p>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
          Loved by Teams Worldwide
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Join over 5,000 companies that trust us to power their most critical operations.
        </p>
      </header>

      {/* CAROUSEL */}
      <div className="px-4 pb-20 max-w-4xl mx-auto">
        <div className="relative">
          {/* CAROUSEL CARD */}
          <div className="overflow-hidden">
            <div
              className="transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* SLIDES */}
              <div className="flex">
                {testimonials.map((t) => (
                  <div key={t.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 border border-slate-700/50 rounded-3xl p-10 md:p-12 backdrop-blur-sm hover:border-slate-600/80 transition-all duration-300">
                      {/* STARS */}
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <span key={i} className="text-amber-400">
                            <StarIcon />
                          </span>
                        ))}
                      </div>

                      {/* QUOTE */}
                      <p className="text-lg md:text-xl text-slate-100 leading-relaxed mb-8 font-light">
                        "{t.text}"
                      </p>

                      {/* DIVIDER */}
                      <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>

                      {/* AUTHOR INFO */}
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center`}>
                          <span className="text-white font-bold text-sm">{t.avatar}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-lg">{t.name}</h3>
                          <p className="text-slate-400 text-sm">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PREV BUTTON */}
          <button
            onClick={prevSlide}
            className="absolute -left-8 md:-left-16 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-xl font-bold"
            aria-label="Previous testimonial"
          >
            &#10094;
          </button>

          {/* NEXT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute -right-8 md:-right-16 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-xl font-bold"
            aria-label="Next testimonial"
          >
            &#10095;
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-10 gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400/50 ${
                currentIndex === idx
                  ? 'bg-blue-500 w-8 h-2.5'
                  : 'bg-slate-600 hover:bg-slate-500 w-2.5 h-2.5'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* COUNTER */}
        <div className="text-center mt-6 text-slate-400 text-sm">
          {currentIndex + 1} / {testimonials.length}
        </div>
      </div>

      {/* STATS SECTION */}
      <section className="py-16 border-t border-slate-700/50 mt-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">5,000+</p>
              <p className="text-slate-400">Active Companies</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">99.99%</p>
              <p className="text-slate-400">Uptime Guarantee</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">24/7</p>
              <p className="text-slate-400">Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-slate-700/50 text-center text-slate-400 text-sm">
        <p>© 2024 Testimonial Platform. Trusted by the world's best teams.</p>
      </footer>
    </div>
  );
}

export default App;
