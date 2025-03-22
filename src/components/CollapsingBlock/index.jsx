import React, { useRef } from 'react';
import Button from '@components/Button';
import clsx from 'clsx';
import './collapsing-block.scss';

/**
 * CollapsingBlock component renders a collapsible block with a button to toggle its visibility.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be displayed inside the collapsible block.
 * @param {Object} props.btnProp - The properties to be passed to the Button component.
 * @param {string} props.btnProp.className - Additional class names for the button.
 *
 * @returns {JSX.Element} The rendered CollapsingBlock component.
 */
const CollapsingBlock = ({ children, btnProp }) => {
    const id = useRef(Math.random().toString(36)).current;
    const className = clsx('collapsing-block__btn', btnProp.className);
    const computedProps = {
        ...btnProp,
        htmlFor: id,
        className,
    };
    return (
        <div className="collapsing-block">
            <input
                id={id}
                type="checkbox"
                className="collapsing-block__hidden-checkbox"
            />
            <Button {...computedProps} />
            <div className="collapsing-block__content">{children}</div>
        </div>
    );
};

export default React.memo(CollapsingBlock);
