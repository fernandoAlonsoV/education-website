import React,{createRef} from 'react'
import { NavLink } from 'react-router-dom'
import PublicMenu from '../molecules/PublicMenu'
import PrivateMenu from '../molecules/PrivateMenu'
const menu = createRef()
const toggleMenu = () => menu.current.classList.toggle('show')


const Header = () => (
  <header className="main-header">
    <div className="ed-grid s-grid-5 lg-grid-4">
      <div className="s-cols-4 lg-cols-1 s-cross-center">
        <NavLink to="/">
          <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/American_Broadcasting_Company_Logo.svg/2044px-American_Broadcasting_Company_Logo.svg.png" 
          alt="logo" className="main-logo" />
        </NavLink>        
      </div>
      <div className="s-cols-1 lg-cols-3 s-cross-center s-main-end">
        <nav className="main-menu" ref={menu}>
          {
            localStorage.getItem('token')
            ? 
            <PrivateMenu /> 
            :
            <PublicMenu />
          }
        </nav>
        <div 
        className="main-menu-toggle to-l"
        onClick={()=>toggleMenu()}
        >
        </div>
      </div>
    </div>
  </header>
)

export default Header

