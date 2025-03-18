import React from 'react';
import Lead from '@components/Lead';
import Title from '@components/Title';

const LeadContent = React.memo(() => (
    <>
        <Title>
            Learn more about <em className="pink">Go Space</em>
        </Title>
        <Title size="h2">
            This is a boring lead without{' '}
            <em className="yellow">a background image</em>
        </Title>
    </>
));

const About = () => (
    <div className="aboutPage">
        <Lead>
            <LeadContent />
        </Lead>
    </div>
);
export default About;
