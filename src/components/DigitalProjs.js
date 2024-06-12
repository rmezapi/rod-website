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
            <div className='d1-1'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./climbing' className='btnn'>
                        <h2> climbing </h2>
                    </Link>
                        
                </Button>
            </div>
            {/* biking adventures */}
            <div className='d1-2'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./biking-adventures' className='btnn'>
                        <h2>biking adventures</h2>
                    </Link>
                        
                </Button>
            </div>
            {/* yosemite valley theme park */}
            <div className='d1-3'>
                    <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                        <Link to='./yosemite' className='btnn'>
                            <h2>yosemite valley theme park</h2>
                        </Link>
                            
                    </Button>
                </div>
        </div>
        <div className='row'>
        {/* graduation */}
        <div className='d2-1'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./graduation' className='btnn'>
                        <h2> graduation </h2>
                    </Link>
                        
                </Button>
            </div>
            <div className='d2-2'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./in-conversation' className='btnn'>
                        <h2>the town: in conversation with daniel shea</h2>
                    </Link>
                        
                </Button>
            </div>
            <div className='d2-3'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./kt' className='btnn'>
                        <h2>kt.</h2>
                    </Link>
                        
                </Button>
            </div>
        </div>
            <div className='row'>
                <div className='d3-1'>
                    <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                        <Link to='./friends' className='btnn'>
                            <h2>friends</h2>
                        </Link>
                            
                    </Button>
                </div>
                <div className='d3-2'>
                    <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                        <Link to='./scuba' className='btnn'>
                            <h2>scuba diving</h2>
                        </Link>
                            
                    </Button>
                </div>
                <div className='d3-3'>
                    <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                        <Link to='./night' className='btnn'>
                            <h2>3 friends, a bike, lights and a kimono</h2>
                        </Link>
                            
                    </Button>
                </div>
            </div>
        </div>
    )

}

export default DigitalProjs