import React from 'react';
import './lead.scss';

const Lead = ({ className, title, titleEm, caption, captionEm }) => (
    <div className={`lead${className && ' ' + className}`}>
        <h1 className="lead__title">
            {title} <em className="pink">{titleEm}</em>
        </h1>
        <h2 className="lead__subtitle">
            {caption} <em className="yellow">{captionEm}</em>
        </h2>
    </div>
);

export default React.memo(Lead);
