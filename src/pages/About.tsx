import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import { Code, Palette, Users } from 'lucide-react';

// Skill data
const skillSets = [
  {
    category: "Development",
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "Next.js", "Express", "MongoDB", "PostgreSQL"]
  },
  {
    category: "Design",
    skills: ["UI/UX Design", "Figma", "Adobe XD", "Responsive Design", "Animation", "Wireframing", "Prototyping"]
  },
  {
    category: "Other",
    skills: ["Git", "REST API", "GraphQL", "Project Management", "Agile", "SEO", "Performance Optimization"]
  }
];

// Experience data
const experiences = [
  {
    title: "UIUX Design Intern",
    company: "American Health Care Academy ",
    period: "Aug 2024 - Feb 2025 ",
    description: "I designed user-centered interfaces in Figma, enhancing the credit card payment gateway and boosting sales by over 20%, while collaborating with cross-functional teams and utilizing ClickUp for project management."
  },
  {
    title: "Full Stack Developer",
    company: "WebSolutions",
    period: "2018 - 2021",
    description: "Developed and maintained multiple client websites and web applications, focusing on responsive design and optimal user experience."
  },
  {
    title: "UI/UX Designer",
    company: "CreativeMinds",
    period: "2016 - 2018",
    description: "Designed user interfaces for web and mobile applications, conducted user research, and created wireframes and prototypes."
  }
];

const About = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

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

    const refs = [headerRef, bioRef, skillsRef, experienceRef];
    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
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
                About Me
              </h1>
              <p className="text-xl text-muted-foreground">
             Versatile UIUX Designer crafting intuitive digital experiences and driving user engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Bio */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-xl -z-10"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-100 rounded-xl -z-10"></div>
                  <img 
                    src="/profileimage.jpg"
                    alt="Professional portrait" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
              
              <div 
                ref={bioRef}
                className=" "
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  My Journey
                </h2>
           <p className="text-lg text-muted-foreground mb-4">
  I'm a passionate UI/UX Designer & Developer with expertise in user-centered design, coding, and AI-driven solutions. I create intuitive digital experiences through web development, user research, and project management.
</p>

<p className="text-lg text-muted-foreground mb-4">
  My fascination with design and technology drives me to bridge these worlds, crafting engaging user experiences. I excel in designing interfaces in Figma and collaborating with teams to solve complex challenges.
</p>

<p className="text-lg text-muted-foreground mb-4">
  I've worked in diverse environments, leading marketing campaigns, managing social media, and developing a user-friendly iOS soil testing app, all while ensuring brand consistency and accessibility.
</p>

<p className="text-lg text-muted-foreground">
  Outside of work, I enjoy playing football, photography, and video making, which refresh and inspire my creativity.
</p>

<p className="text-lg text-muted-foreground">
  I'm eager to connect and explore opportunities to innovate and create impactful digital experiences. Let's collaborate to bring your vision to life!
</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services/Skills */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div 
              ref={skillsRef}
              className="text-center max-w-3xl mx-auto mb-16  "
            >
              <h2 className="section-heading">Skills & Expertise</h2>
              <p className="section-subheading mx-auto">
                My toolkit combines technical skills with creative problem-solving to deliver
                comprehensive solutions tailored to each project's unique needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-xl shadow-sm border border-border/50">
                <div className="bg-blue-100 h-12 w-12 rounded-lg flex items-center justify-center mb-6">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Development</h3>
                <p className="text-muted-foreground mb-6">
                  Building responsive, performant websites and applications with modern technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  {skillSets[0].skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium py-1 px-2 bg-secondary rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border border-border/50">
                <div className="bg-purple-100 h-12 w-12 rounded-lg flex items-center justify-center mb-6">
                  <Palette className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Design</h3>
                <p className="text-muted-foreground mb-6">
                  Creating intuitive user interfaces and engaging user experiences that delight.
                </p>
                <div className="flex flex-wrap gap-2">
                  {skillSets[1].skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium py-1 px-2 bg-secondary rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border border-border/50">
                <div className="bg-green-100 h-12 w-12 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Collaboration</h3>
                <p className="text-muted-foreground mb-6">
                  Working effectively with teams and clients to deliver projects that exceed expectations.
                </p>
                <div className="flex flex-wrap gap-2">
                  {skillSets[2].skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium py-1 px-2 bg-secondary rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div 
              ref={experienceRef}
              className="text-center max-w-3xl mx-auto mb-16 x-0"
            >
              <h2 className="section-heading">Professional Experience</h2>
              <p className="section-subheading mx-auto">
                A timeline of my professional journey and the valuable experience I've gained along the way.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative pl-10 pb-12 last:pb-0"
                >
                  {/* Timeline line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute top-0 left-3 h-full w-px bg-border"></div>
                  )}
                  
                  {/* Timeline dot */}
                  <div className="absolute top-0 left-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <span className="text-sm font-medium text-muted-foreground mb-1 block">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                    <p className="text-muted-foreground">
                      {exp.description}
                    </p>
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

export default About;
