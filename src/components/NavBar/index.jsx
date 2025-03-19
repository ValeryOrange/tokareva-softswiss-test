import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@components/Button';
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
            >
                ☰
            </Button>
            <ul
                className={`nav-bar__list${menuOpen ? ' nav-bar__list_open' : ''}`}
            >
                <li>
                    <NavLink to="/" title="Home">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" title="Products">
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" title="Cart">
                        Cart
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
