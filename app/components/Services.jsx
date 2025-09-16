
// "use client";
// import {
//   GiftIcon,
//   CakeIcon,
//   SparklesIcon,
//   UsersIcon,
//   MusicalNoteIcon,
//   HeartIcon,
//   StarIcon,
// } from "@heroicons/react/24/outline";

// export default function Services() {
//   const services = [
//     {
//       icon: <HeartIcon className="w-10 h-10" />,
//       title: "Weddings & Receptions",
//       description:
//         "Celebrate the most special day of your life with elegance in our spacious hall.",
//       gradient: "from-red-500 via-pink-500 to-rose-500",
//     },
//     {
//       icon: <SparklesIcon className="w-10 h-10" />,
//       title: "Half-Saree & Coming of Age",
//       description:
//         "Perfect venue for traditional half-saree ceremonies and milestone celebrations.",
//       gradient: "from-purple-500 via-pink-500 to-fuchsia-500",
//     },
//     {
//       icon: <GiftIcon className="w-10 h-10" />,
//       title: "Pelli Vididulu / Groom Stay",
//       description:
//         "Spacious and comfortable place for groom’s pre-wedding stay and rituals.",
//       gradient: "from-emerald-400 via-teal-500 to-green-500",
//     },
//     {
//       icon: <CakeIcon className="w-10 h-10" />,
//       title: "Birthday Parties",
//       description:
//         "Host unforgettable birthday celebrations with your loved ones in style.",
//       gradient: "from-yellow-400 via-amber-500 to-orange-500",
//     },
//     {
//       icon: <UsersIcon className="w-10 h-10" />,
//       title: "Private Events",
//       description:
//         "Ideal venue for family gatherings, reunions, anniversaries, and more.",
//       gradient: "from-indigo-500 via-blue-500 to-cyan-500",
//     },
//     {
//       icon: <MusicalNoteIcon className="w-10 h-10" />,
//       title: "Cultural & Community Programs",
//       description:
//         "Host cultural, musical, or community gatherings with excellent seating capacity.",
//       gradient: "from-pink-500 via-fuchsia-500 to-rose-500",
//     },
//     {
//       icon: <StarIcon className="w-10 h-10" />,
//       title: "Other Celebrations",
//       description:
//         "Flexible space for all types of events and celebrations you want to host.",
//       gradient: "from-orange-400 via-red-500 to-rose-600",
//     },
//   ];

//   return (
//     <section
//       id="services"
//       className="relative py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100"
//     >
//       {/* Section Header */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
//           Our{" "}
//           <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
//             Services
//           </span>
//         </h2>
//         <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
//           Our function hall is available for a variety of events and memorable
//           occasions.
//         </p>
//       </div>

//       {/* Services Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className={`relative group p-[2px] bg-gradient-to-tr ${service.gradient} shadow-xl hover:scale-105 hover:rotate-1 transition-all duration-500`}
//             style={{ clipPath: "ellipse(75% 60% at 50% 50%)" }}
//           >
//             {/* Inner Card */}
//             <div
//               className="bg-white p-10 h-full w-full flex flex-col items-center text-center hover:bg-gray-50 transition duration-500"
//               style={{ clipPath: "inherit" }}
//             >
//               {/* Icon */}
//               <div
//                 className={`flex items-center justify-center w-20 h-20 rounded-full mb-6 shadow-lg bg-gradient-to-tr ${service.gradient} text-white group-hover:scale-125 group-hover:animate-bounce transition duration-500`}
//               >
//                 {service.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-bold text-gray-900 mb-3">
//                 {service.title}
//               </h3>

//               {/* Description */}
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }






// "use client";
// import {
//   Gift,
//   Cake,
//   Sparkles,
//   Users,
//   Music,
//   Heart,
//   Star,
// } from "lucide-react";

// export default function Services() {
//   const services = [
//     { icon: <Heart className="w-10 h-10" />, title: "Weddings & Receptions", description: "Celebrate the most special day of your life with elegance in our spacious hall.", gradient: "from-pink-300 to-rose-400" },
//     { icon: <Sparkles className="w-10 h-10" />, title: "Half-Saree & Coming of Age", description: "Perfect venue for traditional half-saree ceremonies and milestone celebrations.", gradient: "from-purple-300 to-fuchsia-400" },
//     { icon: <Gift className="w-10 h-10" />, title: "Pelli Vididulu / Groom Stay", description: "Spacious and comfortable place for groom's pre-wedding stay and rituals.", gradient: "from-emerald-300 to-teal-400" },
//     { icon: <Cake className="w-10 h-10" />, title: "Birthday Parties", description: "Host unforgettable birthday celebrations with your loved ones in style.", gradient: "from-amber-300 to-orange-400" },
//     { icon: <Users className="w-10 h-10" />, title: "Private Events", description: "Ideal venue for family gatherings, reunions, anniversaries, and more.", gradient: "from-blue-300 to-indigo-400" },
//     { icon: <Music className="w-10 h-10" />, title: "Cultural & Community Programs", description: "Host cultural, musical, or community gatherings with excellent seating capacity.", gradient: "from-pink-300 to-rose-400" },
//     { icon: <Star className="w-10 h-10" />, title: "Other Celebrations", description: "Flexible space for all types of events and celebrations you want to host.", gradient: "from-orange-300 to-red-400" },
//   ];

