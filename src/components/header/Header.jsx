import React from 'react'
import Logo from '../../assets/logo_red.webp'
import './header.scss'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="logo Kasa" className="logo-header" />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>

    </header>
  )
}
