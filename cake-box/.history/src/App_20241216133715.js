import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import InstagramGallery from './components/InstagramGallery';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <AboutUs />
      <Testimonials />
      <InstagramGallery />
      <Footer />
    </>
  );
}

export default App;

