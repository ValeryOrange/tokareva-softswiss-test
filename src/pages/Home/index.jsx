import React from 'react';
import Lead from '@components/Lead';
import Title from '@components/Title';
import Cards from '@components/Cards';
import CollapsingBlock from '@components/CollapsingBlock';
import { cardsData } from './data';
import './home.scss';

/**
 * Home component renders the home page of the application.
 * It includes a lead section, a cards section, and a section with information about space journeys.
 *
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */
const Home = () => {
    return (
        <div className="home">
            <Lead className="home__lead">
                <LeadContent />
            </Lead>
            <Cards title="Offer" cards={cardsData} />
            <section>
                <Title size="h3">Embark on a space journey</Title>
                <p className="paragraph">
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
                <CollapsingBlock
                    btnProp={{
                        className: 'home__text-button',
                        variant: 'text',
                    }}
                >
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut eget ullamcorper mi. Nam enim odio, laoreet in porta
                        vitae, porttitor in leo. Aenean euismod enim ac semper
                        vehicula. Mauris aliquet vestibulum lectus, et venenatis
                        odio molestie in. Quisque sollicitudin ligula vitae quam
                        porta, ac ornare neque dignissim. Integer massa sem,
                        pulvinar luctus orci sit amet, interdum congue lacus.
                        Aenean eget blandit arcu. Maecenas non bibendum nibh.
                        Phasellus facilisis ipsum id ipsum consequat
                        sollicitudin. Nulla ac faucibus ex.
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut eget ullamcorper mi. Nam enim odio, laoreet in porta
                        vitae, porttitor in leo. Aenean euismod enim ac semper
                        vehicula. Mauris aliquet vestibulum lectus, et venenatis
                        odio molestie in. Quisque sollicitudin ligula vitae quam
                        porta, ac ornare neque dignissim. Integer massa sem,
                        pulvinar luctus orci sit amet, interdum congue lacus.
                        Aenean eget blandit arcu. Maecenas non bibendum nibh.
                        Phasellus facilisis ipsum id ipsum consequat
                        sollicitudin. Nulla ac faucibus ex.
                    </div>
                </CollapsingBlock>
            </section>
        </div>
    );
};

const LeadContent = () => (
    <>
        <Title>
            Discover the vast expanses of{' '}
            <em className="highlight highlight_pink">space</em>
        </Title>
        <Title size="h2">
            Where the possibilities are{' '}
            <em className="highlight highlight_yellow">endless!</em>
        </Title>
        <CollapsingBlock
            btnProp={{
                className: 'lead__button',
                variant: 'contained',
            }}
        >
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget
                ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor
                in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet
                vestibulum lectus, et venenatis odio molestie in. Quisque
                sollicitudin ligula vitae quam porta, ac ornare neque dignissim.
                Integer massa sem, pulvinar luctus orci sit amet, interdum
                congue lacus. Aenean eget blandit arcu. Maecenas non bibendum
                nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin.
                Nulla ac faucibus ex.
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget
                ullamcorper mi. Nam enim odio, laoreet in porta vitae, porttitor
                in leo. Aenean euismod enim ac semper vehicula. Mauris aliquet
                vestibulum lectus, et venenatis odio molestie in. Quisque
                sollicitudin ligula vitae quam porta, ac ornare neque dignissim.
                Integer massa sem, pulvinar luctus orci sit amet, interdum
                congue lacus. Aenean eget blandit arcu. Maecenas non bibendum
                nibh. Phasellus facilisis ipsum id ipsum consequat sollicitudin.
                Nulla ac faucibus ex.
            </div>
        </CollapsingBlock>
    </>
);

export default Home;
