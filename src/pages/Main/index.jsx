import React from 'react';
import Lead from '@components/Lead';
import Title from '@components/Title';
import Cards from '@components/Cards';
import Button from '@components/Button';
import { cardsData } from './data';
import './main.scss';

const More = () => <div>This is a more text without a background image</div>;

const LeadContent = () => (
    <>
        <Title>
            Discover the vast expanses of <em className="pink">space</em>
        </Title>
        <Title size="h2">
            Where the possibilities are <em className="yellow">endless!</em>
        </Title>
    </>
);

const MainPage = () => {
    return (
        <div className="mainPage">
            <Lead className="mainPage__lead" more={<More />}>
                <LeadContent />
            </Lead>
            <Cards title="Offer" cards={cardsData} />
            <section>
                <Title size="h3">Embark on a space journey</Title>
                <p>
                    Travelling into space is one of the most exciting and
                    unforgettable adventures that can change your life forever.
                    And if you have ever dreamed of exploring stars, planets and
                    galaxies, then our company is ready to help you realize this
                    dream. We offer a unique experience that will allow you to
                    go on a space journey and see all the secrets of the
                    universe. We guarantee that every moment in space will be
                    filled with incredible impressions, excitement and new
                    discoveries. Our team of professionals takes care of your
                    safety and comfort so that you can fully enjoy your
                    adventure in space. We offer various options for space
                    excursions.
                </p>
                <Button varian="text">Read more</Button>
            </section>
        </div>
    );
};

export default MainPage;
