


// "use client";
// import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

// export default function Contact() {
//   return (
//     <section id="contact" className="py-16 px-6 container mx-auto">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
//         Contact Us
//       </h2>

//       <div className="grid md:grid-cols-2 gap-10 items-center">
//         {/* Contact Info */}
//         <div className="space-y-6">
//           <div className="flex items-start gap-3">
//             <MapPinIcon className="w-6 h-6 text-indigo-600 mt-1" />
//             <p className="text-gray-700">
//               SLS Banquets, Celebration Street, Kandrika, Andhra Pradesh, India
//             </p>
//           </div>
//           <div className="flex items-start gap-3">
//             <PhoneIcon className="w-6 h-6 text-indigo-600 mt-1" />
//             <p className="text-gray-700">+91 7672024124</p>
//           </div>

//           {/* WhatsApp Button */}
//           <a
//             href="https://wa.me/917672024124?text=Hello%20SLS%20Banquets"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
//           >
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
//               alt="WhatsApp"
//               className="w-6 h-6"
//             />
//             Chat on WhatsApp
//           </a>
//         </div>

//         {/* Google Maps */}
//         <div>
//           <iframe
//             className="w-full h-72 rounded-lg shadow-md"
//             src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d239.02638686823533!2d80.65289383469883!3d16.55524327783637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1758093246230!5m2!1sen!2sin"
//             loading="lazy"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// }



//---------final colors-------------------------


// "use client";
// import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="relative py-20 px-6 bg-gradient-to-b from-white via-[#FFD447]/10 to-white"
//     >
//       {/* Header */}
//       <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
//         <span className="bg-gradient-to-r from-[#FFD447] via-[#FF6F61] to-[#3498DB] bg-clip-text text-transparent">
//           Contact Us
//         </span>
//       </h2>

//       <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
//         {/* Contact Info */}
//         <div className="space-y-8">
//           {/* Address */}
//           <div className="flex items-start gap-4">
//             <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#FFD447] to-[#FF6F61] shadow-md">
//               <MapPinIcon className="w-6 h-6 text-white" />
//             </div>
//             <p className="text-gray-700 text-lg">
//               SLS Banquets, Celebration Street, Kandrika, Andhra Pradesh, India
//             </p>
//           </div>

//           {/* Phone */}
//           <div className="flex items-start gap-4">
//             <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#3498DB] to-[#FFD447] shadow-md">
//               <PhoneIcon className="w-6 h-6 text-white" />
//             </div>
//             <p className="text-gray-700 text-lg font-medium">+91 7672024124</p>
//           </div>

//           {/* WhatsApp Button */}
//           <a
//             href="https://wa.me/917672024124?text=Hello%20SLS%20Banquets"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-90 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
//           >
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
//               alt="WhatsApp"
//               className="w-6 h-6"
//             />
//             Chat on WhatsApp
//           </a>
//         </div>

//         {/* Google Maps */}
//         <div>
//           <iframe
//             className="w-full h-80 rounded-2xl shadow-lg border-4 border-[#FFD447]/40"
//             src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d239.02638686823533!2d80.65289383469883!3d16.55524327783637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1758093246230!5m2!1sen!2sin"
//             loading="lazy"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";
import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-b from-white via-[#FFD447]/10 to-white overflow-hidden"
    >
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-[#FFD447] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 -right-10 w-72 h-72 bg-[#FF6F61] rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-[#3498DB] rounded-full blur-2xl opacity-70"></div>
      </div>

      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 relative z-10">
        <span className="bg-gradient-to-r from-[#FFD447] via-[#FF6F61] to-[#3498DB] bg-clip-text text-transparent">
          Contact Us
        </span>
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 relative z-10">
        Have questions or want to book your event? We’re here to help 24/7.
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative z-10">
        {/* Contact Info */}
        <div className="space-y-8">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#FFD447] to-[#FF6F61] shadow-md">
              <MapPinIcon className="w-6 h-6 text-white" />
            </div>
            <p className="text-gray-700 text-lg">
              SLS Banquets, Celebration Street, Kandrika, Andhra Pradesh, India
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] shadow-md">
              <PhoneIcon className="w-6 h-6 text-white" />
            </div>
            <a
              href="tel:+917672024124"
              className="text-[#25D366] text-lg font-medium hover:underline transition"
            >
              +91 7672024124
            </a>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917672024124?text=Hello%20SLS%20Banquets"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#128C7E] hover:bg-[#28E070] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-6 h-6"
            />
            Chat on WhatsApp
          </a>
        </div>

        {/* Google Maps */}
        <div>
          <iframe
            className="w-full h-80 rounded-2xl shadow-lg border-4 border-[#FFD447]/40 transition-transform duration-500 hover:scale-[1.02]"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3500.740266422479!2d80.65041767514634!3d16.555262984196933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDMzJzE5LjAiTiA4MMKwMzknMTAuOCJF!5e1!3m2!1sen!2sin!4v1758260726913!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
