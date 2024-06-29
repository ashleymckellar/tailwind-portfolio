import { useState, useRef } from 'react';
// import Headshot from '../assets/2023Headshot.png';
import skyline from '../assets/skyline.jpeg';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const activeSection = useRef(null);

    return (
        <nav className="flex flex-col justify-center ">
            <img
                src={skyline}
                className="object-cover w-full h-auto max-w-screen-2xl  max-h-96 rounded-md mb-10"
            ></img>

            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                >
                    <svg
                        className={`fill-current h-6 w-6 fill-lilac  ${
                            isOpen ? 'hidden' : 'block'
                        }`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                        className={`fill-current h-6 w-6 fill-lilac  ${
                            isOpen ? 'block' : 'hidden'
                        }`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>
            <div
                className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
                    isOpen ? 'block' : 'hidden'
                }`}
            >
                <div className="text-xl lg:flex-grow flex flex-col lg:flex-row items-center  space-y-4 lg:space-y-0 lg:space-x-8 text-center border-off-white p-6 rounded-md w-full">
                    <a
                        href="#"
                        className="block w-full mt-4 lg:inline-block lg:mt-0  mr-4 text-off-white border border-off-white bg-lilac  rounded-md p-5 "
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="block w-full mt-4 lg:inline-block lg:mt-0 text-black-500 mr-4 text-off-white border border-off-white bg-lilac  rounded-md p-5"
                    >
                        Skills
                    </a>
                    <a
                        href="#"
                        className="block w-full mt-4 lg:inline-block lg:mt-0 text-black-500 mr-4 text-off-white border border-off-white bg-lilac  rounded-md p-5"
                    >
                        A Few Accomplishments
                    </a>
                    <a
                        href="#"
                        className="block w-full mt-4 lg:inline-block lg:mt-0 text-black-500 mr-4 text-off-white border border-off-white bg-lilac  rounded-md p-5"
                    >
                        Contact
                    </a>
                </div>
               
            </div>
            <div className="flex flex-col items-center text-center mb-10 py-20">
                    <h1 className="font-sans text-6xl  text-lilac  mb-6">
                        Ashley McKellar
                    </h1>
                    <h3 className="text-3xl text-dark-grey font-bold">
                        Software Developer
                    </h3>
                </div>
        </nav>
    );
}
