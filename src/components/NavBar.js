import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import { Button } from "./Button"

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  return (
    <>
        <nav className='navbar'> 
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                    RODRIGO MEZA PINEDA <i className='fab' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/computer-science' className='nav-links' onClick={closeMobileMenu}>
                      Computer Science
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/arts' className='nav-links' onClick={closeMobileMenu}>
                      Arts
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                      Contact
                    </Link>
                  </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default NavBar;