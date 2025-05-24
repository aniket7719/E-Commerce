import React from 'react';
import Hero from './Hero';
import TopPicksCarousel from './TopPicksCarousel';
import FeaturesSection from './FeaturesSection';
import ProductGrid from './ProductGrid';
import MarkdownCarousel from './MarkdownCarousel';
import News from './News';
import HighlightsSection from './HighlightsSection';
import Contact from './Contact';
import Newsletter from './Newsletter';

const HomePage = () => {
  return (
    <>
      <Hero />
      <TopPicksCarousel />
      <FeaturesSection />
      <ProductGrid />
      <MarkdownCarousel />
      <News />
      <HighlightsSection />
      <Contact />
      <Newsletter />
    </>
  );
};

export default HomePage;