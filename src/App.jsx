import React from 'react';
import "./index.css";
import ErrorBoundary from './components/ErrorBoundary';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Newsletter from "./components/Newsletter";
import GoogleMap from "./components/GoogleMap";
import HighlightsSection from './components/HighlightsSection';
import FeaturesSection from './components/FeaturesSection';



function App() {
  return (
    <ErrorBoundary>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <ProductGrid />
      <News />
      <HighlightsSection />
      <Contact />
       <Newsletter/>
       {/* <GoogleMap/> */}
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
