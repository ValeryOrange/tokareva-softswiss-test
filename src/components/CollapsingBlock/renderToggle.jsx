import React, { useMemo } from 'react';
import clsx from 'clsx';

/**
 * Higher-order component that wraps a button component with additional functionality
 * to compute and apply a combined class name and variant.
 *
 * @param {React.ComponentType} BtnComponent - The button component to wrap.
 * @param {string} btnClassName - The base class name to apply to the button.
 * @param {string} variant - The variant to pass to the button component.
 * @returns {React.FC} A new component that renders the wrapped button with computed class names and variant and accepts a new className and other attributes for collapsing block.
 */
export default function withRenderToggle(BtnComponent, btnClassName, variant) {
    const WrappedComponent = ({ className, ...rest }) => {
        const computedClassName = useMemo(
            () => clsx(btnClassName, className),
            [className]
        );
        return (
            <BtnComponent
                className={computedClassName}
                variant={variant}
                {...rest}
            />
        );
    };

    WrappedComponent.displayName = 'ButtonWithRenderToggle';

    return WrappedComponent;
}
