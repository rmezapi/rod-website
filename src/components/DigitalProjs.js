import React from 'react'
import './DigitalProjs.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'

const buttonSize = 'btn--medium'
const buttonStyle = 'btn--none'


function DigitalProjs() {
    return(
        <div>
        <div className='row'>
            {/* climbing */}
            <div className='c1-1'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./climbing' className='btnn'>
                        <h2> CLimbing </h2>
                    </Link>
                        
                </Button>
            </div>
            <div className='c1-2'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./biking-adventures}' className='btnn'>
                        <h2>Biking Adventures</h2>
                    </Link>
                        
                </Button>
            </div>
            <div className='c1-3'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./friends' className='btnn'>
                        <h2>Friends</h2>
                    </Link>
                        
                </Button>
            </div>
        </div>
        <div className='row'>
        <div className='c2-1'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./graduation' className='btnn'>
                        <h2> Graduation </h2>
                    </Link>
                        
                </Button>
            </div>
            <div className='c2-2'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./in-conversation' className='btnn'>
                        <h2>In Conversation w ___</h2>
                    </Link>
                        
                </Button>
            </div>
            <div className='c2-3'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./kt' className='btnn'>
                        <h2>kt</h2>
                    </Link>
                        
                </Button>
            </div>
        </div>
            <div className='row'>
                <div className='c3-1'>
                    <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                        <Link to='./night' className='btnn'>
                            <h2>Night</h2>
                        </Link>
                            
                    </Button>
                </div>
                <div className='c3-2'>
                    <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                        <Link to='./scuba' className='btnn'>
                            <h2>Scuba Diving</h2>
                        </Link>
                            
                    </Button>
                </div>
                <div className='c3-3'>
                    <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                        <Link to='./yosemite' className='btnn'>
                            <h2>Yosemite Valley Theme Park</h2>
                        </Link>
                            
                    </Button>
                </div>
            </div>
        </div>
    )

}

export default DigitalProjs