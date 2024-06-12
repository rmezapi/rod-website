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
              I am passionate believer that the interaction between people and technology, through ethical and intentional construction and usage, can have a positive impact on society.  Specifically, I am passionate about computers and using them to create programs that can be used as tools to help improve people’s live and our world. I recently received my degree from the University of North Carolina at Chapel Hill, where I was able to explore my aspirations through my major in Computer Science. I also graduated with a minor in Statistics and Analytics and a minor in Studio Art with a concentration in Photography. 
            </p>
            <p>
              I consider myself an excellence-oriented, methodical, curious, and innovative person, and some of my core values include respect, integrity, and gratitude. I am greatly interested in machine learning, computer vision, software engineering, photography, art, and sports. I am especially attracted to companies using technology with the aim of helping people, our society, and our planet. 
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