// import React from 'react';

const Summary = () => {
    const technologies = [
        "MERN Stack", "Firebase", "Supabase", "NextJS"
    ];

    const traits = [
        { icon: "🔍", text: "Master Debugger" },
        { icon: "🛠️", text: "Troubleshooter" },
        { icon: "📚", text: "Documentation Expert" },
        { icon: "💻", text: "Freelance Engineer" }
    ];

    return (
        <div id="about" className="min-h-[60vh] flex items-center justify-center px-4 py-20 bg-off-white">
            <div className="w-full max-w-7xl">
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
             
                    <div className="absolute top-0 left-0 w-32 h-32 bg-lilac/10 rounded-full -translate-x-16 -translate-y-16" />
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-lilac/10 rounded-full translate-x-20 translate-y-20" />
                    
                    <div className="relative px-6 py-12 sm:px-12 lg:px-20">
          
                        <div className="space-y-8">
                     
                            <div className="flex flex-col items-center space-y-4">
                                <h1 className="text-4xl sm:text-5xl font-bold text-lilac ">
                                    <span className="inline-block animate-wave">👋</span> Hi, I'm Ashley
                                </h1>
                                <div className="h-1 w-20 bg-lilac rounded-full" />
                            </div>

              
                            <p className="text-xl sm:text-2xl text-dark-grey/90 text-center leading-relaxed">
                                I'm a Pensacola, Florida-based software developer passionate about creating impactful solutions. 
                                As a full-stack developer, I specialize in building robust applications that solve real-world problems.
                            </p>

                      
                            <div className="flex flex-wrap justify-center gap-3">
                                {technologies.map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="px-4 py-2 bg-lilac/10 text-lilac rounded-full text-sm font-medium
                                                 transform hover:scale-110 transition-transform duration-200
                                                 cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                  
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                                {traits.map((trait, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-center justify-center space-x-2 p-3
                                                 bg-gray-50 rounded-lg
                                                 transform hover:-translate-y-1 transition-all duration-200"
                                    >
                                        <span className="text-2xl">{trait.icon}</span>
                                        <span className="text-dark-grey font-medium">{trait.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

         
        </div>
    );
};

export default Summary;