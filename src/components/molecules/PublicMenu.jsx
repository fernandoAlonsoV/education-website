import React from 'react'
import {NavLink} from 'react-router-dom'

const PublicMenu = () => {
  return (
    <ul>
      <li><NavLink exact to="/login">Log in</NavLink></li>
      <li><NavLink to="/signin">Sign in</NavLink></li>
    </ul>
  )
}

export default PublicMenu
