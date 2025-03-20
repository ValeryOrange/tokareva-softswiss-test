import React from 'react';
import Lead from '@components/Lead';
import Title from '@components/Title';

const About = () => (
    <div>
        <Lead>
            <LeadContent />
        </Lead>
    </div>
);

const LeadContent = () => (
    <>
        <Title>
            Learn more about <em className="em em_pink">Go Space</em>
        </Title>
        <Title size="h2">
            This is a boring lead without{' '}
            <em className="em em_yellow">a background image</em>
        </Title>
    </>
);

export default About;
