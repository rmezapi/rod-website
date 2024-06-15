import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
import { Button } from '../Button'

const linkedin = 'https://linkedin.com/rodrigo-meza-pineda'
const mailto = 'mailto:rodrigo.meza.pineda@outlook.com'
const github = 'https://github.com/rmezapi'


function Contact() {
  return (
    <div className='all'>
        <h2 className='contact'> contact me </h2>
        <div className='container'>
            <div className='info'>
                <Button className='btn2' buttonStyle='btn--outline'  onClick={() => window.open(mailto, '_blank')}>
                    <i class="fa-regular fa-envelope fa-xl icon" />    
                </Button>
            </div>
            <div className='info'>
                <Button className='btn2' buttonStyle='btn--outline'  onClick={() => window.open(linkedin, '_blank')}>
                    <i class="fa-brands fa-linkedin fa-sm icon" />   
                </Button>
            </div>
            <div className='info'>
                <Button className='btn2' buttonStyle='btn--outline' onClick={() => window.open(github, '_blank')}>
                    <i class="fa-brands fa-github fa-s icon" />   
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Contact