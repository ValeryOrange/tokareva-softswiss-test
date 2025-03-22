import React, { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router';
import Lead from '@components/Lead';
import Title from '@components/Title';
import Cards from '@components/Cards';
import CollapsingBlock from '@components/CollapsingBlock';
import Loader from '@components/Loader';
import './home.scss';

const Home = () => {
    const { homePageData } = useLoaderData();

    return (
        <div className="home">
            <Lead className="home__lead">
                <LeadContent />
            </Lead>
            <Suspense fallback={<Loader />}>
                <Await resolve={homePageData}>
                    {(data) => (
                        <>
                            <Cards
                                title={data?.cards?.title}
                                cards={data?.cards?.items}
                            />
                            <section>
                                <Title size="h3">{data?.content?.title}</Title>
                                <p className="paragraph">
                                    {data?.content?.description}
                                </p>
                                {!!data?.content?.collapsible?.length && (
                                    <CollapsingBlock
                                        btnProp={{
                                            className: 'home__text-button',
                                            variant: 'text',
                                        }}
                                    >
                                        {data.content.collapsible.map(
                                            (item, index) => (
                                                <div key={index}>{item}</div>
                                            )
                                        )}
                                    </CollapsingBlock>
                                )}
                            </section>
                        </>
                    )}
                </Await>
            </Suspense>
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
