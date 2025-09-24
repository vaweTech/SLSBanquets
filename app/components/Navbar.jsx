

//-------apply the colors of pastels------------------------

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-green-100 via-gray-50 to-yellow-100 shadow-md z-50">
//       <div className="container mx-auto flex items-center justify-between py-3 px-6">
        
//         {/* Logo + Name */}
//         <Link href="/" className="flex items-center space-x-2">
//           <Image
//             src="/logo1.png"   // ✅ Make sure your logo is inside public/logo1.png
//             alt="SLS Banquets Logo"
//             width={40}
//             height={40}
//             className="rounded"
//           />
//           <span className="text-xl font-bold text-gray-700">SLS Banquets</span>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 font-medium">
//           <li><a href="#home" className="text-gray-700 hover:text-green-600">Home</a></li>
//           <li><a href="#about" className="text-gray-700 hover:text-green-600">About</a></li>
//           <li><a href="#services" className="text-gray-700 hover:text-green-600">Services</a></li>
//           <li><a href="#facilities" className="text-gray-700 hover:text-green-600">Facilities</a></li>
//           <li><a href="#gallery" className="text-gray-700 hover:text-green-600">Gallery</a></li>
//           <li><a href="#contact" className="text-gray-700 hover:text-green-600">Contact</a></li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700 text-2xl focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-gradient-to-r from-green-100 via-gray-50 to-yellow-100 px-6 pb-4">
//           <ul className="space-y-4 font-medium">
//             <li><a href="#about" className="block text-gray-700 hover:text-green-600">About</a></li>
//             <li><a href="#services" className="block text-gray-700 hover:text-green-600">Services</a></li>
//             <li><a href="#facilities" className="block text-gray-700 hover:text-green-600">Facilities</a></li>
//             <li><a href="#gallery" className="block text-gray-700 hover:text-green-600">Gallery</a></li>
//             <li><a href="#contact" className="block text-gray-700 hover:text-green-600">Contact</a></li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

//---------------------add the click button in mobile menu ------------

// "use client";
// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef(null);
//   const buttonRef = useRef(null);

//   // Close menu if clicked outside (but not on the button itself)
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         isOpen &&
//         menuRef.current &&
//         !menuRef.current.contains(event.target) &&
//         buttonRef.current &&
//         !buttonRef.current.contains(event.target)
//       ) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen]);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-green-600 to-teal-400 shadow-md z-50">
//       <div className="container mx-auto flex items-center justify-between py-3 px-6">
        
//         {/* Logo + Name */}
//         <Link href="/" className="flex items-center space-x-2">
//           <Image
//             src="/logo1.png"
//             alt="Mini Function Hall Logo"
//             width={40}
//             height={40}
//             className="rounded"
//           />
//           <span className="text-xl font-bold text-white">SLS Banquets</span>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 text-white font-medium">
//           <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
//           <li><a href="#about" className="hover:text-yellow-300">About</a></li>
//           <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
//           <li><a href="#facilities" className="hover:text-yellow-300">Facilities</a></li>
//           <li><a href="#gallery" className="hover:text-yellow-300">Gallery</a></li>
//           <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           ref={buttonRef}
//           className="md:hidden text-white text-2xl focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)} // toggle open/close
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <div
//           ref={menuRef}
//           className="md:hidden bg-gradient-to-r from-green-600 to-teal-400 px-6 pb-4"
//         >
//           <ul className="space-y-4 text-white font-medium">
//             <li><a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">About</a></li>
//             <li><a href="#services" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Services</a></li>
//             <li><a href="#facilities" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Facilities</a></li>
//             <li><a href="#gallery" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Gallery</a></li>
//             <li><a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Contact</a></li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }


//---------------Final colors ----------------------------


"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#FFD447] to-[#FF6F61] shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        
        {/* Logo + Name */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo7.png"
            alt="Mini Function Hall Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-xl font-bold text-white">SLS Banquets</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li><a href="#home" className="hover:text-[#3498DB]">Home</a></li>
          <li><a href="#about" className="hover:text-[#3498DB]">About</a></li>
          <li><a href="#services" className="hover:text-[#3498DB]">Services</a></li>
          <li><a href="#facilities" className="hover:text-[#3498DB]">Facilities</a></li>
          <li><a href="#gallery" className="hover:text-[#3498DB]">Gallery</a></li>
          <li><a href="#contact" className="hover:text-[#3498DB]">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-gradient-to-r from-[#FFD447] to-[#FF6F61] px-6 pb-4"
        >
          <ul className="space-y-4 text-white font-medium">
            <li><a href="#home" onClick={() => setIsOpen(false)} className="block hover:text-[#3498DB]">Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-[#3498DB]">About</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)} className="block hover:text-[#3498DB]">Services</a></li>
            <li><a href="#facilities" onClick={() => setIsOpen(false)} className="block hover:text-[#3498DB]">Facilities</a></li>
            <li><a href="#gallery" onClick={() => setIsOpen(false)} className="block hover:text-[#3498DB]">Gallery</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-[#3498DB]">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}



