import React from 'react';
import wifiIcon from './assets/wifi-icon.png';
import volumeIcon from './assets/volume-icon.png';
import batteryIcon from './assets/battery-icon.png';
import moonIcon from './assets/moon-icon.png';

// Esto es un componente funcional de React
function BarraTareas() {
    return (
        <header className="header-principal">
            <div className="buscador-container">
                <input type="text" placeholder="Buscar..." id='input-busqueda' />
            </div>

            <nav className="navbar-OS">
                <ul className="lista-navbar">
                    <li><a className='nav-link' href="#sobreMi">Sobre mí</a></li>
                    <li><a className='nav-link' href="#skills">Skills</a></li>
                    <li><a className='nav-link' href="#proyectos">Proyectos</a></li>
                    <li><a className='nav-link' href="#contacto">Contacto</a></li>
                </ul>
            </nav>

            <div className="iconos-OS">
                <button id="theme-toggle" className="boton-tema" aria-label="Cambiar tema">
                    <img src={moonIcon} alt="Modo nocturno" className="icon-sun" />
                </button>
                <img src={wifiIcon} alt='icono de wifi' className="icono"/>
                <img src={volumeIcon} alt='icono de volumen' className="icono"/>
                <img src={batteryIcon} alt='icono de batería' className="icono"/>
                <span className="reloj-os">00:00</span>
            </div>
        </header>
    );
}

export default BarraTareas;