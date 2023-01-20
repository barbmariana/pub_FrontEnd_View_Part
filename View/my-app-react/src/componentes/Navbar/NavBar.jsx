import { useState } from 'react'
import { Link } from 'react-router-dom'
import imagLogo from '../../assets/images/logo.png'
import botaoMenu from '../../assets/images/botaoMenu.png'
import estilos from "./navbar.module.css"

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className={estilos.navbar}>
      <div className={estilos.container}>
        <div className={estilos.logo}>
          <img src={imagLogo} />
        </div>
        <div className={estilos.menuIcon} onClick={handleShowNavbar}>
          <img src={botaoMenu} />
        </div>
        <div className= {showNavbar ? '': estilos.navElements}>
          <ul>
            <li>
              <Link to="/">Sobre Nós</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/eventos">Eventos</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
            <li className={estilos.reservaItem}>
              <Link to="/contact" >Reserva</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar