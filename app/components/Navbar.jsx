

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-700 to-blue-500 shadow-md z-50">
//       <div className="container mx-auto flex items-center justify-between py-3 px-6">
        
//         {/* Logo + Name */}
//         <Link href="/" className="flex items-center space-x-2">
//           <Image
//             src="/logo1.png"   // ✅ make sure your logo is inside public/logo.png
//             alt="Mini Function Hall Logo"
//             width={40}
//             height={40}
//             className="rounded"
//           />
//           <span className="text-xl font-bold text-white">Mini Function Hall</span>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 text-white font-medium">
//           <li><a href="#about" className="hover:text-yellow-300">About</a></li>
//           <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
//           <li><a href="#facilities" className="hover:text-yellow-300">Facilities</a></li>
//           <li><a href="#gallery" className="hover:text-yellow-300">Gallery</a></li>
//           <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white text-2xl focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-gradient-to-r from-indigo-700 to-blue-500 px-6 pb-4">
//           <ul className="space-y-4 text-white font-medium">
//             <li><a href="#about" className="block hover:text-yellow-300">About</a></li>
//             <li><a href="#services" className="block hover:text-yellow-300">Services</a></li>
//             <li><a href="#facilities" className="block hover:text-yellow-300">Facilities</a></li>
//             <li><a href="#gallery" className="block hover:text-yellow-300">Gallery</a></li>
//             <li><a href="#contact" className="block hover:text-yellow-300">Contact</a></li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }




"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-green-600 to-teal-400 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        
        {/* Logo + Name */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo1.png"   // ✅ Make sure your logo is inside public/logo1.png
            alt="Mini Function Hall Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-xl font-bold text-white">SLS Banquets</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-300">About</a></li>
          <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
          <li><a href="#facilities" className="hover:text-yellow-300">Facilities</a></li>
          <li><a href="#gallery" className="hover:text-yellow-300">Gallery</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-green-600 to-teal-400 px-6 pb-4">
          <ul className="space-y-4 text-white font-medium">
            <li><a href="#about" className="block hover:text-yellow-300">About</a></li>
            <li><a href="#services" className="block hover:text-yellow-300">Services</a></li>
            <li><a href="#facilities" className="block hover:text-yellow-300">Facilities</a></li>
            <li><a href="#gallery" className="block hover:text-yellow-300">Gallery</a></li>
            <li><a href="#contact" className="block hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
