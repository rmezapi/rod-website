import React from 'react';
import '../App.css';
import './Bio.css';
import Pdf from './Pdf.js';

const photo = require=('/images/foto.png')

function Bio() {
  return (
    <>
    <div className='bio-container'>
        <div className='text-container'>
            <h1> About me! </h1>
            <p>
                Lorem ipsum dolor sit amet. Et autem quasi in commodi quibusdam a vitae eius qui omnis culpa. Qui vitae tempore qui quasi quia vel sint minima.
                Eos adipisci quia vel optio corrupti aut aliquam error ut quaerat praesentium ut dolorem ullam non repellendus internos et architecto enim. Ab sequi facere eum eveniet eveniet sed incidunt enim qui iusto rerum?
                Et accusantium placeat sed neque voluptatem sed ducimus corporis cum labore nobis. Id quisquam neque vel dolor amet non saepe totam cum voluptates quam.
            </p>
        </div>
          <img className='profile-photo' src={photo} />
      </div>
      <div className='cv-container'>
        <Pdf />
      </div>
    </>
  )
}

export default Bio;