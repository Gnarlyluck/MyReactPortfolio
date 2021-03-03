import React from 'react'
import { Link} from 'react-scroll'
import '../styles/Nav.css'


const Nav = () => {
    return (
    <nav className="navbar" style={{backgroundColor: 'black', height: '75px'}}>
        <div style={{display: 'flex', listStyle: 'none'}}>
            {/* <Link className="navbar-nav ml-auto links-wrapper"  style={{marginTop: '17px'}}>
            My Portfolio
           </Link> */}
          <div className=" navbar-wrapper" style={{display: 'flex', marginLeft: 'auto'}} >
            <ul className="navbar-nav links-wrapper"style={{display: 'flex', listStyle: 'none'}}>
                <li className="nav-item">
                    <Link 
                        to='work'
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className='workScroll nav-link'
                        activeClass='active'
                    >
                    Portfolio
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
                    onClick={() => window.open('https://drive.google.com/file/d/1jTf6AIdDDjnXqQXU2lp2dcqExTIfpdOE/view?usp=sharing', '_blank')}
                        href ='https://drive.google.com/file/d/1jTf6AIdDDjnXqQXU2lp2dcqExTIfpdOE/view?usp=sharing'
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className='aboutScroll nav-link'
                        activeClass='active'
                    >
                        Resume
                    </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav