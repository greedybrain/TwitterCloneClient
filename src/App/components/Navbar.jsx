import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
        return (
                <nav className="navbar">
                        <ul>
                                <li className="home nav_item">
                                        <NavLink to='/' activeClassName="navbar__link--active">
                                                <i className="fas fa-home"></i>
                                        </NavLink>
                                </li>
                                <li className="search item">
                                        <NavLink to='/explore' activeClassName="navbar__link--active">
                                                <i className="fas fa-search"></i>
                                        </NavLink>
                                </li>
                                <li className="bell item">
                                        <NavLink to="/notifications" activeClassName="navbar__link--active">
                                                <i className="far fa-bell"></i>
                                        </NavLink>
                                </li>
                                <li className="messages item">
                                        <NavLink to="/messages" activeClassName="navbar__link--active">
                                                <i className="far fa-envelope"></i>
                                        </NavLink>
                                </li>
                        </ul>
                </nav>
        )
}

export default Navbar
