// import React, {useState, useEffect} from 'react'
// import {NavLink} from 'react-router-dom'
// import Scroll from 'react-scroll'

// import '../styles/Pony.css'
// import '../styles/Nav.css'

// const ScrollLink = Scroll.ScrollLink

// const Nav = (props) => {
    
//     return (

//     <nav className="desktop-nav fixed-top navbar navbar-toggleable-md" >
//         <div style={{display: 'flex', listStyle: 'none',  }}>
//           {/* <NavLink className="navbar-nav ml-auto links-wrapper" to={"/"} style={{marginTop: '17px'}}>
//             My Portfolio
//           </NavLink> */}
//           <div className="collapse navbar-collapse navbar-wrapper" style={{display: 'flex', marginLeft: 'auto'}} >
//             <ul className="navbar-nav ml-auto links-wrapper"style={{display: 'flex', listStyle: 'none',  }}>
//                     {/* <ScrollLink 
//                     to='work'
//                     spy={true} 
//                     smooth={true} 
//                     duration={500} 
//                     className='workScroll'
//                     activeClass='active'
//                     > */}
//                 <li className="nav-item">
//                     <a className="nav-link" to={'/work'}> 
//                       Work</a>
//                 </li>
//                 {/* </ScrollLink> */}
//                 <li className="nav-item">
//                     <NavLink className="nav-link" to={"/reviews"}>Reviews</NavLink>
//                 </li>
//                 <li className="nav-item">
//                     <NavLink className="nav-link" to={"/about"}>About</NavLink>
//                 </li>
//                 <li className="nav-item">
//                     <NavLink className="nav-link" to={"/design-for-growth"} target="_blank">Insights</NavLink>
//                 </li>
//                 {/* <!-- <li className="nav-item">
//                     <NavLink className="nav-link" to={"">Log in</NavLink>
//                   </li> --> */}
//                 {/* <form className="form-inline mt-2 mt-md-0">
//                   <a href={'mailto: schuylerluckey@gmail.com'} className="btn btn-sm btn-dark mt-n1 ml-1">Email</a>
//                 </form> */}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     )
// }

// export default Nav