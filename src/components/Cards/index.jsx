import React from 'react';
import Card from '@components/Card';
import './cards.scss';

const CardsList = ({ cards = [], title }) => {
    return (
        <div className="cards">
            <h3 className="cards__title">{title}</h3>
            {cards.length ? (
                <ul className="cards__list">
                    {cards.map((card, index) => (
                        <li key={index} className="cards__item">
                            <Card {...card} />
                        </li>
                    ))}
                </ul>
            ) : (
                'No cards available'
            )}
        </div>
    );
};

export default React.memo(CardsList);
