import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Solutions from '../components/sections/Solutions';
import About from '../components/sections/About';
import Testimonials from '../components/sections/Testimonials';
import FeatureShowcase from '../components/sections/FeatureShowcase';
import Resources from '../components/sections/Resources';
import Events from '../components/sections/Events';
import Contact from '../components/sections/Contact';
import CTA from '../components/sections/CTA';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Solutions />
      <FeatureShowcase />
      <About />
      <Testimonials />
      <Resources />
      <Events />
      <CTA/>
      <Contact />
    </Layout>
  );
};

export default Home;