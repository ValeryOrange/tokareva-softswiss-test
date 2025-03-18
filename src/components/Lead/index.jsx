import React, { useMemo } from 'react';
import clsx from 'clsx';
import Button from '@components/Button';
import './lead.scss';

const Lead = ({ className, children, more }) => {
    const computedClassName = useMemo(
        () => clsx('lead', className),
        [className]
    );
    return (
        <div className={computedClassName}>
            {children}
            {more && (
                <Button className="lead__button" variant="fill">
                    Learn more
                </Button>
            )}
        </div>
    );
};

export default React.memo(Lead);
