import React from 'react'
import './Footer.css'
import { Button } from './Button'

const linkedin = 'https://linkedin.com/rodrigo-meza-pineda'
const mailto = 'mailto:rodrigo.meza.pineda@outlook.com'
const github = 'https://github.com/rmezapi'


function Footer() {
  return (
    <>
        <hr class="solid" />
        <div className='copyright'>
                <h5> <i class="fa-regular fa-copyright"/> 2024 rodrigo meza pineda </h5>
        </div>
    </>
    
  )
}

export default Footer