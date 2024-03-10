import React from 'react';
import myvideo from '../assets/bg.mp4'
import './VideoBackground.css'; // Import CSS for styling
// import Typewriter from './Typewriter';

const VideoBackground = () => {
  return (
    <>
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={myvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="blackoverlay"></div>
      <div className="overlay-text">
        {/* <Typewriter text="Trader's Tussle 2.0 "/> */}
        <h1>NFT Rush</h1>
        <button className='button-73'>
        <a href="https://forms.gle/6V9iG7T2Cdtsk8M1A">Register now</a>
      </button>
      </div>
      </>
  );
}

export default VideoBackground;
