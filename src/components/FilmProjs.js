import React from 'react'
import './FilmProjs.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'

const buttonSize = 'btn--medium'
const buttonStyle = 'btn--none'

function FilmProjs() {
  return (
    <div>
        <div className='row'>
            <div className='c1-1'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./biking' className='btnn'>
                        <h2>Biking Adventures</h2>
                    </Link>
                        
                </Button>
            </div>
            <div className='c1-2'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./bouldering' className='btnn'>
                        <h2>Bouldering</h2>
                    </Link>
                        
                </Button>
            </div>
            <div className='c1-3'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./mtb' className='btnn'>
                        <h2>Mountain Biking</h2>
                    </Link>
                        
                </Button>
            </div>
        </div>
        <div className='row'>
        <div className='c2-1'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./road-cycling' className='btnn'>
                        <h2>Road Cycling</h2>
                    </Link>
                        
                </Button>
            </div>
            <div className='c2-2'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./st-simon' className='btnn'>
                        <h2>Saint Simon's Island Trip</h2>
                    </Link>
                        
                </Button>
            </div>
            <div className='c2-3'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./friends' className='btnn'>
                        <h2>Friends</h2>
                    </Link>
                        
                </Button>
            </div>
        </div>
    </div>
  )
}

export default FilmProjs