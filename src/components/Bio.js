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
                I am passionate about computers and using them to create programs that positively improve society and its use of technology. 

                Therefore I decided to major in Computer Science and recently graduated from the University of North Carolina at Chapel Hill. I also graduated with minors in Statistics and Analytics and Studio Art (Photography).

                I consider myself an excellence-oriented, methodical, and ingenious person.

                I am strongly interested in Software Engineering, Machine Learning, Computer Vision, Natural Language Processing, Photography, Art, and Sport.

                I am particularly attracted to companies using technology to improve the world of sports, fitness, and art.

                Some of my core values include respect, integrity, and gratitude.
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