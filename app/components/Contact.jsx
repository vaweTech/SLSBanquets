


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
//             href="https://wa.me/917672024124?text=Hello%20SLS%20Banquets%2C%20I%20would%20like%20to%20know%20more%20about%20your%20function%20hall."
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

//         {/* Google Maps Embed */}
//         <div>
//           <iframe
//             className="w-full h-72 rounded-lg shadow-md"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.436532917464!2d78.48667111535026!3d17.385044688070166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978a6412345%3A0xabcdef123456789!2sSLS%20Banquets!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
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
    <section id="contact" className="py-16 px-6 container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Contact Us
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <MapPinIcon className="w-6 h-6 text-indigo-600 mt-1" />
            <p className="text-gray-700">
              SLS Banquets, Celebration Street, Kandrika, Andhra Pradesh, India
            </p>
          </div>
          <div className="flex items-start gap-3">
            <PhoneIcon className="w-6 h-6 text-indigo-600 mt-1" />
            <p className="text-gray-700">+91 7672024124</p>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917672024124?text=Hello%20SLS%20Banquets"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
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
            className="w-full h-72 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.436532917464!2d78.48667111535026!3d17.385044688070166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978a6412345%3A0xabcdef123456789!2sSLS%20Banquets!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
