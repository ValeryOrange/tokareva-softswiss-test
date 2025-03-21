import React, { useMemo } from 'react';
import Button from '@components/Button';
import './collapsing-block.scss';

const CollapsingBlock = ({ children, btnProp }) => {
    const id = useMemo(() => Math.random().toString(36), []);
    const computedProps = {
        ...btnProp,
        htmlFor: id,
        className: `collapsing-block__btn ${btnProp.className || ''}`,
    };
    return (
        <div className="collapsing-block">
            <input
                id={id}
                type="checkbox"
                className="collapsing-block__hidden-checkbox"
            />
            <Button tag="label" {...computedProps} />
            <div className="collapsing-block__content">{children}</div>
        </div>
    );
};

export default React.memo(CollapsingBlock);
