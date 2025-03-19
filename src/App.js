import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routing from './routes';

/**
 * App component that sets up the HashRouter for the application.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const App = () => (
    <HashRouter>
        <Routing />
    </HashRouter>
);

export default App;
