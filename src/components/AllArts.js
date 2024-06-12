import React from 'react'
import './AllArts.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'

const buttonSize = 'btn--large'
const buttonStyle = 'btn--none'
function AllArts() {
  return (
    <div className='big-container'>
        {/* digital */}
        <div className='small-container, digital'>
            <Button buttonSize={buttonSize} buttonStyle={buttonStyle} >
                <Link to='./digital' className='butn' >
                    <h2> digital </h2>
                    <h2> photography </h2>
                </Link>
            </Button>   
        </div>
        {/* film */}
        <div className='small-container, film'>
            <Button buttonSize={buttonSize} buttonStyle={buttonStyle} >
                <Link to='./film' className='butn' >
                    <h2> film </h2>
                    <h2> photography </h2>
                </Link>
            </Button>
        </div>
        {/* printmaking
        <div className='small-container, printmaking'>
            <Button buttonSize={buttonSize} buttonStyle={buttonStyle} >
                <Link to='./film' className='butn' >
                    <h2> Printmaking </h2>
                </Link>
            </Button>
        </div> */}
    </div>
  )
}

export default AllArts