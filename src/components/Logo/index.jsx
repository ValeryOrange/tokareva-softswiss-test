import React from 'react';
import logoIcon from './logo.svg';

/**
 * Logo component that displays the company logo.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.className=''] - Optional CSS class to apply to the logo image.
 * @returns {JSX.Element} The rendered logo image.
 */
const Logo = ({ className = '' }) => (
    <img src={logoIcon} className={className} alt="Company Logo" />
);

export default Logo;
