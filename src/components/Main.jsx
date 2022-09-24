import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import Hero from '../pages/Hero';
import Category from '../pages/Category';
import Articles from '../pages/Articles';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Main = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      <Category />
      <Articles />
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default Main;