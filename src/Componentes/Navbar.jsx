import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'; // Puedes usar CSS para estilizar el menú

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>GanadeandoApp</h1>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Inicio Sesión</Link></li>
                <li><Link to="/conocenos">Conócenos</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/animal-bovino">Animal Bovino</Link></li>
                <li><Link to="/registrarse">Registrarse</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
