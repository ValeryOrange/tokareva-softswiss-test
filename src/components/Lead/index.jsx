import React, { useMemo } from 'react';
import clsx from 'clsx';
import Button from '@components/Button';
import './lead.scss';

/**
 * Lead component that renders a div with a computed class name and optional children and button.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.className - Additional class names to apply to the div.
 * @param {React.ReactNode} props.children - The content to be displayed inside the div.
 * @param {text} props.more - Optional collapsed text.
 *
 * @returns {JSX.Element} The rendered Lead component.
 */
const Lead = ({ className, children, more }) => {
    const computedClassName = useMemo(
        () => clsx('lead', className),
        [className]
    );
    return (
        <div className={computedClassName}>
            {children}
            {more && (
                <Button className="lead__button" variant="contained">
                    Learn more
                </Button>
            )}
        </div>
    );
};

export default React.memo(Lead);
