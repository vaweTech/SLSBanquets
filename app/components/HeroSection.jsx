


"use client";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const images = ["/heroimg.jpg", "/heroimg1.jpg", "/heroimg2.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Image slider interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Particle positions (client-side only)
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const generated = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    }));
    setParticles(generated);
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-white relative overflow-hidden"
    >
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out ${
            index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        ></div>
      ))}

      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: dot.left,
              top: dot.top,
              animationDelay: dot.animationDelay,
              animationDuration: dot.animationDuration,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6 md:px-12">
        {/* Logo / Brand */}
        <div className="mb-8">
          <div className="inline-block p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <div className="text-3xl md:text-4xl font-bold text-amber-300">SLS</div>
          </div>
          <div className="text-xl md:text-2xl font-light text-amber-100 tracking-widest">
            BANQUETS
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight mb-6 leading-tight">
          <span className="block text-white font-thin">Elegant</span>
          <span className="block text-amber-300 font-bold bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
            Celebrations
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Where every occasion becomes an unforgettable experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full text-black font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25"
          >
            <span className="relative z-10">Book Your Event</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <a
            href="#gallery"
            className="group px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg backdrop-blur-sm hover:border-amber-300 hover:text-amber-300 transition-all duration-300 hover:bg-white/5"
          >
            View Gallery
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
          </a>
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-amber-400 scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 right-8 text-white/60 text-sm animate-bounce">
        <div className="flex flex-col items-center">
          <span className="mb-2 transform rotate-90 whitespace-nowrap">Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
