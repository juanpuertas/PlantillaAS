import React from 'react'
import Navbar from './NavBar/Navbar'
import CardPresentacion from './CardPresentacion'
import Presentacion from './Presentacion'

const Header = () => {
  return (
    <div>
        <Navbar/>
        <Presentacion></Presentacion>
    </div>
  )
}

export default Header
