import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Teachers from './Teachers'
import Tile from './Tile'

function Home() {
  return(
    <React.Fragment>
      <NavBar/>
      <Hero />
      <Tile />
    </React.Fragment>
  )
}

export default Home; 