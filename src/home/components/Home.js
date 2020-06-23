import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Teachers from './Teachers'

function Home() {
  return(
    <React.Fragment>
      <NavBar/>
      <Hero />
      <Teachers />
    </React.Fragment>
  )
}

export default Home; 