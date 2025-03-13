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
    tags: ["User Interface (UI)", "Information Architecture", "Grid System"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "/projects/ecommerce-dashboard",
  },
  {
    id: 2,
    title: "Travel Booking App",
    description: "A seamless booking experience for travelers with real-time availability.",
    tags: ["User Experience (UX)", "Prototype", "Interaction Design"],
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2421&auto=format&fit=crop",
    link: "/projects/travel-booking",
  },
  {
    id: 3,
    title: "Health & Fitness Tracker",
    description: "Personal wellness tracking with data visualization and goal setting.",
    tags: ["Visual Hierarchy", "Usability", "Feedback Loop"],
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2370&auto=format&fit=crop",
    link: "/projects/fitness-tracker",
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "A niche social platform for connecting like-minded professionals.",
    tags: ["Journey Mapping", "Persona", "User Research"],
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2374&auto=format&fit=crop",
    link: "/projects/social-platform",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A responsive portfolio website with smooth animations and modern design.",
    tags: ["Typography", "Color Theory", "Responsive Design"],
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2455&auto=format&fit=crop",
    link: "/projects/portfolio",
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "Educational platform for course creation, student enrollment, and progress tracking.",
    tags: ["Accessibility", "Brand Consistency", "Call to Action (CTA)"],
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
              className="max-w-3xl mx-auto text-center  "
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
              className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto p-4"
            >
              {visibleProjects.slice(0, 5).map((project) => (
                <div
                  key={project.id}
                  className="relative"
                >
                  {/* Title and Description Section */}
                  <div className="mb-4">
                    <h3 className="text-3xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Image Container */}
                  <div className="relative bg-secondary/5 rounded-2xl p-4 min-h-[400px]">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="rounded-xl w-full h-full object-cover shadow-lg"
                    />
                    
                    {/* Floating CTA Button */}
                    <Link 
                      to={project.link} 
                      className="absolute bottom-8 left-8 inline-flex items-center justify-center px-6 py-3 bg-background border border-border rounded-full text-foreground hover:bg-secondary transition-colors"
                    >
                      View project
                    </Link>

                    {/* Version Number */}
                    <span className="absolute top-8 right-8 bg-background/80 backdrop-blur-sm text-sm px-3 py-1 rounded-full">
                      1.00
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-sm text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
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
