import { useState, useEffect } from 'react';
import beach from '../assets/pexels-beach.jpg'
import { Link } from 'react-scroll';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    // const [scrolled, setScrolled] = useState(false);


    // useEffect(() => {
    //     const handleScroll = () => {
    //         const offset = window.scrollY;
    //         if (offset > 100) {
    //             setScrolled(true);
    //         } else {
    //             setScrolled(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <header className="w-full relative">
            {/* Hero Section with Image and Name */}
            <div className="relative">
                <img
                    src={beach}
                    className="object-cover w-full h-[500px] brightness-90"
                    alt="Pensacola Beach"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex flex-col items-center justify-end pb-16">
                    <h1 className="font-sans text-6xl text-[#FFFFFF] font-bold mb-4 drop-shadow-lg">Ashley McKellar</h1>
                    <h3 className="text-3xl text-[#FFFFFF] font-medium drop-shadow-lg">Software Developer</h3>
                </div>
            </div>

            {/* Navigation Bar - Fixed on scroll */}
          <nav className="fixed top-0 shadow-lg bg-[#FFFFFF] w-full z-50 transition-all duration-300 py-4">

                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo/Name when scrolled */}
                    <div >
                        <span className="text-lilac font-bold text-xl">AM</span>
                    </div>

                    {/* Mobile menu button */}
                    <div className="block lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className={`fill-lilac h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                            <svg
                                className={`fill-lilac h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex space-x-8">
                        <NavLink to="about" label="About" />
                        <NavLink to="Skills" label="Skills" />
                        <NavLink to="Projects" label="Projects" />
                        <NavLink to="Contact" label="Contact" />
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={`lg:hidden transition-all duration-300 overflow-hidden ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="px-4 py-2 space-y-3 flex flex-col">
                        <MobileNavLink to="about" label="About" onClick={() => setIsOpen(false)} />
                        <MobileNavLink to="Skills" label="Skills" onClick={() => setIsOpen(false)} />
                        <MobileNavLink to="Projects" label="Projects" onClick={() => setIsOpen(false)} />
                        <MobileNavLink to="Contact" label="Contact" onClick={() => setIsOpen(false)} />
                    </div>
                </div>
            </nav>
        </header>
    );
}


function NavLink({ to, label }) {
    return (
        <Link
            activeClass="text-lilac font-medium"
            to={to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            className="text-gray-700 hover:text-lilac transition-colors py-2 px-1 border-b-2 border-transparent hover:border-lilac cursor-pointer"
        >
            {label}
        </Link>
    );
}

// Component for mobile navigation links
function MobileNavLink({ to, label, onClick }) {
    return (
        <Link
            activeClass="bg-lilac/10 text-lilac"
            to={to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            className="py-3 px-4 rounded-md text-gray-700 hover:bg-lilac/10 hover:text-lilac transition-colors cursor-pointer"
            onClick={onClick}
        >
            {label}
        </Link>
    );
}