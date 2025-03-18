import React from 'react';

const PageTitle = ({ children, size = 'h1' }) => {
    const Tag = size;
    return <Tag className={`pageTitle pageTitle_${size}`}>{children}</Tag>;
};

export default React.memo(PageTitle);
