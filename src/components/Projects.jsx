import { useState, useRef, useEffect } from 'react';
import SidhuFarmsimg from '../assets/SidhuFarmsimg.png';
import DJBentley from '../assets/djbentleyv2.png';
import bII from '../assets/BII-new-thumb.png';

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);
    const projectRefs = useRef([]);
    
    // Setup intersection observer for animations on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                    }
                });
            },
            { threshold: 0.2 }
        );
        
        projectRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });
        
        return () => {
            projectRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);
    
    const projects = [
        {
            id: 1,
            title: "Sidhu Farms",
            image: SidhuFarmsimg,
            link: "https://sidhu-farms1.vercel.app/",
            description: "I partnered with another developer and project manager to build the Sidhu Farms static site using React. My key contributions included developing the crops component, which involved implementing conditional rendering and media queries. I also utilized Tailwind CSS to ensure the site was fully responsive across various devices. (Work in progress.)",
            tech: ["React", "Tailwind CSS", "Responsive Design"]
        },
        {
            id: 2,
            title: "DJ Bentley Taylor",
            image: DJBentley,
            link: "https://www.djbentleytaylor.com/",
            description: "I collaborated with three developers to build a new React-based site for DJ Bentley Taylor, where I implemented a MixCloud music player, EmailJS-powered contact form with a React modal, and integrated the MixCloud API for his bio information. I was responsible for deploying the site as a static one via Render.",
            tech: ["React", "MixCloud API", "EmailJS", "Render"]
        },
        {
            id: 3,
            title: "Brain Integration Institute",
            image: bII,
            link: "https://brain-integration-institute.onrender.com/",
            description: "This full-stack web application, built for a client with the MERN stack (MongoDB/Mongoose, Express, React, Node.js), offers robust features like secure authentication with Auth0, file hosting via Cloudinary, and payment integration using Stripe. It includes email push notifications powered by Nodemailer, an admin panel with real-time notifications, user notifications, and a custom timed testing platform. Deployed on Render with a TLS certificate, the app delivers a seamless user experience.",
            tech: ["MongoDB", "Express", "React", "Node.js", "Auth0", "Stripe", "Cloudinary"]
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100" id="Projects">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-lilac mb-6 relative inline-block">
                        A Few Accomplishments
                        {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-lilac opacity-30 rounded"></span> */}
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Explore some of my deployed applications that showcase my skills and expertise in web development
                    </p>
                </div>
                
                <div className="grid gap-10 lg:gap-12">
                    {projects.map((project, index) => (
                        <div 
                            key={project.id}
                            ref={(el) => (projectRefs.current[index] = el)}
                            className="opacity-0 transition-all duration-700 ease-out transform translate-y-8"
                            onMouseEnter={() => setActiveProject(project.id)}
                            onMouseLeave={() => setActiveProject(null)}
                        >
                            <div className={`
                                relative overflow-hidden rounded-xl shadow-lg 
                                bg-gradient-to-br from-white to-gray-50
                                
                                transition-all duration-500 ease-in-out
                                ${activeProject === project.id ? 'scale-[1.02] shadow-xl' : ''}
                            `}>
                                <div className="lg:flex">
                                    {/* Project Image */}
                                    <div className="lg:w-2/5 relative overflow-hidden h-64 lg:h-auto">
                                        <div className="absolute inset-0 bg-lilac/10 z-0"></div>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        />
                                      <div className={`
    absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
    flex items-end p-6 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity
`}>
    <h3 className="text-white text-2xl font-bold hidden sm:block">{project.title}</h3>
</div>

                                    </div>
                                    
                                    {/* Project Content */}
                                    <div className="lg:w-3/5 p-6 lg:p-8">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-4 ">{project.title}</h3>
                                        
                                        <div className="mb-6">
                                            <p className="text-gray-700 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>
                                        
                                        {/* Technology Tags */}
                                        <div className="mb-6 flex flex-wrap gap-2">
                                            {project.tech.map((tech) => (
                                                <span 
                                                    key={tech} 
                                                    className="px-3 py-1 bg-lilac/10 text-lilac text-sm font-medium rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        {/* Visit Link */}
                                        <div className="mt-4">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center group"
                                            >
                                                <span className="text-lilac font-medium group-hover:underline">Visit Project</span>
                                                <span className="ml-2 text-lilac transition-transform duration-300 group-hover:translate-x-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M7 17l9.2-9.2M17 17V7H7" />
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Add this to your global CSS or component styles
// const globalStyles = `
// @keyframes fadeIn {
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// .animate-fade-in {
//   animation: fadeIn 0.8s ease-out forwards;
// }
// `;

export default Projects;