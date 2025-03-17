import React from 'react';
import logoIcon from './logo.svg';

const Logo = ({ className }) => {
    return <img src={logoIcon} className={className} alt="Go logo" />;
};

export default React.memo(Logo);
