// import { useState } from 'react';
// // import locofy from "./locofy.png"
// import Headshot from '../assets/2023Headshot.png';
// import skyline from '../assets/skyline.jpeg';

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <nav className="flex flex-col items-center justify-center flex-wrap p-20">
//              <div className="flex flex-col items-center text-center mb-10">
//                 <h1 className="font-sans text-6xl text-center text-blue-dark mb-4   ">
//                     Ashley McKellar
//                 </h1>

//                 <h3 className="text-3xl text-blue-dark  font-bold ">
//                     Software Developer
//                 </h3>
//             </div>
//             <img
//                 src={skyline}
//                 className="object-cover h-96 w-full rounded-md mb-10"
//             />
//             <div className="block lg:hidden">
//                 <button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
//                 >
//                     <svg
//                         className={`fill-current h-3 w-3 ${
//                             isOpen ? 'hidden' : 'block'
//                         }`}
//                         viewBox="0 0 20 20"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//                     </svg>
//                     <svg
//                         className={`fill-current h-3 w-3 ${
//                             isOpen ? 'block' : 'hidden'
//                         }`}
//                         viewBox="0 0 20 20"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
//                     </svg>
//                 </button>
//             </div>
           
//             <div
//                 className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
//                     isOpen ? 'block' : 'hidden'
//                 }`}
//             >
//                 <div className="text-xl lg:flex-grow space-x-8 space-y-8 text-center">
//                     <a
//                         href="#"
//                         className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
//                     >
//                         About
//                     </a>
//                     <a
//                         href="#"
//                         className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
//                     >
//                         Skills
//                     </a>
//                     <a
//                         href="#"
//                         className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
//                     >
//                         A Few Accomplishments
//                     </a>
//                     <a
//                         href="#"
//                         className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
//                     >
//                         Contact
//                     </a>
//                 </div>
//             </div>
//         </nav>
//     );
// }

import { useState } from 'react';
import Headshot from '../assets/2023Headshot.png';
import skyline from '../assets/skyline.jpeg';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex flex-col items-center justify-center py-20">
                <img
                src={skyline}
                className="object-cover w-full h-auto max-w-7xl  max-h-96 rounded-md mb-10" ></img>
            <div className="flex flex-col items-center text-center mb-10 py-20">
                <h1 className="font-sans text-6xl text-blue-dark mb-6">
                    Ashley McKellar
                </h1>
                <h3 className="text-3xl text-blue-dark font-bold">
                    Software Developer
                </h3>
            </div>
        
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                >
                    <svg
                        className={`fill-current h-3 w-3 ${
                            isOpen ? 'hidden' : 'block'
                        }`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                        className={`fill-current h-3 w-3 ${
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
                 <div className="text-xl lg:flex-grow space-x-8 space-y-8 text-center bg-gray-100 p-6 rounded-md">
                 <a
                    
                        href="#"
                        className="block mt-4 lg:inline-block lg:mt-0 text-black-500 mr-4 border border-gray-300  rounded-md p-5 "
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="block mt-4 lg:inline-block lg:mt-0 text-black-500 mr-4"
                    >
                        Skills
                    </a>
                    <a
                        href="#"
                        className="block mt-4 lg:inline-block lg:mt-0 text-black-500 mr-4"
                    >
                        A Few Accomplishments
                    </a>
                    <a
                        href="#"
                        className="block mt-4 lg:inline-block lg:mt-0 text-black-500 mr-4"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}
