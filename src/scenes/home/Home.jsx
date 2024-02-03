import React from 'react';
import MainCarousel from './MainCarousel';
import ShoppingLIst from "./ShoppingList";
import Subscribe from './Subscribe'

const Home = () => {
  return (
    <div className='home'>
      <MainCarousel/>
      <ShoppingLIst/>
      <Subscribe/>
    </div>
  )
}

export default Home;