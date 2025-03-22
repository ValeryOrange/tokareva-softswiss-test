import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router';
import CartIcon from './cartIcon';
import './menu.scss';

/**
 * Menu component renders the navigation list.
 *
 * @component
 * @example
 * return (
 *   <Menu />
 * )
 */
/**
 * Menu component renders the navigation list.
 *
 * @component
 * @param {boolean} isOpen - Determines if the menu is open.
 * @param {string} [variant='mobile'] - The variant of the menu.
 * @param {function} onClick - The click handler function.
 * @example
 * return (
 *   <Menu isOpen={true} variant="desktop" onClick={handleClick} />
 * )
 */
const Menu = ({ isOpen, variant = 'mobile', onClick }) => {
    const computedClassName = clsx('menu', `menu_${variant}`, {
        menu_open: isOpen,
    });
    return (
        <ul className={computedClassName} onClick={onClick}>
            <li className="menu__item">
                <NavLink to="/" title="Home" className="menu__link">
                    Home
                </NavLink>
            </li>
            <li className="menu__item">
                <NavLink to="/products" title="Products" className="menu__link">
                    Products
                </NavLink>
            </li>
            <li className="menu__item">
                <NavLink
                    to="/cart"
                    title="Cart"
                    className="menu__link menu__link-cart"
                >
                    <CartIcon variant={variant} />
                </NavLink>
            </li>
        </ul>
    );
};

export default React.memo(Menu);
