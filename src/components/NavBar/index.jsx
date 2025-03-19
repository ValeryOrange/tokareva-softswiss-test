import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@components/Button';
import burger from './burger.svg';
import './nav-bar.scss';

/**
 * Menu component renders the navigation bar.
 *
 * @component
 * @example
 * return (
 *   <Menu />
 * )
 */
const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="nav-bar md:flex md:items-center">
            <Button
                className="nav-bar__button"
                onClick={toggleMenu}
                variant="icon"
                icon={burger}
            />
            <ul
                className={`nav-bar__list${menuOpen ? ' nav-bar__list_open' : ''}`}
            >
                <li className="nav-bar__item">
                    <NavLink to="/" title="Home" className="nav-bar__link">
                        Home
                    </NavLink>
                </li>
                <li className="nav-bar__item">
                    <NavLink
                        to="/products"
                        title="Products"
                        className="nav-bar__link"
                    >
                        Products
                    </NavLink>
                </li>
                <li className="nav-bar__item">
                    <NavLink to="/cart" title="Cart" className="nav-bar__link">
                        Cart
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
