
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title) {
      title.classList.add('animate-fade-up');
    }
    
    if (subtitle) {
      setTimeout(() => {
        subtitle.classList.add('animate-fade-up');
      }, 200);
    }
    
    if (cta) {
      setTimeout(() => {
        cta.classList.add('animate-fade-up');
      }, 400);
    }
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 opacity-0"
          >
            Creating digital experiences that <span className="text-blue-600">inspire</span>
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground mb-8 opacity-0"
          >
            Hi, I'm a passionate developer and designer crafting beautiful, functional websites and applications.
          </p>
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row justify-center gap-4 opacity-0"
          >
            <Link to="/projects" className="btn-primary">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
