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
 * @param {function} [props.onClick] - The optional click event handler. If not provided, the component renders as a div. If `href` is provided, `onClick` will be ignored.
 * @param {'outlined' | 'contained' | 'text' | 'icon'} [props.variant='outlined'] - The variant of the button. Defaults to 'outlined'.
 * @param {string} [props.className] - Additional class names to apply to the button.
 * @param {string} [props.icon] - The URL of the icon to display inside the button.
 * @param {string} [props.iconAlt] - The alt text for the icon image. Defaults to 'Button icon' if not provided.
 *
 * @returns {JSX.Element} The rendered button component.
 */
const Button = ({
    href,
    children,
    content,
    type = 'button',
    onClick,
    variant = 'outlined',
    className,
    icon,
    iconAlt,
    tag,
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
    const displayedContent = content || children;
    if (href) {
        return (
            <NavLink className={computedClassName} to={href}>
                {displayedContent}
            </NavLink>
        );
    }
    let Tag = tag || 'button';
    if (!onClick && Tag === 'button') {
        Tag = 'div';
    }
    if (!onClick) {
        return (
            <Tag role="button" className={computedClassName}>
                {displayedContent}
            </Tag>
        );
    }
    return (
        <Tag className={computedClassName} type={type} onClick={onClick}>
            {icon && (
                <img
                    src={icon}
                    alt={iconAlt || 'Button icon'}
                    className="button__image"
                />
            )}
            {displayedContent}
        </Tag>
    );
};

export default Button;
