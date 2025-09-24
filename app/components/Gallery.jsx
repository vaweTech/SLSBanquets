//-----------Without SEO-----------

// "use client";
// import { useState } from "react";

// export default function Gallery() {
//   const [showAll, setShowAll] = useState(false);

//   const images = [
//     { src: "/heroimg1.jpg", alt: "Function Hall" },
//     { src: "/galleryimg2.jpg", alt: "Event Setup" },
//     { src: "/galleryimg3.jpg", alt: "Stage Decoration" },
//     { src: "/heroimg2.jpg", alt: "Lighting Decoration" },
//     { src: "/galleryimg1.jpg", alt: "Wedding Stage" },
//     { src: "/galleryimg4.jpg", alt: "Reception Setup" },
//     { src: "/heroimg1.jpg", alt: "Seating Arrangement" },
//     { src: "/galleryimg5.jpg", alt: "Banquet Setup" },
//     { src: "/heroimg2.jpg", alt: "Cultural Event" },
//     { src: "/galleryimg4.jpg", alt: "Party Hall" },
//   ];

//   // Show first 4 images or all if showAll = true
//   const visibleImages = showAll ? images : images.slice(0, 4);

//   return (
//     <section id="gallery" className="py-20 px-6 bg-gray-100">
//       {/* Section Header */}
//       <div className="text-center mb-10">
//         <h2 className="text-4xl font-extrabold text-gray-800">Gallery</h2>
//         <p className="text-gray-600 mt-2">A glimpse of our elegant function hall and events</p>
//         <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mt-4 rounded-full"></div>
//       </div>

//       {/* Image Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {visibleImages.map((img, index) => (
//           <div
//             key={index}
//             className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//           >
//             <img
//               src={img.src}
//               alt={img.alt}
//               className="w-full h-64 object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* View More / View Less Button */}
//       <div className="text-center mt-10">
//         <button
//           onClick={() => setShowAll(!showAll)}
//           className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
//         >
//           {showAll ? "View Less" : "View More"}
//         </button>
//       </div>
//     </section>
//   );
// }



//-------------With SEO-----------------


// "use client";
// import { useState } from "react";

// export default function Gallery() {
//   const [showAll, setShowAll] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const images = [
//     { src: "/heroimg1.jpg", alt: "Banquet Hall in Kandrika Vijayawada" },
//     { src: "/galleryimg2.jpg", alt: "Wedding and Reception Stage Decoration" },
//     { src: "/galleryimg3.jpg", alt: "Marriage Hall Lighting and Floral Setup" },
//     { src: "/heroimg2.jpg", alt: "Birthday Party Hall with Elegant Lighting" },
//     { src: "/galleryimg1.jpg", alt: "South Indian Wedding Stage at SLS Banquets" },
//     { src: "/galleryimg4.jpg", alt: "Reception Hall Seating Arrangement" },
//     { src: "/heroimg1.jpg", alt: "Function Hall Setup for Private Events" },
//     { src: "/galleryimg5.jpg", alt: "Cultural Event Venue in Vijayawada" },
//     { src: "/heroimg2.jpg", alt: "Corporate Event and Party Hall Setup" },
//     { src: "/galleryimg4.jpg", alt: "Banquet Hall for Family Gatherings" },
//   ];

//   // Show first 4 images or all if showAll = true
//   const visibleImages = showAll ? images : images.slice(0, 4);

//   return (
//     <section id="gallery" className="py-20 px-6 bg-gradient-to-b from-white via-amber-50 to-white">
//       {/* Section Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
//           Banquet Hall <span className="text-amber-600">Gallery</span>
//         </h2>
//         <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
//           Explore our <strong>marriage hall in Kandrika, Vijayawada</strong> featuring elegant 
//           setups for weddings, receptions, birthday parties, cultural programs, and private events.
//         </p>
//         <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mt-5 rounded-full"></div>
//       </div>

//       {/* Image Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {visibleImages.map((img, index) => (
//           <div
//             key={index}
//             className="overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group cursor-pointer"
//             onClick={() => setSelectedImage(img)}
//           >
//             <img
//               src={img.src}
//               alt={img.alt}
//               className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//               loading="lazy"
//             />
//           </div>
//         ))}
//       </div>

//       {/* View More / View Less Button */}
//       <div className="text-center mt-12">
//         <button
//           onClick={() => setShowAll(!showAll)}
//           className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold shadow-lg hover:shadow-amber-400/50 transform hover:scale-110 transition-all duration-500"
//         >
//           {showAll ? "View Less" : "View More"}
//         </button>
//       </div>

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="relative max-w-4xl w-full">
//             <img
//               src={selectedImage.src}
//               alt={selectedImage.alt}
//               className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
//             />
//             <button
//               className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-amber-400 transition"
//               onClick={() => setSelectedImage(null)}
//             >
//               ×
//             </button>
//             <p className="text-center text-white mt-4">{selectedImage.alt}</p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }



//--------------------images will display more -------------------------


"use client";
import { useState, useEffect } from "react";

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(4); // default for mobile

  const images = [
    { src: "/heroimg1.jpg", alt: "Banquet Hall in Kandrika Vijayawada" },
    { src: "/galleryimg2.jpg", alt: "Wedding and Reception Stage Decoration" },
    { src: "/galleryimg3.jpg", alt: "Marriage Hall Lighting and Floral Setup" },
    { src: "/heroimg2.jpg", alt: "Birthday Party Hall with Elegant Lighting" },
    { src: "/galleryimg1.jpg", alt: "South Indian Wedding Stage at SLS Banquets" },
    { src: "/galleryimg4.jpg", alt: "Reception Hall Seating Arrangement" },
    { src: "/heroimg1.jpg", alt: "Function Hall Setup for Private Events" },
    { src: "/galleryimg5.jpg", alt: "Cultural Event Venue in Vijayawada" },
    { src: "/heroimg2.jpg", alt: "Corporate Event and Party Hall Setup" },
    { src: "/galleryimg4.jpg", alt: "Banquet Hall for Family Gatherings" },
  ];

  // Detect screen size & set default items
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth >= 768) {
        setItemsToShow(6); // tablet and up
      } else {
        setItemsToShow(4); // mobile
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const visibleImages = showAll ? images : images.slice(0, itemsToShow);

  return (
    <section id="gallery" className="py-20 px-6 bg-gradient-to-b from-white via-amber-50 to-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Banquet Hall <span className="text-amber-600">Gallery</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore our <strong>marriage hall in Kandrika, Vijayawada</strong> featuring elegant 
          setups for weddings, receptions, birthday parties, cultural programs, and private events.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mt-5 rounded-full"></div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {visibleImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* View More / View Less Button (only if needed) */}
      {images.length > itemsToShow && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold shadow-lg hover:shadow-amber-400/50 transform hover:scale-110 transition-all duration-500"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-amber-400 transition"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <p className="text-center text-white mt-4">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
