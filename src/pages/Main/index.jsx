import React from 'react';
import Lead from '@components/Lead';
import PageTitle from '@components/PageTitle';
import Cards from '@components/Cards';
import { cardsData } from './data';
import './main.scss';

const More = () => <div>This is a more text without a background image</div>;

const LeadContent = () => (
    <>
        <PageTitle>
            Discover the vast expanses of <em className="pink">space</em>
        </PageTitle>
        <PageTitle size="h2">
            Where the possibilities are <em className="yellow">endless!</em>
        </PageTitle>
    </>
);

const MainPage = () => {
    return (
        <div className="mainPage">
            <Lead className="mainPage__lead" more={<More />}>
                <LeadContent />
            </Lead>
            <Cards title="Offer" cards={cardsData} />
        </div>
    );
};

export default MainPage;
