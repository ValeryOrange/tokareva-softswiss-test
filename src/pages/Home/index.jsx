import React, { useState, useEffect, useRef } from 'react';
import Lead from '@components/Lead';
import Title from '@components/Title';
import Cards from '@components/Cards';
import CollapsingBlock from '@components/CollapsingBlock';
import Loader from '@components/Loader';
import fakeRequestHomePageData from '@/api/home';
import './home.scss';

/**
 * Home component that fetches and displays home page data.
 *
 * @component
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const isMounted = useRef(true);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        // a flag to handle race condition
        let isCurrentMounted = isMounted.current;

        fakeRequestHomePageData({ signal })
            .then((response) => {
                if (isCurrentMounted) {
                    setData(response);
                }
            })
            .catch((error) => {
                console.warn(error);
            })
            .finally(() => {
                if (isCurrentMounted) {
                    setIsLoading(false);
                }
            });

        return () => {
            isCurrentMounted = false;
            controller.abort();
        };
    }, []);

    return (
        <div className="home">
            <Lead className="home__lead">
                <LeadContent />
            </Lead>
            <PageContent isLoading={isLoading} data={data} />
        </div>
    );
};

const PageContent = React.memo(({ isLoading, data }) => {
    if (isLoading) return <Loader />;
    if (!data) return null;
    return (
        <>
            {data.cards?.title && data.cards?.items && (
                <Cards title={data.cards.title} cards={data.cards.items} />
            )}
            {data.content && (
                <section>
                    {data.content.title && (
                        <Title size="h3">{data?.content?.title}</Title>
                    )}
                    {data.content.description && (
                        <p className="paragraph">
                            {data?.content?.description}
                        </p>
                    )}
                    {data.content.collapsible?.length && (
                        <CollapsingBlock
                            btnProp={{
                                className: 'home__text-button',
                                variant: 'text',
                            }}
                        >
                            {data.content.collapsible.map(({ id, text }) => (
                                <div key={id}>{text}</div>
                            ))}
                        </CollapsingBlock>
                    )}
                </section>
            )}
        </>
    );
});
PageContent.displayName = 'PageContent';

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
