import React, { useId } from 'react';
import './collapsing-block.scss';

/**
 * CollapsingBlock component renders a collapsible block with a button to toggle its visibility.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be displayed inside the collapsible block.
 * @param {JSX.Element} props.ToggleButton - Toggle Button with an appearance that is specific for the current usage
 *
 * @returns {JSX.Element} The rendered CollapsingBlock component.
 */
const CollapsingBlock = ({ children, ToggleButton }) => {
    const id = useId();
    return (
        <div className="collapsing-block">
            <input
                id={id}
                type="checkbox"
                className="collapsing-block__hidden-checkbox"
            />
            <ToggleButton className="collapsing-block__btn" htmlFor={id} />
            <div className="collapsing-block__content">{children}</div>
        </div>
    );
};

/**
 * Memoize the component to make it universal even though it is not
 * necessary in the current home page.
 */
export default React.memo(CollapsingBlock);
