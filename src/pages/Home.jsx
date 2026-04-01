import React from 'react';

import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import About from '../components/about/About';
import Portfolio from '../components/portfolio/Portfolio';
import Contact from '../components/contact/Contact';

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;