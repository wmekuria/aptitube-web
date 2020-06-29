import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Teachers from './Teachers'
import Tile from './Tile'
import Footer from './Footer'

function Home() {
  return(
    <React.Fragment>
      <NavBar/>
      <Hero />
      <Tile />
      <Tile />
      <Tile />
      <Footer />
    </React.Fragment>
  )
}

export default Home; 