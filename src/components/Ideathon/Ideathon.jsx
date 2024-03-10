import React from 'react';
// import Home from '../src/Components/Home.jsx';
import About from './Components/About.jsx';
import Event from './Components/Event.jsx';
import Rules from './Components/Rules.jsx';
import Contact from './Components/Contact.jsx';
import VideoBackground from './Components/VideoBackground.jsx';
import './nft.css'
const TradersTussle = () => {
  return (
    <>
    <VideoBackground/>
      {/* <Home /> */}
      <div id='bgmain'>
      <About />
      <br/>
      <Event />
      <br/>
      {/* <Rules /> */}
      <br/>
      <Contact />
      </div>
    </>
  )
}
export default TradersTussle;