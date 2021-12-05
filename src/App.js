import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import AllBeers from './components/AllBeers';
import BeerDetail from './components/BeerDetail';
import Home from './components/Home';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/beers/:id" element={<BeerDetail />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