//   return (
//     <section id="services" className="py-24 px-6 bg-gradient-to-b from-white via-blue-50 to-white">
//       {/* Header */}
//       <div className="max-w-6xl mx-auto text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
//           Our{" "}
//           <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//             Services
//           </span>
//         </h2>
//         <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
//           Explore our variety of celebrations and make your events memorable.
//         </p>
//       </div>

//       {/* Unique Card Grid */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="group relative bg-white/50 backdrop-blur-md border border-white/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-transform duration-500 hover:-translate-y-3 hover:scale-105 overflow-hidden"
//             style={{ clipPath: "polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)" }}
//           >
//             {/* Gradient Glow Edge */}
//             <div
//               className={`absolute -inset-1 rounded-3xl bg-gradient-to-tr ${service.gradient} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`}
//             ></div>

//             {/* Icon */}
//             <div className="relative z-10 flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-white/20 shadow-md group-hover:scale-110 transition-transform duration-500">
//               {service.icon}
//             </div>

//             {/* Title */}
//             <h3 className="relative z-10 text-xl md:text-2xl font-bold text-gray-900 mb-2">
//               {service.title}
//             </h3>

//             {/* Description */}
//             <p className="relative z-10 text-gray-700 text-sm md:text-base leading-relaxed">
//               {service.description}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Bottom CTA */}
//       <div className="max-w-6xl mx-auto text-center mt-20">
//         <div className="bg-gradient-to-r from-purple-300 to-pink-300 rounded-3xl p-10 text-white shadow-lg hover:shadow-2xl transition-shadow duration-500">
//           <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Book Your Event?</h3>
//           <p className="text-white/80 mb-6 md:text-lg">
//             Contact us today to check availability and discuss your requirements
//           </p>
//           <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-md">
//             Get Quote
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";
import {
  Gift,
  Cake,
  Sparkles,
  Users,
  Music,
  Heart,
  Star,
} from "lucide-react";

export default function Services() {
  const services = [
    { icon: <Heart className="w-10 h-10" />, title: "Weddings & Receptions", description: "Celebrate the most special day of your life with elegance in our spacious hall.", gradient: "from-pink-300 to-rose-400" },
    { icon: <Sparkles className="w-10 h-10" />, title: "Half-Saree & Coming of Age", description: "Perfect venue for traditional half-saree ceremonies and milestone celebrations.", gradient: "from-purple-300 to-fuchsia-400" },
    { icon: <Gift className="w-10 h-10" />, title: "Pelli Vididulu / Groom Stay", description: "Spacious and comfortable place for groom's pre-wedding stay and rituals.", gradient: "from-emerald-300 to-teal-400" },
    { icon: <Cake className="w-10 h-10" />, title: "Birthday Parties", description: "Host unforgettable birthday celebrations with your loved ones in style.", gradient: "from-amber-300 to-orange-400" },
    { icon: <Users className="w-10 h-10" />, title: "Private Events", description: "Ideal venue for family gatherings, reunions, anniversaries, and more.", gradient: "from-blue-300 to-indigo-400" },
    { icon: <Music className="w-10 h-10" />, title: "Cultural & Community Programs", description: "Host cultural, musical, or community gatherings with excellent seating capacity.", gradient: "from-pink-300 to-rose-400" },
    { icon: <Star className="w-10 h-10" />, title: "Other Celebrations", description: "Flexible space for all types of events and celebrations you want to host.", gradient: "from-orange-300 to-red-400" },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
            Services
          </span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Explore our variety of celebrations and make your events memorable.
        </p>
      </div>

      {/* Unique Card Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-white/50 backdrop-blur-md border border-white/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-transform duration-500 hover:-translate-y-3 hover:scale-105 overflow-hidden"
            style={{ clipPath: "polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)" }}
          >
            {/* Gradient Glow Edge */}
            <div
              className={`absolute -inset-1 rounded-3xl bg-gradient-to-tr ${service.gradient} opacity-20 blur-3xl group-hover:opacity-50 transition-opacity duration-500`}
            ></div>

            {/* Icon with extra pop gradient */}
            <div className="relative z-10 flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-white/40 to-white/10 shadow-md group-hover:scale-110 transition-transform duration-500">
              <div className={`p-3 rounded-full bg-gradient-to-r ${service.gradient} shadow-lg`}>
                {service.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 transition-all duration-500">
              {service.title}
            </h3>

            {/* Description */}
            <p className="relative z-10 text-gray-700 text-sm md:text-base leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-6xl mx-auto text-center mt-20">
        <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 rounded-3xl p-10 text-white shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Book Your Event?</h3>
          <p className="text-white/90 mb-6 md:text-lg">
            Contact us today to check availability and discuss your requirements
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-md">
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
}
