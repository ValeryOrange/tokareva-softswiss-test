import React from 'react';
import Lead from '@/components/Lead';
import PageTitle from '@components/PageTitle';

const LeadContent = () => (
    <>
        <PageTitle>
            Learn more about <em className="pink">Go Space</em>
        </PageTitle>
        <PageTitle size="h2">
            This is a boring lead without{' '}
            <em className="yellow">a background image</em>
        </PageTitle>
    </>
);

const About = () => (
    <div className="aboutPage">
        <Lead>
            <LeadContent />
        </Lead>
    </div>
);
export default About;
