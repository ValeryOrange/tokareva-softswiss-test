import React, { useMemo } from 'react';
import Button from '@components/Button';
import './card.scss';

/**
 * Card component that displays a card with a background image, title, caption, and an optional button.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the card.
 * @param {string} props.caption - The caption of the card.
 * @param {string} props.image - The URL of the background image.
 * @param {string} [props.text] - Optional collapsed text.
 *
 * @returns {JSX.Element} The rendered Card component.
 */
const Card = ({ title, caption, image, text }) => {
    const inlineStyle = useMemo(
        () => ({
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(15, 20, 32, 0.79)), url(${image})`,
        }),
        [image]
    );
    return (
        <div className="card" style={inlineStyle}>
            <div className="card__title">{title}</div>
            <div className="card__caption">{caption}</div>
            {text && <Button className="card__btn">Learn more</Button>}
        </div>
    );
};

export default Card;
