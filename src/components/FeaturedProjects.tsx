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
    title: "Luxury Diamond Business ",
    description: "A modern dashboard for online stores with analytics and inventory management.",
    tags: ["Figma-Web Design", "Product Showcase", "E-Commerce"],
    imageUrl: "https://images.unsplash.com/photo-1579726670131-487ecc8e1e8a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRpYW1vbmQlMjBqZXdlbGxlcnl8ZW58MHx8MHx8fDA%3D",
    link: "/projects/ecommerce-dashboard",
  },
  {
    id: 2,
    title: "SoilSense",
    description: "A seamless booking experience for travelers with real-time availability.",
    tags: ["iOS App", "Startup", "UX"],
    imageUrl: "https://images.unsplash.com/photo-1592997571827-1bcf9cbb6109?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/projects/travel-booking",
  },
  {
    id: 3,
    title: "Graphic Designs",
    description: "Worked as Freelancer",
    tags: ["Illustration", "Adobe Illustrator", "Logo"],
    imageUrl: "https://images.unsplash.com/vector-1742116569534-f546d3c0c594?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
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
