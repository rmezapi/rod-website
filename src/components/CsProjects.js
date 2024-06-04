import React from 'react'
import { Link, redirect, useHref } from 'react-router-dom'
import { Button } from './Button'
import './CsProjects.css'

// temporary placeholder for fotos
const photo = require=('/images/foto.png')
const btn = 'GitHub'
const url = 'https://github.com/rmezapi'

function CsProjects() {
  return (
    <div  className="cs-container">
        <div className='text-container'>
            <h1> Background </h1>
            <p>
                Lorem ipsum dolor sit amet. Et autem quasi in commodi quibusdam a vitae eius qui omnis culpa. Qui vitae tempore qui quasi quia vel sint minima.
                Eos adipisci quia vel optio corrupti aut aliquam error ut quaerat praesentium ut dolorem ullam non repellendus internos et architecto enim. Ab sequi facere eum eveniet eveniet sed incidunt enim qui iusto rerum?
                Et accusantium placeat sed neque voluptatem sed ducimus corporis cum labore nobis. Id quisquam neque vel dolor amet non saepe totam cum voluptates quam.
            </p>
            <div className='btn'>
                <Button children={btn} buttonStyle="btn--outline" onClick={() => window.open(url, '_blank')} />
            </div>
            
        </div>

        <div className='projects-container'> 
            <h1> Projects </h1>
            {/* project 1 */}
            <div className='project'>
                <div className='left'> 
                    <h3> Project Name </h3>
                    <img className='image' src={photo} />
                </div>
                <p className='description'>
                    Description : Lorem ipsum dolor sit amet. Et autem quasi in commodi quibusdam a vitae eius qui omnis culpa. Qui vitae tempore qui quasi quia vel sint minima. 
                    Eos adipisci quia vel optio corrupti aut aliquam error ut quaerat praesentium ut dolorem ullam non repellendus internos et architecto enim. Ab sequi facere eum 
                    eveniet eveniet sed incidunt enim qui iusto rerum? Et accusantium placeat sed neque voluptatem sed ducimus corporis cum labore nobis. Id quisquam neque vel dolor amet non saepe totam cum voluptates quam.
                </p>
                <div className='btn-proj'>
                    <Button children={btn} buttonStyle="btn--outline" onClick={() => window.open(url+'/dementia_vit', '_blank')} />
                </div>
            </div>
            {/* project 2 */}
            <div className='project'>
                <div className='left'> 
                    <h3> Project Name </h3>
                    <img className='image' src={photo} />
                </div>
                <p className='description'>
                    Description : Lorem ipsum dolor sit amet. Et autem quasi in commodi quibusdam a vitae eius qui omnis culpa. Qui vitae tempore qui quasi quia vel sint minima. 
                    Eos adipisci quia vel optio corrupti aut aliquam error ut quaerat praesentium ut dolorem ullam non repellendus internos et architecto enim. Ab sequi facere eum 
                    eveniet eveniet sed incidunt enim qui iusto rerum? Et accusantium placeat sed neque voluptatem sed ducimus corporis cum labore nobis. Id quisquam neque vel dolor amet non saepe totam cum voluptates quam.
                </p>
                <div className='btn-proj'>
                    <Button children={btn} buttonStyle="btn--outline" onClick={() => window.open(url+'/dementia_vit', '_blank')} />
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default CsProjects