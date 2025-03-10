
import React from 'react';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import AboutSummary from '@/components/AboutSummary';
import ContactCTA from '@/components/ContactCTA';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProjects />
        <AboutSummary />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
