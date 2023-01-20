import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import imagLogo from '../assets/images/logo.png'
import  botaoMenu from '../assets/images/botaoMenu.png'
import '../styles/navbar.css'
import estilos from '../styles/navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={imagLogo}/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
            <img src={botaoMenu}/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Sobre Nós</NavLink>
            </li>
            <li>
              <NavLink to="/produtos">Produtos</NavLink>
            </li>
            <li>
              <NavLink to="/eventos">Eventos</NavLink>
            </li>
            <li>
              <NavLink to="/contato">Contato</NavLink>
            </li>
            <li className={estilos.reservaItem}>
              <NavLink to="/reserva" >Reserva</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar