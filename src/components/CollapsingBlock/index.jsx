import React from 'react';
import Button from '@components/Button';
import './collapsing-block.scss';

const CollapsingBlock = ({ children, btnProp }) => {
    const computedProps = {
        ...btnProp,
        className: `collapsing-block__summary ${btnProp.className || ''}`,
    };
    return (
        <details className="collapsing-block">
            <Button tag="summary" {...computedProps} />
            {children}
        </details>
    );
};

export default CollapsingBlock;
