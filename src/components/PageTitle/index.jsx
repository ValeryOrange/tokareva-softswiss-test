import React from 'react';
import './page-title.scss';

const PageTitle = ({ children, size = 'h1' }) => {
    const Tag = size;
    return <Tag className={`pageTitle pageTitle_${size}`}>{children}</Tag>;
};

export default React.memo(PageTitle);
