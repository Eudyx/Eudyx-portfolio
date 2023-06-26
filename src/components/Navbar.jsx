import React, { useRef, useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {

  const [menu, setMenu] = useState('disable');
  const [dis, setDis] = useState(true);

  const disable = () => {
    let width = window.innerWidth;
    if(width < 1016) {
      setDis(!dis);
      setMenu(!dis ? 'disable' : 'enable');  
    }
  }

  return (
    <nav className='navbar container'>
        <div className='container menu-container'>
          <div className='eudyx'>
              <Link 
              activeClass='active'
              className='home eudyx'
              to='home' spy={true}
              smooth={true}
              duration={1000}
              offset={-130}
              >Eudyx</Link>
          </div>
        <ul className={`nav-options ${menu}`} >
        <Link
              activeClass='active'
              className='home'
              to='home' spy={true}
              smooth={true}
              duration={1000}
              offset={-130}
              onClick={(e) => disable()}
              >
          <li>
            HOME
          </li>
          </Link>
          <Link
              activeClass='active'
              className='about-me'
              to='about-me' spy={true}
              smooth={true}
              duration={1000}
              offset={-130}
              onClick={(e) => disable()}
              >
          <li>
            ABOUT ME
          </li>
          </Link>
          <Link
              activeClass='active'
              className='skills'
              to='skills' spy={true}
              smooth={true}
              duration={1000}
              offset={-130}
              onClick={(e) => disable()}
              >
          <li>
            SKILLS
          </li>
          </Link>
          <Link
              activeClass='active'
              className='portfolio'
              to='portfolio' spy={true}
              smooth={true}
              duration={1000}
              offset={-130}
              onClick={(e) => disable()}
              >
          <li>
            PORTFOLIO
          </li>
          </Link>
          <Link
              activeClass='active'
              className='contact'
              to='contact' spy={true}
              smooth={true}
              duration={1000}
              offset={-130}
              onClick={(e) => disable()}
              >
          <li>
            CONTACT
          </li>
          </Link>
        </ul>
        <div>
          <img src='/menu.svg' className='menu-icon' />
          <input type='checkbox' className='menu-btn' value={dis} onChange={(e) => disable()}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
