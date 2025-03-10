import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
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
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading mx-auto">
            A selection of my recent work across web development and design.
            Each project presents unique challenges and creative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card animate-fade-up`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-60 object-cover"
              />
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
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Link 
                  to={project.link} 
                  className="group inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  View Project
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/projects" 
            className="btn-primary animate-fade-up"
            style={{ animationDelay: '500ms' }}
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
