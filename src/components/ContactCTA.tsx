
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const ContactCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Have a project in mind?
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-xl mx-auto">
            Let's collaborate to bring your vision to life. I'm always open to discussing new projects and opportunities.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex h-14 items-center justify-center rounded-md bg-white text-primary px-10 text-base font-medium transition-colors hover:bg-primary-foreground/90 hover:text-primary/90"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
