import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container mx-auto px-4 md:px-6 text-left style={{ opacity: 0.5 }}">
        <p className="greeting text-xl md:text-2xl mb-4 style={{ opacity: 0.5 }}">
          <span className="typewriter">Hi, I'm Somashekhar! 👋</span>
        </p>

        <h1 className="hero-title text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-normal md:leading-relaxed lg:leading-loose">
           <span className="highlight">Generalist</span>{' '}
          <span className="secondary">by trade,</span>{' '}
          <span className="highlight">problem-solver</span>{' '}
          <span className="secondary">by nature.</span>{' '}
          <br className="spaced-br" />
          <div className="spaced-wrapper">
          <span className="highlight">Crafting</span>{' '}
          <span className="secondary">experiences that make a</span>{' '}
          <span className="highlight">difference</span>
          </div>
        </h1>
      </div>

      <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#" className="scroll-down">
          <span>Scroll Down <br /> </span>
          <div className="flex flex-col items-center gap-1">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 25 25" 
              fill="none"
              className="animate-bounce"
              style={{animationDelay: "0.4s"}}>
              <path 
                d="M12 4v16m0 0l-6-6m6 6l6-6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"/>
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
