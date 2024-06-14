import React from 'react';
import '../App.css';
import './Bio.css';
import Pdf from './Pdf.js';

const photo = require=('https://res.cloudinary.com/dxewrioco/image/upload/v1718144287/rod_rfzpg4.jpg')

function Bio() {
  return (
    <>
    <div className='bio-container'>
        <div className='text-container'>
          <div className='about-me'>
            <h1> about me! </h1>
          </div>
            <p>
              I am a passionate believer in the positive impact that ethical and intentional interaction between people and technology can have on society. Specifically, I am passionate about computers and using them to create programs that can be used as tools to help improve people’s lives and our world. I recently graduated from the University of North Carolina at Chapel Hill with a degree in Computer Science, and I also completed minors in Statistics and Analytics, as well as Studio Art with a concentration in Photography.           
            </p>
            <p className='space'> -- </p>
            <p>
              I am an excellence-oriented, methodical, curious, and innovative individual who values respect, integrity, and gratitude. My interests include machine learning, computer vision, software engineering, photography, art, and sports. I am particularly drawn to companies that leverage technology to benefit people, society, and the planet.
            </p>
        </div>
          <img className='profile-photo' src={photo} />
      </div>
      <hr class="solidd" />
      <div className='cv-container'>
        <Pdf />
      </div>
    </>
  )
}

export default Bio;