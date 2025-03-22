import React, { useState } from 'react';
import Button from '@components/Button';
import Menu from '@components/Menu';
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
    function toggleNavBar() {
        setNavBarOpen((prev) => {
            const newState = !prev;
            document.body.style.overflow = newState ? 'hidden' : 'auto';
            return newState;
        });
    }
    function closeNavBar() {
        setNavBarOpen(false);
        document.body.style.overflow = 'auto';
    }

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
            {/*
             * The Menu component is used twice in the NavBar component
             * to make it look correctly while resizing the document or
             * turning a mobile device.
             * */}
            <Menu variant="mobile" onClick={closeNavBar} isOpen={navBarOpen} />
            {/*
             * Since the desktop menu uses id=#gradient for the cart
             * icon's background, there must be only one desktop menu
             * component on the page.
             * */}
            <Menu variant="desktop" />
        </nav>
    );
};

export default NavBar;
