import React from 'react'
import { NavLink } from "react-router-dom";
import { BiPencil, BiStats } from 'react-icons/bi';

import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <h1>Sketchy</h1>
      <div className='nav'>
        <NavLink to='/draw' activeClassName="activeNavLink">
          <BiPencil size='1.5em' />
          <br />
          Draw
        </NavLink>
        <NavLink to='/stats' activeClassName="activeNavLink">
          <BiStats size='1.5em' />
          <br />
          Statistics
        </NavLink>
      </div>
    </header>
  )
}

export default Header