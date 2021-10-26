import React from 'react';
import { NavBar } from './components/navbar';
import { Hero } from './components/hero';
import { Carousel } from './components/carousel';
import { Footer } from './components/footer';

const App = () => (
  <div className="container mx-auto m-4">
    <NavBar />
    <Hero />
    <Carousel />
    <Footer />
  </div >
);

export default App;
