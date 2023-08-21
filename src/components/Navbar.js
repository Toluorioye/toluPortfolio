import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
function Header() {
const [list] = useState(["Home","About", "Projects","Contact"]);
 const [menu, setMenu] = useState(false);
 const menuClick = () => setMenu(!menu);
 const location = useLocation();
 useEffect(() => {setMenu(false)}, [location]);
  return (
    <div>
      <div className="header" id={menu ? "open" : "close"}>
        <div className='navigation'>
            <div className="logo">
             <h3>Tolu Orioye</h3>
            </div>
            <div className= "menu">
              <Link to='/' className='nav'>Home</Link>
              <Link to='/about' className='nav'>About</Link>
              <Link to='/projects' className='nav'>Projects</Link>
              <Link to='/contact' className='nav'>Contact</Link>
            </div>
            <button onClick={menuClick} className='iconbtn'>
              {menu? 
               <FontAwesomeIcon icon={faXmark} className='menubar'/> :
               <FontAwesomeIcon icon={faBars} className='menubar'/>
               }
            </button>
            
        </div>
      </div>
    </div>
  )
}

export default Header;