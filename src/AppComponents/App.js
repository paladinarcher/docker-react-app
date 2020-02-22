import React from 'react';
import SectionHeading from './SectionHeading';
import Intro from './Intro';
import Footer from './Footer';
import CardNavigation from './CardNavigation';

function App() {
  return (
    <div className="App">
      {/* <SectionHeading/> commenting this out because react doesn't move the sign in buttons to the left when zooming in the browser*/}
      <Intro/>
      <CardNavigation/>
      <Footer/>
    </div>
  );
}

export default App;
