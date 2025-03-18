import React, { useMemo } from 'react';
import Button from '@components/Button';
import './card.scss';

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
            {text ? <Button className="card__btn">Learn more</Button> : null}
        </div>
    );
};

export default Card;
