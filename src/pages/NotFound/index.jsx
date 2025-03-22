import React from 'react';
import Title from '@components/Title';
import './not-found.scss';

/**
 * NotFound component renders a page indicating that the requested page does not exist.
 *
 * @component
 * @example
 * return (
 *   <NotFound />
 * )
 */
const NotFound = () => (
    <div className="not-found">
        <Title>Ooops! The page does not exist yet.</Title>
    </div>
);

export default NotFound;
