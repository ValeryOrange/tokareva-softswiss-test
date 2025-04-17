import React from 'react';
import CollapsingBlock from '@components/CollapsingBlock';
import renderToggle from '@components/CollapsingBlock/renderToggle';
import './card.scss';

/**
 * Card component that displays a card with a background image, title, caption, and an optional button.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the card.
 * @param {string} props.caption - The caption of the card.
 * @param {Object} props.images - The images object containing URLs for different resolutions.
 * @param {string} props.images.1x - The URL of the image at 1x resolution.
 * @param {string} props.images.2x - The URL of the image at 2x resolution.
 * @param {string} props.images.4x - The URL of the image at 4x resolution.
 * @param {string} [props.text] - Optional collapsed text.
 *
 * @returns {JSX.Element} The rendered Card component.
 */
const Card = ({ title, caption, images, text }) => {
    const inlineStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(15, 20, 32, 0.79)), image-set(url(${images['1x']}) 1x, url(${images['2x']}) 2x, url(${images['4x']}) 4x)`,
    };
    return (
        <div className="card" style={inlineStyle}>
            <div className="card__title">{title}</div>
            <div className="card__caption">{caption}</div>
            {text && (
                <CollapsingBlock ToggleButton={CardToggleButton}>
                    {text}
                </CollapsingBlock>
            )}
        </div>
    );
};

const CardToggleButton = React.memo(renderToggle('card__btn'));

/**
 * Memoize the component to make it universal even though it is not
 * necessary in the current home page.
 */
export default React.memo(Card);
