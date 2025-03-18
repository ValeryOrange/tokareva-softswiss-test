import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import './button.scss';

const Button = ({
    href,
    children,
    type = 'button',
    onClick,
    variant = 'outlined',
    className,
}) => {
    const computedClassName = useMemo(
        () =>
            clsx(
                'button',
                `button_${variant}`,
                { button_link: href },
                className
            ),
        [variant, href, className]
    );
    if (href) {
        return (
            <NavLink className={computedClassName} to={href}>
                {children}
            </NavLink>
        );
    }
    if (!onClick) {
        return (
            <div role="button" className={computedClassName} type={type}>
                {children}
            </div>
        );
    }
    return (
        <button className={computedClassName} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
