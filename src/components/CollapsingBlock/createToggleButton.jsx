import React, { useMemo } from 'react';
import Button from '@components/Button';
import clsx from 'clsx';

/**
 * Higher-order component that wraps a button component with additional functionality
 * to compute and apply a combined class name and variant.
 *
 * @param {string} btnClassName - The base class name to apply to the button.
 * @param {string} btnProps - Any other props to pass to the button component.
 * @returns {React.FC} A new component that renders the wrapped button with computed class names and variant and accepts a new className and other attributes for collapsing block.
 */
export default function createToggleButton({
    className: btnClassName,
    ...btnProps
}) {
    const ButtonComponent = ({ className, ...rest }) => {
        const computedClassName = useMemo(
            () => clsx(btnClassName, className),
            [className]
        );
        return <Button {...btnProps} className={computedClassName} {...rest} />;
    };

    return ButtonComponent;
}
