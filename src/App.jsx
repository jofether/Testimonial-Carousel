import React, { useState } from 'react';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { id: 1, name: "Alice Johnson", role: "CEO, TechCorp", text: "This product revolutionized our workflow entirely.", color: "bg-blue-50" },
    { id: 2, name: "Bob Smith", role: "Developer", text: "Cleanest API documentation I have ever seen.", color: "bg-green-50" },
    { id: 3, name: "Charlie Davis", role: "Designer", text: "The UI components are visually stunning.", color: "bg-purple-50" },
    { id: 4, name: "Dana Lee", role: "Product Manager", text: "Incredible ROI within the first month.", color: "bg-orange-50" },
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 font-sans">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900">What our clients say</h2>
        <p className="text-gray-500 mt-2">Trusted by over 1000 companies worldwide.</p>
      </div>

      <div className="relative w-full max-w-lg">
        
        {/* CAROUSEL WINDOW */}
        {/* FUTURE BUG: Remove 'overflow-hidden' to see all slides stacked horizontally spilling out */}
        <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-100">
          
          {/* SLIDING TRACK */}
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.id} className={`w-full flex-shrink-0 p-12 ${t.color} text-center`}>
                <div className="text-4xl text-gray-300 mb-4">"</div>
                <p className="text-xl font-medium text-gray-800 mb-6 leading-relaxed">{t.text}</p>
                <h3 className="font-bold text-gray-900">{t.name}</h3>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            ))}
          </div>

        </div>

        {/* CONTROLS */}
        <button 
          onClick={prevSlide}
          className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 border border-gray-100"
        >
          ←
        </button>
        <button 
          onClick={nextSlide}
          className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 border border-gray-100"
        >
          →
        </button>

        {/* DOTS */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2 w-2 rounded-full transition-all ${currentIndex === idx ? 'bg-gray-800 w-4' : 'bg-gray-300'}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
