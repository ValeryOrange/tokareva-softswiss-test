import React from 'react';
import { NavLink } from 'react-router-dom';
import rocket from './2xrocket.png';
import './footer.scss';

/**
 * Footer component that displays a footer section with an image and a navigation link.
 *
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 *
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
    return (
        <footer className="footer">
            <img
                src={rocket}
                alt="Rocket flying through space"
                className="footer__img"
                width="130"
                height="148"
                loading="lazy"
            />
            <NavLink
                className="link footer__link"
                to="/about"
                title="Learn more about our exciting space adventure"
            >
                <em className="em em_yellow">Exciting space adventure!</em>
            </NavLink>
        </footer>
    );
};

export default Footer;
