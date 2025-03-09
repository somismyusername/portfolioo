
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSummary = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={contentRef} 
            className="opacity-0"
          >
            <h2 className="section-heading">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate full-stack developer with a focus on creating beautiful, 
              functional user experiences. With over 5 years of experience in web development,
              I combine technical expertise with creative problem-solving.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              My approach centers on understanding user needs and business goals to
              build solutions that not only look great but also deliver results.
              I'm constantly learning and adapting to new technologies.
            </p>
            <Link 
              to="/about" 
              className="group inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
            >
              Learn more about my journey
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div 
            ref={imageRef}
            className="opacity-0"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-100 rounded-xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop" 
                alt="Professional portrait" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
