import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container mx-auto px-4 md:px-6 text-left">
        <p className="greeting text-xl md:text-2xl mb-4">
          <span className="typewriter">Hi, I'm Somashekhar! 👋</span>
        </p>

        <h1 className="hero-title text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-normal md:leading-relaxed lg:leading-loose">
          A <span className="highlight">Generalist</span>{' '}
          <span className="secondary">by trade,</span>{' '}
          <span className="highlight">problem-solver</span>{' '}
          <span className="secondary">by nature:</span>{' '}<br />
          <span className="highlight">Crafting</span>,{' '}
          <span className="secondary">experiences that make a</span>{' '}
          <span className="highlight">difference</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
