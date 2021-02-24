import React from 'react'
import { Link} from 'react-scroll'
import '../styles/Nav.css'


const Nav = () => {
    return (
    <nav className="desktop-nav fixed-top navbar navbar-toggleable-md" >
        <div style={{display: 'flex', listStyle: 'none'}}>
          <div className="collapse navbar-collapse navbar-wrapper" style={{display: 'flex', marginLeft: 'auto'}} >
            <ul className="navbar-nav ml-auto links-wrapper"style={{display: 'flex', listStyle: 'none'}}>
                <li className="nav-item">
                    <Link 
                        to='work'
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className='workScroll nav-link'
                        activeClass='active'
                    >
                    Work
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to='about'
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className='aboutScroll nav-link'
                        activeClass='active'
                    >
                    About
                    </Link>

                </li>
                <li className="nav-item">
                    <Link 
                        to='skills'
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className='aboutScroll nav-link'
                        activeClass='active'
                    >
                    Skills
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to='contact'
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className='aboutScroll nav-link'
                        activeClass='active'
                    >
                        Contact
                    </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav