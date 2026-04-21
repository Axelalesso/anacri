import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './navbar.css';
import { FaInstagram, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para abrir/cerrar el menú
  const toggleMenu = () => setIsOpen(!isOpen);

  // Función para cerrar el menú al hacer clic en un link
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" onClick={closeMenu}>
          <img src="/img/logo-anacri.jpeg" alt="Anacri Construcciones" className="logo-img" />
        </Link>
      </div>

      {/* ICONO HAMBURGUESA: Solo se mostrará en el celu vía CSS */}
      <div className="menu-hamburguesa" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* ITEMS DE NAVEGACIÓN */}
      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Inicio</Link>
        <Link to="/#servicios" onClick={closeMenu}>Servicios</Link>
        <Link to="/#trabajos" onClick={closeMenu}>Trabajos</Link>
        <Link to="/#nosotros" onClick={closeMenu}>Nosotros</Link>
        <Link to="/contacto" onClick={closeMenu}>Contacto</Link>
        
        {/* Redes sociales dentro del menú (solo se ven en el celu) */}
        <div className="nav-social-mobile">
          <a href="https://www.instagram.com/construcciones_anacri" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/construcciones-anacri-591320401/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:anacrimktg@gmail.com"><IoIosMail /></a>
        </div>
      </div>

      {/* REDES SOCIALES ESCRITORIO: Se ocultarán en el celu vía CSS */}
      <div className="nav-social">
        <a href="https://www.instagram.com/construcciones_anacri" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/construcciones-anacri-591320401/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="mailto:anacrimktg@gmail.com" target="_blank" rel="noopener noreferrer">
          <IoIosMail className="social-icon" />
        </a>
      </div>
    </nav>
  );
}