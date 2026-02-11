// "use client";

// import { useState } from "react";
// import { FaCode } from "react-icons/fa";

// const Navbar = () => {
//     const [open, setOpen] = useState(false);

//     return (
//         <nav className=" transition-all duration-200 fixed top-0 left-0 w-full z-50 bg-[#0B0E1A]/80 backdrop-blur-md border-b border-white/10">
//             <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//                 {/* Left - Name */}
//                 <div className="flex items-center space-x-2">
//                     <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
//                         <FaCode className="text-xl text-violet-400" />
//                     </div>
//                     <div className="text-xl font-bold text-white">
//                         Rachana
//                     </div>
//                 </div>

//                 {/* Right - Desktop Menu */}
//                 <ul className="tranisition-all duration-200 font-medium hidden md:flex items-center space-x-8 text-gray-100">
//                     {["Home", "About", "Experience", "Skills", "Contact"].map((item) => (
//                         <li
//                             key={item}
//                             className="hover:text-violet-400 transition cursor-pointer"
//                         >
//                             {item}
//                         </li>
//                     ))}
//                 </ul>

//                 {/* Mobile Hamburger */}
//                 <button
//                     onClick={() => setOpen(!open)}
//                     className="md:hidden text-white focus:outline-none"
//                 >
//                     <div className="space-y-1">
//                         <span className="block w-6 h-0.5 bg-white"></span>
//                         <span className="block w-6 h-0.5 bg-white"></span>
//                         <span className="block w-6 h-0.5 bg-white"></span>
//                     </div>
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             {open && (
//                 <div className="md:hidden bg-[#0B0E1A] border-t border-white/10">
//                     <ul className="flex flex-col items-center space-y-6 py-6 text-gray-300">
//                         {["Home", "About", "Experience", "Skills", "Contact"].map((item) => (
//                             <li
//                                 key={item}
//                                 onClick={() => setOpen(false)}
//                                 className="hover:text-violet-400 transition cursor-pointer text-lg"
//                             >
//                                 {item}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;



"use client";

import { useState } from "react";
import { FaCode } from "react-icons/fa";

const sections = ["Home", "About", "Experience", "Skills", "Contact"];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleScroll = (id: string) => {
        const element = document.getElementById(id.toLowerCase());
        if (element) {
            // Smooth scroll and offset for fixed navbar
            const yOffset = -80; // adjust based on navbar height
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
        setOpen(false); // close mobile menu if open
    };

    return (
        <nav className="transition-all duration-200 fixed top-0 left-0 w-full z-50 bg-[#0B0E1A]/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Left - Name */}
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
                        <FaCode className="text-xl text-violet-400" />
                    </div>
                    <div className="text-xl font-bold text-white">Rachana</div>
                </div>

                {/* Right - Desktop Menu */}
                <ul className="transition-all duration-200 font-medium hidden md:flex items-center space-x-8 text-gray-100">
                    {sections.map((item) => (
                        <li
                            key={item}
                            className="hover:text-violet-400 transition cursor-pointer"
                            onClick={() => handleScroll(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white focus:outline-none"
                >
                    <div className="space-y-1">
                        <span className="block w-6 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-[#0B0E1A] border-t border-white/10">
                    <ul className="flex flex-col items-center space-y-6 py-6 text-gray-300">
                        {sections.map((item) => (
                            <li
                                key={item}
                                onClick={() => handleScroll(item)}
                                className="hover:text-violet-400 transition cursor-pointer text-lg"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
