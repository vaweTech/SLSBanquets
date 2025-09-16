"use client";
import { useState } from "react";

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);

  const images = [
    { src: "/heroimg1.jpg", alt: "Function Hall" },
    { src: "/galleryimg2.jpg", alt: "Event Setup" },
    { src: "/galleryimg3.jpg", alt: "Stage Decoration" },
    { src: "/heroimg2.jpg", alt: "Lighting Decoration" },
    { src: "/galleryimg1.jpg", alt: "Wedding Stage" },
    { src: "/galleryimg4.jpg", alt: "Reception Setup" },
    { src: "/heroimg1.jpg", alt: "Seating Arrangement" },
    { src: "/galleryimg5.jpg", alt: "Banquet Setup" },
    { src: "/heroimg2.jpg", alt: "Cultural Event" },
    { src: "/galleryimg4.jpg", alt: "Party Hall" },
  ];

  // Show first 4 images or all if showAll = true
  const visibleImages = showAll ? images : images.slice(0, 4);

  return (
    <section id="gallery" className="py-20 px-6 bg-gray-100">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-800">Gallery</h2>
        <p className="text-gray-600 mt-2">A glimpse of our elegant function hall and events</p>
        <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {visibleImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* View More / View Less Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </section>
  );
}
