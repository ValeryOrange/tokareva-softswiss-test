import React from 'react';
import { NavLink } from 'react-router-dom';
import rocket from './2xrocket.png';
import './footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <img
                src={rocket}
                alt="rocket"
                className="footer__img"
                width="130"
                height="148"
            />
            <NavLink className="emph-text-l" to="/about">
                Exciting space adventure!
            </NavLink>
        </div>
    );
};

export default Footer;
