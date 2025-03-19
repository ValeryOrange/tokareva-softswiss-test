import React, { Suspense } from 'react';
import Title from '@components/Title';
import './cards.scss';

const Card = React.lazy(() => import('@components/Card'));

const CardsList = ({ cards = [], title }) => {
    return (
        <div className="cards">
            <Title size="h3">{title}</Title>
            {cards.length ? (
                <ul className="cards__list">
                    <Suspense fallback={<div>Loading cards...</div>}>
                        {cards.map((card) => (
                            <li key={card.id} className="cards__item">
                                <Card {...card} />
                            </li>
                        ))}
                    </Suspense>
                </ul>
            ) : (
                'No cards available'
            )}
        </div>
    );
};

export default React.memo(CardsList);
