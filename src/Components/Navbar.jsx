import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      {/* start navbar */}
      <header className='section-navbar'>
      <div className='container' id='home'>
  <div className='navbar-brand'>
<img src="./images/logo.png" alt="logo"
width={'70%'} height={'auto'}

/>
  </div>

  <nav className='navbar' >
    <ul >
  <li className='nav-item'><NavLink to="/" className='nav-link'>Home</NavLink></li>
  <li className='nav-item'><NavLink to="/career" className='nav-link'>Career objective</NavLink></li>
  <li className='nav-item'><NavLink to="/skills" className='nav-link'>Skills</NavLink></li>
  
  <li className='nav-item'><NavLink to="/projects" className='nav-link'>Projects</NavLink></li>
  <li className='nav-item'><NavLink to="/contact" className='nav-link'>Contact Us</NavLink></li>
</ul>
</nav>
</div>
</header>

    </div>
  )
}

export default Navbar;
