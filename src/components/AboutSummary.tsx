import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import profileimage from '/Users/macbookpro/Desktop/port/Portfolio2/portfolio-cursor/image/profileimage.jpg';

const AboutSummary = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="[animation-fill-mode:both] animate-fade-up">
            <h2 className="section-heading">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate UIUX Designer with a focus on creating beautiful, 
              functional Visual Interfaces with over 2 years of experience in web design,
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
          
          <div className="[animation-fill-mode:both] animate-fade-up delay-100">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-100 rounded-xl -z-10"></div>
              <img 
                src="/image/profileimage.jpg"
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
