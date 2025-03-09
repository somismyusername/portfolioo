
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

const allProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A modern dashboard for online stores with analytics and inventory management.",
    tags: ["React", "Tailwind CSS", "Node.js"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "/projects/ecommerce-dashboard",
  },
  {
    id: 2,
    title: "Travel Booking App",
    description: "A seamless booking experience for travelers with real-time availability.",
    tags: ["React Native", "Firebase", "UI/UX Design"],
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2421&auto=format&fit=crop",
    link: "/projects/travel-booking",
  },
  {
    id: 3,
    title: "Health & Fitness Tracker",
    description: "Personal wellness tracking with data visualization and goal setting.",
    tags: ["TypeScript", "D3.js", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2370&auto=format&fit=crop",
    link: "/projects/fitness-tracker",
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "A niche social platform for connecting like-minded professionals.",
    tags: ["React", "Redux", "Node.js", "Socket.io"],
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2374&auto=format&fit=crop",
    link: "/projects/social-platform",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A responsive portfolio website with smooth animations and modern design.",
    tags: ["HTML", "CSS", "JavaScript", "Animation"],
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2455&auto=format&fit=crop",
    link: "/projects/portfolio",
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "Educational platform for course creation, student enrollment, and progress tracking.",
    tags: ["React", "Express", "MongoDB", "AWS"],
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2440&auto=format&fit=crop",
    link: "/projects/lms",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Get unique tags
  const allTags = ["All", ...new Set(allProjects.flatMap(project => project.tags))];

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(project => 
        project.tags.includes(activeFilter)
      ));
    }
  }, [activeFilter]);

  useEffect(() => {
    // Stagger the display of filtered projects
    const timer = setTimeout(() => {
      setVisibleProjects(filteredProjects);
    }, 100);
    return () => clearTimeout(timer);
  }, [filteredProjects]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div 
              ref={headerRef}
              className="max-w-3xl mx-auto text-center opacity-0"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                My Projects
              </h1>
              <p className="text-xl text-muted-foreground">
                A showcase of my work across web development, design, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            {/* Filters */}
            <div className="mb-12 flex flex-wrap justify-center gap-2">
              {allTags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFilter(tag)}
                  className={`py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === tag
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div 
              ref={projectsRef}
              className="opacity-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleProjects.map((project) => (
                  <div
                    key={project.id}
                    className="project-card group"
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-60 object-cover"
                      />
                      <div className="absolute inset-0 bg-primary/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link 
                          to={project.link} 
                          className="h-12 px-6 inline-flex items-center justify-center bg-white text-primary rounded-md font-medium"
                        >
                          View Details
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="text-xs font-medium py-1 px-2 bg-secondary rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
