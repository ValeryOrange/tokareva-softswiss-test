import React, { useMemo } from 'react';
import clsx from 'clsx';

/**
 * Higher-order component that wraps a button component with additional functionality
 * to compute and apply a combined class name and variant.
 *
 * @param {string} baseClass - The base class name to apply to the button.
 * @param {string} restBaseProps - Any other props to pass to the button component.
 * @returns {React.FC} A new component that renders the wrapped button with computed class names and variant and accepts a new className and other attributes for collapsing block.
 */
export default function withOverridingProps(
    Component,
    { className: baseClass, ...restBaseProps }
) {
    const WrappedComponent = ({ className, ...restOverridingProps }) => {
        const computedClassName = useMemo(
            () => clsx(baseClass, className),
            [className]
        );
        return (
            <Component
                {...restBaseProps}
                className={computedClassName}
                {...restOverridingProps}
            />
        );
    };

    WrappedComponent.displayName = `withOverridingProps(${Component.displayName || Component.name || Component.type?.name})`;

    return WrappedComponent;
}
