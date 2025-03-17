import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '@components/Logo';
import NavBar from '@components/NavBar';
import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/">
                <Logo className="header__logo" />
            </NavLink>
            <NavBar />
        </div>
    );
};

export default Header;
