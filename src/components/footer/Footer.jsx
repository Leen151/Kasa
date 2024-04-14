import React from 'react'
import './footer.scss'
import LogoWhite from '../../assets/logo_white.webp'

export const Footer = () => {
  return (
    <footer>
      <img src={LogoWhite} alt="logo Kasa" className="logo-footer"/>
      <p className="copyright"> © 2020 Kasa. All rights reserved </p>
      
    </footer>
  )
}
