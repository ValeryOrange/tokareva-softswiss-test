import React from 'react';
import Title from '@components/Title';
import Card from '@components/Card';
import './cards.scss';

/**
 * CardsList component
 *
 * @param {Object} props - Component props
 * @param {Array} [props.cards=[]] - List of cards to display, defaults to an empty array
 * @param {Array<Object>} [props.cards=[]] - List of cards to display, defaults to an empty array
 */
const CardsList = ({ cards = [], title }) => (
    <div className="cards">
        {title && <Title size="h3">{title}</Title>}
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

/**
 * Memoize the component to make it universal even though it is not
 * necessary in the current home page.
 */
export default React.memo(CardsList);
