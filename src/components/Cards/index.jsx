import React from 'react';
import Title from '@components/Title';
import './cards.scss';

const Card = React.lazy(() => import('@components/Card'));

/**
 * CardsList component
 *
 * @param {Object} props - Component props
 * @param {Array} [props.cards=[]] - List of cards to display, defaults to an empty array
 * @param {string} props.title - Title of the cards list
 */
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
