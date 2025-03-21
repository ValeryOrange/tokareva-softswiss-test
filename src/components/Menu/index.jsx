import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
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
const Menu = ({ isOpen, variant = 'mobile', onClick }) => {
    const computedClassName = clsx('menu', `menu_${variant}`, {
        menu_open: isOpen,
    });
    const clickHandler = onClick ? onClick : () => {};
    return (
        <ul className={computedClassName} onClick={clickHandler}>
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
                    <svg
                        width="24"
                        height="21"
                        viewBox="0 0 24 21"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {variant === 'desktop' && (
                            <defs>
                                <linearGradient
                                    id="gradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="0"
                                    y2="100%"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#ebff00"
                                    ></stop>
                                    <stop
                                        offset="100%"
                                        stopColor="#ff70d9"
                                    ></stop>
                                </linearGradient>
                            </defs>
                        )}
                        <path
                            fill="#fff"
                            className="menu__path"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.234 18.564c0-.996-.823-1.796-1.847-1.796-1.025 0-1.847.8-1.847 1.796s.822 1.796 1.847 1.796c1.024 0 1.847-.8 1.847-1.796zm12.927 0c0-.996-.823-1.796-1.847-1.796s-1.847.8-1.847 1.796.823 1.796 1.847 1.796 1.847-.8 1.847-1.796zm1.846-15.263c0-.492-.418-.898-.923-.898H5.757c-.145-.674-.16-1.796-1.14-1.796H.923C.418.607 0 1.014 0 1.505c0 .49.418.898.923.898h2.944L6.42 13.949c-.202.406-.88 1.487-.88 1.921 0 .492.419.898.924.898h14.773c.505 0 .924-.406.924-.898 0-.49-.419-.897-.924-.897H7.964c.144-.281.346-.576.346-.898 0-.323-.13-.673-.187-.982l15.062-1.712a.917.917 0 00.822-.898V3.301z"
                        />
                    </svg>
                </NavLink>
            </li>
        </ul>
    );
};

export default React.memo(Menu);
