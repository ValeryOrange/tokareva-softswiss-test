import React, { useMemo } from 'react';
import clsx from 'clsx';
import Button from '@components/Button';
import './lead.scss';

const Lead = ({ className, title, titleEm, caption, captionEm, more }) => {
    const computedClassName = useMemo(
        () => clsx('lead', className),
        [className]
    );
    return (
        <div className={computedClassName}>
            <h1 className="lead__title">
                {title} <em className="pink">{titleEm}</em>
            </h1>
            <h2 className="lead__subtitle">
                {caption} <em className="yellow">{captionEm}</em>
            </h2>
            {more && <Button className="lead__button">Learn more</Button>}
        </div>
    );
};

export default React.memo(Lead);
