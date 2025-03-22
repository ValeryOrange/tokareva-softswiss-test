import React from 'react';
import Lead from '@components/Lead';
import Title from '@components/Title';

/**
 * About component renders the page About.
 *
 * @component
 * @example
 * return (
 *   <About />
 * )
 */
const About = () => (
    <>
        <Lead>
            <LeadContent />
        </Lead>
    </>
);

const LeadContent = () => (
    <>
        <Title>
            Learn more about{' '}
            <em className="highlight highlight_pink">Go Space</em>
        </Title>
        <Title size="h2">
            This is a boring lead without{' '}
            <em className="highlight highlight_yellow">a background image</em>
        </Title>
    </>
);

export default About;
