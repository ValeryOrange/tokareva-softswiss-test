import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import './button.scss';

/**
 * Button component that can render as a link, div, or button element based on the provided props.
 *
 * @param {Object} props - The props object.
 * @param {string} [props.href] - The URL to link to. If provided, the component renders as a NavLink from 'react-router-dom'.
 * @param {string} props.children - The content to be displayed inside the button, text node.
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - The type of the button element. Defaults to 'button'.
 * @param {function} [props.onClick] - The optional click event handler. Ignored if `href` is provided. If not provided and `href` or `htmlFor` are not provided, the component renders as a div.
 * @param {'outlined' | 'contained' | 'text' | 'icon'} [props.variant='outlined'] - The variant of the button. Defaults to 'outlined'.
 * @param {string} [props.className] - Additional class names to apply to the button.
 * @param {string} [props.icon] - The URL of the icon to display inside the button.
 * @param {string} [props.iconAlt] - The alt text for the icon image. Defaults to 'Button icon' if not provided.
 * @param {string} [props.htmlFor] - The id of the element that the label is associated with. If
 * provided, the component renders as label.
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
    iconAlt = 'Button icon',
    htmlFor,
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
            <NavLink className={computedClassName} to={href} role="button">
                {children}
            </NavLink>
        );
    }
    if (htmlFor) {
        return (
            <label
                role="button"
                className={computedClassName}
                htmlFor={htmlFor}
            >
                {children}
            </label>
        );
    }
    if (!onClick) {
        return (
            <div className={computedClassName} role="button">
                {children}
            </div>
        );
    }
    return (
        <button className={computedClassName} type={type} onClick={onClick}>
            {icon && <img src={icon} alt={iconAlt} className="button__image" />}
            {children}
        </button>
    );
};

/**
 * Memoize the component to make it universal even though it is not
 * necessary in the current home page.
 */
export default React.memo(Button);
