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

      <div className="cta-groups">
                <a href="https://drive.google.com/file/d/19O6ghESj2SWKDdUfS5obsJCZUxyyByFu/view?usp=sharing" className="cta-buttons">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 13H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 17H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Resume
                </a>
                <a href="https://www.linkedin.com/in/somashekhar-g-b-r" className="cta-buttons">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 9H2V21H6V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </a>
                <a href="mailto:somashekharrgb@gmail.com" className="cta-buttons">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 6L12 13L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </a>
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
