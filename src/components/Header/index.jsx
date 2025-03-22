import React from 'react';
import { NavLink } from 'react-router';
import Logo from '@components/Logo';
import NavBar from '@components/NavBar';
import './header.scss';

/**
 * Header component that renders the main navigation header.
 * It includes a logo wrapped in a NavLink that redirects to the home page
 * and a NavBar component for navigation links.
 *
 * @component
 * @example
 * return (
 *   <Header />
 * )
 */
const Header = () => (
    <header className="header">
        <NavLink to="/" title="Home">
            <Logo className="header__logo" />
        </NavLink>
        <NavBar />
    </header>
);

export default Header;
