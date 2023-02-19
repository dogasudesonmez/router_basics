import React from 'react'
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="app_navbar">
            <a className="app_header" href="/">Project Name</a>
            <ul className="nav_list active">
                <li className="item"><a href="/projects">Projects</a></li>
                <li className="item"><a href="/projects">Contact</a></li>
                <li className="item"><a href="/projects">About</a></li>

            </ul>
        </nav>
        )
}
export default Navbar