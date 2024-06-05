import React from 'react'
import './ArtProjs.css'
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
                    <Link to='./{proj_name}' className='btnn'>
                        <h2>Project Name</h2>
                    </Link>
                        
                </Button>
            </div>
            <div className='c1-2'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./{proj_name}' className='btnn'>
                        <h2>Project Name</h2>
                    </Link>
                        
                </Button>
            </div>
            <div className='c1-3'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./{proj_name}' className='btnn'>
                        <h2>Project Name</h2>
                    </Link>
                        
                </Button>
            </div>
        </div>
        <div className='row'>
        <div className='c2-1'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./{proj_name}' className='btnn'>
                        <h2>Project Name</h2>
                    </Link>
                        
                </Button>
            </div>
            <div className='c2-2'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./{proj_name}' className='btnn'>
                        <h2>Project Name</h2>
                    </Link>
                        
                </Button>
            </div>
            <div className='c2-3'>
                <Button buttonSize={buttonSize} buttonStyle={buttonStyle}  >
                    <Link to='./{proj_name}' className='btnn'>
                        <h2>Project Name</h2>
                    </Link>
                        
                </Button>
            </div>
        </div>
    </div>
  )
}

export default FilmProjs