import React from 'react';
import './title.scss';

const Title = ({ children, size = 'h1' }) => {
    const Tag = size;
    return <Tag className={`title title_${size}`}>{children}</Tag>;
};

export default React.memo(Title);
