import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Explore from './components/Explore';
import Clients from './components/Clients';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Process />
        <Gallery />
        <Explore />
        <Clients />
      </main>
      <Footer />
    </div>
  );
};

export default App;