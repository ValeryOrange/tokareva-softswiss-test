import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import './button.scss';

/**
 * Button component that can render as a link, div, or button element based on the provided props.
 *
 * @param {Object} props - The props object.
 * @param {string} [props.href] - The URL to link to. If provided, the component renders as a NavLink.
 * @param {string} props.children - The content to be displayed inside the button, text node.
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - The type of the button element. Defaults to 'button'.
 * @param {function} [props.onClick] - The optional click event handler. If not provided, the component renders as a div.
 * @param {'outlined' | 'contained' | 'text'} [props.variant='outlined'] - The variant of the button. Defaults to 'outlined'.
 * @param {string} [props.className] - Additional class names to apply to the button.
 * @param {string} [props.icon] - The icon to be displayed inside the button.
 *
 * @returns {JSX.Element} The rendered button component.
 */
const Button = ({
    href,
    children,
    type = 'button',
    onClick,
    variant = 'outlined',
    className,
    icon,
}) => {
    const computedClassName = useMemo(
        () =>
            clsx(
                'button',
                `button_${variant}`,
                { button_link: href },
                { button_icon: icon },
                className
            ),
        [variant, href, className, icon]
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
            <div role="button" className={computedClassName}>
                {children}
            </div>
        );
    }
    return (
        <button className={computedClassName} type={type} onClick={onClick}>
            {icon && (
                <img src={icon} alt="Button icon" className="button__image" />
            )}
            {children}
        </button>
    );
};

export default Button;
