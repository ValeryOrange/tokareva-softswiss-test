import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@components/Button';
import burger from './burger.svg';
import close from './close.svg';
import './nav-bar.scss';

/**
 * NavBar component renders the navigation bar.
 *
 * @component
 * @example
 * return (
 *   <NavBar />
 * )
 */
const NavBar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);
    const toggleNavBar = () => {
        setNavBarOpen(!navBarOpen);
    };

    const btnIcon = navBarOpen ? close : burger;
    const iconAlt = navBarOpen ? 'Close Menu' : 'Open Menu';

    return (
        <nav className="nav-bar">
            <Button
                className="nav-bar__button"
                onClick={toggleNavBar}
                icon={btnIcon}
                variant="icon"
                iconAlt={iconAlt}
            />
            <ul
                className={`nav-bar__list${navBarOpen ? ' nav-bar__list_open' : ''}`}
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

export default NavBar;
