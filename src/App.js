import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home';
import NavigationBar from './components/navigation/navigation-bar';
import About from './routes/about/about';
import Portfolio from './routes/portfolio/portfolio';
import Music from './routes/music/music';
import Contact from './routes/contact/contact';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        {/* <Route path='portfolio' element={<Portfolio />} /> */}
        <Route path='music' element={<Music />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
