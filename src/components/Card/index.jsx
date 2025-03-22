import React, { useMemo } from 'react';
import CollapsingBlock from '@components/CollapsingBlock';
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
const Card = ({ title, caption, images, text }) => {
    const inlineStyle = useMemo(
        () => ({
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(15, 20, 32, 0.79)), image-set(url(${images['1x']}) 1x, url(${images['2x']}) 2x, url(${images['4x']}) 4x)`,
        }),
        [images]
    );
    return (
        <div className="card" style={inlineStyle}>
            <div className="card__title">{title}</div>
            <div className="card__caption">{caption}</div>
            {text && (
                <CollapsingBlock
                    btnProp={{
                        className: 'card__btn',
                    }}
                >
                    {text}
                </CollapsingBlock>
            )}
        </div>
    );
};

export default React.memo(Card);
