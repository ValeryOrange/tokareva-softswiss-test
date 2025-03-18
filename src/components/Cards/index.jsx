import React from 'react';
import Card from '@components/Card';
import Title from '@components/Title';
import './cards.scss';

const CardsList = ({ cards = [], title }) => {
    return (
        <div className="cards">
            <Title size="h3">{title}</Title>
            {cards.length ? (
                <ul className="cards__list">
                    {cards.map((card) => (
                        <li key={card.id} className="cards__item">
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
