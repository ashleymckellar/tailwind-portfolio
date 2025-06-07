import React, { useState, useEffect } from 'react';
import {
    Code2,
    Layout,
    Terminal,
    Database,
    GanttChart,
    Wrench,
    Globe,
    Palette,
    FileJson,
    Server,
    Play,
    Bug,
    Send,
    Box,
    GitBranch,
    Radio,
    CloudCog,
    KeyRound,
    Chrome,
    Workflow,
    MonitorSmartphone,
    Layers,
    Boxes,
    Table,
    Cpu,
    Library,
    // FramerLogo,
    // LucideReact,
    FileType2,
    Figma,
    FastForward,
    Hammer,
    CloudUpload,
    Bot,
    Infinity,
    PenTool,
    Clock,
    Sparkles
} from 'lucide-react';

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [animateCards, setAnimateCards] = useState(false);
    
    // Trigger animation on mount and category change
    useEffect(() => {
        setAnimateCards(false);
        const timer = setTimeout(() => setAnimateCards(true), 100);
        return () => clearTimeout(timer);
    }, [selectedCategory]);


    const getSkillIcon = (skill) => {
        const iconMap = {
            "HTML/CSS": <Layout strokeWidth={1.5} className="w-6 h-6" />,
            "Vanilla Javascript": <FileType2 strokeWidth={1.5} className="w-6 h-6" />,
            "Typescript": <FileJson strokeWidth={1.5} className="w-6 h-6" />,
            "React": <FileJson strokeWidth={1.5} className="w-6 h-6" />,
            "Figma": <Figma strokeWidth={1.5} className="w-6 h-6" />,
            "Vite": <FastForward strokeWidth={1.5} className="w-6 h-6" />,
            "Jest": <Bug strokeWidth={1.5} className="w-6 h-6" />,
            "Postman": <Send strokeWidth={1.5} className="w-6 h-6" />,
            "Node.js": <Server strokeWidth={1.5} className="w-6 h-6" />,
            "Express.js": <Infinity strokeWidth={1.5} className="w-6 h-6" />,
            "REST APIs": <Chrome strokeWidth={1.5} className="w-6 h-6" />,
            "React Native": <MonitorSmartphone strokeWidth={1.5} className="w-6 h-6" />,
            "Next.js": <MonitorSmartphone strokeWidth={1.5} className="w-6 h-6" />,
            "Bootstrap": <Library strokeWidth={1.5} className="w-6 h-6" />,
            "Tailwind CSS": <PenTool strokeWidth={1.5} className="w-6 h-6" />,
            "MongoDB": <Database strokeWidth={1.5} className="w-6 h-6" />,
            "Mongoose": <Bot strokeWidth={1.5} className="w-6 h-6" />,
            "Firebase": <CloudCog strokeWidth={1.5} className="w-6 h-6" />,
            "Supabase": <Table strokeWidth={1.5} className="w-6 h-6" />,
            "PostgreSQL": <Database strokeWidth={1.5} className="w-6 h-6" />,
            "Bcrypt": <KeyRound strokeWidth={1.5} className="w-6 h-6" />,
            "Git/Github": <GitBranch strokeWidth={1.5} className="w-6 h-6" />,
            "Heroku": <CloudUpload strokeWidth={1.5} className="w-6 h-6" />,
            "Render": <Cpu strokeWidth={1.5} className="w-6 h-6" />,
            "Scrum/Agile methodology": <Clock strokeWidth={1.5} className="w-6 h-6" />
        };
        return iconMap[skill] || <Sparkles strokeWidth={1.5} className="w-6 h-6" />;
    };

    const skillCategories = {
        frontend: {
            icon: "🎨",
            title: "Frontend",
            skills: ["HTML/CSS", "Vanilla Javascript", "Typescript", "React", "React Native", "Next.js"]
        },
        styling: {
            icon: "✨",
            title: "Design",
            skills: ["Tailwind CSS", "Bootstrap", "Figma"]
        },
        backend: {
            icon: "⚙️",
            title: "Backend",
            skills: ["Node.js", "Express.js", "REST APIs", "Bcrypt"]
        },
        database: {
            icon: "🗄️",
            title: "Database",
            skills: ["MongoDB", "Mongoose", "Firebase", "Supabase", "PostgreSQL"]
        },
        tools: {
            icon: "🛠️",
            title: "Tools & Deployment",
            skills: ["Git/Github", "Vite", "Jest", "Postman", "Heroku", "Render"]
        },
        methodology: {
            icon: "📋",
            title: "Methodology",
            skills: ["Scrum/Agile methodology"]
        }
    };

    // Rose and lavender colors
    const colors = {
        rose: {
            light: "#fdf2f8",
            medium: "#fbcfe8",
            deep: "#ec4899"
        },
        lavender: {
            light: "#f5f3ff",
            medium: "#ddd6fe",
            deep: "#8b5cf6"
        }
    };

    const SkillCard = ({ skill, index }) => {
        const delay = `${(index % 10) * 50}ms`;
        
        return (
            <div 
                className={`
                    group relative overflow-hidden rounded-xl 
                    shadow-sm border border-gray-100
                    transform transition-all duration-300 ease-out
                    ${animateCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                    hover:shadow-md hover:-translate-y-1
                `}
                style={{ transitionDelay: delay }}
            >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-lavender-light to-rose-light opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative flex items-center p-4 space-x-4">
                    <div className="flex-shrink-0 bg-white p-2.5 rounded-lg shadow-sm group-hover:shadow group-hover:bg-gradient-to-br from-lavender-deep to-rose-deep transition-all duration-300">
                        <span className="text-gray-600 group-hover:text-white transition-colors duration-300">
                            {getSkillIcon(skill)}
                        </span>
                    </div>
                    <span className="text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors">{skill}</span>
                </div>
            </div>
        );
    };

    const CategoryButton = ({ category, icon, title, isSelected }) => (
        <button
            onClick={() => setSelectedCategory(category)}
            onMouseEnter={() => setSelectedCategory(category)}
            className={`
                px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                flex items-center space-x-2 shadow-sm
                ${isSelected 
                    ? 'bg-gradient-to-r from-lavender-deep to-rose-deep text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'}
            `}
        >
            <span>{icon}</span>
            <span>{title}</span>
        </button>
    );

    return (
        <section className="py-24 bg-gradient-to-b from-lavender-light via-white to-rose-light" id="Skills">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-6 text-lilac bg-gradient-to-r from-lavender-deep to-rose-deep bg-clip-text text-transparent">
                        Skills & Technologies
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        My technical toolkit includes a variety of frontend, backend, and design technologies
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <CategoryButton 
                        category="all" 
                        icon="🌟" 
                        title="All Skills" 
                        isSelected={selectedCategory === 'all'}
                    />
                    {Object.entries(skillCategories).map(([category, { icon, title }]) => (
                        <CategoryButton 
                            key={category}
                            category={category}
                            icon={icon}
                            title={title}
                            isSelected={selectedCategory === category}
                        />
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="relative rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-white/80 border border-gray-100">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-40 h-40 bg-lavender-medium/30 rounded-full -translate-x-20 -translate-y-20" />
                    <div className="absolute bottom-0 right-0 w-60 h-60 bg-rose-medium/30 rounded-full translate-x-20 translate-y-20" />

                    <div className="relative">
                        {selectedCategory === 'all' ? (
                            // Show all skills categorized
                            <div className="space-y-12">
                                {Object.entries(skillCategories).map(([category, { icon, title, skills }]) => (
                                    <div key={category} className="space-y-6">
                                      <h3 className="text-2xl font-bold text-gray-800 flex justify-center sm:justify-start items-center space-x-3 text-center sm:text-left border-b border-gray-200 pb-3">
    <span className="text-2xl">{icon}</span>
    <span>{title}</span>
</h3>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {skills.map((skill, index) => (
                                                <SkillCard key={skill} skill={skill} index={index} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            // Show filtered skills
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {skillCategories[selectedCategory].skills.map((skill, index) => (
                                    <SkillCard key={skill} skill={skill} index={index} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};



export default Skills;